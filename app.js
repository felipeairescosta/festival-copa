const {
  ALL_GAMES, MODALIDADES, ESPORTES, GENEROS_ORDEM,
  datasetFor, iconFor, labelFor, parseDataHora, gameDuration, resolveNames
} = window.FESTIVAL_DATA;

const LS = {
  resultados: 'festival-copa-2026:resultados',
  favoritos: 'festival-copa-2026:favoritos',
  status: 'festival-copa-2026:status',
  placares: 'festival-copa-2026:placares',
  notas: 'festival-copa-2026:observacoes',
  familia: 'festival-copa-2026:familia',
  admin: 'festival-copa-2026:admin'
};

const state = {
  tab: 'inicio',
  mode: 'publico',
  esporte: ESPORTES[0] || 'Futebol',
  genero: 'Masculino',
  modalidade: MODALIDADES[0]?.key,
  view: 'cards',
  filtersOpen: false,
  search: '',
  data: 'todas',
  campo: 'todos',
  chave: 'todas',
  statusFiltro: 'todos',
  periodo: 'todos',
  onlyAgenda: false,
  familyQuery: read(LS.familia, ''),
  admin: read(LS.admin, false),
  resultados: read(LS.resultados, {}),
  favoritos: read(LS.favoritos, {}),
  status: read(LS.status, {}),
  placares: read(LS.placares, {}),
  notas: read(LS.notas, {}),
  toast: '',
  now: new Date()
};

selecionarModalidade(state.esporte, state.genero);
setInterval(() => { state.now = new Date(); updateCountdownOnly(); }, 1000);

function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function write(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function ntext(v) { return String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => {
    if (v === false || v == null) return;
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === false || c == null) return;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  });
  return node;
}
function unique(arr) { return [...new Set(arr.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), 'pt-BR')); }
function byDate(a, b) { return parseDataHora(a.data, a.hora) - parseDataHora(b.data, b.hora); }
function modalidadeAtual() { return MODALIDADES.find(m => m.key === state.modalidade) || MODALIDADES[0]; }
function modalidadesDoEsporte(esporte) { return MODALIDADES.filter(m => m.esporte === esporte).sort((a,b)=>GENEROS_ORDEM.indexOf(a.genero)-GENEROS_ORDEM.indexOf(b.genero)); }
function selecionarModalidade(esporte, genero) {
  const op = modalidadesDoEsporte(esporte);
  const m = op.find(x => x.genero === genero) || op[0] || MODALIDADES[0];
  state.esporte = m.esporte; state.genero = m.genero; state.modalidade = m.key;
}
function allResolved() { return resolveNames(ALL_GAMES, state.resultados); }
function currentResolved() { return resolveNames(datasetFor(state.modalidade), state.resultados); }
function hay(g) { return ntext(`${g.codigo} ${g.chave} ${g.categoria} ${g.time1Display} ${g.time2Display} ${g.campo} ${labelFor(g.modalidade)}`); }
function manualStatus(g) { return state.status[g.id] || 'auto'; }
function temporalStatus(g) {
  const start = parseDataHora(g.data, g.hora), end = new Date(start.getTime() + gameDuration());
  if (state.now >= start && state.now <= end) return 'andamento';
  if (state.now < start) return 'aguardando';
  return 'encerrado';
}
function statusLabel(g) {
  const v = manualStatus(g) === 'auto' ? temporalStatus(g) : manualStatus(g);
  return ({ aguardando:'Aguardando', andamento:'Em andamento', encerrado:'Encerrado', adiado:'Adiado', cancelado:'Cancelado' })[v] || v;
}
function familyMatch(g) { return state.familyQuery && hay(g).includes(ntext(state.familyQuery)); }
function favNames() { const s = new Set(); Object.values(state.favoritos).forEach(a => (a || []).forEach(x => s.add(x))); return s; }
function inAgenda(g) { const f = favNames(); return f.has(g.time1Display) || f.has(g.time2Display) || familyMatch(g); }
function activeFiltersCount() { return ['data','campo','chave','statusFiltro'].filter(k => !['todas','todos'].includes(state[k])).length + (state.periodo !== 'todos' ? 1 : 0) + (state.onlyAgenda ? 1 : 0); }
function fmtDate(date) { return `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()}`; }

