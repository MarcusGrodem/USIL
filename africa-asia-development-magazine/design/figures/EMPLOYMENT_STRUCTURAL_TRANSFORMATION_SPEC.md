# Employment structural transformation — specification

**Task:** VIS-007
**Status:** REVIEW
**Chart IDs:** VIS-007-EMP-A4 (A4 landscape); VIS-007-EMP-16X9 (classroom projection)
**Produced:** 2026-10-08

## Purpose

Give the magazine and the classroom one locked family of matched three-sector employment compositions for the six scope-locked countries at the 1991 proxy anchor and the 2020 anchor. The figure is designed to pass the five-second reading test, carry visible comparability caveats, and resist being read as a uniform Africa-versus-Asia race or a causal explanation.

## Question and finding

- **Comparison question:** For each of the six scope-locked economies, how was total employment distributed between agriculture, industry, and services at the 1991 proxy for 1990 and at 2020?
- **Five-second message:** Two dated snapshots of three-sector employment composition on one common scale. The six economies start from very different mixes and end in different mixes; the chart does not establish a cause.
- **What the comparison cannot prove:** The gaps and shifts do not identify whether culture, policy, institutions, war, aid, or any other factor caused them. 2020 is affected by COVID-19. The figure is not a race between regions and must not be read as one.

## Anchor years and the 1960 exclusion

- The scope-locked anchor set is 1960, 1990, 2020 for scalar indicators that have a harmonised 1960 observation (`research/six_country_comparability_review.md`).
- The ILO modelled sector series `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS` have no harmonised 1960 observations in the frozen master. The dictionary notes `no harmonised 1960 values; 1991 is proxy for requested 1990` for all three series.
- This figure therefore prints only two years: `1991 †` (proxy for the requested 1990 anchor; `proxy_distance_years = 1` on every row) and `2020` (direct observation; pandemic-year endpoint).
- The 1960 anchor is explicitly excluded. The reading-notes band and the figure's accessible description both state the exclusion and its reason.

## Indicator and source identity

| Field | Value |
|---|---|
| Indicator codes | `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS` |
| Indicator names | Employment in agriculture / industry / services, % of total employment |
| Series origin | World Development Indicators; ILO modelled estimates |
| Universe | National employed population |
| Source record | `SRC-WDI-001` — World Bank. (2026). *World Development Indicators* [Data set]. |
| API path | Indicators API v2, source 2 |
| Release metadata | API `lastupdated=2026-07-13` |
| Retrieval date | 2026-10-06 |
| Stable destination | https://databank.worldbank.org/source/world-development-indicators |
| Frozen master rows | `data/master/six_country_chart_inputs.csv`, 36 rows filtered on `indicator_code IN (SL.AGR.EMPL.ZS, SL.IND.EMPL.ZS, SL.SRV.EMPL.ZS)` |
| Dictionary rows | `data/master/six_country_indicator_dictionary.csv`, three rows (one per sector) |
| Comparability review | `research/six_country_comparability_review.md`, section on labour composition |

Values and anchor years are drawn only from the frozen master. The specification does not permit re-querying the live WDI service, substituting a different release, back-casting to 1960, interpolation between 1991 and 2020, or anchor replacement.

Although the underlying modelled estimates are produced by the International Labour Organization, every value in this figure flows through the already-registered WDI mirror, so the figure cites `SRC-WDI-001` and names the ILO modelled origin in the deck, the metadata, and the figure note. No new source entry is required.

## Deterministic one-decimal sum-to-100 display rule

