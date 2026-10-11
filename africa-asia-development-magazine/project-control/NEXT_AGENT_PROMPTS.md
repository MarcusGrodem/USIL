# Next Agent Prompt

**Last reconciled by the Roadmap Controller:** 2026-10-11 (CTRL-021)
**Current stage:** The first VIS-009 handoff failed controller review. Its nine SVGs parse and remain evidence-bounded, but actual renders still contain collisions/clipping, several type roles miss the stated A4 or projection minima, and the export record does not prove that Montserrat rendered. **Continue VIS-009 only. VIS-004 remains blocked.**
**Estimated progress:** 78%
**Final report ready:** No

## VIS-009: De-clump and repair the complete production-figure family before human testing

You are the **Charts and Editorial Design Agent**. Repair the current production figures so they have clear hierarchy, generous breathing room, no overlapping text, and no near-collisions at native render size. This is a targeted production repair, not a redesign and not a data task.

The project lead's controlling finding is: **the visuals still feel clumpy and a lot of text overlaps.** CTRL-021 confirmed that the first repair did not close that failure. Treat this as a failed digital layout gate. Do not run or claim any VIS-004 human/physical release test during this task.

Read `project-control/logs/VIS-009.md` and continue the same task. Append a new dated entry; do not overwrite the earlier handoff.

### CTRL-021 failures that must be closed

- `manufacturing_share.svg`: the deck is clipped at the right edge; the AFRICA/ASIA and `% of GDP` labels collide with axis/country content; the Mauritius absence block collides with the Philippines heading; the Philippines narrative citations overlap each other; the lower caveat columns collide; and multiple values/axes/caveats render below the A4 minima.
- `manufacturing_share_16x9.svg`: country headings crowd the deck; the Mauritius absence block collides with the Philippines heading; the two Philippines narrative annotations/citations overlap; supporting narrative text is 14–16 px instead of the required 18 px.
- `six_country_gdp_anchor_dashboard.svg`: the lower caveat columns overlap across gutters, and multiple A4 axis/value/note roles are below their required final-trim size.
- `six_country_gdp_anchor_dashboard_16x9.svg`: the top-row country headings/flags crowd the deck rather than retaining a 16 px band separation.
- `theory_evidence_matrix.svg`: headings, badges, country rows, support/challenge blocks, limitations, and revision conditions collide across all three columns; the right column is clipped at the page edge. This is a hard rejection, not a VIS-004 deferral.
- `employment_structural_transformation.svg`: 15 px values and note copy scale to roughly 7.9 pt in the 1600-unit-wide A4 wrapper, below the required 11 pt values and 10 pt caveats; 16 px axes are also below 11 pt.
- `employment_structural_transformation_16x9.svg`: in-segment values remain 11 px, below the required 22 px essential-value minimum. The prior log's statement that geometry prevents compliance is not an acceptance exception; redesign the label placement without moving the bars or data coordinates.
- Font proof failed: the SVGs contain no embedded `@font-face`, and the available font checks did not resolve Montserrat. Install/activate a licensed local Montserrat family for the controlled export or embed a permitted local font resource, then record a reproducible browser-level proof such as `document.fonts.check()` plus the resolved face. A fallback screenshot does not pass.
- The A4 screenshots were captured in 1600 × 1100 browser windows after adding 297 mm × 210 mm wrappers; the SVG itself rendered at roughly 1122 × 794 CSS pixels with white space around it. Record both the physical-page render dimensions and the viewBox-to-point conversion when checking final-trim type and margins.

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
- `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`
- `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`
- `design/figures/MANUFACTURING_SHARE_SPEC.md`
- `design/figures/THEORY_EVIDENCE_MATRIX_SPEC.md`
- `project-control/logs/LOG_TEMPLATE.md`

### Files in scope

Render and inspect every file before editing and again after editing:

- `design/figures/ghana_korea_gdp_per_capita.svg`
- `design/figures/ghana_korea_gdp_per_capita_16x9.svg`
- `design/figures/theory_evidence_matrix.svg`
- `design/figures/six_country_gdp_anchor_dashboard.svg`
- `design/figures/six_country_gdp_anchor_dashboard_16x9.svg`
- `design/figures/employment_structural_transformation.svg`
- `design/figures/employment_structural_transformation_16x9.svg`
- `design/figures/manufacturing_share.svg`
- `design/figures/manufacturing_share_16x9.svg`

You may edit only those nine SVGs, the four matching `*_SPEC.md` files when a documented layout value must change, `design/figures/COMPARISON_SYSTEM.md` if a shared production rule needs clarification, and `project-control/logs/VIS-009.md`.

Do not edit any CSV, master data, source registry, claim registry, country file, showroom alternative, palette decision, typography decision, or evidence wording outside the visible corrections explicitly required below.

### Non-negotiable preservation rules

- Do not change any value, year, indicator, unit, scale, country order, country identity, marker identity, source ID, frozen-data path, comparability decision, missing-data treatment, or plotted data coordinate.
- Do not move a marker, bar edge, or data connector along a value axis to solve a collision.
- Preserve Montserrat as the locked family. Use only locked weights 400, 500, 600, 700, and 900. Do not use synthetic weights such as 650, 750, 780, or 800.
- Preserve Palette A and the Mauritius charcoal keyline and connector under-stroke.
- Preserve direct country names, direct values, proxy symbols, observed-anchor wording, pandemic caveats, causality limitations, and `Not a race.`
- Preserve the employment sector order, deterministic displayed percentages, textures, and 100% geometry.
- Preserve the Philippines narrative-only and Mauritius missing-anchor treatments in the manufacturing family.

