const state = {
  plateConfig:     null,
  drugBreakpoints: {},
  uncertainDrugs:  new Set(),
  sampleId:        '',
  date:            new Date().toISOString().slice(0, 10),
  hasResults:      false,
  resultsDirty:    false,
};

const el = id => document.getElementById(id);

function init() {
  const sel = el('plate-select');
  for (const p of PLATE_REGISTRY) {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    sel.appendChild(opt);
  }

  el('date-input').value = state.date;

  loadPlate(PLATE_REGISTRY[0].id);

  el('sample-id').focus();

  sel.addEventListener('change', e => loadPlate(e.target.value));
  el('sample-id').addEventListener('input',  e => { state.sampleId = e.target.value.trim(); });
  el('date-input').addEventListener('change', e => { state.date = e.target.value; });

  el('reset-btn').addEventListener('click', () => {
    state.drugBreakpoints = {};
    state.uncertainDrugs  = new Set();
    state.sampleId        = '';
    el('sample-id').value = '';
    refreshGrid();
    clearResults();
    el('sample-id').focus();
  });

  el('show-results-btn').addEventListener('click', showResults);
  el('update-btn').addEventListener('click', showResults);
  el('print-btn').addEventListener('click', () => window.print());
}

function loadPlate(plateId) {
  const config = PLATE_DATA[plateId];
  state.plateConfig     = config;
  state.drugBreakpoints = {};
  state.uncertainDrugs  = new Set();

  el('plate-name').textContent = config.name;
  el('direction-label').textContent =
    config.plateType === 1 ? '→ concentration increases left to right' :
    config.plateType === 2 ? '← concentration increases right to left' :
                             '↕ mixed layout';

  refreshGrid();
  clearResults();
}

function refreshGrid() {
  renderGrid(el('grid'), state.plateConfig, state.drugBreakpoints, state.uncertainDrugs, handleWellClick);
}

function handleWellClick(drugId, concentration) {
  const current    = state.drugBreakpoints[drugId] ?? null;
  const uncertain  = state.uncertainDrugs.has(drugId);

  if (current === concentration) {
    if (!uncertain) {
      state.uncertainDrugs.add(drugId);
    } else {
      state.drugBreakpoints[drugId] = null;
      state.uncertainDrugs.delete(drugId);
    }
  } else {
    state.drugBreakpoints[drugId] = concentration;
    state.uncertainDrugs.delete(drugId);
  }
  if (state.hasResults && !state.resultsDirty) {
    state.resultsDirty = true;
    el('update-bar').hidden = false;
  }
  refreshGrid();
}

function showResults() {
  const mics = calculateAllMICs(state.plateConfig, state.drugBreakpoints);
  renderResults(el('results-container'), mics, state.uncertainDrugs);
  el('print-btn').hidden        = false;
  el('update-bar').hidden       = true;
  el('show-results-btn').hidden = true;
  state.hasResults   = true;
  state.resultsDirty = false;
}

function clearResults() {
  el('results-container').innerHTML =
    '<div class="results-empty">Mark wells on the plate,<br>then press <strong>Show Results</strong>.</div>';
  el('print-btn').hidden        = true;
  el('update-bar').hidden       = true;
  el('show-results-btn').hidden = false;
  state.hasResults   = false;
  state.resultsDirty = false;
}

init();