The dictionary rule from `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, and `SL.SRV.EMPL.ZS` is applied to every country-actual-year three-sector composition:

> multiply full-precision source values by 10; floor each; allocate the remaining tenths needed to reach 1000 to the largest fractional remainders; break exact ties agriculture then industry then services; publish the separate `display_value_1dp` labels and retain `value` unchanged

The 12 compositions on this figure (6 countries × 2 years) all sum to exactly 100.0 after the rule:

| Country | 1991: Agr / Ind / Srv | 2020: Agr / Ind / Srv |
|---|---:|---:|
| Ghana | 71.8 / 9.0 / 19.2 | 37.4 / 15.2 / 47.4 |
| Botswana | 12.6 / 21.3 / 66.1 | 19.5 / 15.0 / 65.5 |
| Mauritius | 19.6 / 35.0 / 45.4 | 5.3 / 23.4 / 71.3 |
| South Korea | 15.5 / 37.1 / 47.4 | 5.4 / 24.6 / 70.0 |
| Malaysia | 18.9 / 32.8 / 48.3 | 10.5 / 26.2 / 63.3 |
| Philippines | 44.1 / 16.6 / 39.3 | 24.5 / 18.7 / 56.8 |

Each displayed `display_value_1dp` matches the frozen master exactly; the underlying full-precision `value` field is preserved in the output CSV and used in the metadata but is not printed on the figure surface.

## Required visible caveats

- **1991 proxy (†):** Every applicable bar is labelled `1991 †`; the deck and reading-notes band explain that it is the plus-one proxy for the requested 1990 anchor.
- **2020 pandemic endpoint:** Every second bar is labelled `2020`; the deck and reading-notes band identify it as the pandemic endpoint.
- **No 1960 observation:** The reading-notes band and the accessibility description both state that no 1960 observation exists in the ILO modelled three-sector series, so the 1960 anchor is excluded from this figure specifically.
- **Observed anchors only:** The band states that each bar is one dated observation and that the chart does not estimate values between 1991 and 2020.
- **Not a race:** The band includes `Not a race.` and `the chart does not identify a cause.`

## Geometry — A4 landscape (VIS-007-EMP-A4)

- **File:** `design/figures/employment_structural_transformation.svg`
- **viewBox:** `0 0 1600 1100`; width/height set to 1600 × 1100.
- **Layout:** small multiples; 2 rows × 3 columns.
  - Row 1 (Africa, left→right): Ghana, Botswana, Mauritius.
  - Row 2 (Asia, left→right): South Korea, Malaysia, Philippines.
- **Panel outer size:** 480 × 300 plus heading and foot bands.
- **Panel x spans:** Panel 1 x = 60 – 540; Panel 2 x = 560 – 1040; Panel 3 x = 1060 – 1540 (margin 60; gutter 20).
- **Row 1 plot y range:** 210 (bar top) to 510 (bar baseline), plot height 300.
- **Row 2 plot y range:** 620 to 920, plot height 300.
- **Y scale:** `1% = 3 units` on both rows; a 100 % column is 300 units tall.
- **Bar geometry inside each panel:**
  - Bar 1 (1991 †) centre x = `panel_x + 145`; bar width 90.
  - Bar 2 (2020) centre x = `panel_x + 335`; bar width 90.
- **Stacking order (bottom → top):** Agriculture → Industry → Services.
- **Segment y transform:** given a bar baseline `y_base` and a running cumulative share `cum` (percent):
  - For a sector with share `s`: `y = y_base − (cum + s) × 3`, `height = s × 3`.

### Resulting A4 segment anchors (y_top for each segment, rounded to 0.01 units)

| Country | Year | Agr y_top / h | Ind y_top / h | Srv y_top / h |
|---|---|---:|---:|---:|
| Ghana | 1991 | 294.60 / 215.40 | 267.60 / 27.00 | 210.00 / 57.60 |
| Ghana | 2020 | 397.80 / 112.20 | 352.20 / 45.60 | 210.00 / 142.20 |
| Botswana | 1991 | 472.20 / 37.80 | 408.30 / 63.90 | 210.00 / 198.30 |
| Botswana | 2020 | 451.50 / 58.50 | 406.50 / 45.00 | 210.00 / 196.50 |
| Mauritius | 1991 | 451.20 / 58.80 | 346.20 / 105.00 | 210.00 / 136.20 |
| Mauritius | 2020 | 494.10 / 15.90 | 423.90 / 70.20 | 210.00 / 213.90 |
| South Korea | 2020-row 2 | 903.80 / 16.20 | 830.00 / 73.80 | 620.00 / 210.00 |
| … | | | | |

(The complete 12-row segment table is written as SVG `<rect>` attributes; the formula above regenerates every one.)

### Panel heading markers

Each panel repeats the Palette A country marker from `design/SELECTED_COMPARISON_SYSTEM.md` so grayscale readers can still identify the panel by shape as well as by the full country name:

| Country | Marker | Fill colour |
|---|---|---|
| Ghana | circle | `#B95332` |
| Botswana | square | `#3F684E` |
| Mauritius | up-triangle (charcoal keyline) | `#D6A23A` |
| South Korea | diamond | `#315A78` |
| Malaysia | hexagon | `#3E7568` |
| Philippines | cross (charcoal under-stroke) | `#A63A3A` |

