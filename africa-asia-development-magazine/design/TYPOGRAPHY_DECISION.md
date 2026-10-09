# Typography decision — TYPE-001

**Task:** TYPE-001
**Status:** DONE (digital-gate scope; final-typography sub-gate of VIS-004 remains a separate release check)
**Decided:** 2026-10-09
**Decided by:** Project lead (Marcus Grude Grodem)
**Supersedes:** The unapproved `"Aptos"` default previously used in every figure's font-family stack.

## Decision

**Montserrat** is the magazine's primary typeface for both figure and page system.

- Family: **Montserrat** by Julieta Ulanovsky
- Licence: SIL Open Font Licence 1.1 (open-source; embeddable in print, web, PDF, and classroom projection without licensing fees)
- Source: Google Fonts
- Weights used by the magazine: **400 Regular, 500 Medium, 600 SemiBold, 700 Bold, 900 Black** (italics available but not required by this release)
- Numeral style: **tabular lining numerals** required on every figure and every editorial table (`font-variant-numeric: tabular-nums lining-nums`)
- Fallback stack: `"Montserrat", "Helvetica Neue", Arial, sans-serif`
- Visual tester that supported this decision: `design/typography_tester/type-001_visual_tester.pdf` (also preserves the Inter and IBM Plex Sans alternatives that were considered and rejected)

The decision was made against the three-way recommendation in `design/TYPOGRAPHY_RECOMMENDATION.md`. Inter and IBM Plex Sans are preserved as rejected alternatives in the recommendation document; they are not deleted so the decision history remains auditable.

## Hierarchy — page-level editorial scale (A4 points)

| Role | Weight | Size (pt) | Line-height (pt) | Tracking | Case |
|---|---|---:|---:|---|---|
| H0 — Section opener display | **Black 900** | 72 | 76 | −2 % | Mixed |
| H1 — Page headline | **Bold 700** | 48 | 52 | −1.5 % | Mixed |
| H2 — Subhead | **Bold 700** | 32 | 36 | −1 % | Mixed |
| H3 — Section head | **SemiBold 600** | 22 | 26 | 0 | Mixed |
| Deck / intro | **Medium 500** | 16 | 22 | 0 | Mixed |
| Eyebrow / section tag | **Bold 700** | 11 | 14 | +14 % | **UPPERCASE** |
| Body copy | **Regular 400** | 10.5 | 14 | 0 | Mixed |
| Caption / label | **Medium 500** | 9 | 12 | 0 | Mixed |
| Figure note (APA) | **Regular 400** | 7.5 – 8 | 11 | 0 | Mixed |
| Credit / folio | **Medium 500** | 7 | 10 | +2 % | UPPERCASE |

Line-heights are starting values and must be reviewed on the first physical A4 proof before release.

## Hierarchy — figure-level scale (SVG viewBox units)

The role sizes in each figure's `*_SPEC.md` are not changed by this decision. Only the `font-family` stack is swapped from `"Aptos", "Aptos Display"` to `"Montserrat"`. The accessibility, geometry, data, and marker calibrations recorded in each spec continue to apply.

Current figure SVGs updated by this decision:

- `design/figures/ghana_korea_gdp_per_capita.svg` (VIS-001 proof)
- `design/figures/ghana_korea_gdp_per_capita_16x9.svg`
- `design/figures/six_country_gdp_anchor_dashboard.svg` (VIS-006)
- `design/figures/six_country_gdp_anchor_dashboard_16x9.svg`
- `design/figures/employment_structural_transformation.svg` (VIS-007)
- `design/figures/employment_structural_transformation_16x9.svg`
- `design/figures/manufacturing_share.svg` (VIS-008)
- `design/figures/manufacturing_share_16x9.svg`
- `design/figures/theory_evidence_matrix.svg` (VIS-005)

## Why Montserrat was selected

- **Project-lead preference, recorded on 2026-10-08:** a more modern typeface than Aptos, with the latitude to look like a contemporary infographic magazine rather than an office document.
- **Display drama when needed:** Montserrat ships a full Black 900, so section-opener H0 and page-headline H1 can carry editorial weight without a second family.
- **Numeral behaviour:** tabular lining numerals are available in every used weight; the chart specs rely on them.
- **Open licence (SIL OFL 1.1):** safe for a classroom-distributed magazine, PDF embedding, and future online publication without a licence audit.
- **Hierarchy breadth:** weights 400/500/600/700/900 give a clean five-step hierarchy without visual ambiguity between adjacent weights.

## Watch-outs (recorded for the physical-A4 and back-row five-second review gates)

- Montserrat read at body size (10.5 pt) is slightly tighter than Inter at the same visual weight; verify x-height legibility at 55–75-character measure on the physical A4 proof.
- The Black 900 weight at display sizes can appear heavier than Montserrat's spacing suggests at 72 pt; verify tracking at −2 % during the physical proof.
- Montserrat's tabular lining numerals are narrower than Inter's. Verify alignment in dense data tables (country labels, year labels, and chart axes) before magazine-wide release.

## Not changed by this decision

- Palette A country identities (`design/SELECTED_COMPARISON_SYSTEM.md`) and the Mauritius repair are unchanged.
- Geometry, viewBox, marker placement, panel plot ranges, year positions, and every recorded coordinate in the production figures are unchanged.
- Every figure's data CSV, source identity, caveats, and APA figure note are unchanged.
- The three VIS-004 release gates (back-row five-second, physical A4, colour-vision) are independent of this decision and remain scheduled under the current VIS-004 reviewer owner.
- The final-typography sub-gate of VIS-004 is now READY (not DONE); it must still be run under this decision — a named physical A4 proof with Montserrat applied and a recorded result.

## Related files

- Recommendation record (preserves rejected alternatives): `design/TYPOGRAPHY_RECOMMENDATION.md`
- Visual tester (3-page A3 PDF embedding Montserrat, Inter, IBM Plex Sans): `design/typography_tester/type-001_visual_tester.pdf`
- Self-contained HTML + base64 fonts: `design/typography_tester/type-001_visual_tester.html`, `design/typography_tester/fonts.css`
- Current figure specs (updated by this decision): `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`, `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`, `design/figures/MANUFACTURING_SHARE_SPEC.md`, `design/figures/THEORY_EVIDENCE_MATRIX_SPEC.md`
- Task log: `project-control/logs/TYPE-001.md`
