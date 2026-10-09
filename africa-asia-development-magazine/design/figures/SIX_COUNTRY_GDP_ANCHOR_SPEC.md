# Six-country GDP-per-capita anchor dashboard — specification

**Task:** VIS-006
**Status:** REVIEW
**Chart IDs:** VIS-006-GDP-A4 (A4 landscape); VIS-006-GDP-16X9 (classroom projection)
**Produced:** 2026-10-08

## Purpose

Give the magazine and the classroom one locked family of matched GDP-per-capita observations for the six scope-locked countries at the three scope-locked anchor years. The dashboard is designed to pass the five-second reading test, carry visible comparability caveats, and resist being read as a uniform Africa-versus-Asia race or a causal explanation.

## Question and finding

- **Comparison question:** Where did each of the six scope-locked economies sit, in matched constant-2015-US-dollar terms, at the independence-era baseline (1960), the mid-industrialisation snapshot (1990), and the outcome snapshot (2020)?
- **Five-second message:** Observed GDP per capita at three anchor years on one shared axis. African and Asian paths both vary within their region; the chart does not establish a cause.
- **What the comparison cannot prove:** The gaps do not identify whether culture, policy, institutions, war, aid, or any other factor caused them. 2020 is affected by COVID-19. The dashboard is not a race between regions and must not be read as one.

## Indicator and source identity

| Field | Value |
|---|---|
| Indicator code | `NY.GDP.PCAP.KD` |
| Indicator name | GDP per capita (constant 2015 US$ per person) |
| Price basis | Constant 2015 US dollars; market-exchange-rate basis; not PPP |
| Universe | National/territorial economy |
| Source record | `SRC-WDI-001` — World Bank. (2026). *World Development Indicators* [Data set]. |
| Series origin | WDI Indicators API v2, source 2 |
| Release metadata | API `lastupdated=2026-07-13` |
| Retrieval date | 2026-10-06 |
| Stable destination | https://databank.worldbank.org/source/world-development-indicators |
| Frozen master row | `data/master/six_country_chart_inputs.csv`, 18 rows filtered on `indicator_code = NY.GDP.PCAP.KD` |
| Dictionary row | `data/master/six_country_indicator_dictionary.csv`, row `NY.GDP.PCAP.KD` |
| Comparability review | `research/six_country_comparability_review.md`, section 1 |

Values and anchor years are drawn only from the frozen master. The specification does not permit re-querying the live WDI service, substituting a different release, back-casting, interpolation, or anchor replacement.

## Frozen observations (full precision)

Values used in geometric calculations. Printed labels round to the nearest whole dollar per the dictionary rule.

| Country | Region | 1960 | 1990 | 2020 | Comparability class |
|---|---|---:|---:|---:|---|
| Ghana | Africa | 1100.76305218242 | 855.85250708181 | 1970.19411460398 | APPROVED_FOR_DIRECT_COMPARISON (all three) |
| Botswana | Africa | 393.861742487166 | 4039.46544455099 | 6254.24806241091 | APPROVED_FOR_DIRECT_COMPARISON (all three) |
| Mauritius | Africa | 1419.4048237128 | 3846.40593009531 | 9533.5982796049 | APPROVED_FOR_DIRECT_COMPARISON (all three) |
| South Korea | Asia | 1037.72899231615 | 9672.57845182894 | 33215.9298928108 | APPROVED_FOR_DIRECT_COMPARISON (all three) |
| Malaysia | Asia | 1266.31525712689 | 4184.76072928976 | 10171.4657842762 | APPROVED_WITH_VISIBLE_CAVEAT at 1960; APPROVED_FOR_DIRECT_COMPARISON at 1990 and 2020 |
| Philippines | Asia | 1123.78209980486 | 1704.07568899121 | 3198.66690008413 | APPROVED_FOR_DIRECT_COMPARISON (all three) |

Published rounded labels: Ghana $1,101 / $856 / $1,970; Botswana $394 / $4,039 / $6,254; Mauritius $1,419 / $3,846 / $9,534; South Korea $1,038 / $9,673 / $33,216; Malaysia $1,266 † / $4,185 / $10,171; Philippines $1,124 / $1,704 / $3,199.

## Required visible caveats

- **Malaysia 1960 (†):** The row is a retrospective territorial series that pre-dates the 1963 formation of Malaysia and Singapore's 1965 exit. The year label is printed as `1960 †` and the value label carries `†`; the reading-notes band explains the symbol.
- **2020 pandemic endpoint:** All six 2020 observations are flagged as the COVID-19 year in the reading-notes band and in the figure note.
- **Observed anchors only:** The dashboard explicitly states that the straight connectors join the three dated observations only and do not estimate any value between years.
- **Not a race:** The reading-notes band includes `Not a race.` and `the chart does not identify a cause.`