Country colour is for navigation only and does not encode better/worse, richer/poorer, or success/failure.

## Geometry — classroom projection (VIS-007-EMP-16X9)

- **File:** `design/figures/employment_structural_transformation_16x9.svg`
- **viewBox:** `0 0 1280 720`; width/height set to 1280 × 720.
- **Layout:** 2 rows × 3 columns, same panel order as A4.
- **Panel x spans:** margin 44; gutter 16; panel width `(1280 − 88 − 32) / 3 ≈ 386.67` units. Panel 1 x = 44 – 430.67; Panel 2 x = 446.67 – 833.33; Panel 3 x = 849.33 – 1236.00.
- **Row 1 plot y range:** 140 – 340 (plot height 200).
- **Row 2 plot y range:** 400 – 600 (plot height 200).
- **Y scale:** `1% = 2 units` on both rows; a 100 % column is 200 units tall.
- **Bar geometry:** Bar 1 centre x = `panel_x + 110`; Bar 2 centre x = `panel_x + 270`; bar width 70.
- **Segment transform:** `y = y_base − (cum + s) × 2`, `height = s × 2`.

## Sector colour, texture, and grayscale behaviour

Country colour never identifies the sectors in this figure. Following the named reviewer’s 2026-10-09 finding that the original brown/grey/parchment set felt dull, the production revision uses a more vivid semantic palette plus a different texture for every sector. A charcoal keyline remains on every segment, so colour is not the only identifier.

| Sector | Fill | Keyline | Grayscale value class |
|---|---|---|---|
| Agriculture | `#2F6B4F` forest green + diagonal field texture | `#252525` 0.8 pt | darkest tone; cream value text |
| Industry | `#D07A32` production orange + vertical-line texture | `#252525` 0.8 pt | mid tone; charcoal value text |
| Services | `#6FA3C8` clear blue + dot texture | `#252525` 0.8 pt | lightest tone; charcoal value text |

Direct in-segment value labels print in cream `#F4F0E7` on agriculture and in charcoal `#252525` on industry and services. Any segment too thin to carry an inside label (threshold: height < 24 units on A4; < 16 units on 16:9) is directly labelled outside the bar with a leader line in charcoal; this applies to Mauritius 2020 agriculture (5.3 %) and South Korea 2020 agriculture (5.4 %) in both files.

In grayscale conversion, each stacked bar remains three bands with different lightness and texture: diagonal agriculture, vertical industry, dotted services. The full country name sits in every panel heading, and every segment carries its printed percentage. No reader relies on colour perception alone.

## Direct labels and legend behaviour

- Every panel heading carries the Palette A country marker followed by the full country name.
- Every observed sector segment carries its one-decimal percentage; the dictionary rule guarantees that the three labels in a bar sum to 100.0.
- A sector key printed at the right of the top row shows the three sector swatches and their names; this is a legend to the colour system, not to any country.
- Beneath each bar, the year label `1991 †` or `2020` is printed in tabular numerals. The shared deck and reading-notes band carry the explanations once, avoiding six repeated footers.
- No country legend is required; the panel heading and direct labels replace it.

## Reading-notes band

Three equal columns at the foot of each figure:

