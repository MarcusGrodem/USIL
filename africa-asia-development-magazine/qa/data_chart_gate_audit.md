# QA-001 independent data and proof-chart gate audit

**Reviewer:** Codex QA Agent (independent AI reviewer; not the DATA-006 or VIS-001 creator)  
**Audit date:** 2026-10-06  
**Task status:** REVIEW  
**Scope:** `data/master/six_country_indicator_dictionary.csv`, `data/master/six_country_chart_inputs.csv`, and the Ghana–South Korea GDP-per-capita proof package  
**Edits made to audited material:** None

## Gate verdicts

| Deliverable | Verdict | Reason |
|---|---|---|
| DATA-006 frozen chart inputs | **FAIL** | Values, coverage, classes, proxies, and external WDI/WGI checks pass, but all 131 `source_id` cells use local extraction labels that do not exist in `research/source_registry.csv`. Thirty-six `unit` cells also fail exact dictionary equality, and the one-decimal employment rule needs a sum-to-100 reconciliation method. |
| VIS-001 Ghana–South Korea proof chart | **PASS** | All six values, labels, rounded values, ratio, marks, and plotted coordinates reproduce the underlying data on one shared transform. The rendered figure passes A4, grayscale, contrast, direct-identification, legend-independence, XML-accessibility, and non-creator five-second checks. Supporting text is small in a 720p classroom-fit simulation but the chart's essential comparison remains readable. |
| VIS-001 magazine-wide palette lock | **NOT APPROVED** | The colours and markers are a **candidate only**. `COMPARISON_SYSTEM.md` incorrectly calls them locked before the required showroom trials and user selection. The proof-chart pass does not approve a magazine-wide colour system. |

No P0 issue was found. Findings: **P0 0 / P1 2 / P2 2 / P3 1**.

## Detailed findings and repair conditions

### F-01 — P1 — Master source IDs do not resolve to the source registry

- **Location:** `data/master/six_country_chart_inputs.csv`, rows 2–132, column `source_id`.
- **Evidence:** The master table contains four IDs: `WDI-2026-10-06` (117 rows), `WGI26-2026-10-06` (12 rows), `WDR80-T23` (1 row), and `DOSM-SDG04-6-1` (1 row). None is a `source_id` in `research/source_registry.csv`.
- **Impact:** A chart producer cannot join the frozen table to the APA registry. This breaks the project's traceability rule even though each row has a usable locator.
- **Exact repair:** Replace the extraction labels with registered source IDs: `WDI-2026-10-06` → `SRC-WDI-001`; `WGI26-2026-10-06` → `SRC-WGI26-001`; `WDR80-T23` → `SRC-WDR80-001`; `DOSM-SDG04-6-1` → `SRC-DOSM-LIT24-001`. Keep extraction/retrieval vintage in `release_or_retrieval_date`, not in `source_id`. Before accepting the WDR remap, the Sources & APA Agent must reconcile `SRC-WDR80-001`, whose registry row is still `PARTIAL` and says the original table needs inspection, with the master locator “Table 23, printed p. 154; notes p. 158.” Expand `SRC-WGI26-001`'s locator from GHA/KOR to the six audited economies or link six-country claims.
- **Pass condition:** Every master `source_id` resolves exactly once in `research/source_registry.csv`; the joined record supports the row's source locator, release, access date, and verification state.

### F-02 — P1 — Candidate palette is described as a magazine-wide lock

- **Location:** `design/figures/COMPARISON_SYSTEM.md` lines 1, 10, 12, 14, 25, and 44 (“Fixed,” “stable,” “approved,” “Locked,” and “Use the exact hex values ... in every chart”).
- **Evidence:** `AGENTS.md`, `project-control/STATUS.md`, and `project-control/REPORT_CHECKLIST.md` require materially different showroom/palette trials and explicit user selection before a lock. No such selection is recorded.
- **Impact:** Later designers could propagate an unselected palette magazine-wide and bypass the required user decision.
- **Exact repair:** Retitle the document and section as a **candidate comparison-chart system** and **candidate country identities**; add a prominent notice that the proof colours are provisional pending DESIGN-001 showroom testing and user selection; replace magazine-wide imperatives with “for this proof only.” Preserve the proof SVG as a review artefact. After showroom trials, record the user's selected direction and only then restore lock language to the chosen system.
- **Pass condition:** No document calls the palette fixed, approved, or locked until a dated user selection is recorded; the proof remains identifiable without colour.

### F-03 — P2 — Thirty-six data-unit strings do not exactly match the dictionary

