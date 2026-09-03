function renderResults(container, mics, uncertainDrugs = new Set()) {
  const table = document.createElement('table');
  table.className = 'results-table';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Drug</th>
      <th>Abbr.</th>
      <th>MIC <span class="th-unit">(µg/mL)</span></th>
    </tr>
  `;
  table.appendChild(thead);

  const sorted = [...mics].sort((a, b) => a.name.localeCompare(b.name));
  const tbody = document.createElement('tbody');
  for (const mic of sorted) {
    const tr = document.createElement('tr');
    if (mic.state === 'all-positive' && !uncertainDrugs.has(mic.drugId)) tr.classList.add('row-all-positive');

    const nameTd = document.createElement('td');
    nameTd.className = 'td-name';
    nameTd.textContent = mic.name;

    const abbrTd = document.createElement('td');
    abbrTd.className = 'td-abbr';
    abbrTd.textContent = mic.abbreviation;

    const micTd = document.createElement('td');
    micTd.className = 'td-mic';
    const isUncertain = uncertainDrugs.has(mic.drugId);
    if (mic.prefix && !isUncertain) {
      const pre = document.createElement('span');
      pre.className = 'mic-prefix';
      pre.textContent = mic.prefix;
      micTd.appendChild(pre);
    }
    const val = document.createElement('span');
    val.className = 'mic-value';
    val.textContent = mic.value;
    micTd.appendChild(val);

    if (isUncertain) {
      const flag = document.createElement('span');
      flag.className = 'sr-only';
      flag.textContent = ' (uncertain)';
      micTd.appendChild(flag);
    }


    tr.append(nameTd, abbrTd, micTd);
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  container.innerHTML = '';
  container.appendChild(table);
}