function filteredGames(source = currentResolved()) {
  const q = ntext(state.search);
  const datas = unique(source.map(g => g.data));
  return source.filter(g => {
    if (state.periodo === 'dia1' && g.data !== datas[0]) return false;
    if (state.periodo === 'dia2' && g.data !== datas[1]) return false;
    if (state.periodo === 'proximos' && parseDataHora(g.data, g.hora) < state.now) return false;
    if (state.data !== 'todas' && g.data !== state.data) return false;
    if (state.campo !== 'todos' && g.campo !== state.campo) return false;
    if (state.chave !== 'todas' && g.chave !== state.chave) return false;
    if (state.statusFiltro !== 'todos' && statusLabel(g) !== state.statusFiltro) return false;
    if (state.onlyAgenda && !inAgenda(g)) return false;
    if (q && !hay(g).includes(q)) return false;
    return true;
  }).sort(byDate);
}
function grouped(games) {
  const map = new Map();
  games.forEach(g => { const k = `${g.chave}__${g.categoria}`; if (!map.has(k)) map.set(k, { chave:g.chave, categoria:g.categoria, jogos:[] }); map.get(k).jogos.push(g); });
  return [...map.values()];
}
function nextGames(limit = 5, src = allResolved()) { return src.filter(g => parseDataHora(g.data,g.hora) >= state.now).sort(byDate).slice(0, limit); }
function firstGameDate() { return allResolved().map(g => parseDataHora(g.data, g.hora)).sort((a,b)=>a-b)[0]; }
function split(ms) { let t = Math.max(0, Math.floor(ms/1000)); const days=Math.floor(t/86400); t%=86400; const hours=Math.floor(t/3600); t%=3600; const minutes=Math.floor(t/60); const seconds=t%60; return {days,hours,minutes,seconds}; }
function resetFilters() { Object.assign(state, { data:'todas', campo:'todos', chave:'todas', statusFiltro:'todos', periodo:'todos', onlyAgenda:false }); }
function switchTab(tab) { state.tab = tab; render(); }
function toast(msg) { state.toast = msg; render(); setTimeout(()=>{ state.toast=''; render(); }, 1800); }

function header() {
  const all = allResolved();
  const data = currentResolved();
  const upcoming = nextGames(1)[0];
  const live = all.filter(g => statusLabel(g) === 'Em andamento');
  return el('header', { class: 'app-header' }, [
    el('div', { class: 'brand' }, [
      el('div', { class: 'brand-mark' }, ['🏆']),
      el('div', {}, [
        el('strong', {}, ['Festival de Praia Christus']),
        el('span', {}, ['Desenvolvido por Felipe Aires Costa (pai do Leonardo Felismino)'])
      ])
    ]),
    el('div', { class: 'header-actions' }, [
      modeSwitch(),
      countdownMini(firstGameDate()),
      el('button', { class: 'ghost small', onclick: () => window.print() }, ['Imprimir'])
    ]),
    el('section', { class: 'hero-clean' }, [
      el('div', {}, [
        el('p', { class: 'eyebrow' }, ['COPA 2026']),
        el('h1', {}, ['Tabela de jogos limpa, rápida e responsiva']),
        el('p', { class: 'lead' }, ['Consulte por esporte, gênero, aluno, turma, local ou horário. A administração e as estatísticas ficam separadas da consulta pública.'])
      ]),
      nextMatchCard(live, upcoming)
    ]),
    el('section', { class: 'quick-search' }, [
      el('input', { value: state.search, placeholder: 'Buscar aluno, equipe, turma, jogo ou local...', oninput: (e) => { state.search = e.target.value; if (state.tab === 'inicio') state.tab = 'jogos'; render(); } }),
      el('button', { class: 'primary', onclick: () => { state.tab = 'jogos'; render(); } }, ['Ver jogos'])
    ]),
    summaryStrip(data, all)
  ]);
}
function modeSwitch() {
  return el('div', { class: 'mode-switch' }, [
    el('button', { class: state.mode === 'publico' ? 'is-active' : '', onclick: () => { state.mode = 'publico'; render(); } }, ['Público']),
    el('button', { class: state.mode === 'organizacao' ? 'is-active' : '', onclick: () => { state.mode = 'organizacao'; render(); } }, ['Organização'])
  ]);
}
function countdownMini(start) {
  if (!start) return null;
  const diff = start - state.now;
  if (diff <= 0) return el('div', { class: 'countdown-mini', id: 'countdown-mini' }, [el('span', {}, ['Competição iniciada'])]);
  const t = split(diff);
  return el('div', { class: 'countdown-mini', id: 'countdown-mini' }, [
    el('small', {}, ['Início em']),
    el('strong', { id: 'countdown-text' }, [`${t.days}d ${String(t.hours).padStart(2,'0')}h ${String(t.minutes).padStart(2,'0')}m ${String(t.seconds).padStart(2,'0')}s`])
  ]);
}
function nextMatchCard(live, next) {
  if (live.length) return el('article', { class: 'next-card live' }, [el('span', {}, ['Agora']), el('strong', {}, [`${live.length} jogo(s) em andamento`]), el('small', {}, ['Acompanhe os cards destacados.'])]);
  if (!next) return el('article', { class: 'next-card' }, [el('span', {}, ['Próximo jogo']), el('strong', {}, ['Nenhum jogo futuro']), el('small', {}, ['A competição pode ter sido encerrada.'])]);
  return el('article', { class: 'next-card' }, [
    el('span', {}, ['Próximo jogo']),
    el('strong', {}, [`${next.hora} · ${next.campo}`]),
    el('p', {}, [`${next.time1Display} × ${next.time2Display}`]),
    el('small', {}, [`${labelFor(next.modalidade)} · ${next.chave} · ${next.data}`]),
    el('button', { class: 'secondary small', onclick: () => focusGame(next) }, ['Abrir'])
  ]);
}
function summaryStrip(data, all) {
  const agenda = all.filter(inAgenda).length;
  return el('div', { class: 'summary-strip' }, [
    metric(data.length, 'jogos da seleção'),
    metric(all.length, 'jogos no evento'),
    metric(nextGames(999).length, 'próximos'),
    metric(agenda, 'minha agenda')
  ]);
}
function metric(v, l) { return el('div', { class: 'metric' }, [el('strong', {}, [v]), el('span', {}, [l])]); }

