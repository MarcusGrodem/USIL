# Manufacturing share of GDP — specification

**Task:** VIS-008
**Status:** REVIEW
**Chart IDs:** VIS-008-MANF-A4 (A4 landscape); VIS-008-MANF-16X9 (classroom projection)
**Produced:** 2026-10-08

## Purpose

Give the magazine and the classroom one locked family of matched manufacturing-share observations for the six scope-locked countries at the three scope-locked anchor years, showing the gaps where the frozen master is silent rather than filling them. The figure is designed to pass the five-second reading test, carry visible comparability caveats, and resist being read as a race between regions or as a causal explanation.

## Question and finding

- **Comparison question:** For each of the six scope-locked economies, what manufacturing value added as a share of GDP (current-price, NV.IND.MANF.ZS) does the frozen WDI release 2026-07-13 record at the independence-era baseline (1960), the mid-industrialisation snapshot (1990), and the outcome snapshot (2020)?
- **Five-second message:** Observed manufacturing shares at three anchor years on one shared axis, with gaps shown where the frozen master is silent. African and Asian paths both vary within their region; the chart does not establish a cause.
- **What the comparison cannot prove:** The gaps do not identify whether culture, policy, institutions, war, aid, or any other factor caused them. 2020 is affected by COVID-19. Current-price manufacturing shares reflect price and composition effects as well as volume. The figure is not a race between regions and must not be read as one.

## Indicator and source identity

| Field | Value |
|---|---|
| Indicator code | `NV.IND.MANF.ZS` |
| Indicator name | Manufacturing, value added (% of GDP) |
| Price basis | Current-price (nominal, local currency ratio to current-price GDP) |
| Universe | National economy |
| Source record | `SRC-WDI-001` — World Bank. (2026). *World Development Indicators* [Data set]. |
| Series origin | WDI Indicators API v2, source 2 |
| Release metadata | API `lastupdated=2026-07-13` |
| Retrieval date | 2026-10-06 |
| Stable destination | https://databank.worldbank.org/source/world-development-indicators |
| Frozen master rows | `data/master/six_country_chart_inputs.csv`, 15 rows filtered on `indicator_code = NV.IND.MANF.ZS` |
| Dictionary rule | one-decimal percentage point |
| Comparability review | `research/six_country_comparability_review.md`, section on structural composition |

Values and anchor years are drawn only from the frozen master. The specification does not permit re-querying the live WDI service, substituting a different release, back-casting a missing anchor, interpolation, or anchor replacement. Narrative-only historical vintages from other national-accounts sources are shown as text annotations and are never connected to any plotted trajectory.

## Frozen observations (full precision)

Values used in geometric calculations. Printed labels round to one decimal (`XX.X %`).