1. **Observed anchors only** — each bar is one dated observation; the chart does not estimate values between 1991 and 2020 and does not extrapolate before 1991 or after 2020.
2. **Visible caveats** — `†` 1991 is a plus-one proxy for the requested 1990 anchor; 2020 is the COVID-19 year for all six economies; no 1960 observation exists in the ILO modelled three-sector series.
3. **What this comparison cannot prove** — gaps and shifts do not identify whether culture, policy, institutions, war, aid, or any other factor caused them; `Not a race.`

## APA figure note

> *Note.* Share of total employment by broad sector (agriculture, industry, services), 1991 (proxy for 1990) and 2020. Data from *World Development Indicators*, ILO modelled estimates (SL.AGR.EMPL.ZS, SL.IND.EMPL.ZS, SL.SRV.EMPL.ZS), by World Bank (2026). WDI DataBank. SRC-WDI-001 . WDI release 2026-07-13; retrieved 2026-10-06 . Frozen CSV: data/charts/employment_structural_transformation.csv.

The complete bibliography reference remains:

> World Bank. (2026). *World Development Indicators* [Data set]. Retrieved October 6, 2026, from https://databank.worldbank.org/source/world-development-indicators

## Typography

Both files declare the project typeface stack (`"Montserrat" → "Helvetica Neue" → "Arial" → sans-serif`) locked by `design/TYPOGRAPHY_DECISION.md` (2026-10-09) and use `font-variant-numeric: tabular-nums lining-nums` for every percentage, year label, and axis value. The physical A4 proof and back-row five-second re-tests under the chosen family remain outstanding VIS-004 release gates.

| Role | A4 target (px in 1600 × 1100) | 16:9 target (px in 1280 × 720) |
|---|---:|---:|
| Finding headline | 44 | 28 |
| Deck / indicator line | 20 | 16 |
| Row heading (AFRICA / ASIA) | 20 | 16 |
| Country direct label (panel heading) | 24 | 18 |
| Year label (per bar foot) | 20 | 14 |
| In-segment value label | 15 | 11 |
| Reading-note head | 18 | 13 |
| Reading-note body | 15 | 11 |
| Figure-note band | 14 | 11 |

Essential axis/value type on A4 is ≥ 14 px (figure note) with every bar value at 15 px; essential axis/value type on 16:9 is ≥ 11 px. Physical A4 reproduction and the named back-row five-second test remain separate release gates as recorded for the GDP dashboard (`design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`, release gate scope).

## Accessibility metadata

- Both SVGs declare `role="img"` and `aria-labelledby="chart-title chart-desc"`.
- The `<title>` names the finding; the `<desc>` reads every one of the 36 observations, the proxy caveat, the pandemic caveat, the 1960 exclusion, and the limitation in plain prose for assistive technology.
- Each country panel group carries an `aria-label` that reads the three 1991 shares and the three 2020 shares, so a screen reader can traverse country-by-country.
- Identification is redundant: full country name + Palette A marker (circle / square / triangle / diamond / hexagon / cross) in the panel heading + sector texture (diagonal / vertical / dotted) + printed percentage. Colour is never the sole identifier.
- `<metadata>` carries the indicator codes, the source identity, the release/retrieval dates, the stable URL, the frozen master and chart-data paths, the specification path, the scale `1% = 2 or 3 units`, and the statement that every column sums to 100.0 by the dictionary rule.
- WCAG contrast for the revised sector fills:
  - Agriculture `#2F6B4F` against cream label text `#F4F0E7`: 5.53:1.
  - Industry `#D07A32` against charcoal label text `#252525`: 4.75:1.
  - Services `#6FA3C8` against charcoal label text `#252525`: 5.66:1.
  - Charcoal text `#252525` on cream ≈ 13.5:1; dark neutral `#403D38` on cream ≈ 9.5:1; neutral `#514E48` on cream ≈ 7.3:1.

## Print and projection constraints

