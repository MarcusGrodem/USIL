# Agent Status Board

**Owner:** Roadmap Controller Agent  
**Last reconciled:** 2026-10-06
**Current stage:** Six-country core data frozen and registered; historical pack accepted; culture, design-showroom, and independent data/chart review next
**Checklist:** `project-control/REPORT_CHECKLIST.md`

## Task queue

| ID | Task | Suggested owner | State | Output |
|---|---|---|---|---|
| CTRL-001 | Install and reconcile project controls | Roadmap Controller | DONE | Control files and sector logs |
| SRC-001 | Verify Ghana/South Korea sources and create APA 7 records | Sources & APA Agent | DONE | Registries and `research/ghana_korea_source_audit.md` |
| DATA-001 | Close or explicitly retain Ghana/South Korea data gaps | Country Data Agent | DONE | Updated `data/ghana.md` and `data/south_korea.md` |
| DATA-002 | Research Botswana with the common template | Country Data Agent | DONE | `data/botswana.md` |
| DATA-003 | Research Mauritius with the common template | Country Data Agent | DONE | `data/mauritius.md` |
| DATA-004 | Research Malaysia with the common template | Country Data Agent | DONE | `data/malaysia.md` |
| DATA-005 | Research Philippines with the common template | Country Data Agent | DONE | `data/philippines.md` |
| DATA-006 | Run six-country comparability review and freeze approved chart inputs | Country Data Agent | DONE | Comparability report, indicator dictionary, frozen master table |
| DATA-007 | Apply accepted SRC-002/DATA-006 corrections to four country files | Country Data Agent | READY | Corrected Botswana, Mauritius, Malaysia, and Philippines evidence files |
| SRC-002 | Register and audit Botswana/Mauritius/Malaysia/Philippines sources and claims | Sources & APA Agent | DONE | Expanded source and claim registries plus audit |
| SRC-003 | Register RES-001 claims and verify proposed map/image rights | Sources & APA Agent | READY | Historical claim/source rows plus rights audit |
| RES-001 | Verify colonialism, borders, infrastructure, and independence claims | History & Theory Agent | DONE | Page-mapped evidence pack |
| RES-002 | Verify Hofstede, critiques, and trust literature | History & Theory Agent | READY | Page-mapped evidence pack |
| THEORY-001 | Complete the theory evidence matrix | History & Theory Agent | BLOCKED | `research/THEORY_EVIDENCE_MATRIX.md` |
| VIS-001 | Define graph system and build one verified proof chart | Charts & Maps Agent | REVIEW | Candidate chart system, data, figure, APA note; independent check and user palette choice pending |
| QA-001 | Independently audit the DATA-006 freeze and VIS-001 proof chart | QA Agent | READY | Numeric, citation, accessibility, and five-second-test report |
| WRITE-001 | Draft pages 24–26 | Editorial & Design Agent | BLOCKED | Page-ready Ghana/Korea copy |
| DESIGN-001 | Create the design showroom, palette tests, and 45-page rhythm plan | Editorial & Design Agent | READY | Preserved alternatives for user choice; no final system lock |
| AI-PROMPT-001 | Design the research-gated Development Evidence Lab scaffold | Editorial & Interaction Agent | DONE | Master prompt, research-pack template, and acceptance checklist |
| AI-PROMPT-002 | Fill, test, and approve the factual AI activity | Editorial & Interaction Agent | BLOCKED | Completed research pack, tested prompt, and offline alternative |
| GAME-001 | Define and prototype the companion game | Interaction Agent | MISSING | Evidence-linked game concept, prototype, rules, and static/offline form |

## Recommended next parallel batch

The 2026-10-06 evidence batch has returned. `DATA-006`, `SRC-002`, and `RES-001` passed controller review. `VIS-001` remains in review because its independent test is pending and its proposed locked palette predates the required showroom/user-selection gate. The next non-overlapping order is:

1. `QA-001` — independently audit the frozen data and proof chart, including a real five-second test.
2. `RES-002` — build the Hofstede, critique, and trust evidence pack.
3. `DATA-007` — apply only the accepted SRC-002/DATA-006 corrections to the four newer country files.
4. `DESIGN-001` — create materially different showroom and palette trials plus a draft 45-page rhythm plan; do not lock a final system before user selection.

`SRC-003` should follow when a slot opens. `THEORY-001`, `WRITE-001`, and `AI-PROMPT-002` remain dependency-blocked.

## Known risks

- The core six-country chart inputs are frozen, but an independent numeric/citation audit has not yet passed.
- Ghana and South Korea explicitly retain unresolved historical, export, literacy, informality, and trust gaps; rejected claims are preserved only as rejection/correction notes.
- The shared registries now contain 63 sources and 262 six-country claims, but 25 newer-country claims require revision and 10 remain unresolved; the four country files still need the accepted narrow corrections.
- Export composition, firm size/informality, direct trust, several historical anchors, and a seamless Philippines manufacturing trajectory remain excluded from common charts.
- RES-001 is accepted as an evidence pack, not as finished maps or pages; historical claims and asset rights still need shared-registry/rights review.
- VIS-001 is a strong candidate, not an approved magazine-wide visual system. Independent testing and the required user showroom/palette decision are pending.
- The rough PDF contains placeholders and an obsolete palette.
- The AI teaching scaffold is accepted as a research-gated interaction design, but its factual pack, platform, tests, and offline release remain blocked by research. The companion game is not yet defined.
- No final deliverable exists.
- Current accepted and review files are uncommitted; unrelated pre-existing worktree changes were not altered by this reconciliation.

## Controller reconciliation steps

1. Dispatch the next bounded, non-overlapping task batch from this board.
2. Read each returned sector log and inspect the real deliverables.
3. Accept, reject, or move work to `REVIEW` against its acceptance criteria.
4. Update this board and `REPORT_CHECKLIST.md` only when evidence supports a changed state.
5. Record every reconciliation in `logs/controller.md`.
