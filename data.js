(() => {
// ============================================================
// DADOS BASE
// ============================================================
const futebolMasculinoChaves = [
  {
    chave: "Chave A", equipes: 11, categoria: "4º ano", campo: "Campo 01",
    jogos: [
      { codigo: "JOGO 01", time1: "4º AM DT", time2: "4 AM/T SP", data: "20/06/2026", hora: "08h00min" },
      { codigo: "JOGO 02", time1: "4 ANO PQL", time2: "4ºAT DT", data: "20/06/2026", hora: "08h35min" },
      { codigo: "JOGO 03", time1: "4 CM SP", time2: "4º ANO A (MANHÃ) - SUL", data: "20/06/2026", hora: "09h10min" },
      { codigo: "JOGO 04", time1: "4ºBM DT", time2: "4º ANO B (MANHÃ) - SUL", data: "20/06/2026", hora: "09h45min" },
      { codigo: "JOGO 05", time1: "4BM SP", time2: "4ºCM DT", data: "20/06/2026", hora: "10h20min" },
      { codigo: "JOGO 06", time1: "4ºDM DT", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "10h55min" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "08h00min" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "08h35min" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "09h10min" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "10h55min" }
    ]
  },
  {
    chave: "Chave B", equipes: 14, categoria: "5º ano", campo: "Campo 01",
    jogos: [
      { codigo: "JOGO 01", time1: "5º ANO A (MANHÃ) - SUL", time2: "5ºAM DT", data: "20/06/2026", hora: "11h30min" },
      { codigo: "JOGO 02", time1: "5º C/BM BS", time2: "5º ANO A (TARDE) - SUL", data: "20/06/2026", hora: "12h05min" },
      { codigo: "JOGO 03", time1: "5ºBM DT", time2: "5 EM BS", data: "20/06/2026", hora: "12h40min" },
      { codigo: "JOGO 04", time1: "5º ANO B (MANHÃ) - SUL", time2: "5ºCM DT", data: "20/06/2026", hora: "13h15min" },
      { codigo: "JOGO 05", time1: "FUTEBOL 5 ANO PQL", time2: "5º ANO C (MANHÃ) - SUL", data: "20/06/2026", hora: "13h50min" },
      { codigo: "JOGO 06", time1: "5ºDM DT", time2: "5 DM BS", data: "20/06/2026", hora: "14h25min" },
      { codigo: "JOGO 07", time1: "5 ANO BEN", time2: "5ºEM DT", data: "20/06/2026", hora: "15h00min" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "10h20min" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "11h30min" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "21/06/2026", hora: "12h05min" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "21/06/2026", hora: "12h40min" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "21/06/2026", hora: "13h15min" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "21/06/2026", hora: "14h25min" }
    ]
  },
  {
    chave: "Chave C", equipes: 21, categoria: "6º e 7º ano", campo: "Campo 02",
    jogos: [
      { codigo: "JOGO 01", time1: "6ºAOLIMP1 DT", time2: "6 AM BS", data: "20/06/2026", hora: "08h00min" },
      { codigo: "JOGO 02", time1: "6º ANO B (MANHÃ) - SUL", time2: "6ºBM DT", data: "20/06/2026", hora: "08h35min" },
      { codigo: "JOGO 03", time1: "6 BM BS", time2: "6º ANO OLÍMPICO - COIMBRA (MANHÃ) - SUL", data: "20/06/2026", hora: "09h10min" },
      { codigo: "JOGO 04", time1: "6ºOLIMP2 DT", time2: "6 OLM1 BS", data: "20/06/2026", hora: "09h45min" },
      { codigo: "JOGO 05", time1: "6º ANO OLÍMPICO - RAFAEL (MANHÃ) - SUL", time2: "6 OLM2 BS", data: "20/06/2026", hora: "10h20min" },
      { codigo: "JOGO 06", time1: "7º ANO A (MANHÃ) - SUL", time2: "7ºAM DT", data: "20/06/2026", hora: "10h55min" },
      { codigo: "JOGO 07", time1: "7ºAT DT", time2: "7 AM BS", data: "20/06/2026", hora: "11h30min" },
      { codigo: "JOGO 08", time1: "7º ANO B (MANHÃ) - SUL", time2: "7ºBM DT", data: "20/06/2026", hora: "12h05min" },
      { codigo: "JOGO 09", time1: "7ºOLIMP2 DT", time2: "7 OLM1 BS", data: "20/06/2026", hora: "12h40min" },
      { codigo: "JOGO 10", time1: "7º ANO OLÍMPICO (MANHÃ) - SUL", time2: "7 OLM2 BS", data: "20/06/2026", hora: "13h15min" },
      { codigo: "JOGO 11", time1: "7ºA OLIMP1 DT", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "13h50min" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "08h00min" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "08h35min" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "09h10min" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "09h45min" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "10h20min" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "10h55min" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "11h30min" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 16", time2: "VENCEDOR DO JOGO 17", data: "21/06/2026", hora: "12h05min" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 18", time2: "VENCEDOR DO JOGO 19", data: "21/06/2026", hora: "13h50min" }
    ]
  },
  {
    chave: "Chave D", equipes: 12, categoria: "8º e 9º ano", campo: "Campo 03",
    jogos: [
      { codigo: "JOGO 01", time1: "8 BM/MED 1 BS", time2: "8º ANO A (MANHÃ) - SUL", data: "20/06/2026", hora: "08h00min" },
      { codigo: "JOGO 02", time1: "8ºB MED2M DT", time2: "8 ANO PQL", data: "20/06/2026", hora: "08h35min" },
      { codigo: "JOGO 03", time1: "8º ANO B (MANHÃ) - SUL", time2: "8 MED2 BS", data: "20/06/2026", hora: "09h10min" },
      { codigo: "JOGO 04", time1: "9 A/B/MED2 BS", time2: "9º ANO A (MANHÃ) - SUL", data: "20/06/2026", hora: "09h45min" },
      { codigo: "JOGO 05", time1: "9º ANO B/MED (MANHÃ) - SUL", time2: "9 ANO PQL", data: "20/06/2026", hora: "10h20min" },
      { codigo: "JOGO 06", time1: "9ºABM DT", time2: "9 MED1 BS", data: "20/06/2026", hora: "10h55min" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "08h00min" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "08h35min" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "21/06/2026", hora: "09h10min" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "21/06/2026", hora: "09h45min" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "21/06/2026", hora: "11h30min" }
    ]
  },
  {
    chave: "Chave E", equipes: 19, categoria: "1ª e 2ª série", campo: "Campo 04",
    jogos: [
      { codigo: "JOGO 01", time1: "1 A/B BS", time2: "1ªAM DT", data: "20/06/2026", hora: "08h00min" },
      { codigo: "JOGO 02", time1: "1ª SÉRIE B/MED (MANHÃ) - SUL", time2: "1ªAT DT", data: "20/06/2026", hora: "08h35min" },
      { codigo: "JOGO 03", time1: "1 SERIE A PQL", time2: "1 MED1/ITA BS", data: "20/06/2026", hora: "09h10min" },
      { codigo: "JOGO 04", time1: "1ªBM DT", time2: "1ª SÉRIE A (MANHÃ) - SUL", data: "20/06/2026", hora: "09h45min" },
      { codigo: "JOGO 05", time1: "1 MED2 BS", time2: "2ª SÉRIE A (MANHÃ) - SUL", data: "20/06/2026", hora: "10h20min" },
      { codigo: "JOGO 06", time1: "1 SERIE MED PQL", time2: "1ªMED2 DT", data: "20/06/2026", hora: "10h55min" },
      { codigo: "JOGO 07", time1: "2ª SÉRIE B (MANHÃ) - SUL", time2: "2 AM BS", data: "20/06/2026", hora: "11h30min" },
      { codigo: "JOGO 08", time1: "2ªAMT DT", time2: "2ª SÉRIE MED (MANHÃ) - SUL", data: "20/06/2026", hora: "12h05min" },
      { codigo: "JOGO 09", time1: "2 BM BS", time2: "2ªMED DT", data: "20/06/2026", hora: "12h40min" },
      { codigo: "JOGO 10", time1: "2 MED1/MED2 BS", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "13h15min" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "08h00min" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "08h35min" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "09h10min" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "09h45min" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "10h20min" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "10h55min" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "11h30min" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 16", time2: "VENCEDOR DO JOGO 17", data: "21/06/2026", hora: "12h40min" }
    ]
  }
];

const voleiTrioMasculinoChaves = [
  {
    chave: "Chave B", equipes: 3, categoria: "5º ano", campo: "Quadra 02",
    jogos: [
      { codigo: "JOGO 01", time1: "ADLLER, PAULO, ANDRÉ — 5ºAM DT", time2: "LUCAS, ARTHUR, JOÃO DIAS — 5ºB/M/SUL", data: "20/06/2026", hora: "11h00min" },
      { codigo: "FINAL", time1: "ARTHUR, IAGO, LORENZO — 5ºDM DT", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "12h00min" }
    ]
  },
  {
    chave: "Chave C", equipes: 5, categoria: "6º e 7º ano", campo: "Quadra 06/07",
    jogos: [
      { codigo: "JOGO 01", time1: "HANGLEY, LUÍS, LEONARDO — 6ºAT DT", time2: "JOÃO VICTOR, MATHEUS, GUSTAVO — 7M BS", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 02", time1: "7 ANO BEN", time2: "SAULO, DAVI, JOAO LUCAS — 6 ANO PQL", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 03", time1: "MÁRIO, RAFAEL, PEDRO — 6ºOLIMP 2 DT", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "12h20min", quadra: "Quadra 06" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 06" }
    ]
  },
  {
    chave: "Chave D", equipes: 4, categoria: "8º e 9º ano", campo: "Quadra 04/05",
    jogos: [
      { codigo: "JOGO 01", time1: "ALEX KENZO, LUCAS, C.EDUARDO — 9M BS", time2: "MATHEUS, GABRIEL, ARTHUR — 9 ANO PQL", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 02", time1: "PEDRO, SAMUEL, KAIQUE — 9 ANO PQL", time2: "IGOR MARTINS, MATEUS, BRUNO — 9BM BS", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 05" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "15h00min", quadra: "Quadra 05" }
    ]
  },
  {
    chave: "Chave E", equipes: 15, categoria: "1ª e 2ª série", campo: "Quadras 03-06",
    jogos: [
      { codigo: "JOGO 01", time1: "CAIO, CAUÃ, JOÃO HENRIQUE — 2ªAMED/M/SUL", time2: "ARTHUR, JOÃO ALEXANDRINO, HEITOR — 1M BS", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 02", time1: "DAVI BORGES, GABRIEL, LEONARDO — 1AM BS", time2: "DALTON, RAFAEL, BERNARDO — 1ªMED1 DT", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 03", time1: "JOÃO CÉSAR, THIAGO, SAMUEL — 2ªB/M/SUL", time2: "FELIPE LEAL, LÉO, BERNARDO — 1M BS", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 04", time1: "FELIPE MOURAO, JOAO MIGUEL, LEVI — 2M BS", time2: "LEONARDO, MIGUEL, KAUÃ — 2ªB/M/SUL", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 05", time1: "LUIZ, TOM, JOSÉ EDSON — 1ªAT DT", time2: "FRANCISCO ADAIL, JOÃO PEDRO, CARLOS — 2M BS", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 06", time1: "LUCAS RIOS, GABRIEL, MATHEUS — 1M BS", time2: "DAVI, PEDRO, ALLAN — 2 SÉRIE PQL", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 07", time1: "LUCCA PARENTE, LUCAS, JOÃO EMANUEL — 2M BS", time2: "DOUGLAS, GLAYDSON, PATRICIO — 2 SÉRIE PQL", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 08", time1: "MATHEUS SO, ANTONIO, MATHEUS SIL — 1AM BS", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 05" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "20/06/2026", hora: "15h00min", quadra: "Quadra 04" }
    ]
  }
];

// ============================================================
// ============================================================
// VÔLEI TRIO FEMININO
// ============================================================
const voleiTrioFemininoChaves = [
  {
    chave: "Chave A", equipes: 26, categoria: "4º ano", campo: "Quadras 01-03",
    jogos: [
      { codigo: "JOGO 01", time1: "ALICE,MARCELA,HELOÍSA 4ºDM DT", time2: "ANA LIS/LETÍCIA/GIOVANNA - 4ºA/M/SUL", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 02", time1: "ANA/FERNANDA/MELISSA 4M SP", time2: "BIANCA/SOFIA/YASMIN - 4ºAB/M/SUL", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 03", time1: "ÍSIS/LAURA/MARIA GIOVANNA SP", time2: "ANA BEATRIZ,MªLUISA,LUISA 4ºAT DT", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 04", time1: "ISABELA,CLARA, MARIA CLARA 4 ANO 1 PQL", time2: "FERNANDA/Mª BEATRIZ/LAURA - 4ºA/M/SUL", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 05", time1: "ANA CLARA,LAURA,ALICE 4ºAT DT", time2: "JÚLIA/ALAIA/MARIA LARA SP", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 06", time1: "Mª ALICE/Mª ISABELLA/EVELYN - 4ºA/MT/SUL", time2: "ANA CLARA,MªFLOR,MªFERNADA 4ºBC DT", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 07", time1: "Mª EDUARDA/MARCELLA/Mª CECÍLIA SP", time2: "CELINA,HELENA,LAURA 4ºAM DT", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 08", time1: "Mª JÚLIA/LIS/LIZE - 4ºAB/M/SUL", time2: "Mª LUIZA/STELA/AMAYA SP", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 09", time1: "LÍVIA,HELENA,GIOVANNA 4ºAM DT", time2: "Mª TEREZA/LARA/Mª CECÍLIA - 4ºB/M/SUL", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 10", time1: "MARIA CLARA/CECÍLIA/MARIA LUIZA SP", time2: "MªLUIZA,MªCLARA,LETICIA 4ºCM DT", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 11", time1: "MARIA ELIZA,LAÍS,ALICE 4ºCM DT", time2: "SOFIA/Mª ALICE/Mª BÁRBARA - 4ºA/M/SUL", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 12", time1: "MARIA JÚLIA/CLARISSE/ALICE SP", time2: "ALICE,LIS,IVNA 4 ANO 2 PQL", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 13", time1: "TERESA,RACHEL,M EDUARDA 4ºDM DT", time2: "MARIA LETÍCIA/MARIA/MELISSA SP", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 13", time2: "VENCEDOR DO JOGO 14", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 15", time2: "VENCEDOR DO JOGO 16", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 17", time2: "VENCEDOR DO JOGO 18", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 23", time1: "VENCEDOR DO JOGO 19", time2: "VENCEDOR DO JOGO 20", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 24", time1: "VENCEDOR DO JOGO 21", time2: "VENCEDOR DO JOGO 22", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 02" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 23", time2: "VENCEDOR DO JOGO 24", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 01" }
    ]
  },
  {
    chave: "Chave B", equipes: 32, categoria: "5º ano", campo: "Quadras 01-05",
    jogos: [
      { codigo: "JOGO 01", time1: "BEATRICE,SOFIA,CELINA 5ºBCE DT", time2: "ANA DORA/MIRELA/MARINA 5M BS", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 02", time1: "ANA LIS/ISABEL/CLARISSE - 5ºA/T/SUL", time2: "CECILIA,SARA,GIOVANA 5ºCM DT", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 03", time1: "GIOVANA,MªJULIA,LUIZA 5ºEM DT", time2: "ANA LIS/MARINA/LIVIA 5M BS", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 04", time1: "ISYS,CECILIA,EDUARDA 5 ANO TRIO PQL", time2: "GIOVANNA/ANA LUIZA/ALYSSIA - 5ºB/M/SUL", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 05", time1: "GIOVANNA,CECILIA,CLARICE 5ºDAM DT", time2: "GIOVANNA/Mª FERNANDA/Mª CECÍLIA 5M BS", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 06", time1: "GIOVANNA,MARCELA,VALENTINA 5ºAT DT", time2: "JULIA,ISIS,EDUARDA 5 ANO TRIO PQL", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 07", time1: "LAÍS/LARA/Mª GIOVANNA - 5ºC/M/SUL", time2: "GIOVANNA/Mª JÚLIA/MANUELA 5M BS", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 08", time1: "JADE/ANA/LIS MARIA 5M BS", time2: "ISABELA,MªCLARA,MªVALENTINA 5ºAT DT", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 09", time1: "LAVÍNIA,MªGIULIA,CECÍLIA 5ºAM DT", time2: "LAURA/ANA MARINA/MARIA VALENTINA 5M BS", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 10", time1: "LETÍCIA/ISABELLA/CLARA 5M BS", time2: "LETICIA,GIOVANNA,BIANCA 5ºBM DT", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 11", time1: "MªVITÓRIA,SRA,SABRINA 5ºAM DT", time2: "LIZ,CAROLINA,HELOISA 5 ANO TRIO PQL", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 12", time1: "MªLUIZA/FERNANDA/MªVALENTINA - 5ºA/M/SUL", time2: "MELISSA,ALICE,ISA 5ºDM DT", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 13", time1: "PIETRA,MªSOPHIA,VALENTINA 5ºBC DT", time2: "Mª EDUARDA/Mª LUIZA/BRUNA 5M BS", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 14", time1: "MARIA/LAURA/MARIANA 5M BS", time2: "SOFIA,ISADORA,GABRIELA 5ºAT DT", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 15", time1: "MARIANA/LIS/NICOLE - 5ºC/M/SUL", time2: "SARAH/ISABELA/JÚLIA 5M BS", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 16", time1: "SOFIA,SOFIA Mª,RAFAELA 5ºDM DT", time2: "VIVIAN,RAYSSA,ISIS 5 ANO TRIO PQL", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 23", time1: "VENCEDOR DO JOGO 13", time2: "VENCEDOR DO JOGO 14", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 24", time1: "VENCEDOR DO JOGO 15", time2: "VENCEDOR DO JOGO 16", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 25", time1: "VENCEDOR DO JOGO 17", time2: "VENCEDOR DO JOGO 18", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 26", time1: "VENCEDOR DO JOGO 19", time2: "VENCEDOR DO JOGO 20", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 27", time1: "VENCEDOR DO JOGO 21", time2: "VENCEDOR DO JOGO 22", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 28", time1: "VENCEDOR DO JOGO 23", time2: "VENCEDOR DO JOGO 24", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 29", time1: "VENCEDOR DO JOGO 25", time2: "VENCEDOR DO JOGO 26", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 30", time1: "VENCEDOR DO JOGO 27", time2: "VENCEDOR DO JOGO 28", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 02" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 29", time2: "VENCEDOR DO JOGO 30", data: "20/06/2026", hora: "12h20min", quadra: "Quadra 01" }
    ]
  },
  {
    chave: "Chave C", equipes: 44, categoria: "6º e 7º ano", campo: "Quadras 06-10",
    jogos: [
      { codigo: "JOGO 01", time1: "ALÍCIA,GIOVANA,VALENTINA 7ºOLIMP2 DT", time2: "ANA JÚLIA/AMANDA/LORENA - 7ºAB/M/SUL", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 02", time1: "CECÍLIA,MARINA,BIANCA 7ºBOLIMP2 DT", time2: "ALICE/BEATRIZ /NICOLE 6M BS", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 03", time1: "ANNA JÚLIA/GIOVANNA/LARA - 6ºOLIMP/M/SUL", time2: "CAROLINA/MANUELA/BÁRBARA 6M BS", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 04", time1: "ESTHER/GIOVANA MARIA/LETICIA 6M BS", time2: "ESTER,JULIA,CAROLINA 6ºAOLIMP1 DT", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 05", time1: "GIOVANA,ALICIA,ANA BEATRIZ 7ºOLIMP1 DT", time2: "BEATRIZ/Mª LUIZA/Mª CECÍLIA - 6ºB/M/SUL", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 06", time1: "CECÍLIA/GABRIELA/ISA - 7ºB/M/SUL", time2: "ISABELA,LÍVIA,OLÍVIA 6ºAM DT", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 07", time1: "JÚLIA,SARAH,NICOLE 7ºOLIMP 1 DT", time2: "GABRIELA/MARIA LARA/JULIA 6M BS", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 08", time1: "LAÍS,Mª EDUARDA,ISABELA 6ºAM DT", time2: "ISABELA/GIOVANA/SOFIA - 7ºOLIMP/M/SUL", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 09", time1: "JÚLIA/BRUNA/GIOVANA 7M BS", time2: "LETÍCIA,MAITÊ,LETÍCIA 6ºOLIMP 1 DT", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 10", time1: "ISABELA/SOPHIA/NICOLE - 6ºB/M/SUL", time2: "LARISSA/LETICIA/BEATRIZ 7M BS", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 11", time1: "Mª BEATRIZ,LARA,Mª LUISA 6º OLIMP 1 2 DT", time2: "LETÍCIA/HELENA/MARIA EDUARDA 6M BS", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 12", time1: "Mª CLARA,LIZ,LETICIA 6ºBOLIM1 DT", time2: "ISLE/LETÍCIA/HELOÍSA - 7ºAB/M/SUL", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 13", time1: "LIS/MARIA HELENA/MARIA ESTHER 6º/7º M BS", time2: "Mª EDUARDA, Mª SÁ,BEATRICE 6ºOLIMP1 DT", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 14", time1: "JÚLIA/ANA SOFIA/RAFAELA - 7ºA/T/SUL", time2: "Mª EDUARDA,LIA,GABRIELA 6ºOLIMP1 DT", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 15", time1: "MAITÊ,SARA,VALENTINA 6ºAT DT", time2: "MARIA ALICE/Mª BEATRIZ/Mª EDUARDA 7M BS", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 16", time1: "MARIA ALICE/MARIANA/ANA CLARA 7M BS", time2: "Mª JÚLIA/LAÍS/LARA - 7ºOLIMP/M/SUL", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 17", time1: "MªALICE/MªVITÓRIA/GABRIELA - 7ºA/M/SUL", time2: "MªLUIZA,MªEDUARDA,LUIZA 7ºOLIMP2 DT", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 18", time1: "NICOLE JULIÃO/ALICE LIMA/MAIARA 7M BS", time2: "MªESTHER/ANA CLARA/LÍDIA - 7ºAOLIM/M/SUL", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 19", time1: "MARIA,ANTONELA,BEATRIZ 6ºAM DT", time2: "SOPHIA SEGUNDO/SOFIA/MANUELA 7M BS", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 20", time1: "MARCELA/LUÍSA/AMANDA - 6ºOLIMP/M/SUL", time2: "MELISSA,ALICE,BEATRIZ 7ºOLIMP 2 DT", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 21", time1: "SOFIA,MªJÚLIA,NANDA 6ºAM DT", time2: "RAFAELA/Mª VALENTINA/BIANCA - 7ºB/M/SUL", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 22", time1: "SOPHIA/ANABELLA/BEATRIZ - 7ºB/M/SUL", time2: "STELA,MARIA,ANA SOFIA 7ºAT DT", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 23", time1: "LETÍCIA/RAFAELLE/LETÍCIA 6M BS", time2: "ALICE, M JÚLIA, ISABELLA 6ºOLIMP2 DT", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 24", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 25", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 26", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 27", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 28", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 29", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 30", time1: "VENCEDOR DO JOGO 13", time2: "VENCEDOR DO JOGO 14", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 31", time1: "VENCEDOR DO JOGO 15", time2: "VENCEDOR DO JOGO 16", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 32", time1: "VENCEDOR DO JOGO 17", time2: "VENCEDOR DO JOGO 18", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 33", time1: "VENCEDOR DO JOGO 19", time2: "VENCEDOR DO JOGO 20", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 34", time1: "VENCEDOR DO JOGO 21", time2: "VENCEDOR DO JOGO 22", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 35", time1: "VENCEDOR DO JOGO 23", time2: "VENCEDOR DO JOGO 24", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 36", time1: "VENCEDOR DO JOGO 25", time2: "VENCEDOR DO JOGO 26", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 37", time1: "VENCEDOR DO JOGO 27", time2: "VENCEDOR DO JOGO 28", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 38", time1: "VENCEDOR DO JOGO 29", time2: "VENCEDOR DO JOGO 30", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 39", time1: "VENCEDOR DO JOGO 31", time2: "VENCEDOR DO JOGO 32", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 40", time1: "VENCEDOR DO JOGO 33", time2: "VENCEDOR DO JOGO 34", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 41", time1: "VENCEDOR DO JOGO 35", time2: "VENCEDOR DO JOGO 36", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 42", time1: "VENCEDOR DO JOGO 37", time2: "VENCEDOR DO JOGO 38", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 43", time1: "VENCEDOR DO JOGO 39", time2: "VENCEDOR DO JOGO 40", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 44", time1: "VENCEDOR DO JOGO 41", time2: "VENCEDOR DO JOGO 42", data: "20/06/2026", hora: "12h20min", quadra: "Quadra 07" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 43", time2: "VENCEDOR DO JOGO 44", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 06" }
    ]
  },
  {
    chave: "Chave D", equipes: 24, categoria: "8º e 9º ano", campo: "Quadras 05-11",
    jogos: [
      { codigo: "JOGO 01", time1: "HELENA/LUIZA/ISABELLE - 8ºMED/M/SUL", time2: "ALESSA,MELINA,BEATRIZ 8ºABM DT", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 02", time1: "BEATRIZ,MªEDUARDA,MªSOPHIA 9ºAM DT", time2: "ANA VIRGÍNIA/LUNA/ISABELA MONTE 8M BS", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 03", time1: "BEATRIZ,LAIS,LUNNA 8 ANO TRIO FEM 1 PQL", time2: "LÍVIA/Mª JÚLIA/ANA LUÍSA - 8ºAMED/M/SUL", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 04", time1: "BIANCA/MARIA JULIA/LIA 8M BS", time2: "CECILIA,MARINA,NATALIA 8ºBM DT", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 05", time1: "JULIA,LIS,ISABELLA 8 ANO TRIO FEM PQL", time2: "Mª CLARA/ALICE/ESTHER - 8ºA/M/SUL", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 06", time1: "ISABEL,LARA,MªALICE 9ºBMED DT", time2: "MARINA,MARCELA,LETICIA 9 ANO TRIO PQL", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 07", time1: "Mª JÚLIA/LIA/GEOVANA - 9ºA/M/SUL", time2: "CLARISSE/ISABELA/Mª LETICIA 9M BS", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 08", time1: "ELISA/Mª EDUARDA/MILENA 8M BS", time2: "MªLUCIANA/ANALIZ/MARINA - 9ºA/T/SUL", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 09", time1: "ISABELLA/SARA/ISABELA 8M BS", time2: "JÚLIA,Mª CLARA,Mª CLARA 8ºMED 2 DT", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 10", time1: "MARINA/CECÍLIA/THAÍS - 8ºMED/M/SUL", time2: "Mª CECILIA,LIS,MªCECILIA 8ºMED1 DT", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 11", time1: "SOFIA/Mª JÚLIA/ALANA - 8ºBMED/M/SUL", time2: "MARINA/Mª VITORIA/LOLA 8M BS", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 12", time1: "SOFIA,GIULIA,PIETRA 8ºBM DT", time2: "VALENTINA/MªJÚLIA/MONALISA - 8ºBM/AT/SUL", data: "20/06/2026", hora: "10h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "20/06/2026", hora: "11h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 13", time2: "VENCEDOR DO JOGO 14", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 15", time2: "VENCEDOR DO JOGO 16", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 17", time2: "VENCEDOR DO JOGO 18", data: "20/06/2026", hora: "12h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 19", time2: "VENCEDOR DO JOGO 20", data: "20/06/2026", hora: "12h20min", quadra: "Quadra 09" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 21", time2: "VENCEDOR DO JOGO 22", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 08" }
    ]
  },
  {
    chave: "Chave E", equipes: 15, categoria: "1ª e 2ª série", campo: "Quadra 11",
    jogos: [
      { codigo: "JOGO 01", time1: "Mª JÚLIA/LARA/JÚLIA - 1ªAMED/M/SUL", time2: "LUIZA/BEATRIZ/LÍVIA 2M BS", data: "20/06/2026", hora: "07h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 02", time1: "BEATRIZ, CLARA E LIA 2 MED DT", time2: "CATARINA/MARIANA/Mª SOFIA 1M BS", data: "20/06/2026", hora: "08h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 03", time1: "ISABELLA/JÚLIA/Mª CLARA - 2ªAB/M/SUL", time2: "ISABELA,LAIS,VALERIA 1ªMED B DT", data: "20/06/2026", hora: "08h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 04", time1: "GABRIELA/VALENTINA/JÚLIA 2M BS", time2: "JÚLIA/AMANDA/ISABELLY - 2ªA/T/SUL", data: "20/06/2026", hora: "08h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 05", time1: "LUIZA,MªBEATRIZ,SOPHIA 1ªAB DT", time2: "ISABELA/Mª JÚLIA/JOANA 2M BS", data: "20/06/2026", hora: "09h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 06", time1: "LIS/CAROLINA/Mª LUIZA 2M BS", time2: "1/2 SERIE BEN", data: "20/06/2026", hora: "09h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 07", time1: "SOPHIA,FERNANDA,AIMEE 1ªAT DT", time2: "SARA/Mª EDUARDA/LUANA 2M BS", data: "20/06/2026", hora: "09h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 08", time1: "SOPHIA/ANA JULIA/LAILA 2M BS", time2: "BIANCA/MARIANA/Mª VALENTINA 1M BS", data: "20/06/2026", hora: "10h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "10h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "20/06/2026", hora: "11h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "20/06/2026", hora: "11h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "20/06/2026", hora: "12h20min", quadra: "Quadra 11" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 13", time2: "VENCEDOR DO JOGO 14", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 11" }
    ]
  }
];



// ============================================================
// VÔLEI QUARTETO MISTO
// ============================================================
const voleiQuartetoMistoChaves = [
  {
    chave: "Chave C", equipes: 17, categoria: "6º e 7º ano", campo: "Quadras 01-04",
    jogos: [
      { codigo: "JOGO 01", time1: "ALICE,MªJÚLIA,DAVI,ANTÔNIO 6ºOLIMP 2 DT", time2: "ALAN/Mª EDUARDA/HELENA/MIGUEL 6M BS", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 02", time1: "6 ANO BEN", time2: "ANTONELA,LIVIA,PEDRO,RAFAEL 6ºAOLIMP2 DT", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 03", time1: "JOÃO VICTOR/ALICE/SAMUEL/SARA 7M BS", time2: "ISLE/LETÍCIA/LORENZO/LEVI - 6ºB/M/SUL", data: "20/06/2026", hora: "13h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 04", time1: "Mª CLARA,LIZ,GUILHERME,MÁRCIO 6ºBM DT", time2: "LIS/WILLIAM/MARIA LARA/CAUÃ 6M BS", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 05", time1: "SOFIA/GIOVANA/ARTHUR/LUCAS - 7ºO/M/SUL", time2: "SOFIA/SOPHIA/VINICIUS/LEONARDO 7M BS", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 06", time1: "Mª ALICE/MATHEUS/A. CLARA/LEONARDO 7M BS", time2: "MªISABELA, LARA,GABRIEL,RAFA 6ºBOLIMP2DT", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 07", time1: "MARIA,ISABELA,MÁRIO,BERNARDO 6ºOLIMP2DT", time2: "Mª EDUARDA/ISABELLE/PABLO/GABRIEL 6M BS", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 08", time1: "MILA/Mª EDUARDA/J.MARCOS/JOÃO LUIS 7M BS", time2: "Mª EDUARDA, LIA,CADU,ARTHUR 6ºOLIMP1DT", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 09", time1: "Mª SÁ,MªEDUARDA,BERNARDO,RODRIGO 6ºDT", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "20/06/2026", hora: "15h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "20/06/2026", hora: "15h20min", quadra: "Quadra 04" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "20/06/2026", hora: "16h00min", quadra: "Quadra 03" },
    ]
  },
  {
    chave: "Chave D", equipes: 23, categoria: "8º e 9º ano", campo: "Quadras 05-11",
    jogos: [
      { codigo: "JOGO 01", time1: "BERNARDO/ARTHUR/CECILIA/SARA 9M BS", time2: "BEATRIZ,LAIS,CAIK,CAIO QUART 8 ANO PQL", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 02", time1: "ALANA/Mª JÚLIA/IVES/LUCA - 8ºBMED/M/SUL", time2: "ANA MARIA,VALENTINA,JOÃO,LUCCA 9ºB DT", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 03", time1: "EDUARDA/LUIZ CARLOS/ISABELA/ARTHUR 8M BS", time2: "8 ANO BEN", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 04", time1: "JULIA,MªCECILIA,RAFAEL,MIGUEL 8ºMED12 DT", time2: "IANA/NARA/PEDRO H./PEDRO H. 8M BS", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 05", time1: "JOÃO LUIZ/ALICE/ARTHUR/OLIVIA 9M BS", time2: "GABRIEL,KAIQUE,SOPHIA,LETICIA 9 ANO PQL", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 06", time1: "Mª CLARA/ESTHER/ENZO/ROBERTO - 8ºA/M/SUL", time2: "LIVIA,MªEDUARDA,ENZO,MICHEL 9ºAM DT", data: "20/06/2026", hora: "12h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 07", time1: "MªCECILIA,HUDSON,MªALICE,RAFAEL8ºBMED DT", time2: "LIA/MARIA JULIA/SAMUEL/RENATO 8M BS", data: "20/06/2026", hora: "12h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 08", time1: "LOLA/MARINA/EDUARDO/ENRIQUE 8M BS", time2: "MARINA/LUIZA/THEO/CAUÃ - 8ºMED/M/SUL", data: "20/06/2026", hora: "12h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 09", time1: "MARINA,MARCELA,PEDRO E SAMUEL 9ANO PQL", time2: "MªEDUARDA,MªLAURA,LUCAS,FERNANDO 9ºA DT", data: "20/06/2026", hora: "12h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 10", time1: "MÁRCIO,ALICE,NATHALIA,JOÃO 8º MED DT", time2: "MILENA/LEVI/LETÍCIA/HEITOR 8M BS", data: "20/06/2026", hora: "12h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 11", time1: "SOFIA,ISABELLA,ISAAC,GABRIEL 8 ANO PQL", time2: "SOPHIA,MªALICE,PETRUS,DAVI 8ºAT DT", data: "20/06/2026", hora: "12h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 12", time1: "SOFIA DINIZ/ESTER/THIAGO/DAVI 8M BS", time2: "ISABELLA/ISABELA/BERNARDO/HENRIQUE 8M BS", data: "20/06/2026", hora: "12h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 09", time2: "VENCEDOR DO JOGO 10", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 11", time2: "VENCEDOR DO JOGO 12", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 13", time2: "VENCEDOR DO JOGO 14", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 15", time2: "VENCEDOR DO JOGO 16", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 17", time2: "VENCEDOR DO JOGO 18", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 19", time2: "VENCEDOR DO JOGO 20", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 07" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 21", time2: "VENCEDOR DO JOGO 22", data: "20/06/2026", hora: "15h20min", quadra: "Quadra 07" },
    ]
  },
  {
    chave: "Chave E", equipes: 25, categoria: "1ª e 2ª série", campo: "Quadras 06-11",
    jogos: [
      { codigo: "JOGO 01", time1: "ANA CLARA/ANA CLARA/RAFAEL/GABRIEL 1M BS", time2: "ÍSIS/MªCLARA/SAMUEL/THIAGO - 2ªB/M/SUL", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 02", time1: "F DE ASSIS, FELIPE, LINA E MANU 1 AM DT", time2: "CECILIA/J. PEDRO/LUÍS /Mª CECÍLIA 2M BS", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 03", time1: "DAVI/CATARINA/MARCOS/MARIANA 1M BS", time2: "ISABELA,JULIA,LEONARDO E MARCELO 2MED DT", data: "20/06/2026", hora: "13h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 04", time1: "LAIS ARAUJO, LUCAS,BRUNO E LAIS 2 MED DT", time2: "1/2 SERIE BEN", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 05", time1: "LETÍCIA/LARA/ENÍSIO/ARTHUR- 1ªBMED/M/SUL", time2: "DAVI/MARIA EDUARDA/MELISSA/PAULINO 2M BS", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 06", time1: "DÉBORA/JOAO PEDRO/VINICIUS/SARA 2M BS", time2: "LUIZ CARLOS,JOAO,LETICIA E SOFIA 2MED DT", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 07", time1: "LUIZ PEDRO, MILENA, SOPHIA E EDSON 1T DT", time2: "DAVI,BEATRIZ,KAREN,PEDRO 2 SERIE PQL", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 08", time1: "MARIA BEATRIZ, JOAO,LUCA E JULIA 2 M DT", time2: "FELIPE/LAILA/ANA JÚLIA/JOAO MIGUEL 2M BS", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 09", time1: "HENRIQUE/JOSÉ NICOLETTI/NOA/SOFIA 2M BS", time2: "MªCLARA/IVE/MIGUEL/KAUÃ - 2ªB/M/SUL", data: "20/06/2026", hora: "13h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 10", time1: "RAÍSSA,BERNARDO,ALICE,DALTON 1ªMED1 DT", time2: "JOÃO EMANUEL/ISADORA/SOFIA/LUCCA 2M BS", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 11", time1: "JOÃO RAMIRO/LUMA/ADAIL/SARA 2M BS", time2: "SOPHIA, LARA, JOSE E RAFAEL 1 BM DT", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 12", time1: "MªJÚLIA/JÚLIA/AZEVEDO/DAVI-1ªABMED/M/SUL", time2: "LEVI/EDUARDO/LIS AMÉLIA/CAROLINA 2M BS", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 13", time1: "LAÍS,PAULO,RAFAEL,ANA JULIA 1ªB DT", time2: "VENCEDOR DO JOGO 01", data: "20/06/2026", hora: "14h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "20/06/2026", hora: "14h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 16", time2: "VENCEDOR DO JOGO 17", data: "20/06/2026", hora: "14h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 18", time2: "VENCEDOR DO JOGO 19", data: "20/06/2026", hora: "15h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 23", time1: "VENCEDOR DO JOGO 20", time2: "VENCEDOR DO JOGO 21", data: "20/06/2026", hora: "15h20min", quadra: "Quadra 10" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 22", time2: "VENCEDOR DO JOGO 23", data: "20/06/2026", hora: "16h00min", quadra: "Quadra 09" },
    ]
  },
];



// ============================================================
// VÔLEI OPEN (Trio Feminino, Trio Masculino, Quarteto Misto)
// ============================================================
const voleiTrioFemininoOpenChaves = [
  {
    chave: "Open", equipes: 9, categoria: "Open", campo: "Quadras 10-11",
    jogos: [
      { codigo: "JOGO 01", time1: "TATIANA/FLÁVIA/PATRÍCIA", time2: "RAFAELLA/SARA/SUZANA", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 02", time1: "RENATA/VIRGÍNIA/SAMANTHA", time2: "DANIELA/TATIANA/RAQUEL", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 03", time1: "TACIANA/MARIA JOSÉ/CINTHIA", time2: "MARIANA/LIVIA/DANNIA", data: "21/06/2026", hora: "11h20min", quadra: "Quadra 11" },
      { codigo: "JOGO 04", time1: "DANIELA/LUCIANA/TAMYRES", time2: "CAROLINNE/VLÁDIA/DANIELA", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 05", time1: "THAIS/DEBORA/LICIA", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 11" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 10" },
    ]
  },
];

const voleiTrioMasculinoOpenChaves = [
  {
    chave: "Open", equipes: 8, categoria: "Open", campo: "Quadras 10-11",
    jogos: [
      { codigo: "JOGO 01", time1: "ADERSON/CANDIDO/GUSTAVO", time2: "FELIPE/PAULO CÉSAR/CÍCERO", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 02", time1: "JOSÉ ALUÍSIO/ÉDSON/FÚLVIO", time2: "DANILO/MANOELITO/NILO", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 03", time1: "JOSÉ EDSON/JOSÉ GERARDO/IGOR", time2: "FABIANO/RAPHAEL/ENÍSIO", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 04", time1: "SÁVIO/IVO/MARCELO", time2: "DENIS/CÁSSIO/BRÁULIO", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 05", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 10" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "21/06/2026", hora: "11h20min", quadra: "Quadra 10" },
    ]
  },
];

const voleiQuartetoMistoOpenChaves = [
  {
    chave: "Open", equipes: 9, categoria: "Open", campo: "Quadras 10-11",
    jogos: [
      { codigo: "JOGO 01", time1: "Winne/Rafaella/Onofre/Felipe", time2: "Laura/Carolinne/Nilo/Danilo", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 02", time1: "Virginia/Narian/Aderson/Diogo", time2: "Tatiana/Patrícia/Marcos James/Erick", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 11" },
      { codigo: "JOGO 03", time1: "Maria José/Taciana/José Aluísio/Fúlvio", time2: "Irineide/Frediane/Marcus/José Pereira", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 10" },
      { codigo: "JOGO 04", time1: "Jacqueline/Milena/Felipe/Ricardo", time2: "Rafaella/Natália/Savyo/Antonio Carlos", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 11" },
      { codigo: "JOGO 05", time1: "Tatiana/Daniela/André Luiz/Antonio Holanda", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 10" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 10" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 11" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 10" },
    ]
  },
];

// ============================================================
// FUTEBOL FEMININO
// ============================================================
const futebolFemininoChaves = [
  {
    chave: "Chave B", equipes: 2, categoria: "5º ano", campo: "Campo 01",
    jogos: [
      { codigo: "FINAL", time1: "5º ANO A (MANHÃ) - SUL", time2: "5º ANO C (MANHÃ) - SUL", data: "21/06/2026", hora: "09h45min", quadra: "Campo 01" },
    ]
  },
  {
    chave: "Chave C", equipes: 8, categoria: "6º e 7º ano", campo: "Campo 03",
    jogos: [
      { codigo: "JOGO 01", time1: "6ºAM DT", time2: "6 OLIMP/A BS", data: "20/06/2026", hora: "11h30min", quadra: "Campo 03" },
      { codigo: "JOGO 02", time1: "7 OLM1 BS", time2: "6º ANO A/B (MANHÃ) - SUL", data: "20/06/2026", hora: "12h05min", quadra: "Campo 03" },
      { codigo: "JOGO 03", time1: "6º ANO OLÍMPICO (MANHÃ) - SUL", time2: "6ºOLIMP1,OLIMP2 DT", data: "20/06/2026", hora: "12h40min", quadra: "Campo 03" },
      { codigo: "JOGO 04", time1: "7AM BS", time2: "7º B OLIMP1,2 DT", data: "20/06/2026", hora: "13h15min", quadra: "Campo 03" },
      { codigo: "JOGO 05", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "12h40min", quadra: "Campo 03" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "13h15min", quadra: "Campo 03" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "21/06/2026", hora: "14h25min", quadra: "Campo 03" },
    ]
  },
  {
    chave: "Chave D", equipes: 6, categoria: "8º e 9º ano", campo: "Campo 03",
    jogos: [
      { codigo: "JOGO 01", time1: "8º ANO MED (MANHÃ) - SUL", time2: "8 MED1/MED2/A BS", data: "20/06/2026", hora: "13h50min", quadra: "Campo 03" },
      { codigo: "JOGO 02", time1: "9ºBM DT", time2: "9º ANO A (MANHÃ) - SUL", data: "20/06/2026", hora: "14h25min", quadra: "Campo 03" },
      { codigo: "JOGO 03", time1: "9º ANO MED (MANHÃ) - SUL", time2: "9 MED1/MED2 BS", data: "20/06/2026", hora: "15h00min", quadra: "Campo 03" },
      { codigo: "JOGO 04", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "10h20min", quadra: "Campo 03" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "12h05min", quadra: "Campo 03" },
    ]
  },
  {
    chave: "Chave E", equipes: 11, categoria: "1ª e 2ª série", campo: "Campos 02-04",
    jogos: [
      { codigo: "JOGO 01", time1: "1 MED1/A BS", time2: "1ª SÉRIE A/B (MANHÃ) - SUL", data: "20/06/2026", hora: "13h50min", quadra: "Campo 04" },
      { codigo: "JOGO 02", time1: "1ªAM DT", time2: "2 BM BS", data: "20/06/2026", hora: "14h25min", quadra: "Campo 02" },
      { codigo: "JOGO 03", time1: "1ª SÉRIE MED (MANHÃ) - SUL", time2: "2ª MED1 DT", data: "20/06/2026", hora: "14h25min", quadra: "Campo 04" },
      { codigo: "JOGO 04", time1: "2ªBM DT", time2: "2ª SÉRIE A (MANHÃ) - SUL", data: "20/06/2026", hora: "15h00min", quadra: "Campo 02" },
      { codigo: "JOGO 05", time1: "2ª SÉRIE B (MANHÃ) - SUL", time2: "2 MED2 BS", data: "20/06/2026", hora: "15h00min", quadra: "Campo 04" },
      { codigo: "JOGO 06", time1: "2ª SÉRIE MED (MANHÃ) - SUL", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "10h55min", quadra: "Campo 03" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "12h05min", quadra: "Campo 04" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "13h15min", quadra: "Campo 03" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "13h15min", quadra: "Campo 04" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "14h25min", quadra: "Campo 04" },
    ]
  },
];

// ============================================================
// BEACH TENNIS OPEN (Feminino, Masculino, Misto)
// ============================================================
const beachTennisFemininoOpenChaves = [
  {
    chave: "Open", equipes: 7, categoria: "Open", campo: "Quadras 08-09",
    jogos: [
      { codigo: "JOGO 01", time1: "TIARA / PALLOMA", time2: "SOPHIA / FLÁVIA", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 02", time1: "JULIANA / MARINA", time2: "THÂNIA / ELIANA", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 03", time1: "VIRGÍNIA / JULIANA", time2: "SARA / CAROLINNE", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 04", time1: "TÁSSIA / ELIZETH", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 05", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 08" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 08" },
    ]
  },
];

const beachTennisMasculinoOpenChaves = [
  {
    chave: "Open", equipes: 13, categoria: "Open", campo: "Quadras 08-09",
    jogos: [
      { codigo: "JOGO 01", time1: "FCO GABRIEL / FCO EMANUEL", time2: "RICHELMY AZEVEDO / FERDINAND ANDRADE", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 02", time1: "GUSTAVO CAÇULA / RODRIGO PITA", time2: "PEDRO NUNES / PAULO MACIEL", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 03", time1: "ADERSON MACEDO / CÂNDIDO RIBEIRO", time2: "FCO EDMILSON / FCO EDMILSON FILHO", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 04", time1: "JOSÉ ALUÍSIO / DIOGO MORAES", time2: "DANIEL LIRA / RUBENS SILVEIRA", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 05", time1: "JOÃO RODRIGUES / TIAGO MONTEIRO", time2: "IGOR TAVARES / GENÉSIO DE SOUSA", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 06", time1: "MATHEUS GUERREIRO / ANDRÉ LUIZ", time2: "PEDRO DAVID / ERICK ARAÚJO", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 07", time1: "ALEXANDRE MARTINS / RODRIGO DA COSTA", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "14h00min", quadra: "Quadra 09" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 09" },
    ]
  },
];

const beachTennisMistoOpenChaves = [
  {
    chave: "Open", equipes: 9, categoria: "Open", campo: "Quadras 08-09",
    jogos: [
      { codigo: "JOGO 01", time1: "ARTHUR RIBEIRO / MARINA SILVEIRA", time2: "DÉBORA FERREIRA / HENRIQUE FERREIRA", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 02", time1: "SARA AZEVEDO / JOEL LOBO", time2: "MARIANE / JOSÉ FILHO", data: "21/06/2026", hora: "15h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 03", time1: "MILENA ALVES / MARCOS AURÉLIO", time2: "PAULO CÉSAR / LAÍS RÉGIS", data: "21/06/2026", hora: "15h00min", quadra: "Quadra 09" },
      { codigo: "JOGO 04", time1: "JÚLIA ALVES / FERDINAND ANDRADE", time2: "MARIA BEATRIZ / ANTONIO HOLANDA", data: "21/06/2026", hora: "15h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 05", time1: "TÁSSIA GOMES / FCO JOSÉ", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "15h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "15h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "15h40min", quadra: "Quadra 09" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "16h00min", quadra: "Quadra 09" },
    ]
  },
];

// ============================================================
// BEACH TENNIS MASCULINO (escolar)
// ============================================================
const beachTennisMasculinoChaves = [
  {
    chave: "Chave B", equipes: 10, categoria: "5º ano", campo: "Quadras 01-02",
    jogos: [
      { codigo: "JOGO 01", time1: "ÁLVARO E FERNANDO 5ºCM DT", time2: "JOÃO PEDRO/RODRIGO AUGUSTO 5AM BS", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 02", time1: "JOAO LUCAS E ENZO GABRIEL 5 ANO PQL", time2: "ANDRÉ E ARTHUR 5ºADM DT", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 03", time1: "ARTUR E PAULO 5ºAM DT", time2: "IGOR E ÍCARO - 5ºC/M/SUL", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 04", time1: "LUCA PIZZIRUSSO/JOSÉ GABRIEL 5AM BS", time2: "JOÃO LUCAS E OTÁVIO 5ºCM DT", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 05", time1: "PEDRO E GUSTAVO 5ºBM DT", time2: "TIAGO E ANTº BERNARDO 5ºEM DT", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 02" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "21/06/2026", hora: "09h00min", quadra: "Quadra 01" },
    ]
  },
  {
    chave: "Chave C", equipes: 15, categoria: "6º e 7º ano", campo: "Quadras 03-06",
    jogos: [
      { codigo: "JOGO 01", time1: "ALAN KAZUO/ARTUR TAVARES 6O2M BS", time2: "BERNARDO E CADU 6ºOLIMP1 DT", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 02", time1: "6 ANO BEN", time2: "BERNARDO VIEIRA/GUSTAVO BORGES 7O1M BS", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 03", time1: "JOÃO GUILHERME/RENO CIARLINI 6BM BS", time2: "JOÃO LUCAS E FELIPE - 6ºOLÍMPICO/M/SUL", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 04", time1: "DAVI MOTA E MATEUS 7 OLI 1 DT", time2: "JOÃO VICTOR/SAMUEL COLARES 702M BS", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 05", time1: "LEONARDO VICTOR/CAIO CASTELO 7O1 BS", time2: "MÁRCIO E JOÃO RAFAEL 6ºBM DT", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 06", time1: "MATHEUS E GABRIEL 6ºOLIMP2 DT", time2: "MATHEUS PINHEIRO/LEONARDO PORTO 702M BS", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 07", time1: "PEDRO IGOR/DAVI DE FREITAS 6O2M BS", time2: "PEDRO JORGE E HENRIQUE 7 OLI 1 DT", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 08", time1: "VINICIUS MOURÃO/MATHEUS ABREU 7O1M BS", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "15h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 09", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "15h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "15h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "15h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "15h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "15h40min", quadra: "Quadra 04" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "16h00min", quadra: "Quadra 03" },
    ]
  },
  {
    chave: "Chave D", equipes: 17, categoria: "8º e 9º ano", campo: "Quadras 05-08",
    jogos: [
      { codigo: "JOGO 01", time1: "ALEX KENZO/LUCAS AGUIAR 9M1M BS", time2: "BENJAMIN E DAVI 9 MED1 DT", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 02", time1: "LEVI E NÍCOLAS - 9ºMED/M/SUL", time2: "ARTHUR FRANCISCO/LUIS CARLOS 8M2M BS", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 03", time1: "DAVI QUEZADA E JOSE 8 BM DT", time2: "BERNARDO PATRICIO/ARTHUR PATRICIO 9M BS", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 04", time1: "BRUNO LIMA/JOÃO LUIZ 9M1M BS", time2: "SAMUEL E PEDRO LEITE - 9ºA/M/SUL", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 05", time1: "DAVI FREIRE/GUSTAVO NÓBREGA 9M2M BS", time2: "LEONARDO E JOSE HUDSON 8BM DT", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 06", time1: "SAMUEL MALVEIRA E LUCAS - 9ºAB/M/SUL", time2: "JOAQUIM ROLIM/ARTHUR RIBEIRO 9M1M BS", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 07", time1: "JOSÉ AIRTON/IGOR MARTINS 9BM BS", time2: "LUCCA E JOAO HENRIQUE 8BM DT", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 08", time1: "MIGUEL ELPIDIO E RAFAEL 8 MED1 DT", time2: "RAFAEL FREITAS/MATHEUS FRANÇA 9BM BS", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 09", time1: "VITOR FROTA/PEDRO HENRIQUE 8M1M BS", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 05" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 05" },
    ]
  },
  {
    chave: "Chave E", equipes: 16, categoria: "1ª e 2ª série", campo: "Quadras 06-09",
    jogos: [
      { codigo: "JOGO 01", time1: "DIEGO E LEONARDO 2ªAMED DT", time2: "DAVI SAMPAIO/MARCOS AURELIO 1M1M BS", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 02", time1: "BENONE E DIOGO - 2ªA/M/SUL", time2: "JOÃO E LUIZ CARLOS 2ªMED DT", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 03", time1: "FELIPE LEAL/LÉO COUTINHO 1M2M BS", time2: "CAUÃ E PEDRO - 2ªA/M/SUL", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 04", time1: "JOÃO VICTOR E MATHEUS 2ªBMED DT", time2: "GABRIEL MONTEIRO/GABRIEL DIAS 1AM BS", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 09" },
      { codigo: "JOGO 05", time1: "J.EMANUEL/GUILHERME GRANGEIRO 2ITA/IM BS", time2: "JOSE NEWTON E HENRIQUE 1 MED2 DT", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 06", time1: "MARCELO E IURI 2ªMED DT", time2: "JOÃO ALEXANDRINO/MURILO PINHEIRO 1M1M BS", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 07", time1: "RAFAEL E FCO DE ASSIS 1 AM DT", time2: "MIGUEL E LUIS EDUARDO - 2ªB/M/SUL", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 08", time1: "SALOMAO LAUREANO/GILVAN DAVID 1BM BS", time2: "VICTOR E LUCAS VELOSO 2ªMED DT", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 09" },
      { codigo: "JOGO 09", time1: "FRANCISCO EDMILSON/ANTÔNIO MARCELO 1M BS", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "14h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 10", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "14h00min", quadra: "Quadra 08" },
      { codigo: "JOGO 11", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 12", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 08" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 08" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "15h00min", quadra: "Quadra 07" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "15h20min", quadra: "Quadra 07" },
    ]
  },
];

// ============================================================
// BEACH TENNIS FEMININO (escolar)
// ============================================================
const beachTennisFemininoChaves = [
  {
    chave: "Chave B", equipes: 10, categoria: "5º ano", campo: "Quadras 03-04",
    jogos: [
      { codigo: "JOGO 01", time1: "LARA E HELOISA 5ºAM DT", time2: "LAÍS MORAIS E Mª GIOVANNA - 5ºC/M/SUL", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 02", time1: "Mª VALENTINA E Mª SOPHIA 5ºBM DT", time2: "ANA LIS/BRUNA PINHEIRO 5BM BS", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 03", time1: "LÍVIA E Mª ALICE - 5ºA/M/SUL", time2: "PIETRA E ALICE 5ºBDM DT", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 04", time1: "LAURA POMPEU/ANA MARINA 5CM BS", time2: "SOFIA E ISADORA 5ºAT DT", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 05", time1: "SOFIA E SARA 5ºCM DT", time2: "Mª FERNANDA E Mª LUISA - 5º AB/M/SUL", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 06", time1: "VENCEDOR DO JOGO 01", time2: "VENCEDOR DO JOGO 02", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 07", time1: "VENCEDOR DO JOGO 03", time2: "VENCEDOR DO JOGO 04", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 08", time1: "VENCEDOR DO JOGO 05", time2: "VENCEDOR DO JOGO 06", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 04" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 07", time2: "VENCEDOR DO JOGO 08", data: "21/06/2026", hora: "09h00min", quadra: "Quadra 03" },
    ]
  },
  {
    chave: "Chave C", equipes: 29, categoria: "6º e 7º ano", campo: "Quadras 05-07",
    jogos: [
      { codigo: "JOGO 01", time1: "ALICE E ISABELA 6ºCM DT", time2: "GABRIELA E CECÍLIA - 7ºB/M/SUL", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 02", time1: "BEATRIZ MARIA/ANJA HOLANDA 7O1M BS", time2: "ALICIA E MARINA 7 OLIM 1 E 2 DT", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 03", time1: "CAROLINA E BEATRICE 6ºAM DT", time2: "GIOVANNA E LARA - 6ºOLIMPICO/M/SUL", data: "21/06/2026", hora: "07h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 04", time1: "ISLE E LETÍCIA - 7ºB/M/SUL", time2: "ESTHER FARIAS/MARINA BORGES 6AM BS", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 05", time1: "GIOVANA MARIA/LETICIA NERY 6AM BS", time2: "CECILIA GOMES E VALENTINA 7 OLI 2 DT", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 06", time1: "GIOVANA TRINDADE E MARIA 7 A E OLIM 2 DT", time2: "ISABELA CARDOSO/LETICIA ALVES 7O2M BS", data: "21/06/2026", hora: "08h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 07", time1: "JULIA WERTHER/ISABELA DE SABOIA 7O2M BS", time2: "LIA E MARINA - 7ºOLÍMPICO/M/SUL", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 08", time1: "LIVIA TAVARES/MARIA TEREZA 7BM BS", time2: "ISABELA E BEATRIZ 6ºBDM DT", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 09", time1: "LÍDIA E ISABELA - 7ºOLÍMPICO/M/SUL", time2: "LÍVIA/MARIA EDUARDA 7M BS", data: "21/06/2026", hora: "08h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 10", time1: "LIVIA E BEATRIZ 6ºAM DT", time2: "Mª ALICE E Mª VITÓRIA - 7ºA/M/SUL", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 11", time1: "Mª FERNANDA E BEATRIZ - 6ºA/M/SUL", time2: "MªEDUARDA E GABRIELA 6ºOLIMP1 DT", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 12", time1: "MªJÚLIA E ANTONELA 6ºAOLIMP2 DT", time2: "Mª JÚLIA E Mª BEZERRA - 7ºAOLIMP/M/SUL", data: "21/06/2026", hora: "08h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 13", time1: "MARINA CITÓ /BEATRIZ DA SILVA 7BM BS", time2: "MARIA BEATRIZ E CECILIA 7 OLI 2 DT", data: "21/06/2026", hora: "09h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 14", time1: "MARIA SOFIA E ANA CLARA 7 OLI 1 DT", time2: "MARINNA E Mª ESTHER - 7ºA/M/SUL", data: "21/06/2026", hora: "09h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 15", time1: "NANDA E VICTÓTIA 6ºAM DT", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "09h00min", quadra: "Quadra 07" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 07" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 06" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 07" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 05" },
      { codigo: "JOGO 23", time1: "VENCEDOR DO JOGO 16", time2: "VENCEDOR DO JOGO 17", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 06" },
      { codigo: "JOGO 24", time1: "VENCEDOR DO JOGO 18", time2: "VENCEDOR DO JOGO 19", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 05" },
      { codigo: "JOGO 25", time1: "VENCEDOR DO JOGO 20", time2: "VENCEDOR DO JOGO 21", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 06" },
      { codigo: "JOGO 26", time1: "VENCEDOR DO JOGO 22", time2: "VENCEDOR DO JOGO 23", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 05" },
      { codigo: "JOGO 27", time1: "VENCEDOR DO JOGO 24", time2: "VENCEDOR DO JOGO 25", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 06" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 26", time2: "VENCEDOR DO JOGO 27", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 05" },
    ]
  },
  {
    chave: "Chave D", equipes: 23, categoria: "8º e 9º ano", campo: "Quadras 01-04",
    jogos: [
      { codigo: "JOGO 01", time1: "ALICE QUENTAL/OLIVIA PINHEIRO 9M2M BS", time2: "ALESSA E MELINA 8 AM DT", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 02", time1: "ANA VIRGINIA/SOFIA DINIZ 8M2M BS", time2: "ALANA E LÍVIA - 8ºMED/M/SUL", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 03", time1: "BEATRIZ E MARIA ALICE 8 A MED1 DT", time2: "BIANCA XIMENES/LUNA EVANGELISTA 8M2M BS", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 04", time1: "JULIA,LIS 8 ANO BT FEMININO PQL", time2: "LARA E MARIA QUEZADA 8 A MED2 DT", data: "21/06/2026", hora: "12h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 05", time1: "CECILIA ROMÃO/ANA MARIA 9M2M BS", time2: "GIOVANA E Mª LETÍCIA - 9ºB/M/SUL", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 06", time1: "LIS E MARIA CECILIA 8 MED1 DT", time2: "CLARISSE DE FREITAS/ISABELA 9M2M BS", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 07", time1: "ESTER MOREIRA /ALICIA TURBAY 8M1M BS", time2: "MARIA CLARA E MARIA CECILIA 8 M1 E 2 DT", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 08", time1: "MARIA EDUARDA E ALICE 8 MED1 DT", time2: "MARIA JULIA/LIA TAVRES 8M2M BS", data: "21/06/2026", hora: "13h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 09", time1: "MARIA LUIZA /MARÍLIA CARVALHO 9M2M BS", time2: "JÚLIA E CECÍLIA - 9ºMED/M/SUL", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 10", time1: "MARIANNA E THAÍS - 8ºMED/M/SUL", time2: "MELYSSA/ALICE 9M BS", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 11", time1: "NARA ANTONIA/JÚLIA MESQUITA 8AM BS", time2: "MARIA SOPHIA E VALLENTYNNE 9 AB DT", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 12", time1: "RAPHAELLA YASMIN/LORENA ABREU 9M1M BS", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "13h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 13", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 14", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 15", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "13h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 16", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "14h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 17", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "14h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 18", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "14h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 16", time2: "VENCEDOR DO JOGO 17", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 18", time2: "VENCEDOR DO JOGO 19", data: "21/06/2026", hora: "14h40min", quadra: "Quadra 02" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 20", time2: "VENCEDOR DO JOGO 21", data: "21/06/2026", hora: "15h00min", quadra: "Quadra 01" },
    ]
  },
  {
    chave: "Chave E", equipes: 35, categoria: "1ª e 2ª série", campo: "Quadras 01-04",
    jogos: [
      { codigo: "JOGO 01", time1: "ANA CLARA/MARIA BEATRIZ 1AM BS", time2: "BEATRIZ RODRIGUES E LUIZA 2 MED1 DT", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 02", time1: "GIOVANNA E MARINA - 1ªA/M/SUL", time2: "ANA SOPHIA/MIRIAM MARIA 1M1M BS", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 03", time1: "CATARINA SANTIAGO/MARIA SOFIA 1M2M BS", time2: "ISABELLY E LAIS COSTA 2 MED DT", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 04", time1: "ISABELLA E SOPHIA - 2ªA/M/SUL", time2: "DÉBORA FERREIRA/LAILA MARQUES 2M BS", data: "21/06/2026", hora: "09h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 05", time1: "GABRIELA RIOS/JÚLIA MIRANDA 2BM BS", time2: "JULIA ALVES E MARIA BEATRIZ 2 AB DT", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 06", time1: "ÍSIS E Mª CLARA - 1ªB/M/SUL", time2: "ISABELA LISBOA/MARIA LUIZA 2BM BS", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 07", time1: "JULIA LIMA/JULIANA FERREIRA 2BM BS", time2: "LAIS E ISABELA 1 B/MED2 DT", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 08", time1: "IVE E LETÍCIA - 2ªB/M/SUL", time2: "LARA MELO/MARIA LAÍS 1M1M BS", data: "21/06/2026", hora: "09h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 09", time1: "LUIZA MELO/BEATRIZ SOUSA 2AM BS", time2: "MARIA BEATRIZ E SOPHIA 1 BM DT", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 10", time1: "JÚLIA E Mª LUIZA - 1ªA/M/SUL", time2: "MARIA ISABELA E JULIA 2 MED DT", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 11", time1: "MARIA CECÍLIA/CECÍLIA ROCHA 2M2M BS", time2: "JÚLIA JEREISSATI E Mª LUIZA - 2B/M/SUL", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 12", time1: "MARIA TERESA E CAROLINNE 1 AM DT", time2: "LETÍCIA E JÚLIA - 1ªMED/M/SUL", data: "21/06/2026", hora: "10h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 13", time1: "MARIANE E MARIA BEATRIZ 1 MED1 DT", time2: "MARIA EDUARDA/MELISSA ALMEIDA 2BM BS", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 14", time1: "LUANA E Mª CLARA - 1ªAB/M/SUL", time2: "RAFAELA E REBECA 2 BM DT", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 15", time1: "NOA LINS/SOFIA CARVALHO 2BM BS", time2: "Mª EDUARDA E JÚLIA - 1ªMED/M/SUL", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 16", time1: "SARAH E MARINA 1 BM DT", time2: "YASMIN FEITOSA/VALENTINA 2M2M BS", data: "21/06/2026", hora: "10h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 17", time1: "MELISSA E Mª RITA - 1ªB/M/SUL", time2: "SOFIA BRAGA E LETICIA 2 MED DT", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 18", time1: "JOANA/MARIA JULIA 2M BS", time2: "VENCEDOR DO JOGO 01", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 19", time1: "VENCEDOR DO JOGO 02", time2: "VENCEDOR DO JOGO 03", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 20", time1: "VENCEDOR DO JOGO 04", time2: "VENCEDOR DO JOGO 05", data: "21/06/2026", hora: "10h40min", quadra: "Quadra 04" },
      { codigo: "JOGO 21", time1: "VENCEDOR DO JOGO 06", time2: "VENCEDOR DO JOGO 07", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 22", time1: "VENCEDOR DO JOGO 08", time2: "VENCEDOR DO JOGO 09", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 02" },
      { codigo: "JOGO 23", time1: "VENCEDOR DO JOGO 10", time2: "VENCEDOR DO JOGO 11", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 03" },
      { codigo: "JOGO 24", time1: "VENCEDOR DO JOGO 12", time2: "VENCEDOR DO JOGO 13", data: "21/06/2026", hora: "11h00min", quadra: "Quadra 04" },
      { codigo: "JOGO 25", time1: "VENCEDOR DO JOGO 14", time2: "VENCEDOR DO JOGO 15", data: "21/06/2026", hora: "11h20min", quadra: "Quadra 01" },
      { codigo: "JOGO 26", time1: "VENCEDOR DO JOGO 16", time2: "VENCEDOR DO JOGO 17", data: "21/06/2026", hora: "11h20min", quadra: "Quadra 02" },
      { codigo: "JOGO 27", time1: "VENCEDOR DO JOGO 18", time2: "VENCEDOR DO JOGO 19", data: "21/06/2026", hora: "11h20min", quadra: "Quadra 03" },
      { codigo: "JOGO 28", time1: "VENCEDOR DO JOGO 20", time2: "VENCEDOR DO JOGO 21", data: "21/06/2026", hora: "11h20min", quadra: "Quadra 04" },
      { codigo: "JOGO 29", time1: "VENCEDOR DO JOGO 22", time2: "VENCEDOR DO JOGO 23", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 01" },
      { codigo: "JOGO 30", time1: "VENCEDOR DO JOGO 24", time2: "VENCEDOR DO JOGO 25", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 02" },
      { codigo: "JOGO 31", time1: "VENCEDOR DO JOGO 26", time2: "VENCEDOR DO JOGO 27", data: "21/06/2026", hora: "11h40min", quadra: "Quadra 03" },
      { codigo: "JOGO 32", time1: "VENCEDOR DO JOGO 28", time2: "VENCEDOR DO JOGO 29", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 01" },
      { codigo: "JOGO 33", time1: "VENCEDOR DO JOGO 30", time2: "VENCEDOR DO JOGO 31", data: "21/06/2026", hora: "12h00min", quadra: "Quadra 02" },
      { codigo: "FINAL", time1: "VENCEDOR DO JOGO 32", time2: "VENCEDOR DO JOGO 33", data: "21/06/2026", hora: "12h20min", quadra: "Quadra 01" },
    ]
  },
];

// HELPERS
// ============================================================
function flattenGames(chaves, modalidade) {
  const out = [];
  chaves.forEach((c) => {
    c.jogos.forEach((j) => {
      out.push({
        id: `${modalidade}-${c.chave}-${j.codigo}`,
        modalidade,
        chave: c.chave,
        categoria: c.categoria,
        campoDefault: c.campo,
        ...j,
        campo: j.quadra || c.campo
      });
    });
  });
  return out;
}

const ALL_FUTEBOL_MASC = flattenGames(futebolMasculinoChaves, "futebolMasc");
const ALL_FUTEBOL_FEM = flattenGames(futebolFemininoChaves, "futebolFem");

// Vôlei escolar: apenas as tabelas regulares, sem as tabelas Open.
const ALL_VOLEI_TRIO_MASC = flattenGames(voleiTrioMasculinoChaves, "voleiTrioMasc");
const ALL_VOLEI_TRIO_FEM = flattenGames(voleiTrioFemininoChaves, "voleiTrioFem");
const ALL_VOLEI_QUARTETO_MISTO = flattenGames(voleiQuartetoMistoChaves, "voleiQuartetoMisto");

// Vôlei Open: exibido como seção própria, com as três tabelas separadas por gênero.
const ALL_VOLEI_OPEN_MASC = flattenGames(voleiTrioMasculinoOpenChaves, "voleiOpenMasc");
const ALL_VOLEI_OPEN_FEM = flattenGames(voleiTrioFemininoOpenChaves, "voleiOpenFem");
const ALL_VOLEI_OPEN_MISTO = flattenGames(voleiQuartetoMistoOpenChaves, "voleiOpenMisto");

// Beach Tennis escolar: apenas as tabelas regulares, sem as tabelas Open.
const ALL_BEACH_TENNIS_MASC = flattenGames(beachTennisMasculinoChaves, "beachTennisMasc");
const ALL_BEACH_TENNIS_FEM = flattenGames(beachTennisFemininoChaves, "beachTennisFem");

// Beach Tennis Open: exibido como seção própria, com as três tabelas separadas por gênero.
const ALL_BEACH_TENNIS_OPEN_MASC = flattenGames(beachTennisMasculinoOpenChaves, "beachTennisOpenMasc");
const ALL_BEACH_TENNIS_OPEN_FEM = flattenGames(beachTennisFemininoOpenChaves, "beachTennisOpenFem");
const ALL_BEACH_TENNIS_OPEN_MISTO = flattenGames(beachTennisMistoOpenChaves, "beachTennisOpenMisto");

const ALL_GAMES = [
  ...ALL_FUTEBOL_MASC,
  ...ALL_FUTEBOL_FEM,
  ...ALL_VOLEI_TRIO_MASC,
  ...ALL_VOLEI_TRIO_FEM,
  ...ALL_VOLEI_QUARTETO_MISTO,
  ...ALL_VOLEI_OPEN_MASC,
  ...ALL_VOLEI_OPEN_FEM,
  ...ALL_VOLEI_OPEN_MISTO,
  ...ALL_BEACH_TENNIS_MASC,
  ...ALL_BEACH_TENNIS_FEM,
  ...ALL_BEACH_TENNIS_OPEN_MASC,
  ...ALL_BEACH_TENNIS_OPEN_FEM,
  ...ALL_BEACH_TENNIS_OPEN_MISTO,
];

// Config central das modalidades — usado pela navegação hierárquica Esporte > Gênero.
const MODALIDADES = [
  { key: "futebolMasc", esporte: "Futebol", genero: "Masculino", label: "Futebol Masculino", icon: "⚽", dataset: ALL_FUTEBOL_MASC, corAtiva: "fieldMid" },
  { key: "futebolFem", esporte: "Futebol", genero: "Feminino", label: "Futebol Feminino", icon: "⚽", dataset: ALL_FUTEBOL_FEM, corAtiva: "red" },

  { key: "voleiTrioMasc", esporte: "Vôlei", genero: "Masculino", label: "Vôlei Trio Masculino", icon: "🏐", dataset: ALL_VOLEI_TRIO_MASC, corAtiva: "gold" },
  { key: "voleiTrioFem", esporte: "Vôlei", genero: "Feminino", label: "Vôlei Trio Feminino", icon: "🏐", dataset: ALL_VOLEI_TRIO_FEM, corAtiva: "gold" },
  { key: "voleiQuartetoMisto", esporte: "Vôlei", genero: "Misto", label: "Vôlei Quarteto Misto", icon: "🏐", dataset: ALL_VOLEI_QUARTETO_MISTO, corAtiva: "gold" },

  { key: "voleiOpenMasc", esporte: "Vôlei Open", genero: "Masculino", label: "Vôlei Open Masculino", icon: "🏐", dataset: ALL_VOLEI_OPEN_MASC, corAtiva: "gold" },
  { key: "voleiOpenFem", esporte: "Vôlei Open", genero: "Feminino", label: "Vôlei Open Feminino", icon: "🏐", dataset: ALL_VOLEI_OPEN_FEM, corAtiva: "red" },
  { key: "voleiOpenMisto", esporte: "Vôlei Open", genero: "Misto", label: "Vôlei Open Misto", icon: "🏐", dataset: ALL_VOLEI_OPEN_MISTO, corAtiva: "fieldMid" },

  { key: "beachTennisMasc", esporte: "Beach Tennis", genero: "Masculino", label: "Beach Tennis Masculino", icon: "🎾", dataset: ALL_BEACH_TENNIS_MASC, corAtiva: "fieldMid" },
  { key: "beachTennisFem", esporte: "Beach Tennis", genero: "Feminino", label: "Beach Tennis Feminino", icon: "🎾", dataset: ALL_BEACH_TENNIS_FEM, corAtiva: "red" },

  { key: "beachTennisOpenMasc", esporte: "Beach Tennis Open", genero: "Masculino", label: "Beach Tennis Open Masculino", icon: "🎾", dataset: ALL_BEACH_TENNIS_OPEN_MASC, corAtiva: "fieldMid" },
  { key: "beachTennisOpenFem", esporte: "Beach Tennis Open", genero: "Feminino", label: "Beach Tennis Open Feminino", icon: "🎾", dataset: ALL_BEACH_TENNIS_OPEN_FEM, corAtiva: "red" },
  { key: "beachTennisOpenMisto", esporte: "Beach Tennis Open", genero: "Misto", label: "Beach Tennis Open Misto", icon: "🎾", dataset: ALL_BEACH_TENNIS_OPEN_MISTO, corAtiva: "gold" },
];

function datasetFor(modalidadeKey) {
  const m = MODALIDADES.find((m) => m.key === modalidadeKey);
  return m ? m.dataset : [];
}

function iconFor(modalidadeKey) {
  const m = MODALIDADES.find((m) => m.key === modalidadeKey);
  return m ? m.icon : "🏆";
}

function labelFor(modalidadeKey) {
  const m = MODALIDADES.find((m) => m.key === modalidadeKey);
  return m ? m.label : modalidadeKey;
}

function isTBD(name) {
  return /^VENCEDOR DO JOGO/i.test((name || "").trim());
}

// Extrai o código do jogo referenciado por um placeholder "VENCEDOR DO JOGO 01"
function refCodigo(placeholder) {
  const m = (placeholder || "").match(/VENCEDOR DO JOGO\s*0*(\d+)/i);
  if (!m) return null;
  const num = m[1].padStart(2, "0");
  return `JOGO ${num}`;
}

function parseDataHora(data, hora) {
  // data: DD/MM/AAAA, hora: "08h00min"
  const [d, mo, y] = data.split("/").map(Number);
  const hm = hora.match(/(\d+)h(\d+)/);
  const h = hm ? Number(hm[1]) : 0;
  const mi = hm ? Number(hm[2]) : 0;
  return new Date(y, mo - 1, d, h, mi, 0);
}

function gameDuration() {
  return 35 * 60 * 1000; // 35 min estimado por partida
}

// Resolve nomes de exibição aplicando propagação de vencedores dentro de uma chave+modalidade
function resolveNames(games, resultados) {
  // mapa codigo -> jogo, por chave+modalidade
  const byKey = new Map();
  games.forEach((g) => {
    const k = `${g.modalidade}::${g.chave}`;
    if (!byKey.has(k)) byKey.set(k, new Map());
    byKey.get(k).set(g.codigo, g);
  });

  function resolveOne(g, depth) {
    if (depth > 12) return { time1: g.time1, time2: g.time2 };
    const resolveSide = (name) => {
      if (!isTBD(name)) return name;
      const refCode = refCodigo(name);
      if (!refCode) return name;
      const key = `${g.modalidade}::${g.chave}`;
      const refGame = byKey.get(key)?.get(refCode);
      if (!refGame) return name;
      const refResult = resultados[refGame.id];
      if (!refResult) return name; // ainda não decidido
      const refResolved = resolveOne(refGame, depth + 1);
      return refResolved[refResult];
    };
    return { time1: resolveSide(g.time1), time2: resolveSide(g.time2) };
  }

  return games.map((g) => {
    const resolved = resolveOne(g, 0);
    return {
      ...g,
      time1Display: resolved.time1,
      time2Display: resolved.time2,
      time1Tbd: isTBD(resolved.time1),
      time2Tbd: isTBD(resolved.time2)
    };
  });
}



const ESPORTES = [...new Set(MODALIDADES.map((m) => m.esporte))];
const GENEROS_ORDEM = ["Masculino", "Feminino", "Misto"];

window.FESTIVAL_DATA = {
  ALL_GAMES,
  MODALIDADES,
  ESPORTES,
  GENEROS_ORDEM,
  datasetFor,
  iconFor,
  labelFor,
  isTBD,
  refCodigo,
  parseDataHora,
  gameDuration,
  resolveNames
};

})();