- **Location:** `data/master/six_country_chart_inputs.csv` rows 13–29, 48–54, and 121–132, column `unit`; dictionary rows 7–10 and 13–14.
- **Evidence:** Two literacy exception rows and seven UIS literacy rows use “ages 15+” while the dictionary uses “aged 15+”; 15 manufacturing rows use “percent of GDP at current prices” while the dictionary unit is “percent of GDP” and stores the price basis separately; 12 WGI rows omit the dictionary qualifier “approximately -2.5 to +2.5.”
- **Impact:** A strict dictionary-to-data validator reports false mismatches, and downstream code may create duplicate unit categories.
- **Exact repair:** Choose the dictionary `unit` value as the canonical join key and make all 36 master cells exactly equal to it. Preserve manufacturing's current-price qualification in `price_ppp_basis`/notes and WGI's approximate range in the dictionary/figure note, rather than duplicating them inconsistently in the row unit.
- **Pass condition:** For every master row, `row.unit == dictionary[indicator_code].unit` after a direct join, with no normalization rules required.

### F-04 — P2 — One-decimal employment display can total 99.9 or 100.1

- **Location:** Dictionary rows 4–6 (`SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`) and the corresponding master rows.
- **Evidence:** Full-precision totals are effectively 100 for every country-year, but independent one-decimal rounding gives Korea 1991 = 100.1, Botswana 1991 = 100.1, Botswana 2020 = 99.9, and Malaysia 2020 = 100.1. The other eight panels display 100.0.
- **Impact:** A 100% composition chart following the present rounding rule can visibly contradict its denominator and the comparison-system rule that displayed shares total 100%.
- **Exact repair:** Keep the frozen full-precision values unchanged. Add one deterministic display rule for 100% compositions, such as largest-remainder rounding to tenths within each country-year, with any ±0.1 adjustment assigned to the category with the largest discarded remainder. Record adjusted display labels separately from source values and disclose “components may not sum due to rounding” only if the team deliberately chooses not to reconcile.
- **Pass condition:** Every displayed three-sector country-year total is exactly 100.0 while calculations retain the frozen precision.

### F-05 — P3 — Supporting copy is marginal at a 1280×720 classroom-fit export

- **Location:** `design/figures/ghana_korea_gdp_per_capita.svg` lines 10–18 and 104–124.
- **Evidence:** Fitting the 1600×1100 viewBox into a 1280×720 screen produces a 1047×720 chart. The 20 px source/limitation text becomes about 13.1 screen pixels; 22 px axes become about 14.4 px; 25 px values become about 16.4 px. No clipping occurred, and the title, countries, values, and direction remained readable in the render, but the source line is for close viewing rather than a back row.
- **Impact:** The central comparison survives projection, but supporting methodological text may not be readable at distance.
- **Exact repair:** If the same asset will be projected, create a separate 16:9 classroom export that keeps axis/value text at least 22–24 screen px and supporting notes at least 18–20 screen px at 1280×720; shorten the on-slide APA line and place the complete reference in an accompanying source slide or handout. Do not remove the limitation statement.
- **Pass condition:** A 1280×720 full-screen render has no clipping and meets the chosen projection type minimum; a human back-row test can be added later, but none is claimed here.

## DATA-006 structural audit

### Parse and schema

| Check | Result | Evidence |
|---|---|---|
| Dictionary parse | PASS | 16 data rows; 14 columns; every row has 14 fields. |
| Master parse | PASS | 131 data rows; 17 columns; every row has 17 fields. |
| Unique identifiers | PASS | 16/16 unique `indicator_code` values; 131/131 unique `chart_input_id` values. Every chart ID matches `{country_code}-{indicator_code with dots replaced by underscores}-{requested_year}-{actual_year}`. |
| Allowed classes | PASS | 81 `APPROVED_FOR_DIRECT_COMPARISON`; 50 `APPROVED_WITH_VISIBLE_CAVEAT`; no other class. |
| Required fields | PASS | No blank dictionary definition/format field and no blank master ID, country, year, proxy, value, unit, indicator, source, locator, class, release/retrieval, or verification field. All 50 caveated rows contain a caveat. |
| Confidence bounds | PASS | Exactly 12 rows have both lower and upper bounds; all are WGI rows. No non-WGI row has bounds. |
| Verification states | PASS | 81 `VERIFIED_SAME_RELEASE`; 50 `VERIFIED_CAVEAT_REQUIRED`, aligned with the two comparison classes. |

### Country, year, and family coverage

The parsed table matches the comparability review:

- GDP per capita: 18 rows, all six countries at 1960/1990/2020; Malaysia 1960 caveated.
- Labour productivity: 12 rows, all six at actual 1991 (+1 proxy for requested 1990) and 2020; no 1960 rows.
- Employment: 36 rows, agriculture/industry/services for all six at actual 1991 and 2020; no 1960 rows.
- Manufacturing: 15 rows; Ghana/Botswana use 1965 for requested 1960, Korea/Malaysia have 1960, Mauritius has no 1960 row, Philippines has only 2020, and the five-country 1990 panel excludes the Philippines.
- Adult literacy: seven WDI/UIS rows plus Korea 1960 and Malaysia 2020 source-specific rows; only the partial panels authorized by the review are present.
- Urbanisation: 18 rows, all countries at all anchors; Malaysia 1960 caveated.
- Electricity: 11 rows; six-country 2020 plus five-country 1990/proxy panel, with Malaysia absent and Ghana/Philippines 1993 and Botswana 1991 visibly represented.
- WGI: 12 rows, 2020 only, two dimensions × six countries, all with 90% intervals and “governance, not trust” caveats.
- Country row totals are GHA/KOR/BWA/MUS/MYS = 22 each and PHL = 21, consistent with the authorized literacy/manufacturing/electricity gaps.

### Proxies, zeroes, interpolation, and excluded observations

- **PASS:** All 131 proxy distances equal `actual_year - requested_year`.
- **PASS:** No direct-comparison row has a non-zero proxy distance.
- **PASS:** All non-zero proxies are visibly caveated: +1, +3, or +5 only, exactly as authorized.
- **PASS:** No value is blank and no value equals zero; legitimate values of 100 remain numeric observations, not missing-data replacements.
- **PASS:** The master contains no `NARRATIVE_ONLY` or `EXCLUDED` class and no rows for the dictionary's three narrative-only codes (`EXPORT.COMPOSITION.SOURCE_SPECIFIC`, `FIRM_INFORMALITY.SOURCE_SPECIFIC`, `TRUST.DIRECT.SOURCE_SPECIFIC`).
- **PASS:** No synthetic/interpolated IDs, years, or values were detected. Missing country-years are absent rather than filled.

### Employment-sector recalculation

| Country | Actual year | Full-precision sum | Sum after independent 1-decimal rounding |
|---|---:|---:|---:|
| Ghana | 1991 | 100.000016 | 100.0 |
| Ghana | 2020 | 100.000000 | 100.0 |
| South Korea | 1991 | 99.999990 | 100.1 |
| South Korea | 2020 | 100.000000 | 100.0 |
| Botswana | 1991 | 100.000000 | 100.1 |
| Botswana | 2020 | 99.999870 | 99.9 |
| Mauritius | 1991 | 99.999764 | 100.0 |
| Mauritius | 2020 | 100.000000 | 100.0 |
| Malaysia | 1991 | 100.000000 | 100.0 |
| Malaysia | 2020 | 99.999994 | 100.1 |
| Philippines | 1991 | 100.000005 | 100.0 |
| Philippines | 2020 | 100.000000 | 100.0 |

The small full-precision deviations are source/model floating-point effects, not missing sectors. F-04 applies only to displayed rounding.

## Independent authoritative-source checks

### Common WDI metadata

**Accessed:** 2026-10-06.  
**Exact query template:** `https://api.worldbank.org/v2/country/GHA%3BKOR%3BBWA%3BMUS%3BMYS%3BPHL/indicator/{INDICATOR}?date=1960%3A2021&format=json&per_page=2000`  
**Fields checked:** response metadata `.[0].sourceid`, `.[0].lastupdated`, and `.[0].total`.

Each of the nine indicators below returned `sourceid = 2`, `lastupdated = 2026-07-13`, and `total = 372`: `NY.GDP.PCAP.KD`, `SL.GDP.PCAP.EM.KD`, `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`, `NV.IND.MANF.ZS`, `SE.ADT.LITR.ZS`, `SP.URB.TOTL.IN.ZS`, and `EG.ELC.ACCS.ZS`. This independently confirms the common release metadata recorded in the dictionary and master table.

### WGI 2026 estimates and 90% bounds

**Accessed:** 2026-10-06.  
**Authoritative item:** World Bank Data Catalog, *WGI 2026: Governance Estimates and Scores (1996–2025)*, last updated 2026-09-18, downloaded from `https://datacatalogfiles.worldbank.org/ddh-published/0038026/DR0095947/WGI%202026%20Governance%20Estimates%20and%20Scores%20%281996-2025%29.xlsx`.  
**Workbook fields:** column I governance estimate, column K lower 90% bound, column L upper 90% bound.  
**Query:** sheet `ge` or `rl`; column C economy code in `{GHA,KOR,BWA,MUS,MYS,PHL}`; column F year `2020`.