| Country | Region | Requested year | Actual year | Value (`NV.IND.MANF.ZS`) | Display | Comparability class | Caveat |
|---|---|---:|---:|---:|---:|---|---|
| Ghana | Africa | 1960 | 1965 | 9.75443383356071 | 9.8 % † | APPROVED_WITH_VISIBLE_CAVEAT | Five-year proxy; print 1965, not 1960. |
| Ghana | Africa | 1990 | 1990 | 9.76285290799468 | 9.8 % | APPROVED_FOR_DIRECT_COMPARISON | Current-price share; Philippines excluded because its 1990 value is another national-accounts vintage. |
| Ghana | Africa | 2020 | 2020 | 10.9530558483938 | 11.0 % | APPROVED_FOR_DIRECT_COMPARISON | Pandemic-year current-price composition effect. |
| Botswana | Africa | 1960 | 1965 | 11.5853658536585 | 11.6 % † | APPROVED_WITH_VISIBLE_CAVEAT | Five-year pre-independence proxy; print 1965, not 1960. |
| Botswana | Africa | 1990 | 1990 | 4.77075017547342 | 4.8 % | APPROVED_FOR_DIRECT_COMPARISON | Current-price share. |
| Botswana | Africa | 2020 | 2020 | 5.65905088338406 | 5.7 % | APPROVED_FOR_DIRECT_COMPARISON | Pandemic-year current-price composition effect. |
| Mauritius | Africa | 1960 | — | not available in frozen master | — | — | Mauritius 1960 is not available in `NV.IND.MANF.ZS` on WDI release 2026-07-13; no marker is drawn and no value is implied. |
| Mauritius | Africa | 1990 | 1990 | 20.3722570941437 | 20.4 % | APPROVED_FOR_DIRECT_COMPARISON | Current-price share. |
| Mauritius | Africa | 2020 | 2020 | 10.6686355036685 | 10.7 % | APPROVED_FOR_DIRECT_COMPARISON | Pandemic-year current-price composition effect. |
| South Korea | Asia | 1960 | 1960 | 11.4035087719298 | 11.4 % | APPROVED_FOR_DIRECT_COMPARISON | — |
| South Korea | Asia | 1990 | 1990 | 25.2385195677477 | 25.2 % | APPROVED_FOR_DIRECT_COMPARISON | Current-price share. |
| South Korea | Asia | 2020 | 2020 | 25.7002433607737 | 25.7 % | APPROVED_FOR_DIRECT_COMPARISON | Pandemic-year current-price composition effect. |
| Malaysia | Asia | 1960 | 1960 | 10.2609802250256 | 10.3 % † | APPROVED_WITH_VISIBLE_CAVEAT | Retrospective territorial series predates the 1963 formation of Malaysia. |
| Malaysia | Asia | 1990 | 1990 | 24.2246873976537 | 24.2 % | APPROVED_FOR_DIRECT_COMPARISON | Current-price share. |
| Malaysia | Asia | 2020 | 2020 | 22.2320858423886 | 22.2 % | APPROVED_FOR_DIRECT_COMPARISON | Pandemic-year current-price composition effect. |
| Philippines | Asia | 1960 | — | NARRATIVE ONLY ≈ 18.9 % (World Bank 1980 Part II para. 1.11 p. 4) | — | — | Not in the frozen master; not plotted; shown as a text annotation only. |
| Philippines | Asia | 1990 | — | NARRATIVE ONLY 24.8 % (Yusuf & Nabeshima 2010 Fig. 4.16 p. 141) | — | — | Not in the frozen master; not plotted; shown as a text annotation only. |
| Philippines | Asia | 2020 | 2020 | 17.6581790478661 | 17.7 % | APPROVED_FOR_DIRECT_COMPARISON | Pandemic-year current-price composition effect. |

Published rounded labels (plotted only): Ghana `9.8 % †` / `9.8 %` / `11.0 %`; Botswana `11.6 % †` / `4.8 %` / `5.7 %`; Mauritius absent / `20.4 %` / `10.7 %`; South Korea `11.4 %` / `25.2 %` / `25.7 %`; Malaysia `10.3 % †` / `24.2 %` / `22.2 %`; Philippines absent / absent / `17.7 %`.

## Required visible caveats

- **Ghana 1965 and Botswana 1965 (†):** Year label `1965 †`; value label carries `†`; reading-notes band explains the five-year proxy and that `1965`, not `1960`, is printed.
- **Malaysia 1960 (†):** Year label `1960 †`; value label carries `†`; reading-notes band explains the retrospective territorial series across the 1963 formation of Malaysia.
- **Mauritius 1960 absence:** No marker is drawn at the 1960 anchor; the panel prints an inline note `Mauritius 1960 — not available in NV.IND.MANF.ZS frozen master` right-aligned with the 1960 x-anchor. The connector between Mauritius 1990 and Mauritius 2020 stops at the 1990 marker; no inferred earlier segment is drawn.
- **Philippines 1960 and 1990 (NARRATIVE ONLY):** No Palette A marker is drawn at the 1960 and 1990 x-anchors. Each anchor carries a distinct text annotation with a dotted charcoal rule (not a solid connector), labelled `NARRATIVE ONLY — different vintage`, printing the historical value and its shortened source citation: at 1960, `≈ 18.9 %` with `World Bank 1980 Part II p. 4 (NEDA)`; at 1990, `24.8 %` with `Yusuf & Nabeshima 2010 Fig. 4.16 p. 141`. **No connector of any kind links either narrative annotation to the Philippines 2020 marker.**
- **2020 pandemic endpoint:** Reading-notes band records that the 2020 observation is a COVID-19-year current-price share for every country.
- **Observed anchors only:** The figure prints `OBSERVED ANCHORS ONLY` and states explicitly that connectors link only the master-approved manufacturing observations and that narrative-only historical vintages are shown as text and never connected.
- **Not a race:** The reading-notes band includes `Not a race.` and `the chart does not identify a cause.`

