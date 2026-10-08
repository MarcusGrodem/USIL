# Selected comparison-chart system

**Task:** VIS-002

**Status:** REVIEW

**User selection date:** 2026-10-07

**Selected direction:** Spread A, Evidence Ledger + Palette A, Inherited Editorial, with mandatory Mauritius repair and a separate national-accent layer

**Full editorial specification:** `design/SELECTED_COMPARISON_SYSTEM.md`

The showroom decision now authorises this system as the selected production direction. It does not approve final pages, final typography, rights-gated imagery, physical printing, human colour-vision performance, or human classroom readability. Spreads B/C and Palettes B/C remain preserved rejected alternatives in `design/showroom/`; the original VIS-001 proof SVG remains unchanged.

## Purpose

Make each comparison readable in five seconds and auditable in thirty. Every direct comparison uses matched definitions, units, years, dimensions, and scales. Country identity is redundant: full name, unique marker, stable data colour, and where useful a line pattern.

Country colour identifies a case only. It never encodes better/worse, richer/poorer, success/failure, or a uniform African or Asian path.

## Selected country identities

| Region | Country | Data colour | Marker | Construction |
|---|---|---:|---|---|
| Africa | Ghana | `#B95332` | circle | filled circle with charcoal keyline |
| Africa | Botswana | `#3F684E` | square | filled square with charcoal keyline |
| Africa | Mauritius | `#D6A23A` | up-triangle | filled triangle with mandatory charcoal keyline; every essential connector uses a charcoal under-stroke or visible pattern |
| Asia | South Korea | `#315A78` | diamond | filled diamond with charcoal keyline |
| Asia | Malaysia | `#3E7568` | hexagon | filled hexagon with charcoal keyline |
| Asia | Philippines | `#A63A3A` | cross | charcoal under-stroke plus thinner red perpendicular strokes |

Mauritius ochre is 2.03:1 against cream. It must never be an unoutlined essential edge or small text colour. For an essential line, draw a charcoal under-stroke at least 1.5 times the ochre stroke width, then the ochre stroke. The direct label and triangle marker remain required.

## Direct labels, line distinction, and grayscale

- Put the selected marker at every observed point and beside every direct country label.
- Direct-label endpoints whenever space permits. A short leader may solve collisions; never shift a mark on the value axis.
- Ghana is solid and South Korea is long-dash in their focal pair. In other figures, document patterns when series could merge without hue.
- Every marker has a charcoal keyline or under-stroke. Use a cream halo only to separate overlapping marks, never to replace the charcoal essential edge for Mauritius.
- Grayscale identification depends on name, shape, line pattern, and values. Luminance differences are not sufficient on their own.
- A legend may supplement a dense view but cannot replace direct labels for the principal comparison.
- Do not use red/green alone for direction. Direction needs signs, arrows, wording, or numeric values.

## Navigation and national accents

Africa/Asia colour families are confined to explicitly labelled navigation: section tabs, folios, contents routes, and short running rules. They do not recolour data or imply regional uniformity.

Flag-derived national accents form a separate presentation layer and are limited to folios, headline details, caption tags, image frames, section tabs, and short rules. They may not recolour data series, imply success/failure or rank, replace direct labels, or become cultural shorthand. Use no more than two prominently on one country-led page and verify their role-specific contrast.

## Shared visual constants

| Element | Production specification |
|---|---|
| Page background | cream `#F4F0E7` |
| Primary text | charcoal `#252525` |
| Dark axis/note text | `#514E48` or darker |
| Rules/grid | grey `#B7B0A4`; sparse and non-essential |
| Typography | provisional publication sans fallback with tabular numerals; final typefaces unselected |
| Minimum A4 type | 10 pt source/limitation; 11 pt axes/values; 14 pt deck; 28 pt message title |
| Minimum 1280×720 type | 22 px essential axes/values; 18 px supporting notes |
| Axis | zero baseline for bars; shared domain/ticks for direct comparisons; disclose and justify any truncated line domain |
| Labels | full country name + marker; values at required anchors; unit and actual year visible |
| Missing data | labelled gap; never connect through it or substitute silently |
| Proxy | print actual year next to the value and explain requested vs actual year |
| Observation links | straight segments between observed anchors only, with a visible non-interpolation note; never smooth |

## Chart forms

### Paired trajectories

