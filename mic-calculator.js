function formatDE(str) {
  return str.replace(/\./g, ',');
}

function doubledConc(concentration, displayConc) {
  const next = concentration * 2;
  if (displayConc.includes('/')) {
    const raw = displayConc.split('/').map(p => String(Number(p) * 2)).join('/');
    return formatDE(raw);
  }
  const raw = Number.isInteger(next) ? String(next) : String(parseFloat(next.toPrecision(10)));
  return formatDE(raw);
}

function calculateMIC(drug, drugBreakpoints) {
  const bp = drugBreakpoints[drug.id] ?? null;
  const sorted = [...drug.wells].sort((a, b) => a.concentration - b.concentration);
  const lowest  = sorted[0];
  const highest = sorted[sorted.length - 1];

  if (bp === null) {
    const val = formatDE(lowest.displayConc);
    return {
      drugId: drug.id, abbreviation: drug.abbreviation, name: drug.name,
      prefix: '≤', value: val, display: `≤${val}`,
      state: 'all-negative',
    };
  }

  const micWell = sorted.find(w => w.concentration > bp);
  if (!micWell) {
    const nextValue = doubledConc(highest.concentration, highest.displayConc);
    return {
      drugId: drug.id, abbreviation: drug.abbreviation, name: drug.name,
      prefix: '≥', value: nextValue, display: `≥${nextValue}`,
      state: 'all-positive',
    };
  }

  const val = formatDE(micWell.displayConc);
  return {
    drugId: drug.id, abbreviation: drug.abbreviation, name: drug.name,
    prefix: '', value: val, display: val,
    state: 'normal',
  };
}

function calculateAllMICs(plateConfig, drugBreakpoints) {
  return plateConfig.drugs.map(drug => calculateMIC(drug, drugBreakpoints));
}