## Geometry — A4 landscape (VIS-008-MANF-A4)

- **File:** `design/figures/manufacturing_share.svg`
- **viewBox:** `0 0 1600 1100`; width 1600 height 1100.
- **Layout:** small multiples; 2 rows × 3 columns. Row 1 Africa (Ghana, Botswana, Mauritius). Row 2 Asia (South Korea, Malaysia, Philippines).
- **Shared y domain:** 0 % to 30 %. (Max plotted value is Korea 2020 at 25.70 %.)
- **Row 1 plot y range:** 220 to 550 (plot height = 330 units).
- **Row 2 plot y range:** 620 to 950 (plot height = 330 units).
- **Y transform:** `y = y_baseline − value × 11`, where `y_baseline` is 550 (Row 1) or 950 (Row 2); 330 units / 30 % = 11 units per percent.
- **Y tick anchors (Row 1):** 30 % → 220; 20 % → 330; 10 % → 440; 0 % → 550.
- **Y tick anchors (Row 2):** 30 % → 620; 20 % → 730; 10 % → 840; 0 % → 950.
- **Panel plot x spans:** Panel 1 x=146–606; Panel 2 x=626–1086; Panel 3 x=1106–1566.
- **Year anchor x positions (identical to VIS-006):**
  - Panel 1: 1960 → 206; 1990 → 376; 2020 → 546.
  - Panel 2: 1960 → 686; 1990 → 856; 2020 → 1026.
  - Panel 3: 1960 → 1166; 1990 → 1336; 2020 → 1506.
- **Plotted marker centres (x, y):**
  - Ghana (Panel 1, Row 1): (206, 442.7012278308321) `1965 †`; (376, 442.6086180120585) `1990`; (546, 429.5163856676682) `2020`.
  - Botswana (Panel 2, Row 1): (686, 422.5609756097565) `1965 †`; (856, 497.5217480697924) `1990`; (1026, 487.7504402827753) `2020`.
  - Mauritius (Panel 3, Row 1): no 1960 marker; (1336, 325.9051719644193) `1990`; (1506, 432.6450094596465) `2020`.
  - South Korea (Panel 1, Row 2): (206, 824.5614035087722); (376, 672.3762847547753); (546, 667.2973230314893).
  - Malaysia (Panel 2, Row 2): (686, 837.1292175247184) `1960 †`; (856, 683.5284386258093); (1026, 705.4470557337254).
  - Philippines (Panel 3, Row 2): no 1960 marker; no 1990 marker; (1506, 755.7600304734729) `2020`.

## Geometry — classroom projection (VIS-008-MANF-16X9)

- **File:** `design/figures/manufacturing_share_16x9.svg`
- **viewBox:** `0 0 1280 720`; width 1280 height 720.
- **Layout:** 2 rows × 3 columns, same panel order as A4.
- **Shared y domain:** 0 % to 30 %.
- **Row 1 plot y range:** 105 to 305 (plot height = 200 units).
- **Row 2 plot y range:** 368 to 568 (plot height = 200 units).
- **Y transform:** `y = y_baseline − value × (20 / 3)`, where `y_baseline` is 305 (Row 1) or 568 (Row 2); 200 units / 30 % = 20/3 units per percent.
- **Y tick anchors (Row 1):** 30 % → 105; 20 % → 171.6667; 10 % → 238.3333; 0 % → 305.
- **Y tick anchors (Row 2):** 30 % → 368; 20 % → 434.6667; 10 % → 501.3333; 0 % → 568.
- **Panel plot x spans:** Panel 1 x=78–455; Panel 2 x=478–855; Panel 3 x=878–1255.
- **Year anchor x positions:** Panel 1 (125, 270, 415); Panel 2 (525, 670, 815); Panel 3 (925, 1070, 1215).
- **Plotted marker centres (x, y):**
  - Ghana (P1 R1): (125, 239.9704411095953); (270, 239.9143139467022); (415, 231.9796276773747).
  - Botswana (P2 R1): (525, 227.7642276422767); (670, 273.1949988301771); (815, 267.2729941107730).
  - Mauritius (P3 R1): no 1960 marker; (1070, 169.1849527057087); (1215, 233.8757632875433).
  - South Korea (P1 R2): (125, 491.9766081871347); (270, 399.7432028816820); (415, 396.6650442615087).
  - Malaysia (P2 R2): (525, 499.5934651664959); (670, 406.5020840156420); (815, 419.7860943840760).
  - Philippines (P3 R2): no 1960 marker; no 1990 marker; (1215, 450.2788063475593).