## Geometry — A4 landscape (VIS-006-GDP-A4)

- **File:** `design/figures/six_country_gdp_anchor_dashboard.svg`
- **viewBox:** `0 0 1600 1100` (matches the Ghana-Korea A4 convention; see `design/figures/COMPARISON_SYSTEM.md`)
- **Layout:** small multiples; 2 rows × 3 columns.
  - Row 1 (Africa, left→right): Ghana, Botswana, Mauritius.
  - Row 2 (Asia, left→right): South Korea, Malaysia, Philippines.
- **Shared scale:** 0 to 35,000 constant 2015 US dollars for every panel.
- **Row 1 plot y range:** 220 to 550 (plot height = 330 units).
- **Row 2 plot y range:** 620 to 950 (plot height = 330 units).
- **Y transform:** `y = y_baseline − value × 33 / 3500` where `y_baseline` is 550 (Row 1) or 950 (Row 2).
- **Y tick anchors (Row 1):** 35,000 → y=220; 30,000 → 267.1429; 20,000 → 361.4286; 10,000 → 455.7143; 0 → 550.
- **Y tick anchors (Row 2):** 35,000 → 620; 30,000 → 667.1429; 20,000 → 761.4286; 10,000 → 855.7143; 0 → 950.
- **Panel plot x spans:** Panel 1 x=146–606; Panel 2 x=626–1086; Panel 3 x=1106–1566.
- **Year anchor x positions (identical across every panel column):**
  - Panel 1: 1960 → x=206; 1990 → 376; 2020 → 546.
  - Panel 2: 1960 → x=686; 1990 → 856; 2020 → 1026.
  - Panel 3: 1960 → x=1166; 1990 → 1336; 2020 → 1506.
- **Resulting marker centres (x, y):**
  - Ghana: (206, 539.6214); (376, 541.9305); (546, 531.4239).
  - Botswana: (686, 546.2864); (856, 511.9136); (1026, 491.0314).
  - Mauritius: (1166, 536.6170); (1336, 513.7339); (1506, 460.1118).
  - South Korea: (206, 940.2157); (376, 858.8014); (546, 636.8212).
  - Malaysia: (686, 938.0605); (856, 910.5437); (1026, 854.0976).
  - Philippines: (1166, 939.4044); (1336, 933.9330); (1506, 919.8411).

## Geometry — classroom projection (VIS-006-GDP-16X9)

- **File:** `design/figures/six_country_gdp_anchor_dashboard_16x9.svg`
- **viewBox:** `0 0 1280 720`; width/height attributes also set to 1280 × 720.
- **Layout:** small multiples; 2 rows × 3 columns, same panel order as the A4 version.
- **Shared scale:** 0 to 35,000 constant 2015 US dollars for every panel.
- **Row 1 plot y range:** 105 to 305 (plot height = 200 units).
- **Row 2 plot y range:** 368 to 568 (plot height = 200 units).
- **Y transform:** `y = y_baseline − value × 4 / 700` where `y_baseline` is 305 (Row 1) or 568 (Row 2).
- **Y tick anchors (Row 1):** 35,000 → 105; 30,000 → 133.5714; 20,000 → 190.7143; 10,000 → 247.8571; 0 → 305.
- **Y tick anchors (Row 2):** 35,000 → 368; 30,000 → 396.5714; 20,000 → 453.7143; 10,000 → 510.8571; 0 → 568.
- **Panel plot x spans:** Panel 1 x=78–455; Panel 2 x=478–855; Panel 3 x=878–1255.
- **Year anchor x positions:**
  - Panel 1: 125 / 270 / 415.
  - Panel 2: 525 / 670 / 815.
  - Panel 3: 925 / 1070 / 1215.
- **Resulting marker centres (x, y):**
  - Ghana: (125, 298.7099); (270, 300.1094); (415, 293.7417).
  - Botswana: (525, 302.7494); (670, 281.9173); (815, 269.2614).
  - Mauritius: (925, 296.8891); (1070, 283.0205); (1215, 250.5223).
  - South Korea: (125, 562.0701); (270, 512.7281); (415, 378.1947).
  - Malaysia: (525, 560.7639); (670, 544.0871); (815, 509.8774).
  - Philippines: (925, 561.5784); (1070, 558.2624); (1215, 549.7219).

## Country identification system

Both files use the Palette A country identities from `design/SELECTED_COMPARISON_SYSTEM.md`. Every country is identified by full name + fixed marker + stable data colour so colour is never the only identifier.

