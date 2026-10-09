# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-09 (TYPE-001 delivery)
**Current stage:** VIS-007 and VIS-008 delivered at digital-gate scope and awaiting controller reconciliation; named VIS-004 reviewer locked; TYPE-001 delivered three candidate typefaces + a self-contained PDF visual tester and now awaits the project lead's selection.
**Estimated progress:** 74%
**Final report ready:** No

CTRL-017 recorded Marcus Grude Grodem as the named reviewer for all four VIS-004 release gates. TYPE-001 produced three open-licensed candidate typefaces (Montserrat, Inter, IBM Plex Sans) and the self-contained PDF visual tester at `design/typography_tester/type-001_visual_tester.pdf`. The project lead's selection is now the blocking input for the final-typography sub-gate of VIS-004. `MAP-001` is still blocked because the verified LOC item raster derivative, dimensions, checksum, and original legend have not been supplied by the project lead. The three non-overlapping assignments below may run in parallel.

## 1. VIS-004 (three of four gates) — Run the human and physical release reviews

You are the **named reviewer, Marcus Grude Grodem**, running the human and physical release gates for the selected comparison system against the current production figures.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `design/SELECTED_COMPARISON_SYSTEM.md`, `design/figures/COMPARISON_SYSTEM.md`, `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`, `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`, `design/figures/MANUFACTURING_SHARE_SPEC.md`, `design/figures/THEORY_EVIDENCE_MATRIX_SPEC.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `project-control/logs/VIS-004.md`

Required deliverable: one results record naming the tester, method, date, setup, findings, failures, and disposition for each of the three non-typography gates. The final-typography gate is held open until a replacement typeface for Aptos is confirmed under `TYPE-001`.

Gates to run:

1. **Back-row five-second comprehension test.** Printed figures viewed from the back of a classroom-size room. Record what the reader understood in five seconds, whether the five-second message matches the specification, and any element that failed to read.
   - Methodological note recorded in STATUS.md and this log: the named tester is the same person who owns the other gates, which removes cross-reviewer redundancy for this test. An independent second reader is recommended but not blocking.
2. **Physical A4 proof review.** A trim-size A4 printer proof inspected under paper, not on a monitor. Record line weight, marker diameter, label legibility, caveat visibility, and the Mauritius repair.
3. **Human colour-vision review.** The six Palette A country colours and the Mauritius repair reviewed by a human reader. Record colour-vision profile or method if known; otherwise record "declared vision profile not stated" and note the limitation.

Acceptance criteria:

- Every gate records tester name, method, date, setup, findings, failures, and disposition. Anonymous or AI-only records are rejected.
- Failures are recorded as failures and routed back to the appropriate chart task for revision; successes are recorded as successes.
- The final-typography gate is explicitly held open with reason "Aptos not confirmed; awaiting TYPE-001 decision"; do not fabricate a typography result.
- Mark the handoff `REVIEW` when the three gates are recorded.

Before stopping, create or append `project-control/logs/VIS-004.md` using `project-control/logs/LOG_TEMPLATE.md`. Do not edit any other file.

## 2. TYPE-001 selection — Project lead chooses one of three candidate typefaces

You are the **project lead** making the final selection. TYPE-001 has delivered three open-licensed candidates and a self-contained A3-landscape PDF visual tester. Inspect the PDF, choose one family, and sign off the hierarchy; a short follow-up then propagates the choice through the figures.

Before working, read `design/TYPOGRAPHY_RECOMMENDATION.md` and open `design/typography_tester/type-001_visual_tester.pdf`.

Decision inputs:

- **Candidate 1 — Montserrat.** Geometric sans, nine weights up to Black 900, strong display drama. The project lead named this family on 2026-10-08.
- **Candidate 2 — Inter.** Humanist, screen-tuned, data-journalism standard; best small-size reading and tabular numerals.
- **Candidate 3 — IBM Plex Sans.** Editorial-technical voice; ceiling at Bold 700; ships Serif, Mono, and Condensed siblings.

Selection records to produce (follow-up task; create only after a family is chosen):

- `design/TYPOGRAPHY_DECISION.md` — chosen family, weight set, hierarchy table, fallback stack, licensing, calibration against the figure role-size tables.
- Swap `"Aptos", "Aptos Display"` → the chosen family in the four production SVGs (`six_country_gdp_anchor_dashboard.svg`, `..._16x9.svg`, `employment_structural_transformation.svg`, `..._16x9.svg`, `manufacturing_share.svg`, `..._16x9.svg`, `theory_evidence_matrix.svg`). Update only `font-family`; do not touch geometry, sizes, or data.
- Update the typography section of each figure's `*_SPEC.md` to name the chosen family.
- Append a REVIEW entry to `project-control/logs/TYPE-001.md`.

Acceptance criteria:

- A single family is named; no mixed selection across figures.
- Figure geometry, sizes, markers, and data are unchanged by the swap.
- Tabular lining numerals (`font-variant-numeric: tabular-nums lining-nums`) remain set on every figure.
- The final-typography sub-gate of VIS-004 is unblocked only after this follow-up is accepted.

## 3. CTRL-018 — Reconcile VIS-007 and VIS-008 (controller task)

You are the **Roadmap Controller**. Reconcile the delivered VIS-007 and VIS-008 artefacts against their acceptance criteria.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `project-control/ROADMAP_CONTROLLER_AGENT.md`, `data/master/six_country_chart_inputs.csv`, `data/master/six_country_indicator_dictionary.csv`, both figure spec files, both figure logs, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `project-control/STATUS.md`
- `project-control/REPORT_CHECKLIST.md`
- `project-control/logs/controller.md`

Required deliverables: accept, reject, or move each of VIS-007 and VIS-008 against its stated acceptance criteria; update the status board and checklist; record the reconciliation in the controller log.

Acceptance criteria:

- Reparse `data/charts/employment_structural_transformation.csv` and `data/charts/manufacturing_share.csv` against the frozen master byte-for-byte on `value`, `actual_year`, `source_id`, `source_locator`, `comparability_class`, `indicator_code`, `caveat`, `release_or_retrieval_date`.
- Confirm `xmllint --noout` on all four SVGs.
- Confirm the Philippines narrative-only treatment on VIS-008: no connector or line element bridges the Philippines 1960 or 1990 narrative annotations to the Philippines 2020 marker; no marker is rendered at the Philippines 1960 or 1990 position; no marker is rendered at the Mauritius 1960 position.
- Confirm the 1960 exclusion on VIS-007: no bar is drawn at a 1960 anchor; the exclusion is explicitly stated in the reading-notes band and the accessible description.
- Confirm that neither figure implies cross-country ranking: `Not a race.` and `WHAT THIS COMPARISON CANNOT PROVE` blocks present on each.
- Record the acceptance or rejection with evidence pointers in the controller log.

Before stopping, append a new section to `project-control/logs/controller.md`.

Stop after status, checklist, and controller log are updated. Do not edit any figure, specification, chart CSV, master file, registry, or page copy.

## Blocked tasks — do not dispatch

- `MAP-001`: requires a verified Library of Congress item 2021668660 raster derivative URL, dimensions, checksum, original legend scan, and a human source comparison. The specification is not finished artwork.
- `VIS-004` final-typography gate: BLOCKED pending the project lead's TYPE-001 selection and the follow-up swap. The three other VIS-004 gates are dispatchable under this prompt.

## After this batch

Run the Roadmap Controller again. Inspect the real reviewer-results record, the typography decision record, and the reconciliation. Accept technical prototypes only at their bounded gate; no final figure or magazine-wide system is released until the named human/physical checks pass and the typeface is confirmed.