## Country identification system

Both files use the Palette A country identities from `design/SELECTED_COMPARISON_SYSTEM.md`. Every country is identified by full name + fixed marker + stable data colour so colour is never the only identifier.

| Country | Marker | Fill (data colour) | Keyline / under-stroke | Connector |
|---|---|---|---|---|
| Ghana | filled circle | `#B95332` | charcoal `#252525` 1.6 pt | solid terracotta |
| Botswana | filled square | `#3F684E` | charcoal 1.6 pt | solid green |
| Mauritius | filled up-triangle | `#D6A23A` | mandatory charcoal 1.8 pt keyline **and** charcoal under-stroke 1.5× the ochre connector width | ochre on top of charcoal under-stroke (1990 → 2020 only) |
| South Korea | filled diamond | `#315A78` | charcoal 1.6 pt | long-dash (A4 `22 14`; 16:9 `20 12`) |
| Malaysia | filled hexagon | `#3E7568` | charcoal 1.6 pt | solid jade |
| Philippines | cross | `#A63A3A` | charcoal under-stroke 7 pt (A4) / 6 pt (16:9) with thinner `#A63A3A` stroke on top | no connector of any kind on this figure — only one plotted marker (2020) |

No cross-country ranking is implied. Country colours and panel order are navigation only — not better/worse, richer/poorer, success/failure, or a uniform regional path.

## Direct labels and legend behaviour

- Every panel heading carries the Palette A marker followed by the full country name.
- Every observed anchor carries its one-decimal percentage label.
- Every panel repeats the three year labels (`1960` or `1965 †`, `1990`, `2020`) immediately beneath the baseline.
- Ghana 1965, Botswana 1965, and Malaysia 1960 carry `†` on both the value label and the year label; the reading-notes band carries the full explanation.
- The Mauritius 1960 x-anchor is labelled `1960` only in the inline-note area; no value is implied.
- The Philippines 1960 and 1990 x-anchors carry year labels only; narrative annotations with dotted rules sit above them.
- No country legend is required; the panel heading and direct labels replace it.

## Reading-notes band

Three equal columns at the foot of each figure:

1. **OBSERVED ANCHORS ONLY** — Straight connectors link only the master-approved manufacturing observations; narrative-only historical vintages are shown as text and never connected.
2. **VISIBLE CAVEATS** — `1965 †` five-year proxies for Ghana and Botswana; Malaysia 1960 territorial series; Mauritius 1960 absent from the frozen master; Philippines 1960 and 1990 are NARRATIVE ONLY historical vintages from incompatible national-accounts sources and are never connected to the 2020 WDI observation; current-price share; 2020 pandemic composition effect.
3. **WHAT THIS COMPARISON CANNOT PROVE** — Gaps do not identify whether culture, policy, institutions, war, aid, or any other factor caused them; manufacturing-share change at current prices reflects price and composition effects as well as volume. `Not a race.`

## APA figure note

> *Note.* Manufacturing value added as a share of GDP, current prices. Data from *World Development Indicators* (NV.IND.MANF.ZS), by World Bank (2026). WDI DataBank. SRC-WDI-001 · WDI release 2026-07-13; retrieved 2026-10-06 · Frozen CSV: data/charts/manufacturing_share.csv. Philippines 1960 (≈ 18.9 %) and 1990 (24.8 %) are NARRATIVE_ONLY historical vintages (World Bank, 1980; Yusuf & Nabeshima, 2010), not connected to the current WDI 2020 observation.

Bibliography entries:

> World Bank. (2026). *World Development Indicators* [Data set]. Retrieved October 6, 2026, from https://databank.worldbank.org/source/world-development-indicators
> World Bank. (1980). *Philippines: Industrial development strategy and policies*, Part II, paragraph 1.11, page 4 (NEDA source).
> Yusuf, S., & Nabeshima, K. (2010). *Changing the industrial geography in Asia: The impact of China and India*, Figure 4.16, page 141. World Bank.

## Typography

