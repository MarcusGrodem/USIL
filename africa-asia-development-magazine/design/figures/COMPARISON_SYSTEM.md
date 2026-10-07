# Fixed comparison-chart system

**Task:** VIS-001  
**Status:** REVIEW  
**Applies to:** the six locked country cases and the anchor years 1960, 1990, and 2020  
**Design authority:** `PRODUCT.md`, `SCOPE_LOCK.md`, `design/DESIGN_GUIDE.md`, and `design/africa_asia_colour_palette.md`

## Purpose

This system makes a comparison readable in five seconds and auditable in thirty. Country colour is stable across the magazine, but colour never carries identity alone. Every country also has a fixed marker, every series is directly labelled, and every direct comparison uses one definition, unit, year set, geometry, and scale.

Country colours identify cases; they do **not** encode better/worse, richer/poorer, or success/failure. The three African cases use the approved Africa palette and the three Asian cases use the approved Asia palette. Assignments reflect each case's editorial role while preserving the palette's published meanings.

## Locked country identities

| Region | Country | Colour | Fixed marker | Marker construction | Editorial logic |
|---|---|---:|---|---|---|
| Africa | Ghana | `#B95332` terracotta | Circle | filled circle with charcoal keyline | The main African case uses the palette's primary Africa case-marker colour. |
| Africa | Botswana | `#3F684E` green | Square | filled square with charcoal keyline | Green is reserved in the guide for institutional and development elements, matching Botswana's counterexample role. |
| Africa | Mauritius | `#D6A23A` ochre | Up-triangle | filled equilateral triangle with charcoal keyline | Ochre is used for historical notes and adaptation, matching the Continuity + Adaptation test. |
| Asia | South Korea | `#315A78` blue | Diamond | filled diamond with charcoal keyline | Blue is reserved for industrialisation and trade, central to the principal Ghana–Korea comparison. |
| Asia | Malaysia | `#3E7568` jade | Hexagon | filled regular hexagon with charcoal keyline | Jade is reserved for infrastructure and capability, fitting the middle-development-path case. |
| Asia | Philippines | `#A63A3A` red | Cross | charcoal under-stroke plus two red perpendicular strokes | Red is the remaining approved Asia case-marker colour. It is an identifier, not a warning or negative judgement. |

Use the exact hex values and marker constructions above in every chart, map locator, timeline, and country label. Do not swap colours to improve a single composition. If a figure focuses on one country, keep that country saturated and move non-country context to charcoal or grey rather than inventing a new hue.

### Colour-independent use

- Put the fixed marker at every observed point and beside every direct country label.
- Give every marker a charcoal keyline or under-stroke. Ochre is only 2.03:1 against cream, so Mauritius connectors also require a charcoal under-stroke or a visible line pattern; colour alone is never the edge.
- Direct-label lines, panels, or rows; do not require a legend to decode the principal comparison.
- On a line or slope, use a minimum 3 pt stroke at final A4 size and markers at least 3.5 mm across.
- When two series overlap, keep both marks visible with a cream keyline, leader labels, or a documented collision offset. Never move a mark along the value axis.
- For dense monochrome reproduction, add line patterns only as a secondary aid: solid for the focal case and long-dash for its paired case. Marker and label remain authoritative.
- Never use red/green alone to mean loss/gain. Direction requires a sign, arrow, wording, or numeric value.

## Shared visual constants

| Element | Specification |
|---|---|
| Page background | Cream `#F4F0E7` |
| Primary text | Charcoal `#252525` |
| Rules/grid | Secondary grey `#B7B0A4`; sparse horizontal rules only |
| Country colour | Locked mapping above; never used as body-text colour |
| Type | Publication sans with tabular numerals; the SVG uses `Aptos, Helvetica Neue, sans-serif` until the magazine typefaces are selected |
| Minimum final A4 type | 10 pt for source/limitation notes; 11 pt for axes and value labels; 14 pt for subtitle; 25 pt for title |
| Numeric precision | Whole dollars for GDP per capita here; no decimals unless interpretation requires them |
| Axis | Zero baseline for bars; shared domain and ticks for direct comparisons; disclose and justify any non-zero line-chart baseline |
| Labels | Country name plus fixed marker; visible values at all three anchors; unit and actual year printed |
| Missing data | Show a labelled gap. Never connect through it or substitute an anchor silently. |
| Proxy year | Print the actual year next to the value and explain the proxy in the note. |
| Observation links | Straight segments may connect observed anchors only when the note states that they guide the eye and do not represent intervening annual observations. Never smooth. |

## Choosing the chart form

### Paired trajectories

Use for two countries when the question is how observed levels diverged or converged across at least three matched years. Both series share one plot, axis, ticks, unit, and year positions. Show only verified observations; use straight connectors and explicitly say they do not imply annual values. Direct-label the series at the end and retain fixed markers at every observation.

Do not use when the countries have different definitions, price bases, proxy years, or axis domains. Repair the comparison or use separate, clearly qualified context panels.

### Dot or slope charts

Use a dot plot for one matched year across countries, or a slope chart for change between exactly two matched years. Start a magnitude axis at zero unless the graphic is explicitly about small differences and the truncated scale is prominently disclosed. Use fixed markers, direct values, and stable country order.

Do not turn three anchor years into a decorative slope chart if labels will collide; paired trajectories or small multiples are clearer.

### Small multiples

Use for three to six countries, especially where six lines would cross or hide variation. Panels must have identical plot dimensions, axes, ticks, units, definitions, and anchor positions. Order panels by the editorial comparison, not by whichever order produces the prettiest grid. Put the fixed country marker in each panel heading.