### Required repair method

1. **Render first.** Render all nine SVGs at their declared native canvases. Also create a digital greyscale render. Review the actual images, not only XML or source code.
2. **Map every collision.** Record text-to-text, text-to-rule, text-to-marker, text-to-bar, text-to-canvas, and major-block spacing failures. Include near-collisions that leave less than the minimum clearance below.
3. **Repair hierarchy before shrinking type.** Create breathing room by shortening repeated copy, relocating notes, widening gutters, separating header/plot/note bands, or using short leaders. Do not solve clumping by making essential text smaller.
4. **Keep major blocks distinct.** Headline/deck, plot, country headings, dates, caveats, and source band must read as separate layers. Each major block should retain approximately 10–20% perceptual breathing room around it.
5. **Render again.** Repeat colour, greyscale, bounds, and collision inspection after every repair pass. Continue until the acceptance checks pass.

### Minimum clearances and type sizes

For 1280 × 720 projection files:

- Essential axes, years, values, and direct country labels: **22 px minimum**.
- Supporting caveats and limitation text: **18 px minimum**.
- Keep at least **8 px** between unrelated text and a rule, marker, bar, or another text block.
- Keep at least **16 px** between major bands such as header, plot, notes, and source.
- Keep essential content at least **12 px** inside every canvas edge.
- If the complete source will not fit legibly, retain a concise on-screen source with indicator, organisation/year, source ID, release/retrieval identifier, and frozen-data path. Route the full reference to the handout/source slide as already permitted by the comparison system.

For A4 figures at final trim:

- Axes and values: **11 pt minimum**.
- Source, limitation, and caveat copy: **10 pt minimum**, except the locked 7.5–8 pt APA figure-note role where explicitly applied.
- Keep text and essential marks at least **10 mm** from trim and fold risks; use the selected system's 14 mm outer/top/bottom and 16 mm inner page margins when the asset is a page-level A4 export.
- Essential strokes: **0.6 pt minimum**; keylines: **1 pt minimum**; markers: **3.5 mm minimum**.
- Encode an explicit physical page size for every file claimed as A4. A unitless pixel canvas is not an actual-size print proof.

### Known failures that must be corrected

- **All figures:** ensure Montserrat actually renders in the controlled export environment; a fallback-font screenshot is not a typography pass. Update any non-locked font weights.
- **Employment A4:** enlarge percentage labels, note copy, and source copy; increase segment/keyline reproduction strength where it falls below the print minimum; move the source band into a real safe area; separate years and the 5.3/5.4 external labels from the baselines.
- **Employment 16:9:** current 11–14 px values, years, and caveats are too small for projection. Enlarge them to the projection minima, shorten repeated prose, create more air between baselines, dates, note frame, and source, and keep the last source baseline safely inside the canvas.
- **GDP A4:** restore a safe bottom source band, use a legible figure-note size, use a true physical A4 wrapper/export, and restore the complete Malaysia territorial caveat, including the 1963 formation and Singapore's 1965 exit.
- **GDP 16:9:** restore the complete Malaysia caveat; bring title, deck, and source roles up to their recorded sizes without introducing collisions.
- **Manufacturing A4 and 16:9:** inspect every narrative-only annotation, absence note, year label, value, and source line for collision or clumping. Preserve all missing-data geometry and the no-connector rules.
- **Theory matrix A4:** inspect all three columns at actual trim size. No verdict badge, country row, support/challenge mark, limitation, revision condition, or source line may collide or read as a continuous wall of text.
- **Ghana–South Korea A4 and 16:9:** retain the six-observation geometry while checking all leaders, endpoint labels, caveats, and the source band for clear separation.

### Acceptance checks

- All nine SVGs parse successfully.
- Native colour and greyscale renders are attached or referenced in the VIS-009 log.
- There is **zero text overlap** and zero accidental crop in every native render.
- There is no text touching a rule, marker, bar, or another major component.
- Every stated minimum type size, stroke, marker size, edge clearance, and major-band separation is met and recorded.
- A bounding-box or equivalent rendered-layout check is used. A string search alone is not sufficient.
- The three-second/five-second entry point remains obvious without reading the caveat band.
- All caveats remain visible and readable, including proxy years, 1960 exclusions, pandemic endpoints, Malaysia's full territorial caveat, observed-anchor-only wording, causality limits, and `Not a race.`
- Data geometry and evidence identity are verified unchanged against the existing specifications and CSVs.
- Mark the handoff `REVIEW`, not `DONE`. VIS-004 remains blocked until the Roadmap Controller inspects the repaired renders.

Before stopping, create `project-control/logs/VIS-009.md` using `project-control/logs/LOG_TEMPLATE.md`. Record every file changed, every collision corrected, before/after render paths, verification commands, remaining limitations, and the exact next action.

## Blocked or deferred tasks

- `VIS-004`: do not run the human/physical gates until VIS-009 is reviewed and accepted.
- `GAME-001`: remains on the status board but is deliberately not dispatched in this batch.
- `MAP-001`: remains blocked pending the verified Library of Congress raster derivative, original legend, dimensions, checksum, and human source comparison.

## After VIS-009

Run the Roadmap Controller. Inspect the actual repaired renders, not only the task log. If VIS-009 passes, dispatch VIS-004 against that exact figure revision. Do not release the figure system until the named human/physical gates are then completed and recorded.