Both files declare an explicit readable fallback stack (`"Aptos" / "Aptos Display" → "Helvetica Neue" → "Arial" → sans-serif`) and use `font-variant-numeric: tabular-nums` for every percentage, year label, and axis value.

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
| Narrative-tag `NARRATIVE ONLY` | 16 | 14 |
| Narrative-value / cite | 20 / 15 | 16 / 14 |
| Absence note (`Mauritius 1960 …`) | 15 | 14 |
| Eyebrow | 22 | 18 |

Both files meet the selected-system typography minima: essential axis / year / value type is ≥ 22 px on A4 and ≥ 22 px on 16:9; narrative-only annotations are ≥ 14 px on the smaller canvas.

## Accessibility metadata

- Both SVGs declare `role="img"` and `aria-labelledby="chart-title chart-desc"`.
- The `<title>` names the finding; the `<desc>` reads every plotted observation, the Mauritius 1960 absence, the Philippines 1960/1990 narrative-only treatment, every visible caveat, the limitation, and the explicit statement that no cross-country ranking is implied.
- Each country panel group carries an `aria-label` that reads only its plotted values (not the narrative-only ones) and names the exclusions. The Philippines narrative annotations carry their own nested `aria-label` groups so a screen reader can enter them separately.
- Country identification is redundant: full name + marker shape + fixed colour + value label. Colour is never the sole identifier. The Mauritius repair rule (charcoal keyline and under-stroke) is applied to the 1990 → 2020 connector.
- `<metadata>` carries: indicator code, source identity (SRC-WDI-001), release/retrieval dates, stable URL, frozen master path, frozen chart CSV path, specification path, the y transform for each canvas, panel x positions, every plotted marker centre, every narrative-only text anchor position, the Mauritius 1960 absence anchor, and an explicit statement that no cross-country ranking is implied.

## Print and projection constraints

- **A4 (final trim 420 × 297 mm at full spread or 297 × 210 mm single page landscape):** target line weight ≥ 0.6 pt and marker diameter ≥ 3.5 mm at trim. Strokes of 1.3–2.5 units and markers of 24–36 units satisfy that when the viewBox fits a 297 mm wide trim (≈ 5.4 units/mm).
- **Projection (1280 × 720):** essential axes/years/values at ≥ 22 px; supporting notes at ≥ 18 px; narrative annotations at ≥ 14 px; no transparency, gradient, shadow, 3D, dual axis, or decorative silhouette.
- Both files use only straight connectors between observed anchors, with the dotted charcoal rules on the Philippines narrative-only annotations treated as text ornaments, not as connectors. No smoothing is applied.
- **Current-price caveat.** Manufacturing-share change at current prices reflects price and composition effects as well as volume. The figure records this in the reading-notes band and the figure note.

## Narrative-only treatment of Philippines 1960 and 1990

The DATA-006 disposition classifies the Philippines 1960 and 1990 manufacturing-share historical vintages as NARRATIVE ONLY. They are preserved in `data/philippines.md` section 4 as narrative-only citations and are not written into `data/master/six_country_chart_inputs.csv` or `data/charts/manufacturing_share.csv`. On this figure:

- Neither year carries a Palette A Philippines marker.
- Each year carries a distinct text annotation at the panel's y-position for that historical value, prefixed `NARRATIVE ONLY — different vintage`.
- A short dotted charcoal rule (`stroke-dasharray: 2 4` on A4; `2 3` on 16:9) sits above the text to signal that it is not a plotted datum.
- **No connector of any kind (line, polyline, path, or Mauritius-style under-stroke) links either narrative annotation to the 2020 Philippines marker.** This is the central disposition rule of VIS-008.
- Citations are shortened on-figure to keep the panel legible: `World Bank 1980 Part II p. 4 (NEDA)` and `Yusuf & Nabeshima 2010 Fig. 4.16 p. 141`. Full bibliographic entries live in the APA figure-note block.

## Mauritius 1960 absence

The frozen WDI release 2026-07-13 does not provide a `NV.IND.MANF.ZS` observation for Mauritius 1960. The figure does not fabricate one. On this figure:

- No marker is drawn at the Mauritius 1960 x-anchor.
- A plain inline absence note sits right-aligned with the 1960 x-anchor: `Mauritius 1960 — not available in NV.IND.MANF.ZS frozen master`.
- The Palette A ochre connector begins at the Mauritius 1990 marker and ends at the Mauritius 2020 marker. There is no inferred 1960 segment, no backward extrapolation, and no visual bridge between the 1960 x-anchor and either observed marker.