function mainNav() {
  const base = [ ['inicio','Início'], ['jogos','Jogos'], ['agenda','Agenda'], ['proximos','Próximos'], ['mapa','Mapa'] ];
  const org = [ ['estatisticas','Estatísticas'], ['campeoes','Campeões'], ['checklist','Checklist'], ['admin','Admin'] ];
  const items = state.mode === 'organizacao' ? [...base, ...org] : base;
  return el('nav', { class: 'main-nav' }, items.map(([k,l]) => el('button', { class: state.tab === k ? 'is-active' : '', onclick: () => switchTab(k) }, [l])));
}

function inicioView() {
  return el('main', { class: 'container home-grid' }, [
    homeTile('Jogos', 'Consulte por esporte, gênero, chave e local.', 'Ver jogos', () => switchTab('jogos')),
    homeTile('Minha Agenda', 'Salve equipes ou use o modo família.', 'Abrir agenda', () => switchTab('agenda')),
    homeTile('Próximos', 'Fila dos próximos jogos do evento.', 'Ver próximos', () => switchTab('proximos')),
    homeTile('Mapa', 'Campos e quadras em visão rápida.', 'Ver mapa', () => switchTab('mapa')),
    state.mode === 'organizacao' ? homeTile('Estatísticas', 'Progresso, alertas, finais e gráficos.', 'Abrir painel', () => switchTab('estatisticas')) : null,
    state.mode === 'organizacao' ? homeTile('Admin', 'Status, placar, vencedores e observações.', 'Administrar', () => switchTab('admin')) : null
  ]);
}
function homeTile(title, text, action, fn) { return el('article', { class:'home-tile' }, [el('h2',{},[title]), el('p',{},[text]), el('button',{class:'primary', onclick:fn},[action])]); }

