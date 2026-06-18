const {
  ALL_GAMES,
  MODALIDADES,
  ESPORTES,
  GENEROS_ORDEM,
  datasetFor,
  iconFor,
  labelFor,
  parseDataHora,
  gameDuration,
  resolveNames
} = window.FESTIVAL_DATA;

const STORAGE_RESULTS = 'festival-copa-2026:resultados';
const STORAGE_FAVORITES = 'festival-copa-2026:favoritos';

const state = {
  tab: 'jogos',
  esporte: 'Futebol',
  genero: 'Masculino',
  modalidade: 'futebolMasc',
  view: 'cards',
  search: '',
  data: 'todas',
  campo: 'todos',
  chave: 'todas',
  resultados: readStorage(STORAGE_RESULTS, {}),
  favoritos: readStorage(STORAGE_FAVORITES, {}),
  toast: '',
  now: new Date()
};

setInterval(() => {
  state.now = new Date();
  updateRealtimePanels();
}, 1000);

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => {
    if (v === false || v === null || v === undefined) return;
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  const list = Array.isArray(children) ? children : [children];
  list.forEach((child) => {
    if (child === null || child === undefined || child === false) return;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  });
  return node;
}


function modalidadesDoEsporte(esporte) {
  return MODALIDADES.filter((m) => m.esporte === esporte)
    .sort((a, b) => GENEROS_ORDEM.indexOf(a.genero) - GENEROS_ORDEM.indexOf(b.genero));
}

function modalidadeAtual() {
  return MODALIDADES.find((m) => m.key === state.modalidade) || MODALIDADES[0];
}

function selecionarModalidadePor(esporte, generoPreferido) {
  const opcoes = modalidadesDoEsporte(esporte);
  const escolhida = opcoes.find((m) => m.genero === generoPreferido) || opcoes[0] || MODALIDADES[0];
  state.esporte = escolhida.esporte;
  state.genero = escolhida.genero;
  state.modalidade = escolhida.key;
}

function datasetResolved() {
  return resolveNames(datasetFor(state.modalidade), state.resultados);
}

function allResolved() {
  return resolveNames(ALL_GAMES, state.resultados);
}

function unique(values) {
  return [...new Set(values)].sort();
}

function statusJogo(g) {
  const start = parseDataHora(g.data, g.hora);
  const end = new Date(start.getTime() + gameDuration());
  if (state.now >= start && state.now <= end) return 'live';
  if (state.now < start) return 'upcoming';
  return 'past';
}