## Verification record

The following checks were run on 2026-10-08.

- **Independent reparse of `data/charts/manufacturing_share.csv` against the frozen master.** All 15 rows match `data/master/six_country_chart_inputs.csv` byte-for-byte on `value`, `actual_year`, `source_id`, `source_locator`, `comparability_class`, `indicator_code`, `caveat`, and `release_or_retrieval_date`. No row is missing or duplicated. No Philippines 1960 or 1990 row was added. (Reparse errors: 0.)
- **XML parse (`xmllint --noout`).** Both SVGs parse without error.
- **Marker-coordinate reparse.** For every one of the 15 plotted observations in each SVG, the `<use>` element's rendered centre `(x + width/2, y + height/2)` is within 0.5 x units and 0.01 y units of the geometry formula `y = y_baseline − value × (plot_height / 30)`. Panel x positions match the specification exactly. (Marker-centre errors: 0 on A4; 0 on 16:9.)
- **Marker count.** Each SVG contains exactly 21 `<use>` marker references: 6 panel-heading badges + 15 plot observations. No stray plot markers exist outside the six country observation groups. No marker is rendered at the Philippines 1960, Philippines 1990, or Mauritius 1960 anchor.
- **Required-string check.** Both SVGs contain `NV.IND.MANF.ZS`, `SRC-WDI-001`, `WDI release 2026-07-13`, `data/charts/manufacturing_share.csv`, `NARRATIVE ONLY`, `World Bank 1980`, `Yusuf & Nabeshima 2010` (encoded `Yusuf &amp; Nabeshima 2010`), `Not a race.`, `CANNOT PROVE`, `1965 †`, `1960 †`, `pandemic`, `Mauritius 1960`, `current-price`, and `% of GDP`.
- **No-connector grep.** No line, polyline, or path element in either SVG connects a Philippines narrative-only anchor to the Philippines 2020 marker (A4 pairs `1166,1506` and `1336,1506`: 0 bad connectors; 16:9 pairs `925,1215` and `1070,1215`: 0 bad connectors). No connector bridges the Mauritius 1960 anchor to any marker (A4 pair `1166,1336`: 0 bad connectors; 16:9 pair `925,1070`: 0 bad connectors). The Mauritius 1990 → 2020 connector is the only Mauritius connector in each SVG. Polyline count: 0 in each file.
- **Canvas-bounds check.** Every non-symbol-local `y` attribute in each SVG renders within `[0, viewBox_height]`. The two negative `y` values detected by a bulk scan are inside the Botswana symbol's local viewBox (`-11` on A4, `-8.5` on 16:9) and are intentional symbol geometry, not canvas content.

## Release-gate scope

This specification covers the digital, numeric, geometric, and accessibility checks. The following release gates remain outstanding and must be recorded separately before publication-wide use, per `project-control/REPORT_CHECKLIST.md` and `design/SELECTED_COMPARISON_SYSTEM.md`:

- **Physical A4 proof** inspected at trim size.
- **Named human back-row five-second comprehension test** by a reader who did not build the figure (controller task CTRL-017 handles reviewer assignment; VIS-004 holds the publication-wide gate).
- **Human colour-vision review** across the six data colours and the Mauritius repair.
- **Final typography review** once the project's final typefaces are selected.

## Related files

- Frozen output CSV: `data/charts/manufacturing_share.csv`
- A4 figure: `design/figures/manufacturing_share.svg`
- Projection figure: `design/figures/manufacturing_share_16x9.svg`
- Selected production system: `design/SELECTED_COMPARISON_SYSTEM.md`
- Chart-rule summary: `design/figures/COMPARISON_SYSTEM.md`
- Companion GDP dashboard spec: `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`
- Companion employment composition spec: `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`
- Comparability review (indicator-level freeze): `research/six_country_comparability_review.md`
- Frozen master data: `data/master/six_country_chart_inputs.csv` (`NV.IND.MANF.ZS` rows only — 15 rows)
- Narrative-only Philippines vintages: `data/philippines.md` section 4 "Manufacturing share of GDP"
- Source registry: `research/source_registry.csv` (`SRC-WDI-001`)
- Task log: `project-control/logs/VIS-008.md`
