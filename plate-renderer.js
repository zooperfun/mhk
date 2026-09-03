const ROW_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function buildCellMap(plateConfig) {
  const map = Array.from({ length: plateConfig.rows }, () =>
    Array(plateConfig.cols).fill(null)
  );

  plateConfig.drugs.forEach((drug, drugIndex) => {
    for (const well of drug.wells) {
      map[well.row][well.col] = { type: 'well', drug, well, drugIndex };
    }
  });

  for (const ctrl of plateConfig.controls) {
    map[ctrl.row][ctrl.col] = { type: 'control', ctrl };
  }

  return map;
}

function renderGrid(container, plateConfig, drugBreakpoints, uncertainDrugs, onWellClick) {
  const cellMap = buildCellMap(plateConfig);

  // Precompute well-position sets per drug for group border classes
  const drugWellSets = {};
  for (const drug of plateConfig.drugs) {
    drugWellSets[drug.id] = new Set(drug.wells.map(w => `${w.row},${w.col}`));
  }

  const grid = document.createElement('div');
  grid.className = 'plate-grid';

  // Corner + column headers
  const corner = document.createElement('div');
  corner.className = 'cell-corner';
  grid.appendChild(corner);

  for (let c = 0; c < plateConfig.cols; c++) {
    const hdr = document.createElement('div');
    hdr.className = 'cell-col-hdr';
    hdr.textContent = c + 1;
    grid.appendChild(hdr);
  }

  // Rows
  for (let r = 0; r < plateConfig.rows; r++) {
    const lbl = document.createElement('div');
    lbl.className = 'cell-row-lbl';
    lbl.textContent = ROW_LABELS[r];
    grid.appendChild(lbl);

    for (let c = 0; c < plateConfig.cols; c++) {
      const cell = cellMap[r][c];

      if (!cell) {
        const empty = document.createElement('div');
        empty.className = 'cell-empty';
        grid.appendChild(empty);
        continue;
      }

      if (cell.type === 'control') {
        const ctrl = document.createElement('div');
        ctrl.className = 'cell-control';
        ctrl.textContent = cell.ctrl.label;
        grid.appendChild(ctrl);
        continue;
      }

      const { drug, well, drugIndex } = cell;
      const bp          = drugBreakpoints[drug.id] ?? null;
      const isPositive  = bp !== null && well.concentration <= bp;
      const isUncertain = uncertainDrugs.has(drug.id) && bp !== null && well.concentration === bp;
      const shade       = drugIndex % 2 === 0 ? 'shade-a' : 'shade-b';

      // Group border classes
      const wSet = drugWellSets[drug.id];
      const inSet = (r, c) => wSet.has(`${r},${c}`);
      const oTop    = !inSet(well.row - 1, well.col);
      const oBottom = !inSet(well.row + 1, well.col);
      const oLeft   = !inSet(well.row, well.col - 1);
      const oRight  = !inSet(well.row, well.col + 1);
      const grp = [
        oTop    && 'grp-outer-top',
        oBottom && 'grp-outer-bottom',
        oLeft   && 'grp-outer-left',
        oRight  && 'grp-outer-right',
        !oRight  && 'grp-inner-right',
        !oBottom && 'grp-inner-bottom',
        (oTop && oLeft)     && 'grp-tl',
        (oTop && oRight)    && 'grp-tr',
        (oBottom && oLeft)  && 'grp-bl',
        (oBottom && oRight) && 'grp-br',
      ].filter(Boolean).join(' ');

      const el = document.createElement('div');
      el.className = `cell-well ${shade}${isPositive ? ' positive' : ''}${isUncertain ? ' uncertain' : ''} ${grp}`;
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-pressed', isPositive ? 'true' : 'false');
      el.setAttribute('aria-label', `${drug.name} ${well.displayConc} µg/mL`);

      const abbr = document.createElement('span');
      abbr.className = 'well-abbr';
      abbr.textContent = drug.abbreviation;

      const conc = document.createElement('span');
      const isCombo = well.displayConc.includes('/');
      conc.className = isCombo ? 'well-conc well-conc--combo' : 'well-conc';
      conc.textContent = formatDE(well.displayConc);

      el.appendChild(abbr);
      el.appendChild(conc);

      const toggle = () => onWellClick(drug.id, well.concentration);
      el.addEventListener('click', toggle);
      el.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
      });
      el.addEventListener('touchend', e => { e.preventDefault(); toggle(); });

      grid.appendChild(el);
    }
  }

  container.innerHTML = '';
  container.appendChild(grid);
}
