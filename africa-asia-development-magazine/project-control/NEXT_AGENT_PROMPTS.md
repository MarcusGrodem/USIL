# Next Agent Prompt

**Last reconciled by the Roadmap Controller:** 2026-10-12 (CTRL-023)
**Current stage:** The third VIS-009 handoff fixes most prior collisions and preserves the approved evidence/data geometry, but exact type and clearance failures plus stale checked-in proofs keep the strict digital gate open. **Continue VIS-009 only. VIS-004 remains blocked.**
**Estimated progress:** 78%
**Final report ready:** No

## VIS-009 continuation: close the CTRL-023 residual digital failures

You are the **Charts and Editorial Design Agent**. Complete the fourth bounded pass of **VIS-009**. This is a precision repair and proof-refresh task, not a redesign, data task, or human release test.

Before working, read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `design/SELECTED_COMPARISON_SYSTEM.md`
- `design/TYPOGRAPHY_DECISION.md`
- `design/figures/COMPARISON_SYSTEM.md`
- the four matching `design/figures/*_SPEC.md` files
- the complete `project-control/logs/VIS-009.md`
- `project-control/logs/LOG_TEMPLATE.md`

### Exact editable outputs

Edit only the affected production SVGs below, their matching specification files when a documented layout value changes, the checked-in VIS-009 proof renders, and the append-only VIS-009 log:

- `design/figures/employment_structural_transformation.svg`
- `design/figures/employment_structural_transformation_16x9.svg`
- `design/figures/ghana_korea_gdp_per_capita_16x9.svg`
- `design/figures/manufacturing_share.svg`
- `design/figures/manufacturing_share_16x9.svg`
- `design/figures/six_country_gdp_anchor_dashboard.svg`
- `design/figures/six_country_gdp_anchor_dashboard_16x9.svg`
- `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`
- `design/figures/MANUFACTURING_SHARE_SPEC.md`
- `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`
- `design/figures/renders/vis-009/after/`
- `design/figures/renders/vis-009/after_grey/`
- `project-control/logs/VIS-009.md`

Do not edit the accepted `ghana_korea_gdp_per_capita.svg` or `theory_evidence_matrix.svg` unless a new reproducible failure is found and recorded before editing. Do not edit CSVs, registries, country files, palette/typography decisions, showroom alternatives, or evidence wording.

### CTRL-023 residuals to close

1. `employment_structural_transformation.svg`
   - Raise the 20-unit years and `50%` roles from about 10.5 pt to at least 11 pt at the encoded A4 scale.
   - Raise the external `5.3` and `5.4` values from 15 units/about 7.9 pt to at least 11 pt.
   - Give every `50%` label measurable clearance from its guide rule without moving any bar or value-axis geometry.

2. `employment_structural_transformation_16x9.svg`
   - Separate the eyebrow/title rendered boxes.
   - Give all year labels and `50%` labels measurable clearance from their baseline/guide rules.
   - Bring all unrelated plot-label gaps to at least 8 px, including the recorded `10.5`/`2020`, `19.5`/`15.0`, `19.6`/`1991 †`, and thin-segment leader contexts.
   - Increase note-to-separator and separator-to-source clearances from the recorded 7 px/2 px to at least 8 px; keep 16 px between major bands.

3. `ghana_korea_gdp_per_capita_16x9.svg`
   - Increase reading-note-to-separator clearance from 7 px and source-to-separator clearance from 6 px to at least 8 px. Preserve the accepted plot.

4. `manufacturing_share.svg`
   - Move or reflow the source note so every edge has at least 10 mm physical A4 clearance; the current right-edge clearance is 30.4 px at the 96 dpi proof versus the required 37.8 px.

5. `manufacturing_share_16x9.svg`
   - Separate the true overlapping South Korea `25.2 %` and `25.7 %` labels. A short leader is allowed; plotted markers and connector geometry may not move.
   - Give year labels at least 8 px clearance from unrelated baseline/year-guide rules.

6. `six_country_gdp_anchor_dashboard.svg`
   - Move or reflow the source note so every edge has at least 10 mm physical A4 clearance; the current right-edge clearance is 28.6 px.
   - Separate all year labels from baseline/year-guide rules and the reading-band heading from its panel rule.

7. `six_country_gdp_anchor_dashboard_16x9.svg`
   - Separate all year labels from baseline/year-guide rules.
   - Raise reading-band-heading clearance from 5 px and source-to-separator clearance from 6 px to at least 8 px.

8. Proof provenance
   - Regenerate the final colour and greyscale proofs under `design/figures/renders/vis-009/after/` and `after_grey/` from the final SVG revision. The current checked-in PNGs are stale and cannot substantiate the third handoff.
   - Record dimensions and checksums for each final proof and confirm visible text agrees with the current SVG.

### Preservation rules

- Do not change a value, year, indicator, unit, scale, country order/identity, marker identity, source ID, frozen-data path, comparability decision, missing-data treatment, or plotted data coordinate.
- Do not move markers, bars, or data connectors along a value axis to solve label collisions.
- Preserve Palette A, the Mauritius keyline/under-stroke, employment textures/100% geometry, Philippines narrative-only treatment, Mauritius missing-anchor treatment, all caveats, and `Not a race.`
- Preserve the five embedded Montserrat faces and use only weights 400/500/600/700/900. The latest generic harness produces false negatives for unused weights; use the earlier forced-load method if font proof is rerun.

### Acceptance criteria

- All nine production SVGs parse.
- The seven edited/verified figures have current native colour and greyscale checked-in proofs; unchanged accepted proofs are also synchronized with their SVGs.
- Zero true text overlap or accidental crop remains.
- Unrelated text/mark clearance is at least 8 px on projection figures; major bands retain at least 16 px separation; essential content remains at least 12 px inside projection edges.
- A4 axes and values are at least 11 pt; limitation/caveat roles are at least 10 pt except the locked 7.5–8 pt APA note; text and essential marks retain at least 10 mm trim/fold clearance.
- Rendered-layout checks cover text-to-text, rules, markers, bars, and edges, with intentional containment and natural same-paragraph line boxes explicitly classified rather than counted as passes.
- The 75 frozen chart rows and plotted geometry remain unchanged.
- The three-/five-second entry point and grayscale/shape identification remain intact.
- Append a dated `REVIEW` entry to `project-control/logs/VIS-009.md` with files changed, exact before/after measurements, proof paths/checksums, commands, limitations, and next action.

Stop after this bounded repair and log. Do not run or claim any VIS-004 back-row, physical-print, colour-vision, projector, or final-typography gate.

## Blocked or deferred

- `VIS-004`: blocked until the Roadmap Controller accepts VIS-009.
- `GAME-001`: ready on the board but deliberately deferred from this batch.
- `MAP-001`: blocked pending the verified Library of Congress raster derivative, original legend, dimensions, checksum, and human source comparison.