| Country | Marker | Fill (data colour) | Keyline / under-stroke | Connector |
|---|---|---|---|---|
| Ghana | filled circle | `#B95332` | charcoal `#252525` 1.6 pt | solid terracotta |
| Botswana | filled square | `#3F684E` | charcoal 1.6 pt | solid green |
| Mauritius | filled up-triangle | `#D6A23A` | mandatory charcoal 1.8 pt keyline **and** charcoal under-stroke 1.5× the ochre connector width | ochre on top of charcoal under-stroke |
| South Korea | filled diamond | `#315A78` | charcoal 1.6 pt | long-dash (A4 `22 14`; 16:9 `20 12`) |
| Malaysia | filled hexagon | `#3E7568` | charcoal 1.6 pt | solid jade |
| Philippines | cross | `#A63A3A` | charcoal under-stroke 7 pt (A4) / 6 pt (16:9) with thinner `#A63A3A` stroke on top | charcoal under-stroke with red cross on top |

The Mauritius repair rule from the selected system is implemented in both figures: the ochre connector sits on top of a wider charcoal path (A4 7.5 pt charcoal under-stroke beneath a 5 pt ochre stroke; 16:9 6 pt beneath 4 pt). Mauritius is never an unoutlined essential edge; the triangle marker, label, and value remain present in grayscale.

Country colours identify a case only. They do not encode better/worse, richer/poorer, success/failure, or a uniform regional path. The dashboard orders Africa above Asia for navigation, but the reading-notes band and the deck make explicit that both regions show internal variation and that the comparison cannot establish cause.

## Direct labels and legend behaviour

- Every panel heading carries the fixed marker followed by the full country name.
- Every observed anchor carries its rounded dollar label directly above the marker.
- Every panel repeats the three year labels (`1960`, `1990`, `2020`) immediately beneath the baseline, so no reader has to look elsewhere to find them.
- Malaysia 1960 carries a `†` on both the value label and the year label; the reading-notes band carries the full territorial explanation.
- No legend is required; the panel heading and direct labels replace it.
- In grayscale, identity remains recoverable from the full country name, the marker geometry (circle, square, triangle, diamond, hexagon, cross), the solid/long-dash connector distinction, and the printed values.

## Reading-notes band

Three equal columns at the foot of each figure:

1. **Observed anchors only** — straight connectors link the three dated points only and do not estimate values between years.
2. **Visible caveats** — Malaysia 1960 territorial note; 2020 is the COVID-19 year for all six countries.
3. **What this comparison cannot prove** — gaps do not identify whether culture, policy, institutions, war, aid, or another factor caused them; `Not a race.`

## APA figure note

> *Note.* GDP per capita, constant 2015 US$ per person. Data from *World Development Indicators* (NY.GDP.PCAP.KD), by World Bank (2026). WDI DataBank. SRC-WDI-001 · WDI release 2026-07-13; retrieved 2026-10-06 · Frozen CSV: data/charts/six_country_gdp_anchor_years.csv.

The complete reference remains the bibliography entry:

> World Bank. (2026). *World Development Indicators* [Data set]. Retrieved October 6, 2026, from https://databank.worldbank.org/source/world-development-indicators

## Typography

Both files declare an explicit readable fallback stack (`"Aptos" / "Aptos Display" → "Helvetica Neue" → "Arial" → sans-serif`) and use tabular numerals (`font-variant-numeric: tabular-nums`) for every axis label and value. Final typefaces are not approved; the stack must be re-tested when a chosen typeface is locked.

| Role | A4 target (px in 1600×1100) | 16:9 target (px in 1280×720) |
|---|---:|---:|
| Finding headline | 50 | 32 |
| Deck / indicator line | 24 | 18 |
| Country direct label (panel heading) | 26 | 22 |
| Axis label (ticks) | 22 | 22 |
| Year label (anchor row) | 22 | 22 |
| Value label (per observation) | 22 | 22 |
| Note headline / reading-note head | 20 | 18 |
| Note body | 20 | 18 |
| Figure-note band | 16 | 14 |
| Eyebrow | 22 | 18 |

Both files meet the selected-system typography minima: the A4 figure keeps all essential axis/value type ≥ 22 px (≈ 10.5 pt at 72 dpi, which maps to ≥ 11 pt at the final A4 trim scale of ~5.4 units/mm), and the 16:9 figure keeps essential axis/value type ≥ 22 px and supporting notes ≥ 18 px. Physical A4 reproduction is still a separate release gate; see `design/figures/COMPARISON_SYSTEM.md`.

## Accessibility metadata

- Both SVGs declare `role="img"` and `aria-labelledby="chart-title chart-desc"`.
- The `<title>` names the finding; the `<desc>` reads every observation, every caveat, and the limitation in plain prose for assistive technology.
- Each country panel group carries an `aria-label` that reads the three observed values for that country, so a screen reader can traverse country-by-country.
- Country identification is redundant: full name + marker shape + fixed colour + value label + line pattern (for the long-dashed Korea connector). Colour is never the sole identifier.
- `<metadata>` carries all 18 full-precision values, both y transforms, the panel x positions, the source identity, the release/retrieval dates, the stable URL, the frozen-data path, and this specification path.
- Mauritius ochre `#D6A23A` carries a contrast ratio of 2.03:1 against cream and is never used as an unoutlined essential edge or as small text; charcoal keylines and under-strokes carry its essential identity. All other data colours exceed 4:1 against cream (Ghana 4.25, Botswana 5.59, Korea 6.45, Malaysia 4.68, Philippines 5.62). Charcoal body text is 13.48:1; the darker neutral used for notes is 7.29:1.