### 100% composition charts

Use only when categories are mutually exclusive and exhaustive parts of the same whole, measured with the same taxonomy and denominator. Appropriate examples include matched employment-sector shares or export composition **after** classification harmonisation. Print segment values when space allows and use direct labels or consistent patterns.

Do not use if categories omit an “other” share, if totals do not equal 100% after rounding, or if HS revisions/sector definitions differ without a visible reconciliation.

### Mirrored dashboards

Use for a paired country snapshot when several indicators share a year but not a unit. Each row is its own matched mini-scale with Ghana and South Korea mirrored around a labelled centre; never place different units on one continuous axis. Keep row order and domains identical on both sides. A mirrored dashboard compares profiles, not a causal chain.

### Maps

Use only when location, distance, boundary, route, colonial control, or spatial distribution is the analytical question. Country colours may identify the six case locations, but quantitative choropleths use a documented sequential scale; diverging scales require a meaningful midpoint. Date historical boundaries, label disputes/changes, cite the geometry and data separately, and include direct labels or a compact legend.

Do not use decorative continent silhouettes or resize countries by a non-spatial statistic unless the distortion is the explicit, sourced argument.

## Required chart anatomy

Every comparison figure must include, in reading order:

1. a finding-led title;
2. a factual subtitle naming indicator, unit, cases, and years;
3. one plot with matched geometry and visible axis unit;
4. fixed markers, direct country labels, and visible values;
5. gap/proxy/interpolation disclosure where relevant;
6. a concise “What this cannot prove” statement;
7. an APA-style figure note with indicator code, source ID, retrieval/release information, and stable URL;
8. a saved tidy data file and an editable source.

Each chart specification records: chart ID, question, finding, indicator code and definition, unit and price basis, countries, actual years, values, source IDs, scale/domain/ticks, geometry, markers, labels, annotations, missing/proxy treatment, limitation, verifier, and verification date.

## Proof figure: VIS-001-GDP-01

| Field | Locked specification |
|---|---|
| Question | How did matched GDP per capita observations in Ghana and South Korea diverge from 1960 to 2020? |
| Finding | The countries were near parity in 1960; South Korea's observed 2020 level was 16.9 times Ghana's. |
| Indicator | `NY.GDP.PCAP.KD` — GDP per capita (constant 2015 US$) |
| Countries | Ghana and South Korea |
| Years | 1960, 1990, 2020 only |
| Values | Ghana: 1,100.76305218242; 855.85250708181; 1,970.19411460398. South Korea: 1,037.72899231615; 9,672.57845182894; 33,215.9298928108. |
| Source | `SRC-WDI-001`; World Bank (2026), World Development Indicators; WDI API v2, source 2; retrieved 2026-10-04 |
| Geometry | One shared 0–35,000 vertical axis; identical year positions; straight point-to-point connectors only |
| Ticks | 0, 10,000, 20,000, 30,000, 35,000 constant 2015 US$ |
| Identification | Ghana terracotta circles with solid connector; South Korea blue diamonds with long-dash connector; direct labels and all six values |
| Missing/proxy treatment | None; all six are observations at the locked anchors |
| Intervening years | Not plotted. Connectors only guide the eye and do not represent annual observations. |
| Limitation | The comparison describes income divergence; it cannot identify whether culture, policy, institutions, war, aid, or another factor caused it. 2020 is also the COVID-19 year. |
| Files | `data/charts/ghana_korea_gdp_per_capita.csv`; `design/figures/ghana_korea_gdp_per_capita.svg` |

## Verification gates

### Data and comparability

- Match every plotted value to an approved claim and registered source ID.
- Confirm indicator code, price basis, unit, countries, and actual years.
- Recalculate any derived ratio from the frozen CSV, not from rounded labels.
- Confirm one shared axis and one transform for every compared mark.
- Confirm that the SVG contains no unobserved or silently interpolated values.

### A4 and accessibility

- Inspect at intended A4 placement, at 100% print size, and in grayscale.
- Minimum chart/source type is 10 pt at final size; do not reuse the old prototypes' 6.5–9 px labels.
- Body/source text uses charcoal on cream. Country colour is confined to thick marks, connectors, and small identifiers.
- Checked contrast against cream: charcoal 13.48:1, dark axis text 7.29:1, terracotta 4.25:1, and South Korea blue 6.45:1. The proof figure therefore exceeds 4.5:1 for text and 3:1 for essential coloured marks; grey gridlines are non-essential decoration.
- Text, values, units, and fixed markers remain sufficient if all colour is removed.
- Digital SVGs require meaningful `<title>` and `<desc>` elements in reading order.

### Five-second comprehension check

Ask a reader who did not make the chart, without supplying body copy:

1. What is measured?
2. Which countries are compared?
3. What years and unit are shown?
4. What is the main difference or direction?
5. Can each series be identified without a legend?

Record the tester, date, answers, and revisions. Self-inspection may identify problems, but it is **not** an independent pass.

## Prototype warning

`design/ghana_spread_draft.html` and `design/south_korea_spread_draft.html` are visual prototypes, not approved evidence graphics. Their GDP charts use mismatched vertical axes (Ghana roughly 0–2,000; South Korea 0–35,000) despite “same axis” wording, show tiny 6.5–9 px chart text, and include smoothed or approximate observations between the approved anchor years. Do not publish, cite, or copy those plots. They may remain only as historical layout experiments.