function getConflitos(jogos) {
  const map = new Map();
  jogos.forEach((g) => {
    const key = `${g.campo}__${g.data}__${g.hora}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(g);
  });
  return [...map.values()].filter((grupo) => grupo.length > 1);
}

function filteredGames() {
  const q = state.search.trim().toLowerCase();
  return datasetResolved().filter((g) => {
    if (state.data !== 'todas' && g.data !== state.data) return false;
    if (state.campo !== 'todos' && g.campo !== state.campo) return false;
    if (state.chave !== 'todas' && g.chave !== state.chave) return false;
    if (q) {
      const hay = `${g.codigo} ${g.chave} ${g.categoria} ${g.time1Display} ${g.time2Display} ${g.campo}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function groupedGames(games) {
  const map = new Map();
  games.forEach((g) => {
    const key = `${g.chave}__${g.categoria}`;
    if (!map.has(key)) map.set(key, { chave: g.chave, categoria: g.categoria, jogos: [] });
    map.get(key).jogos.push(g);
  });
  return [...map.values()];
}

function setTab(tab) {
  state.tab = tab;
  render();
}

function resetFiltros() {
  state.search = '';
  state.data = 'todas';
  state.campo = 'todos';
  state.chave = 'todas';
}

function setEsporte(esporte) {
  selecionarModalidadePor(esporte, state.genero);
  resetFiltros();
  render();
}

function setGenero(genero) {
  selecionarModalidadePor(state.esporte, genero);
  resetFiltros();
  render();
}

function marcarVencedor(id, lado) {
  if (state.resultados[id] === lado) delete state.resultados[id];
  else state.resultados[id] = lado;
  writeStorage(STORAGE_RESULTS, state.resultados);
  render();
}

function toggleFavorito(gameId, name) {
  const atual = new Set(state.favoritos[gameId] || []);
  if (atual.has(name)) atual.delete(name);
  else atual.add(name);
  state.favoritos[gameId] = [...atual];
  writeStorage(STORAGE_FAVORITES, state.favoritos);
  render();
}

function isFavorito(gameId, name) {
  return (state.favoritos[gameId] || []).includes(name);
}

function favoriteNames() {
  const s = new Set();
  Object.values(state.favoritos).forEach((arr) => (arr || []).forEach((n) => s.add(n)));
  return s;
}

function shareGrupo(grupo) {
  const text = [
    `Festival de Praia Christus 2026`,
    `${grupo.chave} — ${grupo.categoria}`,
    '',
    ...grupo.jogos.flatMap((g) => [
      `${g.codigo} | ${g.data} ${g.hora} | ${g.campo}`,
      `  ${g.time1Display} x ${g.time2Display}`
    ])
  ].join('\n');

  if (navigator.share) {
    navigator.share({ title: `${grupo.chave} — Festival de Praia`, text }).catch(() => {});
    return;
  }
  navigator.clipboard?.writeText(text).then(() => showToast('Chave copiada para a área de transferência.')).catch(() => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = el('a', { href: url, download: `${grupo.chave}.txt` });
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

function showToast(msg) {
  state.toast = msg;
  render();
  setTimeout(() => { state.toast = ''; render(); }, 2200);
}

function header() {
  const data = datasetResolved();
  const all = allResolved();
  const grupos = groupedGames(filteredGames());
  const vivos = all.filter((g) => statusJogo(g) === 'live');
  const proximo = all.filter((g) => statusJogo(g) === 'upcoming')
    .sort((a, b) => parseDataHora(a.data, a.hora) - parseDataHora(b.data, b.hora))[0];
  const inicioCompeticao = all
    .map((g) => parseDataHora(g.data, g.hora))
    .sort((a, b) => a - b)[0];

  return el('header', { class: 'hero' }, [
    el('div', { class: 'hero__content' }, [
      el('div', { class: 'eyebrow' }, ['🏆 FESTIVAL DE PRAIA CHRISTUS']),
      el('h1', {}, ['COPA ', el('span', {}, ['2026'])]),
      el('p', { class: 'subtitle' }, [`Desenvolvido por Felipe Aires Costa (pai do Leonardo Felismino)`]),
      el('div', { class: 'scoreboard' }, [
        metric(data.length, 'partidas'),
        metric(data.filter((g) => state.resultados[g.id]).length, 'decididas'),
        metric(grupos.length, 'chaves'),
        metric(favoriteNames().size, 'favoritos')
      ]),
      el('div', { class: 'hero-panels' }, [
        countdownPanel(inicioCompeticao),
        nextMatchPanel(vivos, proximo)
      ])
    ])
  ]);
}

function countdownPanel(inicio) {
  if (!inicio) return null;
  const diff = inicio.getTime() - state.now.getTime();
  if (diff <= 0) {
    return el('section', { class: 'info-panel countdown-panel is-started', id: 'countdown-panel' }, [
      el('span', { class: 'panel-label' }, ['Tempo para início']),
      el('strong', {}, ['Competição iniciada']),
      el('small', {}, ['Primeiro jogo: 20/06/2026 às 07h40min'])
    ]);
  }
  const t = splitDuration(diff);
  return el('section', { class: 'info-panel countdown-panel', id: 'countdown-panel' }, [
    el('span', { class: 'panel-label' }, ['Tempo para início']),
    el('div', { class: 'countdown-grid' }, [
      countdownUnit(t.days, 'dias', 'cd-days'),
      countdownUnit(t.hours, 'horas', 'cd-hours'),
      countdownUnit(t.minutes, 'min', 'cd-minutes'),
      countdownUnit(t.seconds, 'seg', 'cd-seconds')
    ]),
    el('small', {}, ['Início: 20/06/2026 às 07h40min'])
  ]);
}

function countdownUnit(value, label, id) {
  return el('span', { class: 'countdown-unit' }, [
    el('strong', id ? { id } : {}, [String(value).padStart(2, '0')]),
    el('em', {}, [label])
  ]);
}

function splitDuration(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

function nextMatchPanel(vivos, proximo) {
  if (vivos.length) {
    return el('section', { class: 'info-panel next-panel next-panel--live' }, [
      el('span', { class: 'panel-label' }, ['Agora']),
      el('strong', {}, [`${vivos.length} jogo(s) ao vivo`]),
      el('small', {}, ['Confira os cards destacados em vermelho.'])
    ]);
  }
  if (!proximo) return null;
  return el('section', { class: 'info-panel next-panel' }, [
    el('span', { class: 'panel-label' }, ['Próximo jogo']),
    el('strong', { class: 'next-match-title' }, [`${proximo.time1Display} × ${proximo.time2Display}`]),
    el('small', {}, [`${labelFor(proximo.modalidade)} · ${proximo.chave} · ${proximo.data} · ${proximo.hora} · ${proximo.campo}`])
  ]);
}

function metric(num, label) {
  return el('div', { class: 'metric' }, [el('strong', {}, [num]), el('span', {}, [label])]);
}

function mainTabs() {
  const favCount = favoriteNames().size;
  return el('nav', { class: 'main-tabs' }, [
    tabBtn('jogos', '▦ Jogos'),
    tabBtn('agenda', `★ Minha Agenda${favCount ? ` (${favCount})` : ''}`),
    tabBtn('estatisticas', '▰ Estatísticas')
  ]);
}

function tabBtn(key, label) {
  return el('button', { class: `main-tab ${state.tab === key ? 'is-active' : ''}`, onclick: () => setTab(key) }, [label]);
}

function modalidadeTabs() {
  const generosDisponiveis = modalidadesDoEsporte(state.esporte);
  const esporteAtual = modalidadeAtual();

  return el('section', { class: 'hierarchy' }, [
    el('div', { class: 'hierarchy__block' }, [
      el('span', { class: 'hierarchy__label' }, ['1. Esporte']),
      el('div', { class: 'modalidades modalidades--sports' }, ESPORTES.map((esporte) => {
        const m = modalidadesDoEsporte(esporte)[0];
        const total = modalidadesDoEsporte(esporte).reduce((acc, item) => acc + item.dataset.length, 0);
        return el('button', { class: `modalidade ${state.esporte === esporte ? 'is-active' : ''}`, onclick: () => setEsporte(esporte) }, [
          el('span', { class: 'modalidade__icon' }, [m?.icon || '🏆']),
          el('span', {}, [esporte]),
          el('small', {}, [`${total} jogos`])
        ]);
      }))
    ]),
    el('div', { class: 'hierarchy__block' }, [
      el('span', { class: 'hierarchy__label' }, ['2. Gênero']),
      el('div', { class: 'modalidades modalidades--gender' }, generosDisponiveis.map((m) =>
        el('button', { class: `modalidade ${state.modalidade === m.key ? 'is-active' : ''}`, onclick: () => setGenero(m.genero) }, [
          el('span', { class: 'modalidade__icon' }, [m.genero === 'Masculino' ? 'M' : m.genero === 'Feminino' ? 'F' : 'MX']),
          el('span', {}, [m.genero]),
          el('small', {}, [m.label.replace(`${m.esporte} `, '')])
        ])
      ))
    ]),
    el('div', { class: 'selection-summary' }, [
      el('strong', {}, [`${esporteAtual.esporte} · ${esporteAtual.genero}`]),
      el('span', {}, [`${datasetFor(esporteAtual.key).length} jogo(s) nesta seleção`])
    ])
  ]);
}

function filters() {
  const data = datasetResolved();
  return el('section', { class: 'filters' }, [
    el('input', {
      class: 'search',
      value: state.search,
      placeholder: 'Buscar time, código, categoria ou local...',
      oninput: (e) => { state.search = e.target.value; render(); }
    }),
    select('data', state.data, ['todas', ...unique(data.map((g) => g.data))], (v) => v === 'todas' ? 'Todas as datas' : v),
    select('campo', state.campo, ['todos', ...unique(data.map((g) => g.campo))], (v) => v === 'todos' ? 'Todos os locais' : v),
    select('chave', state.chave, ['todas', ...unique(data.map((g) => g.chave))], (v) => v === 'todas' ? 'Todas as chaves' : v),
    el('div', { class: 'view-toggle' }, [
      el('button', { class: state.view === 'cards' ? 'is-active' : '', onclick: () => { state.view = 'cards'; render(); } }, ['Cards']),
      el('button', { class: state.view === 'lista' ? 'is-active' : '', onclick: () => { state.view = 'lista'; render(); } }, ['Lista'])
    ])
  ]);
}

function select(name, value, options, format) {
  return el('select', { onchange: (e) => { state[name] = e.target.value; render(); } },
    options.map((o) => el('option', { value: o, selected: o === value }, [format(o)]))
  );
}

function conflitosBanner(conflitos) {
  if (!conflitos.length) return null;
  return el('section', { class: 'conflicts' }, [
    el('strong', {}, [`⚠ ${conflitos.length} conflito(s) de horário/local detectado(s).`]),
    ...conflitos.slice(0, 8).map((grupo) => el('p', {}, [
      `${grupo[0].campo} · ${grupo[0].data} · ${grupo[0].hora}: `,
      grupo.map((g) => `${iconFor(g.modalidade)} ${labelFor(g.modalidade)} ${g.chave}/${g.codigo}`).join(' | ')
    ])),
    conflitos.length > 8 ? el('p', {}, [`+ ${conflitos.length - 8} conflito(s) não exibido(s) neste resumo.`]) : null
  ]);
}

function jogosView() {
  const all = allResolved();
  const conflicts = getConflitos(all);
  const conflictIds = new Set(conflicts.flat().map((g) => g.id));
  const grupos = groupedGames(filteredGames());

  return el('main', { class: 'container' }, [
    modalidadeTabs(),
    filters(),
    conflitosBanner(conflicts),
    state.toast ? el('div', { class: 'toast' }, [state.toast]) : null,
    grupos.length ? el('div', {}, grupos.map((grupo) => grupoSection(grupo, conflictIds))) : empty('Nenhuma partida encontrada', 'Ajuste os filtros ou a busca para visualizar outros jogos.')
  ]);
}

function grupoSection(grupo, conflictIds) {
  return el('section', { class: 'group' }, [
    el('div', { class: 'group__header' }, [
      el('div', {}, [
        el('span', { class: 'badge' }, [grupo.chave]),
        el('strong', {}, [` ${grupo.categoria}`]),
        el('small', {}, [` · ${grupo.jogos.length} jogo(s)`])
      ]),
      el('button', { class: 'ghost', onclick: () => shareGrupo(grupo) }, ['Compartilhar'])
    ]),
    state.view === 'cards' ? el('div', { class: 'cards' }, grupo.jogos.map((g) => matchCard(g, conflictIds.has(g.id)))) : matchTable(grupo.jogos, conflictIds)
  ]);
}

function matchCard(g, conflict) {
  const vencedor = state.resultados[g.id];
  const status = statusJogo(g);
  return el('article', { class: `card ${g.codigo === 'FINAL' ? 'card--final' : ''} ${vencedor ? 'card--decided' : ''} ${status === 'live' ? 'card--live' : ''}` }, [
    el('div', { class: 'card__top' }, [
      el('span', { class: 'code' }, [g.codigo === 'FINAL' ? '🏆 FINAL' : g.codigo]),
      el('span', { class: 'time' }, [`${status === 'live' ? '● AO VIVO · ' : ''}${conflict ? '⚠ ' : ''}${g.hora}`])
    ]),
    teamRow(g, 'time1'),
    el('div', { class: 'versus' }, ['×']),
    teamRow(g, 'time2'),
    el('div', { class: 'card__footer' }, [
      el('span', {}, [`📅 ${g.data}`]),
      el('span', {}, [`📍 ${g.campo}`])
    ])
  ]);
}

function teamRow(g, lado) {
  const name = lado === 'time1' ? g.time1Display : g.time2Display;
  const tbd = lado === 'time1' ? g.time1Tbd : g.time2Tbd;
  const disabled = g.time1Tbd || g.time2Tbd;
  const winner = state.resultados[g.id] === lado;
  return el('div', { class: 'team-wrap' }, [
    el('button', { class: `team ${winner ? 'is-winner' : ''} ${tbd ? 'is-tbd' : ''}`, disabled, onclick: () => marcarVencedor(g.id, lado) }, [
      el('span', { class: 'check' }, [winner ? '✓' : '']),
      el('span', {}, [name])
    ]),
    !tbd ? el('button', { class: `star ${isFavorito(g.id, name) ? 'is-fav' : ''}`, onclick: () => toggleFavorito(g.id, name), title: 'Adicionar/remover da minha agenda' }, ['★']) : null
  ]);
}

function matchTable(jogos, conflictIds) {
  const headerCells = ['Jogo', 'Time 1', '×', 'Time 2', 'Data/Hora', 'Local'].map((h) => el('th', {}, [h]));
  const bodyRows = jogos.map((g) => el('tr', { class: `${state.resultados[g.id] ? 'is-decided' : ''} ${conflictIds.has(g.id) ? 'has-conflict' : ''}` }, [
    el('td', {}, [g.codigo]),
    el('td', {}, [tableTeam(g, 'time1')]),
    el('td', {}, ['×']),
    el('td', {}, [tableTeam(g, 'time2')]),
    el('td', {}, [`${g.data} · ${g.hora}`]),
    el('td', {}, [g.campo])
  ]));

  return el('div', { class: 'table-wrap' }, [
    el('table', {}, [
      el('thead', {}, [el('tr', {}, headerCells)]),
      el('tbody', {}, bodyRows)
    ])
  ]);
}

function tableTeam(g, lado) {
  const name = lado === 'time1' ? g.time1Display : g.time2Display;
  const tbd = lado === 'time1' ? g.time1Tbd : g.time2Tbd;
  return el('button', { class: `table-team ${state.resultados[g.id] === lado ? 'is-winner' : ''}`, disabled: g.time1Tbd || g.time2Tbd, onclick: () => marcarVencedor(g.id, lado) }, [tbd ? name : name]);
}

function agendaView() {
  const favs = favoriteNames();
  if (!favs.size) return el('main', { class: 'container' }, [empty('Sua agenda está vazia', 'Marque a estrela de um time na aba Jogos para acompanhar apenas as partidas dele.')]);
  const agenda = allResolved().filter((g) => favs.has(g.time1Display) || favs.has(g.time2Display))
    .sort((a, b) => parseDataHora(a.data, a.hora) - parseDataHora(b.data, b.hora));
  return el('main', { class: 'container' }, [
    el('section', { class: 'agenda-intro' }, [`Acompanhando: ${[...favs].join(', ')}`]),
    el('div', { class: 'cards' }, agenda.map((g) => matchCard(g, false)))
  ]);
}

function estatisticasView() {
  const todos = allResolved();
  const total = todos.length;
  const decididos = todos.filter((g) => state.resultados[g.id]).length;
  const conflicts = getConflitos(todos);
  const porModalidade = MODALIDADES.map((m) => [m.label, todos.filter((g) => g.modalidade === m.key).length]);
  const porCampo = countBy(todos, (g) => g.campo).slice(0, 12);
  const porData = countBy(todos, (g) => g.data);

  return el('main', { class: 'container stats' }, [
    el('section', { class: 'stats-grid' }, [
      statCard('Total de jogos', total),
      statCard('Jogos decididos', decididos),
      statCard('Progresso', `${total ? Math.round((decididos / total) * 100) : 0}%`),
      statCard('Conflitos', conflicts.length)
    ]),
    chartBox('Jogos por esporte e gênero', porModalidade),
    chartBox('Jogos por data', porData),
    chartBox('Principais locais', porCampo)
  ]);
}

function countBy(items, fn) {
  const map = new Map();
  items.forEach((item) => map.set(fn(item), (map.get(fn(item)) || 0) + 1));
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function statCard(label, value) {
  return el('article', { class: 'stat-card' }, [el('strong', {}, [value]), el('span', {}, [label])]);
}

function chartBox(title, entries) {
  const max = Math.max(1, ...entries.map(([, v]) => v));
  return el('section', { class: 'chart-box' }, [
    el('h2', {}, [title]),
    ...entries.map(([label, value]) => el('div', { class: 'bar-row' }, [
      el('span', { class: 'bar-label' }, [label]),
      el('div', { class: 'bar-track' }, [el('div', { class: 'bar-fill', style: `width:${Math.max(4, Math.round((value / max) * 100))}%` })]),
      el('strong', {}, [value])
    ]))
  ]);
}

function empty(title, text) {
  return el('section', { class: 'empty' }, [el('strong', {}, [title]), el('p', {}, [text])]);
}


function updateRealtimePanels() {
  const all = allResolved();
  const inicio = all
    .map((g) => parseDataHora(g.data, g.hora))
    .sort((a, b) => a - b)[0];

  const panel = document.getElementById('countdown-panel');
  if (!inicio || !panel) return;

  const diff = inicio.getTime() - state.now.getTime();
  if (diff <= 0) {
    if (!panel.classList.contains('is-started')) {
      panel.classList.add('is-started');
      panel.innerHTML = '<span class="panel-label">Tempo para início</span><strong>Competição iniciada</strong><small>Primeiro jogo: 20/06/2026 às 07h40min</small>';
    }
    return;
  }

  const t = splitDuration(diff);
  const fields = {
    'cd-days': t.days,
    'cd-hours': t.hours,
    'cd-minutes': t.minutes,
    'cd-seconds': t.seconds
  };
  Object.entries(fields).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = String(value).padStart(2, '0');
  });
}

function render() {
  const root = document.getElementById('app');
  root.innerHTML = '';
  root.append(header(), mainTabs());
  if (state.tab === 'jogos') root.append(jogosView());
  if (state.tab === 'agenda') root.append(agendaView());
  if (state.tab === 'estatisticas') root.append(estatisticasView());
  root.append(el('footer', { class: 'footer' }, ['Festival de Praia Christus 2026 — versão HTML modularizada']));
}

render();
