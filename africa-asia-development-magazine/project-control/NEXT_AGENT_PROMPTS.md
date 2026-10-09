# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-08 (CTRL-017)
**Current stage:** VIS-007 and VIS-008 delivered at digital-gate scope and awaiting controller reconciliation; named VIS-004 reviewer locked; typeface decision deferred.
**Estimated progress:** 72%
**Final report ready:** No

CTRL-017 recorded Marcus Grude Grodem as the named reviewer for all four VIS-004 release gates. Three of the four gates are now dispatchable. The final-typography gate remains BLOCKED because Aptos is not confirmed as the project typeface; the project lead has asked to consider more modern alternatives and look at reference infographics for inspiration before locking a family. `MAP-001` is still blocked because the verified LOC item raster derivative, dimensions, checksum, and original legend have not been supplied by the project lead. The three non-overlapping assignments below may run in parallel.

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

## 2. TYPE-001 — Confirm or substitute the project typeface

You are the **Editorial & Design Agent**. Open **TYPE-001: Confirm or substitute the Aptos default typeface for the magazine's figure and page system**.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `design/DESIGN_GUIDE.md`, `design/SELECTED_COMPARISON_SYSTEM.md`, `design/figures/COMPARISON_SYSTEM.md`, every current `*_SPEC.md` in `design/figures/`, and `project-control/logs/LOG_TEMPLATE.md`. The project lead has indicated preference for a more modern typeface and wants to inspect reference infographics before locking a family.

You may create or edit only:

- `design/TYPOGRAPHY_DECISION.md` (new)
- `project-control/logs/TYPE-001.md` (new)

Required deliverable: a decision record naming the confirmed typeface family (display and text), weights to be used, numeral style (tabular lining required for every figure), licensing, fallback stack, and the WCAG-size calibration against the current A4 and 1280 × 720 role tables.

Acceptance criteria:

- Compare at least three candidate families against Aptos. Each candidate must have a verified licence suitable for a published magazine and classroom projection, support tabular lining numerals, and remain legible at the figure role-size tables already recorded in the specifications.
- Pull at least three reference infographic examples (from `references/visual-inspiration/` or newly collected and licence-cleared) and record how each uses display/text pairings; do not republish inspiration images without rights verification.
- Record whether the chosen family requires any role-size update in `COMPARISON_SYSTEM.md`; do not silently rebuild the figures.
- Do not change the data colours, chart geometry, Palette A country identities, or Mauritius repair.
- Mark the handoff `REVIEW`.

Before stopping, create `project-control/logs/TYPE-001.md` using `project-control/logs/LOG_TEMPLATE.md`.

Stop after the decision record and log exist. Do not edit any figure, specification, chart CSV, master file, registry, selected-system document, page copy, checklist, status board, roadmap, or controller log.

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
- `VIS-004` final-typography gate: BLOCKED pending `TYPE-001` decision. The three other VIS-004 gates are dispatchable under this prompt.

## After this batch

Run the Roadmap Controller again. Inspect the real reviewer-results record, the typography decision record, and the reconciliation. Accept technical prototypes only at their bounded gate; no final figure or magazine-wide system is released until the named human/physical checks pass and the typeface is confirmed.
