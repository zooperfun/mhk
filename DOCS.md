# MHK Plate Reader — App Documentation

**Version:** 1.5.0
**Last updated:** 2026-08-28

---

## Changelog

### v1.5.0 — 2026-08-28
- Fixed PRX/TET multi-row drug misalignment: vertical spacing now uses `row-gap: 4px` uniformly; removed per-cell `margin-top/bottom` from group border classes so all cells in a row are perfectly aligned
- Drug group gaps unified: 4px vertical (row-gap) and 4px horizontal (2px each side) between all groups
- Uncertain + all-positive: `≥` prefix and red highlight suppressed when drug is uncertain — only bare value shown
- Print: results table font reduced (10px base, 8px headers/abbr) and cell padding tightened
- Print: right panel widened to 300px; abbreviation column narrowed to 40px; MIC column narrowed to 88px — more room for drug names, fewer line breaks

### v1.4.0 — 2026-08-28
- German decimal format: all concentrations display with `,` instead of `.` (e.g. `0,125`)
- All-positive prefix changed from `>` to `≥` for consistency with `≤` (all-negative)
- MIC results panel uses sans-serif font (matches rest of app; was monospace)
- Removed `?` uncertain indicator from results panel; diagonal hatch on well remains
- Uncertain well text fixed: abbreviation and concentration now render above hatch overlay
- Screen a11y: `--c-muted` darkened `#999999 → #666666` (5.74:1 on white, passes AA everywhere)
- Screen a11y: control cell background darkened `#888888 → #666666` (white text now 5.74:1)
- Print a11y: muted text, row/col headers, abbreviations, control cells all pass AA (≥4.5:1)
- Print: direction label hidden; uncertain diagonal increased to 50% white coverage for legibility
- Print: combo drug values (e.g. AMC `16/8`) use 6px font with word-break to fit narrow wells

### v1.3.0 — 2026-08-28
- Added MICRONAUT-S Großtiere plate (E1-318-100, right-to-left, 16 drugs + GC controls)
- TET (Tetracycline) spans rows A–B: cols 9–12 in row A (8, 4, 2, 1) and cols 11–12 in row B (0.5, 0.25)
- New drugs: Ceftiofur (CET), Gamithromycin (GAM), Tilmicosin (TILM), Tildipirosin (TDP), Tulathromycin (TUL), Tiamulin (TIA), Colistin (COL)

### v1.2.0 — 2026-08-28
- Added MICRONAUT-S Kleintier plate (E1-319-100, right-to-left, 16 drugs + GC controls)
- PRX (Pradofloxacin) spans rows B–C as a single drug across 7 wells
- Added "Update Results" button — appears only when wells change after results are generated
- "Show Results" button hides itself once results exist; returns after Reset
- Right panel widened to 340px; MIC column widened to 110px with more right padding

### v1.1.0 — 2026-08-28
- 3-state well toggle: positive → uncertain (diagonal hatch) → clear
- Results sorted alphabetically by full drug name
- All-positive MIC reports `>(highest × 2)` convention (later changed to `≥` in v1.4.0)
- Fixed `µg/mL` header rendering (CSS `text-transform: uppercase` was destroying `µ`)
- Print view: landscape layout, plate grid + MIC results side by side
- Positive wells print with background colour (`print-color-adjust: exact`)
- App runs as plain `file://` — no server required (removed ES modules and `fetch`)

### v1.0.0 — 2026-08-28
- Initial release: Sensititre EQUIN2F plate, MIC calculation, results panel, print view

---

## Overview

A browser-based MIC (Minimum Inhibitory Concentration) plate reader for Sensititre and MICRONAUT antimicrobial panels. Opens directly as a local HTML file — no server required. The user marks wells on a visual plate grid, then generates a sorted MIC results table that can be printed.

---

## File Structure

```
index.html          — Layout and markup
styles.css          — Screen styles
print.css           — Print layout (landscape, plate + results side by side)
app.js              — State management, event wiring, init
plate-renderer.js   — Renders the 8×12 well grid
mic-calculator.js   — MIC calculation logic
results-panel.js    — Renders the sorted MIC results table
data.js             — Inline plate registry and plate configs (no fetch needed)
data/               — Original JSON source files (not loaded at runtime)
DOCS.md             — This file
```

---

## Application State (`app.js`)

```js
state = {
  plateConfig:     object,   // loaded plate definition
  drugBreakpoints: {},       // { [drugId]: concentration | null }
  uncertainDrugs:  Set,      // drugIds marked as uncertain
  sampleId:        string,
  date:            string,   // ISO date, defaults to today
  hasResults:      boolean,  // true after first Show Results
  resultsDirty:    boolean,  // true when wells changed since last result
}
```

---