function jogosView() {
  const games = filteredGames();
  return el('main', { class: 'container' }, [
    sportTabs(),
    compactToolbar(),
    state.filtersOpen ? filtersPanel() : null,
    state.toast ? el('div', { class:'toast' }, [state.toast]) : null,
    state.mode === 'organizacao' ? alertsBanner() : null,
    games.length ? el('section', { class:'game-results' }, grouped(games).map(groupSection)) : empty('Nenhum jogo encontrado', 'Ajuste a busca ou remova filtros ativos.')
  ]);
}
function sportTabs() {
  const gens = modalidadesDoEsporte(state.esporte);
  return el('section', { class: 'sport-panel' }, [
    el('div', { class:'sport-row' }, ESPORTES.map(esporte => {
      const total = modalidadesDoEsporte(esporte).reduce((acc,m)=>acc + datasetFor(m.key).length, 0);
      return el('button', { class: state.esporte === esporte ? 'is-active' : '', onclick: () => { selecionarModalidade(esporte, state.genero); resetFilters(); render(); } }, [el('span',{},[modalidadesDoEsporte(esporte)[0]?.icon || '🏆']), el('strong',{},[esporte]), el('small',{},[`${total} jogos`])]);
    })),
    el('div', { class:'gender-row' }, gens.map(m => el('button', { class: state.modalidade === m.key ? 'is-active' : '', onclick: () => { selecionarModalidade(state.esporte, m.genero); resetFilters(); render(); } }, [m.genero]))),
    el('div', { class:'selected-context' }, [el('strong',{},[`${modalidadeAtual().esporte} · ${modalidadeAtual().genero}`]), el('span',{},[labelFor(state.modalidade)])])
  ]);
}
function compactToolbar() {
  return el('section', { class:'toolbar' }, [
    el('label', { class:'toolbar-search' }, [el('span',{},['Busca']), el('input', { value: state.search, placeholder:'Aluno, turma, equipe, local...', oninput:e=>{state.search=e.target.value; render();} })]),
    el('button', { class:`secondary ${state.filtersOpen ? 'is-active' : ''}`, onclick:()=>{state.filtersOpen=!state.filtersOpen; render();} }, [`Filtros${activeFiltersCount() ? ` (${activeFiltersCount()})` : ''}`]),
    el('button', { class:`secondary ${state.onlyAgenda ? 'is-active' : ''}`, onclick:()=>{state.onlyAgenda=!state.onlyAgenda; render();} }, ['Minha agenda']),
    el('div', { class:'segmented' }, [
      el('button', { class: state.view==='cards'?'is-active':'', onclick:()=>{state.view='cards'; render();} }, ['Cards']),
      el('button', { class: state.view==='lista'?'is-active':'', onclick:()=>{state.view='lista'; render();} }, ['Lista'])
    ])
  ]);
}
function filtersPanel() {
  const data = currentResolved(), datas = unique(data.map(g=>g.data));
  return el('section', { class:'filters-panel' }, [
    quickButtons(datas),
    selectBox('Data', 'data', ['todas', ...datas], v => v==='todas'?'Todas':v),
    selectBox('Local', 'campo', ['todos', ...unique(data.map(g=>g.campo))], v => v==='todos'?'Todos':v),
    selectBox('Chave', 'chave', ['todas', ...unique(data.map(g=>g.chave))], v => v==='todas'?'Todas':v),
    selectBox('Status', 'statusFiltro', ['todos','Aguardando','Em andamento','Encerrado','Adiado','Cancelado'], v => v==='todos'?'Todos':v),
    el('button', { class:'ghost', onclick:()=>{resetFilters(); render();} }, ['Limpar filtros'])
  ]);
}
function quickButtons(datas) { const b=(k,l)=>el('button',{class:state.periodo===k?'is-active':'',onclick:()=>{state.periodo=k; state.data='todas'; render();}},[l]); return el('div',{class:'quick-buttons'},[b('todos','Todos'), datas[0]?b('dia1',datas[0]):null, datas[1]?b('dia2',datas[1]):null, b('proximos','Próximos')]); }
function selectBox(label, key, opts, fmt) { return el('label', { class:'select-box' }, [el('span',{},[label]), el('select',{onchange:e=>{state[key]=e.target.value; render();}}, opts.map(o=>el('option',{value:o, selected:state[key]===o},[fmt(o)])))]); }
function groupSection(gr) {
  return el('section', { class:'game-group' }, [
    el('header', {}, [el('div',{},[el('span',{class:'tag'},[gr.chave]), el('strong',{},[gr.categoria]), el('small',{},[`${gr.jogos.length} jogo(s)`])]), el('button',{class:'ghost small', onclick:()=>shareGroup(gr)},['Compartilhar'])]),
    state.view === 'lista' ? gameTable(gr.jogos) : el('div', { class:'cards-grid' }, gr.jogos.map(gameCard))
  ]);
}
function gameCard(g) {
  const decided = !!state.resultados[g.id], live = statusLabel(g)==='Em andamento';
  return el('article', { class:`game-card ${g.codigo==='FINAL'?'final':''} ${decided?'decided':''} ${live?'live':''}` }, [
    el('div', { class:'game-top' }, [el('span',{class:'code'},[g.codigo==='FINAL'?'🏆 FINAL':g.codigo]), el('span',{class:'when'},[`${g.data} · ${g.hora}`])]),
    el('div', { class:'game-meta' }, [`${labelFor(g.modalidade)} · ${g.chave} · ${g.campo}`]),
    teamLine(g, 'time1'),
    el('div',{class:'vs'},['×']),
    teamLine(g, 'time2'),
    el('footer', {}, [el('span',{class:'status'},[statusLabel(g)]), state.placares[g.id] ? el('span',{class:'score'},[state.placares[g.id]]) : null, el('button',{class:'more', onclick:()=>toggleDetails(g.id)},['Mais'])]),
    state.notas[g.id] ? el('p', { class:'note' }, [state.notas[g.id]]) : null,
    el('div', { class:'details', id:`details-${g.id}`, hidden:true }, [
      el('button',{onclick:()=>shareGame(g)},['WhatsApp']), el('button',{onclick:()=>window.print()},['Imprimir']), state.admin ? adminControls(g) : null
    ])
  ]);
}
function teamLine(g, side) {
  const name = side === 'time1' ? g.time1Display : g.time2Display;
  const tbd = side === 'time1' ? g.time1Tbd : g.time2Tbd;
  const isWin = state.resultados[g.id] === side;
  return el('div', { class:'team-line' }, [
    el('button', { class:`team-name ${isWin?'winner':''} ${tbd?'tbd':''}`, disabled:g.time1Tbd || g.time2Tbd, onclick:()=>markWinner(g.id, side) }, [isWin?'✓ ': '', name]),
    !tbd ? el('button', { class:`star ${isFav(g.id, name)?'is-fav':''}`, onclick:()=>toggleFav(g.id, name), title:'Adicionar à Minha Agenda' }, ['★']) : null
  ]);
}
function gameTable(games) { return el('div',{class:'table-wrap'},[el('table',{},[el('thead',{},[el('tr',{},['Jogo','Times','Data/Hora','Local','Status'].map(h=>el('th',{},[h])))]), el('tbody',{},games.map(g=>el('tr',{},[el('td',{},[g.codigo]),el('td',{},[`${g.time1Display} × ${g.time2Display}`]),el('td',{},[`${g.data} · ${g.hora}`]),el('td',{},[g.campo]),el('td',{},[statusLabel(g)])])))] )]); }
function toggleDetails(id) { const d = document.getElementById(`details-${id}`); if (d) d.hidden = !d.hidden; }
function markWinner(id, side) { if (state.resultados[id] === side) delete state.resultados[id]; else state.resultados[id]=side; write(LS.resultados,state.resultados); render(); }
function isFav(id, name) { return (state.favoritos[id] || []).includes(name); }
function toggleFav(id, name) { const s = new Set(state.favoritos[id] || []); s.has(name)?s.delete(name):s.add(name); state.favoritos[id]=[...s]; write(LS.favoritos,state.favoritos); render(); }
function shareGame(g) { window.open(`https://wa.me/?text=${encodeURIComponent(`${labelFor(g.modalidade)} — ${g.chave} — ${g.codigo}\n${g.time1Display} x ${g.time2Display}\n${g.data} às ${g.hora}\nLocal: ${g.campo}\n${location.href.split('?')[0]}`)}`, '_blank', 'noopener,noreferrer'); }
function shareGroup(gr) { navigator.clipboard?.writeText([`${gr.chave} — ${gr.categoria}`, ...gr.jogos.map(g=>`${g.codigo} | ${g.data} ${g.hora} | ${g.campo} | ${g.time1Display} x ${g.time2Display}`)].join('\n')).then(()=>toast('Tabela copiada.')).catch(()=>{}); }
function focusGame(g) { const m = MODALIDADES.find(x=>x.key===g.modalidade); state.tab='jogos'; state.esporte=m.esporte; state.genero=m.genero; state.modalidade=m.key; state.search=g.codigo; render(); }