- **A4:** target line weight ≥ 0.6 pt and segment edge ≥ 3.5 mm visible at trim. The 0.8-unit segment keylines and 1.4-unit baseline rule, scaled from the viewBox to a 297 mm wide landscape A4 trim (`≈ 5.4 units/mm`), satisfy this.
- **Projection (1280 × 720):** essential year labels at 14 px; in-segment values at 11 px; reading-note heads at 13 px; reading-note body at 11 px; segment heights ≥ 10.6 units (Mauritius 2020 agriculture, 5.3 %) with external leader labels where < 16 units; no transparency, gradient, shadow, 3D, dual axis, or decorative silhouette.
- Both files use stacked rectangles only — no smoothing, curves, or inferred between-year connectors.

## Verification record

The following checks were run on 2026-10-08.

- **Independent reparse of the output CSV against the frozen master.** For all 36 rows, `value`, `display_value_1dp`, `actual_year`, `source_id`, `source_locator`, `comparability_class`, `indicator_code`, `unit`, `caveat`, and `release_or_retrieval_date` match `data/master/six_country_chart_inputs.csv` byte-for-byte. No row is missing or duplicated.
- **Sum-to-100 check.** For each of the 12 country-actual-year compositions, the three printed `display_value_1dp` values sum to exactly 100.0 (verified by floating-point addition in Python; residual 0.0).
- **XML parse (`xmllint --noout`).** Both SVGs parse without error.
- **Rect inventory.** Each SVG contains 45 `<rect>` elements after the colour/texture revision: the original 42 elements plus 3 pattern-backing rectangles inside `<defs>`. The data inventory remains exactly 36 stacked segments (6 countries × 2 years × 3 sectors); no data rectangle was added, removed, or moved.
- **Named-reviewer layout repair.** The overlong headline was replaced with a shorter finding-led title, duplicated per-panel proxy/pandemic footers were removed, row labels no longer collide with country headings, the sector key was separated from the Mauritius heading, and the source note was shortened without removing its source ID, indicators, release date, or frozen-data path.
- **Required-string check.** Both SVGs contain `OBSERVED ANCHORS ONLY`, `VISIBLE CAVEATS`, `WHAT THIS COMPARISON CANNOT PROVE`, `Not a race.`, `SRC-WDI-001`, `WDI release 2026-07-13`, `data/charts/employment_structural_transformation.csv`, `SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS`, `ILO modelled`, `1991`, and `2020`. The only occurrences of `1960` are in the explicit exclusion note.
- **Grayscale identification.** With colour stripped, each stacked bar retains diagonal, vertical, and dotted sector textures in the same bottom-to-top order; the full country name and printed percentages identify every country-year composition; the Palette A marker shape identifies the country redundantly.

## Release-gate scope

This specification covers the digital, numeric, geometric, and accessibility checks. The following release gates remain outstanding and must be recorded separately before publication-wide use, per `project-control/REPORT_CHECKLIST.md` and `design/SELECTED_COMPARISON_SYSTEM.md`:

- **Physical A4 proof** inspected at trim size.
- **Named human back-row five-second comprehension test** by a reader who did not build the figure.
- **Human colour-vision review** across the three sector fills and the country marker set.
- **Final typography review** once the project's final typefaces are selected.

## Related files

- Frozen output CSV: `data/charts/employment_structural_transformation.csv`
- A4 figure: `design/figures/employment_structural_transformation.svg`
- Projection figure: `design/figures/employment_structural_transformation_16x9.svg`
- Selected production system: `design/SELECTED_COMPARISON_SYSTEM.md`
- Chart-rule summary: `design/figures/COMPARISON_SYSTEM.md`
- Comparability review (indicator-level freeze): `research/six_country_comparability_review.md`
- Frozen master data: `data/master/six_country_chart_inputs.csv` (36 `SL.*.EMPL.ZS` rows only)
- Indicator dictionary: `data/master/six_country_indicator_dictionary.csv` (`SL.AGR.EMPL.ZS`, `SL.IND.EMPL.ZS`, `SL.SRV.EMPL.ZS` rows)
- Source registry: `research/source_registry.csv` (`SRC-WDI-001`)
- Task log: `project-control/logs/VIS-007.md`
