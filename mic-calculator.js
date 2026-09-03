function formatDE(str) {
  return str.replace(/\./g, ',');
}

function doubleValue(n) {
  const doubled = n * 2;
  return Number.isInteger(doubled) ? String(doubled) : String(parseFloat(doubled.toPrecision(10)));
}

function doubledConc(concentration, displayConc) {
  if (displayConc.includes('/')) {
    const raw = displayConc
      .split('/')
      .map(part => {
        const n = parseFloat(part);
        return Number.isNaN(n) ? part : doubleValue(n);
      })
      .join('/');
    return formatDE(raw);
  }
  return formatDE(doubleValue(concentration));
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