function agendaView() {
  const agenda = allResolved().filter(inAgenda).sort(byDate);
  return el('main', { class:'container' }, [familyPanel(), el('section',{class:'page-head'},[el('h2',{},['Minha Agenda']), el('p',{},['Jogos salvos por estrela e resultados do modo família.']), el('button',{class:'primary', onclick:()=>window.print()},['Imprimir agenda'])]), agenda.length?el('div',{class:'cards-grid'},agenda.map(gameCard)):empty('Agenda vazia','Marque estrelas nos times ou informe um nome/turma no modo família.')]);
}
function familyPanel() { return el('section',{class:'family-panel'},[el('div',{},[el('strong',{},['Modo família']),el('span',{},['Digite aluno, equipe ou turma para montar a agenda automaticamente.'])]),el('div',{class:'family-form'},[el('input',{value:state.familyQuery,placeholder:'Ex.: Leonardo, 5ºAM DT...',oninput:e=>{state.familyQuery=e.target.value; write(LS.familia,state.familyQuery);}}),el('button',{class:'secondary',onclick:()=>render()},['Aplicar']),el('button',{class:'ghost',onclick:()=>{state.familyQuery='';write(LS.familia,'');render();}},['Limpar'])])]); }

function proximosView() { const games = nextGames(30); return el('main',{class:'container'},[el('section',{class:'page-head'},[el('h2',{},['Próximos jogos']),el('p',{},['Fila geral do evento em ordem cronológica.'])]), el('div',{class:'next-list'},games.map(g=>el('button',{onclick:()=>focusGame(g)},[el('strong',{},[`${g.data} · ${g.hora} · ${g.campo}`]),el('span',{},[`${labelFor(g.modalidade)} · ${g.chave} · ${g.codigo}`]),el('small',{},[`${g.time1Display} × ${g.time2Display}`])])))]); }
function checklistView() { const items=['Chegar 30 minutos antes','Levar garrafa de água','Conferir campo ou quadra','Salvar jogos favoritos','Compartilhar agenda','Acompanhar alterações']; return el('main',{class:'container'},[el('section',{class:'tool-card'},[el('h2',{},['Checklist do dia']),el('div',{class:'checklist'},items.map((i,idx)=>el('label',{},[el('input',{type:'checkbox'}),el('span',{},[i])])))] )]); }
function mapaView() { const locais = unique(allResolved().map(g=>g.campo)); return el('main',{class:'container'},[el('section',{class:'tool-card'},[el('h2',{},['Mapa dos campos e quadras']),el('p',{},['Visão esquemática. Toque em um local para filtrar os jogos.']),el('div',{class:'map-grid'},locais.map(local=>el('button',{onclick:()=>{state.tab='jogos';state.campo=local;state.filtersOpen=true;render();}},[el('strong',{},[local]),el('span',{},[`${allResolved().filter(g=>g.campo===local).length} jogos`])])))] )]); }
function campeoesView() { const finais = allResolved().filter(g=>g.codigo==='FINAL'); return el('main',{class:'container'},[el('section',{class:'page-head'},[el('h2',{},['Campeões por chave']),el('p',{},['Atualiza conforme os vencedores das finais são marcados.'])]),el('div',{class:'champions-grid'},finais.map(g=>{ const side=state.resultados[g.id]; const champ=side ? (side==='time1'?g.time1Display:g.time2Display) : 'A definir'; return el('article',{class:`champion-card ${side?'done':''}`},[el('small',{},[`${labelFor(g.modalidade)} · ${g.chave}`]),el('h3',{},[champ]),el('span',{},[`${g.data} · ${g.hora} · ${g.campo}`])]);}))]); }
function adminView() {
  if (!state.admin) return el('main',{class:'container'},[el('section',{class:'tool-card narrow'},[el('h2',{},['Painel administrativo']),el('p',{},['Libera edição local de status, placar e observações.']),el('input',{id:'admin-pass',type:'password',placeholder:'Senha'}),el('button',{class:'primary',onclick:()=>{ const v=document.getElementById('admin-pass')?.value; if(v==='festival2026'){state.admin=true;write(LS.admin,true);toast('Admin liberado.')} else toast('Senha incorreta.');}},['Entrar'])])]);
  return el('main',{class:'container'},[el('section',{class:'page-head'},[el('h2',{},['Administração']),el('p',{},['Abra “Mais” nos cards para editar jogo a jogo.']),el('button',{class:'secondary',onclick:()=>{state.admin=false;write(LS.admin,false);render();}},['Bloquear admin'])]), jogosView()]);
}
function adminControls(g) { return el('div',{class:'admin-controls'},[selectInline(statusLabel(g), ['auto','aguardando','andamento','encerrado','adiado','cancelado'], v=>{ if(v==='auto') delete state.status[g.id]; else state.status[g.id]=v; write(LS.status,state.status); render(); }), el('input',{value:state.placares[g.id]||'',placeholder:'Placar',onchange:e=>{e.target.value.trim()?state.placares[g.id]=e.target.value.trim():delete state.placares[g.id];write(LS.placares,state.placares);render();}}), el('input',{value:state.notas[g.id]||'',placeholder:'Observação',onchange:e=>{e.target.value.trim()?state.notas[g.id]=e.target.value.trim():delete state.notas[g.id];write(LS.notas,state.notas);render();}})]); }
function selectInline(current, opts, fn) {
  return el('select',{onchange:e=>fn(e.target.value)},
    opts.map(o=>el('option',{value:o,selected:false},[o==='auto'?'Status automático':o]))
  );
}