| Dimension | Economy | Exact cells (estimate/lower/upper) | Workbook values | Frozen match |
|---|---|---|---|---|
| GE | BWA | `ge!I4312/K4312/L4312` | 0.3907372 / 0.0413355 / 0.7401389 | PASS |
| GE | GHA | `ge!I4349/K4349/L4349` | 0.0556797 / -0.2568853 / 0.3682447 | PASS |
| GE | KOR | `ge!I4384/K4384/L4384` | 1.5408948 / 1.1591600 / 1.9226296 | PASS |
| GE | MUS | `ge!I4414/K4414/L4414` | 0.9564112 / 0.5836877 / 1.3291347 | PASS |
| GE | MYS | `ge!I4416/K4416/L4416` | 0.9351625 / 0.5494299 / 1.3208951 | PASS |
| GE | PHL | `ge!I4430/K4430/L4430` | 0.1340562 / -0.2320513 / 0.5001637 | PASS |
| RL | BWA | `rl!I4434/K4434/L4434` | 0.3614259 / 0.0985383 / 0.6243135 | PASS |
| RL | GHA | `rl!I4472/K4472/L4472` | 0.0930935 / -0.1441740 / 0.3303610 | PASS |
| RL | KOR | `rl!I4507/K4507/L4507` | 1.1612116 / 0.9043354 / 1.4180878 | PASS |
| RL | MUS | `rl!I4537/K4537/L4537` | 0.9487347 / 0.6154222 / 1.2820472 | PASS |
| RL | MYS | `rl!I4539/K4539/L4539` | 0.3791556 / 0.1216666 / 0.6366446 | PASS |
| RL | PHL | `rl!I4555/K4555/L4555` | -0.6230015 / -0.8827409 / -0.3632621 | PASS |

All 36 frozen WGI numbers match the authoritative workbook at the stored seven-decimal precision.

## VIS-001 proof-chart numeric and SVG audit

### Data, ratio, labels, and rounding

- The six proof-CSV values exactly match the corresponding master rows and approved claim rows `GHA-GDP-1960/1990/2020` and `KOR-GDP-1960/1990/2020`.
- Recalculated 2020 ratio: `33215.9298928108 / 1970.19411460398 = 16.8592168896451`; displayed as 16.9-to-1 / “nearly 17-to-1,” both correct.
- Nearest-whole-dollar labels reproduce the exact values: Ghana `$1,101`, `$856`, `$1,970`; South Korea `$1,038`, `$9,673`, `$33,216`.
- The chart uses the same indicator, unit, actual years, source, axis, and transform for both countries. No proxy or missing value applies.

### Coordinate recalculation

The SVG plot has baseline `y = 740`, top `y = 310`, and domain 0–35,000. The required transform is `y = 740 - value / 35000 × 430`; year x-coordinates are 360, 820, and 1280.

| Series/year | Underlying value | Recalculated y | SVG y | Absolute difference |
|---|---:|---:|---:|---:|
| Ghana 1960 | 1,100.76305218242 | 726.47634 | 726.48 | 0.00366 |
| Ghana 1990 | 855.85250708181 | 729.48524 | 729.48 | 0.00524 |
| Ghana 2020 | 1,970.19411460398 | 715.79476 | 715.79 | 0.00476 |
| South Korea 1960 | 1,037.72899231615 | 727.25076 | 727.25 | 0.00076 |
| South Korea 1990 | 9,672.57845182894 | 621.16546 | 621.17 | 0.00454 |
| South Korea 2020 | 33,215.9298928108 | 331.91858 | 331.92 | 0.00142 |

All six coordinates are within 0.006 SVG unit of the exact transform, consistent with two-decimal coordinate storage. Marker centres coincide with the path coordinates. Tick positions reproduce 0, 10,000, 20,000, 30,000, and 35,000 on the same transform. The straight paths contain only the three approved anchors; the visible note explicitly says the connectors do not estimate annual observations.

### APA note and registries