## Print and projection constraints

- **A4 (final trim 420 × 297 mm at full spread or 297 × 210 mm single page landscape):** target line weight ≥ 0.6 pt and marker diameter ≥ 3.5 mm at trim. In this SVG, strokes of 1.3–2.5 units and markers of 24–36 units satisfy that when the viewBox fits a 297 mm wide trim (≈ 5.4 units/mm). The dashboard is designed as a single landscape evidence plate; the Evidence Ledger spread layout for the magazine page remains separate work.
- **Projection (1280 × 720):** essential axes/years/values are at ≥ 22 px; supporting notes at ≥ 18 px; markers at ≥ 17–21 px across; no transparency, gradient, shadow, 3D, dual axis, or decorative silhouette.
- Both files use only straight connectors between observed anchors; no smoothing is applied.

## Verification record

The following checks were run on 2026-10-08.

- **Independent reparse of the output CSV against the frozen master.** 18 rows, every row's `value`, `actual_year`, `source_id`, `source_locator`, `comparability_class`, `indicator_code`, and `unit` match `data/master/six_country_chart_inputs.csv`; the Malaysia 1960 territorial caveat is present in the output.
- **XML parse (`xmllint --noout`).** Both SVGs parse without error.
- **Marker-coordinate reparse.** For every one of the 18 observations in each SVG, the `<use>` element's rendered centre `(x + width/2, y + height/2)` is within 0.5 units in x and 0.01 units in y of the geometry formula `y = y_baseline − value × (plot_height / 35000)`. Panel x positions match the specification exactly.
- **Marker count.** Each SVG contains exactly 24 `<use>` marker references (6 panel-heading badges + 18 plot observations); no stray plot markers exist outside the six observation groups.
- **Required-string check.** Both SVGs contain `constant 2015 US$`, `NY.GDP.PCAP.KD`, `SRC-WDI-001`, `WDI release 2026-07-13`, `data/charts/six_country_gdp_anchor_years.csv`, the Malaysia territorial caveat, the COVID-19 note, the `CANNOT PROVE` block, and the three anchor years.
- **Canvas-bounds check.** Every non-local `y` attribute in each SVG renders within `[0, viewBox height]`. The two negative y values detected by a bulk scan are inside the Botswana and Philippines marker symbols' local viewBoxes (`-14 … 14` for 16:9; `-18 … 18` for A4) and are intentional symbol geometry, not canvas content.
- **Contrast calculation on cream.** Data-colour contrasts match the selected system record (Ghana 4.25:1; Botswana 5.59:1; Mauritius 2.03:1; Korea 6.45:1; Malaysia 4.68:1; Philippines 5.62:1). The Mauritius repair rule is implemented in both figures.
- **Grayscale identification.** In a conceptual grayscale conversion, identity remains recoverable from full country name, marker geometry, solid/long-dashed connector, and the printed values; colour is redundant.

## Release-gate scope

This specification covers the digital, numeric, geometric, and accessibility checks. The following release gates remain outstanding and must be recorded separately before publication-wide use, per `project-control/REPORT_CHECKLIST.md` and `design/SELECTED_COMPARISON_SYSTEM.md`:

- **Physical A4 proof** inspected at trim size.
- **Named human back-row five-second comprehension test** by a reader who did not build the figure.
- **Human colour-vision review** across the six data colours and the Mauritius repair.
- **Final typography review** once the project's final typefaces are selected.

## Related files

- Frozen output CSV: `data/charts/six_country_gdp_anchor_years.csv`
- A4 figure: `design/figures/six_country_gdp_anchor_dashboard.svg`
- Projection figure: `design/figures/six_country_gdp_anchor_dashboard_16x9.svg`
- Selected production system: `design/SELECTED_COMPARISON_SYSTEM.md`
- Chart-rule summary: `design/figures/COMPARISON_SYSTEM.md`
- Comparability review (indicator-level freeze): `research/six_country_comparability_review.md`
- Frozen master data: `data/master/six_country_chart_inputs.csv` (NY.GDP.PCAP.KD rows only)
- Indicator dictionary: `data/master/six_country_indicator_dictionary.csv` (NY.GDP.PCAP.KD row)
- Source registry: `research/source_registry.csv` (`SRC-WDI-001`)
- Task log: `project-control/logs/VIS-006.md`