function estatisticasView() {
  const jogos = allResolved(), done = jogos.filter(g=>state.resultados[g.id] || statusLabel(g)==='Encerrado').length, agenda = jogos.filter(inAgenda);
  const byMod = MODALIDADES.map(m => { const arr = jogos.filter(g=>g.modalidade===m.key); return { label:`${m.esporte} · ${m.genero}`, total:arr.length, done:arr.filter(g=>state.resultados[g.id] || statusLabel(g)==='Encerrado').length }; }).filter(x=>x.total);
  const locais = countBy(jogos, g=>g.campo); const horarios=countBy(jogos,g=>g.hora).sort((a,b)=>timeMinutes(a[0])-timeMinutes(b[0])); const categorias=countBy(jogos,g=>g.categoria); const finais=jogos.filter(g=>g.codigo==='FINAL').sort(byDate); const conflicts=getConflicts(jogos); const alertas=makeAlerts(jogos, conflicts);
  return el('main',{class:'container stats-page'},[
    el('section',{class:'page-head'},[el('h2',{},['Estatísticas']),el('p',{},['Painel separado para não poluir a consulta de jogos.'])]),
    el('section',{class:'stats-cards'},[stat('Total',jogos.length),stat('Concluídos',done),stat('Pendentes',jogos.length-done),stat('Minha agenda',agenda.length)]),
    progressBox('Progresso geral', done, jogos.length),
    el('section',{class:'stats-grid'},[progressList('Por esporte e gênero', byMod), bars('Jogos por local', locais.slice(0,12)), timeline('Linha do tempo', horarios), nowBox(jogos), bars('Categorias mais movimentadas', categorias.slice(0,12)), finalsBox(finais), agendaBox(agenda), alertsBox(alertas), bars('Status dos jogos', countBy(jogos, statusLabel))])
  ]);
}
function stat(label,val){return el('article',{class:'stat-card'},[el('strong',{},[val]),el('span',{},[label])]);}
function progressBox(title, done, total){ const p=total?Math.round(done/total*100):0; return el('section',{class:'progress-box'},[el('div',{},[el('strong',{},[title]),el('span',{},[`${done} de ${total} · ${p}%`])]),el('div',{class:'progress-track'},[el('div',{class:'progress-fill',style:`width:${p}%`})])]); }
function progressList(title, rows){ return el('article',{class:'panel'},[el('h3',{},[title]),...rows.map(r=>progressBox(r.label,r.done,r.total))]); }
function bars(title, rows){ const max=Math.max(1,...rows.map(r=>r[1])); return el('article',{class:'panel'},[el('h3',{},[title]),...rows.map(([label,val])=>el('div',{class:'bar-row'},[el('span',{},[label]),el('div',{class:'bar-track'},[el('div',{class:'bar-fill',style:`width:${Math.max(3,Math.round(val/max*100))}%`})]),el('strong',{},[val])]))]); }
function timeline(title, rows){
  return el('article',{class:'panel'},[
    el('h3',{},[title]),
    el('div',{class:'time-grid'},rows.map(([h,v])=>
      el('div',{},[el('strong',{},[h]),el('span',{},[`${v} jogos`])])
    ))
  ]);
}
function nowBox(jogos){ const live=jogos.filter(g=>statusLabel(g)==='Em andamento'), today=fmtDate(state.now), rest=jogos.filter(g=>g.data===today&&parseDataHora(g.data,g.hora)>=state.now), next=nextGames(1,jogos)[0], final=jogos.filter(g=>g.codigo==='FINAL'&&parseDataHora(g.data,g.hora)>=state.now).sort(byDate)[0]; return el('article',{class:'panel'},[el('h3',{},['Momento atual']),stat('Em andamento',live.length),stat('Restantes hoje',rest.length), next?el('p',{},[`Próximo: ${next.hora} · ${labelFor(next.modalidade)} · ${next.campo}`]):null, final?el('p',{},[`Próxima final: ${final.hora} · ${labelFor(final.modalidade)} · ${final.campo}`]):null]); }
function finalsBox(finais){ return el('article',{class:'panel'},[el('h3',{},['Finais do dia']),...finais.map(g=>el('button',{class:'list-button',onclick:()=>focusGame(g)},[`${g.data} · ${g.hora} · ${labelFor(g.modalidade)} · ${g.chave} · ${g.campo}`]))]); }
function agendaBox(agenda){ const next=agenda.filter(g=>parseDataHora(g.data,g.hora)>=state.now).sort(byDate)[0]; return el('article',{class:'panel'},[el('h3',{},['Minha Agenda']),stat('Jogos',agenda.length),stat('Finais possíveis',agenda.filter(g=>g.codigo==='FINAL').length), next?el('p',{},[`Próximo: ${next.data} · ${next.hora} · ${next.campo}`]):el('p',{},['Sem jogos na agenda.'])]); }
function alertsBox(alertas){ return el('article',{class:'panel alerts'},[el('h3',{},['Alertas']), alertas.length?el('div',{},alertas.slice(0,50).map(a=>el('p',{},[el('strong',{},[a.tipo+': ']), a.texto]))):el('p',{},['Nenhum alerta.'])]); }
function countBy(arr, fn){ const m=new Map(); arr.forEach(x=>{const k=fn(x); m.set(k,(m.get(k)||0)+1);}); return [...m.entries()].sort((a,b)=>b[1]-a[1]); }
function timeMinutes(h){ const m=String(h).match(/(\d+)h(\d+)/); return m?Number(m[1])*60+Number(m[2]):9999; }
function getConflicts(jogos){ const m=new Map(); jogos.forEach(g=>{const k=`${g.campo}|${g.data}|${g.hora}`; if(!m.has(k))m.set(k,[]); m.get(k).push(g);}); return [...m.values()].filter(v=>v.length>1); }
function makeAlerts(jogos, conflicts){ const a=[]; conflicts.forEach(c=>a.push({tipo:'Conflito',texto:`${c[0].campo} · ${c[0].data} · ${c[0].hora} tem ${c.length} jogos simultâneos.`})); jogos.filter(g=>g.codigo==='FINAL'&&!state.resultados[g.id]).forEach(g=>a.push({tipo:'Final sem campeão',texto:`${labelFor(g.modalidade)} · ${g.chave} · ${g.hora}.`})); return a; }
function alertsBanner(){ const c=getConflicts(allResolved()).length; return c?el('section',{class:'soft-alert'},[`⚠ ${c} conflito(s) de horário/local identificados. Veja detalhes em Estatísticas.`]):null; }