## Well Interaction — 3-State Toggle

Each well click cycles through three states for that drug:

| Click | State | Visual | MIC output |
|---|---|---|---|
| 1st | **Positive** | Solid dark fill | Normal value |
| 2nd (same well) | **Uncertain** | Dark fill + diagonal hatch | Same value + `?` |
| 3rd (same well) | **Clear** | Empty | — |

Clicking a **different well** within the same drug moves the breakpoint to that well and clears the uncertain flag.

The breakpoint (`drugBreakpoints[drugId]`) is set to the **clicked well's concentration**. All wells at or below that concentration are rendered as positive — this reflects the biology of broth microdilution (growth is always contiguous from the lowest concentration up to the MIC).

The diagonal hatch covers only the breakpoint cell (the highest positive well), not the entire drug row.

---

## MIC Calculation (`mic-calculator.js`)

For each drug, wells are sorted ascending by concentration. Three cases:

### All negative (no wells marked)
`bp === null` → returns `≤ lowest concentration`

Example: GEN with no wells marked → `≤1`

### Normal
`bp` is set, and at least one well has `concentration > bp`.
Returns the concentration of the **first inhibitory well** (first well above the breakpoint).

Example: GEN wells 1, 2, 4 positive (bp=4), well 8 not → MIC = `8`

### All positive (all wells marked)
`bp` equals the highest concentration — no well is found above it.
Returns `>(highest × 2)` using the next doubling-dilution step.

Example: GEN all wells positive (bp=8) → MIC = `>16`

For combo drugs (e.g. SXT displayed as `4/76`), both components are doubled: `>8/152`.

---

## Results Display (`results-panel.js`)

- Results are sorted **alphabetically by full drug name**
- Uncertain drugs show a bold `?` after the MIC value
- All-positive rows are highlighted in red (`row-all-positive`)
- Results are a **snapshot** — clicking **Show Results** generates them; **Update Results** appears when wells change afterwards

### Update Results button
Hidden by default. Appears as soon as any well changes after results were generated. Disappears again after updating. Resets on plate change or Reset.

---

## Plates

### Sensititre EQUIN2F (`EQUIN2F`)
- 18 drugs, 8 rows × 12 columns
- Concentration increases **left to right** (plateType 1)
- Controls: POS × 3 at rows 5–7 col 11

### MICRONAUT-S Kleintier (`MCN_KLEINTIER`)
- 16 drugs, 8 rows × 12 columns
- Concentration increases **right to left** (plateType 2)
- Controls: GC × 2 at row 0 cols 0–1
- **PRX (Pradofloxacin)** spans two rows: B cols 9–11 and C cols 8–11 (7 wells total)

### MICRONAUT-S Großtiere (`MCN_GROSSTIER`)
- 16 drugs, 8 rows × 12 columns
- Concentration increases **right to left** (plateType 2)
- Controls: GC × 2 at row 0 cols 0–1
- **TET (Tetracycline)** spans two rows: A cols 9–12 (8, 4, 2, 1) and B cols 11–12 (0.5, 0.25) — 6 wells total

---

## Plate Data (`data.js`)

Data is inlined as plain JS variables to allow direct `file://` opening:

- `PLATE_REGISTRY` — array of available plate types `{ id, name, plateType }`
- `PLATE_DATA` — keyed by plate id, contains full plate definition

### Plate definition shape

```js
{
  id, name, plateType,   // plateType: 1=L→R, 2=R→L
  rows, cols,            // grid dimensions (8×12)
  drugs: [
    {
      id, abbreviation, name,
      wells: [{ row, col, concentration, displayConc }]
    }
  ],
  controls: [{ row, col, label }]
}
```

Drug `id` must be unique within a plate. Drugs shared between plates use suffixed ids (e.g. `GEN_MCN`) to prevent state bleed when switching plates.

---

## Print Layout (`print.css`)

- Page orientation: landscape (`@page { size: landscape; margin: 1.5cm }`)
- Left panel: plate grid (flex 1), well font sizes reduced for fit
- Right panel: MIC results table (260px fixed width)
- Footer buttons hidden
- Positive wells forced to print with background colour (`print-color-adjust: exact`)

---

## Reset Behaviour

Clicking **Reset** clears:
- All well breakpoints
- All uncertain flags
- Sample ID (state + input field)

Focus returns to the sample ID input on page load and after every reset. The date is **not** reset.

---

## Adding a New Plate

1. Add an entry to `PLATE_REGISTRY` in `data.js`
2. Add the full plate config to `PLATE_DATA` under the same `id` key
3. Use `plateType: 1` for L→R or `plateType: 2` for R→L
4. List controls in the `controls` array (rendered as grey cells, excluded from MIC output)
5. The plate select dropdown populates automatically on load
