# Next Agent Prompt

**Last reconciled by the Roadmap Controller:** 2026-10-12 (CTRL-024)
**Current stage:** The project lead has stopped further speculative VIS-009 iteration. The current figures are frozen at `REVIEW` with their known CTRL-023 deviations visible. **Run VIS-004 now and decide which figures to use, repair once from observed evidence, or omit.**
**Estimated progress:** 78%
**Final report ready:** No

## VIS-004: Human and physical figure decision gate

You are the **named human reviewer, Marcus Grude Grodem**, completing **VIS-004**. This task does not require every current figure to pass. Its purpose is to make a practical decision and move production forward.

Read:

- `AGENTS.md`
- `PRODUCT.md`
- `SCOPE_LOCK.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/STATUS.md`
- `project-control/SOURCE_APA_AND_CHART_RULES.md`
- `design/SELECTED_COMPARISON_SYSTEM.md`
- `design/TYPOGRAPHY_DECISION.md`
- `project-control/logs/VIS-004.md`
- the CTRL-023 entry in `project-control/logs/controller.md`

### Output ownership

Append only to:

- `project-control/logs/VIS-004.md`

Do not edit a figure during this task. If a concrete observed defect needs repair, record the exact figure, element, condition, and required outcome; the controller will issue at most one bounded repair task.

### Test the frozen current figures

Use the nine current production SVGs in `design/figures/`.

1. **Five-second classroom test**
   - Show each figure for five seconds from a realistic classroom back-row distance.
   - Remove or cover it and record the reader's immediate unaided takeaway.
   - Compare the takeaway with the figure specification's intended message.

2. **Actual-size A4 test**
   - Print each A4 figure at 100% / actual size.
   - Record printer, paper, colour mode, scaling, lighting, and reading distance.
   - Check values, years, caveats, source notes, line weights, markers, and the Mauritius keyline/under-stroke.

3. **Human colour-identity test**
   - Check whether all six countries remain identifiable using names and marker shapes as well as colour.
   - Record the review conditions and either the reviewer's colour-vision profile or `declared vision profile not stated`.

4. **Physical Montserrat test**
   - Check body, caption/label, figure-note, tabular numerals, and Black 900 display roles on paper.
   - Record a pass or fail for every role.

### Known deviations to inspect, not silently waive

- Employment A4 has undersized year/axis and external `5.3`/`5.4` roles under the earlier strict calculation.
- Several projection labels and source bands miss the earlier 8 px clearance target.
- Manufacturing 16:9 has a visible `25.2 %`/`25.7 %` collision.
- Manufacturing and six-country GDP A4 source lines sit inside the earlier 10 mm edge target.
- Checked-in VIS-009 proof PNGs are stale; judge the current SVG/actual print, not those older PNGs.

### Required disposition for every figure

Choose exactly one:

- `USE` — understandable and legible enough for the intended magazine/classroom context.
- `ONE OBSERVED REPAIR` — a specific defect prevents use; name the smallest repair and how the retest will prove it fixed.
- `OMIT` — the figure costs more time or complexity than it contributes; retain its evidence in prose, a simpler table, or another accepted figure.

Do not choose `ONE OBSERVED REPAIR` for general polish. It requires a concrete failure witnessed in the test.

### Completion criteria

- All four gate methods, dates, setups, findings, failures, and dispositions are recorded honestly.
- Every figure receives one of the three dispositions.
- Any repair request names one figure and one measurable defect.
- Append the results as `REVIEW`; the Roadmap Controller makes the final status change.

Stop after the VIS-004 log entry. Do not reopen VIS-009 or begin page assembly in the same task.

## Deferred or blocked

- `VIS-009`: frozen at REVIEW; reopen only for a concrete VIS-004 failure.
- `GAME-001`: ready but deferred from this batch.
- `MAP-001`: blocked pending the verified Library of Congress raster derivative, legend, dimensions, checksum, and human source comparison.