function empty(title,text){ return el('section',{class:'empty'},[el('strong',{},[title]),el('p',{},[text])]); }
function updateCountdownOnly(){ const node=document.getElementById('countdown-text'), start=firstGameDate(); if(!node||!start)return; const d=start-state.now; if(d<=0){ const box=document.getElementById('countdown-mini'); if(box) box.innerHTML='<span>Competição iniciada</span>'; return; } const t=split(d); node.textContent=`${t.days}d ${String(t.hours).padStart(2,'0')}h ${String(t.minutes).padStart(2,'0')}m ${String(t.seconds).padStart(2,'0')}s`; }
function render(){ const root=document.getElementById('app'); root.innerHTML=''; root.append(header(), mainNav()); if(state.tab==='inicio')root.append(inicioView()); if(state.tab==='jogos')root.append(jogosView()); if(state.tab==='agenda')root.append(agendaView()); if(state.tab==='proximos')root.append(proximosView()); if(state.tab==='checklist')root.append(checklistView()); if(state.tab==='mapa')root.append(mapaView()); if(state.tab==='campeoes')root.append(campeoesView()); if(state.tab==='admin')root.append(adminView()); if(state.tab==='estatisticas')root.append(estatisticasView()); root.append(bottomNav(), el('footer',{class:'footer'},['Festival de Praia Christus 2026 — versão clean'])); }
function bottomNav(){ const items = state.mode==='organizacao' ? [['inicio','Início'],['jogos','Jogos'],['agenda','Agenda'],['estatisticas','Stats'],['admin','Admin']] : [['inicio','Início'],['jogos','Jogos'],['agenda','Agenda'],['proximos','Próximos'],['mapa','Mapa']]; return el('nav',{class:'bottom-nav'},items.map(([k,l])=>el('button',{class:state.tab===k?'is-active':'',onclick:()=>switchTab(k)},[l]))); }
render();