- **PASS:** SVG source ID `SRC-WDI-001` exists once in `research/source_registry.csv` and is a verified World Bank WDI dataset record.
- **PASS:** All six proof `claim_id` values exist, are `APPROVED`, and contain the same exact values and unit.
- **PASS:** The note uses “Data from,” names the dataset, indicator, organisation/year, stable DataBank URL, retrieval date, source ID, and frozen data file. This is consistent with the registry's APA record.
- **PASS:** The proof CSV adds API v2 and `source=2` query context. Independent metadata checking confirms the API response was last updated 2026-07-13; adding that date to a later production note would improve reproducibility but is not required to pass this proof note.

### Render, accessibility, and scale

- XML parses successfully. The SVG has `role="img"`, `aria-labelledby`, a meaningful `<title>`, and a descriptive `<desc>` in reading order.
- At A4 landscape width (297 mm), the 1600×1100 viewBox occupies about 297×204 mm. A 20 px note becomes about 10.5 pt, 22 px axes about 11.6 pt, 25 px values about 13.2 pt, and the 58 px title about 30.5 pt. This meets the documented A4 minima.
- Native 1600×1100 and Quick Look renders showed no clipping, collision, or cropped label. The bottom source line remains inside the canvas.
- Independently recalculated contrast against cream `#F4F0E7`: charcoal `#252525` 13.48:1; note `#403D38` 9.51:1; dark axis `#514E48` 7.29:1; Ghana terracotta 4.25:1; South Korea blue 6.45:1. Essential marks exceed the 3:1 non-text threshold and all text exceeds 4.5:1. Low-contrast gridlines are decorative.
- Grayscale render passes: Ghana remains circle/solid and South Korea diamond/long-dash; endpoint country names, all values, and marker samples provide direct identification without colour.
- The figure has no legend. Identification is direct and remains independent of colour.
- A 1047×720 classroom-fit simulation had no clipping and preserved the essential comparison; F-05 records the small supporting text.

### Five-second questions

**Tester/reviewer:** Codex QA Agent, an AI reviewer who did not create DATA-006 or VIS-001. This is **not claimed as a human test**.  
**Date:** 2026-10-06.  
**Stimulus:** rendered SVG without surrounding body copy, rapid five-second review at classroom-fit scale.

1. **What is measured?** GDP per capita.
2. **Which countries are compared?** Ghana and South Korea.
3. **What years and unit are shown?** 1960, 1990, and 2020; constant 2015 US dollars per person.
4. **What is the main difference or direction?** Near parity in 1960 becomes an approximately 17-to-1 South Korean lead by 2020.
5. **Can each series be identified without a legend?** Yes: direct country labels, values, circle/diamond markers, and solid/dashed lines.

**Ambiguity:** None for the five questions. The full source and limitation copy is too small for comfortable back-row reading at 720p, but it does not obscure the requested five-second answers.

## Technical visual score

| Dimension | Score | Key finding |
|---|---:|---|
| Accessibility | 3/4 | Strong contrast, grayscale, direct labels, and SVG text alternatives; projection detail is small. |
| Performance | 4/4 | Editable 8 KB SVG; no bitmap payload, scripting, animation, or unnecessary effects. |
| Responsive/scale | 3/4 | Scales cleanly to A4 and screen with no clipping; a dedicated 16:9 export would improve projection detail. |
| Theming/system | 2/4 | Logical colour/marker pairing, but candidate palette is prematurely described as locked. |
| Anti-patterns | 4/4 | No gradient text, glass effects, 3D, legend hunting, decorative metrics, or generic card treatment. |
| **Total** | **16/20 — Good** | Address governance/traceability issues before wider rollout. |

**Anti-pattern verdict:** Pass. The figure reads as an intentional editorial evidence graphic rather than a generic AI template.

## Positive controls to preserve

- One shared zero-based scale and one transform.
- Only observed anchors, with a visible connector limitation.
- Direct endpoint labels plus visible values at all six points.
- Country identity encoded by name, shape, line pattern, and colour.
- A concise causal limitation and explicit COVID-19 endpoint note.
- Full-precision source values separated from publication rounding.
- WGI uncertainty bounds retained in the frozen master.

## Required repair order

1. **P1 data traceability:** normalize all master `source_id` values to the registry and reconcile the WDR/WGI registry locators.
2. **P1 design governance:** mark the colour/marker system candidate-only until showroom trials and user selection are recorded.
3. **P2 schema consistency:** normalize the 36 unit strings.
4. **P2 chart formatting:** add deterministic sum-to-100 rounding for employment compositions.
5. **P3 projection polish:** produce a classroom-specific 16:9 export if this figure will be projected.

After repairs, re-run this audit. The proof chart does not require numeric or geometric correction; DATA-006 requires metadata/schema repair before its gate can pass.