Use for two cases across at least three matched years. Both series share the plot, scale, ticks, unit, and year positions. Straight connectors guide the eye and do not imply annual values. Do not use when definitions, price bases, proxy years, or domains differ.

### Dot and slope charts

Use a dot plot for one matched year and a slope chart for exactly two matched years. Start magnitude axes at zero unless the graphic explicitly explains a truncated scale. Use direct values and stable country order.

### Small multiples

Use for three to six cases. Panels require identical geometry, axes, ticks, units, definitions, and anchor positions. Place the selected marker in each heading and order panels by the editorial question.

### 100% compositions

Use only for mutually exclusive and exhaustive categories on one taxonomy and denominator. Apply the frozen package's deterministic display rounding so shown components total 100.0 while calculations retain full precision. Do not force incompatible export classifications or incomplete categories into this form.

### Mirrored dashboards

Use for a paired snapshot across indicators with different units. Every row has its own labelled matched scale; never place different units on one continuous axis.

### Maps

Use only when location, distance, boundary, route, colonial control, or spatial distribution is the analytical question. Date historical boundaries, label disputes and changes, cite geometry separately from thematic data, and avoid decorative continent silhouettes.

## Required chart anatomy

1. finding-led title;
2. factual deck naming indicator, unit, cases, and actual years;
3. matched plot with visible unit and scale;
4. selected markers, direct labels, and values;
5. gap/proxy/observation disclosure;
6. “What this cannot prove” statement for causal comparisons;
7. APA-style figure note with indicator, source ID, retrieval/release information, stable URL, and frozen-data path;
8. tidy data, editable source, export, and verification record.

## Evidence Ledger use

The selected spread places the chart in roughly two-thirds of the usable width and the evidence rail in the remaining third. The rail holds, in order, an optional rights-gated image placeholder, observation/proxy disclosure, and causal limitation. The source band spans the bottom. See `design/SELECTED_COMPARISON_SYSTEM.md` for the 12-column A4 grid, provisional typography, image placeholder fields, and component details.

## Proof specifications

### VIS-001-GDP-01 — preserved A4 review artefact

`design/figures/ghana_korea_gdp_per_capita.svg` remains unchanged. It passed prior numeric, geometric, XML, contrast, grayscale, A4 digital, and non-creator AI checks. It is not the classroom export and does not establish human or physical test results.

### VIS-002-GDP-16X9 — classroom proof

| Field | Specification |
|---|---|
| Question | How did matched GDP-per-capita observations in Ghana and South Korea diverge from 1960 to 2020? |
| Finding | Near parity in 1960 became a 16.9-to-1 observed difference in 2020. |
| Indicator | `NY.GDP.PCAP.KD` — GDP per capita (constant 2015 US$) |
| Values | Ghana: 1,100.76305218242; 855.85250708181; 1,970.19411460398. South Korea: 1,037.72899231615; 9,672.57845182894; 33,215.9298928108. |
| Years | 1960, 1990, 2020 only |
| Source | `SRC-WDI-001`; World Bank (2026), *World Development Indicators*; WDI API v2 source 2; retrieved 2026-10-04 |
| Geometry | 1280 × 720 viewBox; one shared 0–35,000 axis; identical year positions; straight observed-anchor connectors only |
| Ticks | 0, 10,000, 20,000, 30,000, 35,000 constant 2015 US$ |
| Identification | Ghana terracotta circles/solid; South Korea blue diamonds/long-dash; direct names and all six values |
| Limitation | The comparison cannot identify whether culture, policy, institutions, war, aid, or another factor caused the divergence; 2020 is the COVID-19 year. |
| Files | approved CSV plus `design/figures/ghana_korea_gdp_per_capita_16x9.svg` |

## Verification gates

- Match values to the approved CSV and claims; compute positions from the full-precision values.
- Parse the SVG and inspect a rendered 1280 × 720 raster for clipping and collisions.
- Confirm one 0–35,000 transform, all five ticks, and no interpolated observations.
- Confirm axes/values are at least 22 px and supporting notes at least 18 px in the 16:9 proof.
- Calculate contrast and inspect grayscale identification; colour must remain redundant.
- A human back-row five-second test and a physical A4 proof remain outstanding until performed and recorded by named testers.

## Prototype warning

The old Ghana and South Korea HTML drafts are historical visual prototypes only. Their mismatched axes, tiny labels, and smoothed/approximate paths are not evidence graphics and must not be published or copied.
