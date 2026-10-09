# Next Agent Prompts

**Last reconciled by the Roadmap Controller:** 2026-10-09 (TYPE-001 lock)
**Current stage:** VIS-007 and VIS-008 accepted at digital-gate scope (CTRL-018); named VIS-004 reviewer locked (CTRL-017); **TYPE-001 lock complete** — Montserrat selected, `design/TYPOGRAPHY_DECISION.md` written, swap propagated to nine production SVGs and four figure specs with zero Aptos residue and nine clean XML parses.
**Estimated progress:** 78%
**Final report ready:** No

CTRL-017 recorded Marcus Grude Grodem as the named reviewer for all four VIS-004 release gates. TYPE-001 is now DONE at digital-gate scope — the project lead selected **Montserrat** on 2026-10-09 and the swap has been propagated. All four VIS-004 gates are dispatchable. `MAP-001` is still blocked because the verified LOC item raster derivative, dimensions, checksum, and original legend have not been supplied by the project lead. The two non-overlapping assignments below may run in parallel.

## 1. VIS-004 (all four gates) — Run the human and physical release reviews under Montserrat

You are the **named reviewer, Marcus Grude Grodem**, running the human and physical release gates for the selected comparison system against the current production figures.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `design/SELECTED_COMPARISON_SYSTEM.md`, `design/figures/COMPARISON_SYSTEM.md`, `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`, `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`, `design/figures/MANUFACTURING_SHARE_SPEC.md`, `design/figures/THEORY_EVIDENCE_MATRIX_SPEC.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `project-control/logs/VIS-004.md`

Required deliverable: one results record naming the tester, method, date, setup, findings, failures, and disposition for each of the four VIS-004 gates. TYPE-001 locked **Montserrat** on 2026-10-09; the final-typography gate must now be run under Montserrat (do not reopen it against Aptos).

Gates to run:

1. **Back-row five-second comprehension test.** Printed figures viewed from the back of a classroom-size room. Record what the reader understood in five seconds, whether the five-second message matches the specification, and any element that failed to read.
   - Methodological note recorded in STATUS.md and this log: the named tester is the same person who owns the other gates, which removes cross-reviewer redundancy for this test. An independent second reader is recommended but not blocking.
2. **Physical A4 proof review.** A trim-size A4 printer proof inspected under paper, not on a monitor. Record line weight, marker diameter, label legibility, caveat visibility, and the Mauritius repair. This proof also serves as the first physical check on the Montserrat lock (see gate 4).
3. **Human colour-vision review.** The six Palette A country colours and the Mauritius repair reviewed by a human reader. Record colour-vision profile or method if known; otherwise record "declared vision profile not stated" and note the limitation.
4. **Final-typography review.** Confirm that Montserrat as locked by `design/TYPOGRAPHY_DECISION.md` reads correctly on the physical A4 proof: body copy at 10.5 pt, caption at 9 pt, figure-note at 7.5–8 pt, tabular numerals aligned in dense tables, and the Black 900 weight at display sizes under −2 % tracking. Record pass / fail on each role size.

Acceptance criteria:

- Every gate records tester name, method, date, setup, findings, failures, and disposition. Anonymous or AI-only records are rejected.
- Failures are recorded as failures and routed back to the appropriate chart task for revision; successes are recorded as successes.
- Mark the handoff `REVIEW` when all four gates are recorded.

Before stopping, create or append `project-control/logs/VIS-004.md` using `project-control/logs/LOG_TEMPLATE.md`. Do not edit any other file.

## 2. GAME-001 — Define and prototype the companion game

You are the **Interaction Agent**. Open **GAME-001: Define and prototype the evidence-linked companion game** without touching the accepted figure/data packages. Final direction remains a user review gate.

Before working, read `AGENTS.md`, `PRODUCT.md`, `SCOPE_LOCK.md`, `project-control/REPORT_CHECKLIST.md`, `project-control/STATUS.md`, `research/claim_registry.csv`, `research/source_registry.csv`, `data/master/six_country_chart_inputs.csv`, `design/DESIGN_GUIDE.md`, and `project-control/logs/LOG_TEMPLATE.md`.

You may create or edit only:

- `design/game/` (new directory for the prototype)
- `project-control/logs/GAME-001.md`

Required deliverable: a short game concept document, a static or offline prototype, and a rules sheet that links each play step to approved registered claims or frozen chart rows.

Acceptance criteria:

- Every evidence pointer in the game resolves to an approved claim ID or a frozen chart-input row; no new sources or claims are introduced.
- The game does not imply causal explanation beyond what the research pack supports.
- The prototype is reproducible offline on paper (no required internet or app).
- Mark the handoff `REVIEW`.

Before stopping, create `project-control/logs/GAME-001.md` using `project-control/logs/LOG_TEMPLATE.md`.

## Blocked tasks — do not dispatch

- `MAP-001`: requires a verified Library of Congress item 2021668660 raster derivative URL, dimensions, checksum, original legend scan, and a human source comparison. The specification is not finished artwork.

## After this batch

Run the Roadmap Controller again. Inspect the real reviewer-results record, the typography decision record, and the reconciliation. Accept technical prototypes only at their bounded gate; no final figure or magazine-wide system is released until the named human/physical checks pass and the typeface is confirmed.
