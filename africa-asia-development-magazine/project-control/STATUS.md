# Agent Status Board

**Owner:** Roadmap Controller Agent  
**Last reconciled:** 2026-10-07
**Current stage:** Core data, economic research, and design showroom accepted; historical rights/registry integration and selected-system production next
**Checklist:** `project-control/REPORT_CHECKLIST.md`

## Task queue

| ID | Task | Suggested owner | State | Output |
|---|---|---|---|---|
| CTRL-001 | Install and reconcile project controls | Roadmap Controller | DONE | Control files and sector logs |
| CTRL-010 | Rescope the magazine from 45 pages to approximately 25 | Roadmap Controller | DONE | Updated scope, page plan, controls, prompts, and project memory |
| CTRL-011 | Reconcile core-data repair, economic evidence, and selected design direction | Roadmap Controller | DONE | Released registries, accepted handoffs, and prepared SRC-003/VIS-002 prompts |
| SRC-001 | Verify Ghana/South Korea sources and create APA 7 records | Sources & APA Agent | DONE | Registries and `research/ghana_korea_source_audit.md` |
| DATA-001 | Close or explicitly retain Ghana/South Korea data gaps | Country Data Agent | DONE | Updated `data/ghana.md` and `data/south_korea.md` |
| DATA-002 | Research Botswana with the common template | Country Data Agent | DONE | `data/botswana.md` |
| DATA-003 | Research Mauritius with the common template | Country Data Agent | DONE | `data/mauritius.md` |
| DATA-004 | Research Malaysia with the common template | Country Data Agent | DONE | `data/malaysia.md` |
| DATA-005 | Research Philippines with the common template | Country Data Agent | DONE | `data/philippines.md` |
| DATA-006 | Run six-country comparability review and freeze approved chart inputs | Country Data Agent | DONE | Comparability decisions and repaired 131-row frozen package passed controller validation |
| DATA-007 | Apply accepted SRC-002/DATA-006 corrections to four country files | Country Data Agent | DONE | Corrected Botswana, Mauritius, Malaysia, and Philippines evidence files |
| DATA-008 | Repair the QA-001 frozen-data gate defects | Data/source integration agent | DONE | Source joins, canonical units, locators, and deterministic employment display rule passed controller rerun; source registry released |
| SRC-002 | Register and audit Botswana/Mauritius/Malaysia/Philippines sources and claims | Sources & APA Agent | DONE | Expanded source and claim registries plus audit |
| SRC-003 | Register RES-001 claims and verify proposed map/image rights | Sources & APA Agent | READY | Historical claim/source rows plus rights audit |
| RES-001 | Verify colonialism, borders, infrastructure, and independence claims | History & Theory Agent | DONE | Page-mapped evidence pack |
| RES-002 | Verify Hofstede, critiques, and trust literature | History & Theory Agent | DONE | Page-mapped evidence pack |
| ECON-001 | Verify structural transformation, East Asian industrialisation, exports, and within-region variation | Economic Research Agent | DONE | Accepted page-mapped economic evidence pack with counterevidence and incompatible-export safeguards |
| THEORY-001 | Complete the theory evidence matrix | History & Theory Agent | BLOCKED | `research/THEORY_EVIDENCE_MATRIX.md` |
| VIS-001 | Define graph system and build one verified proof chart | Charts & Maps Agent | REVIEW | Proof chart passed QA and user selection is recorded; VIS-002 must reconcile system wording and production tests |
| VIS-002 | Formalise the selected comparison system and projection proof | Charts & Maps / Editorial Design Agent | READY | Selected-system specification, repaired wording, and 16:9 proof variant |
| QA-001 | Independently audit the DATA-006 freeze and VIS-001 proof chart | QA Agent | DONE | Audit accepted: DATA-006 failed narrow gate; proof chart passed; palette lock rejected |
| WRITE-001 | Draft page 13 | Editorial & Design Agent | BLOCKED | Page-ready Ghana/Korea comparison copy |
| DESIGN-001 | Create the design showroom, palette tests, and approximately 25-page rhythm plan | Editorial & Design Agent | DONE | Three preserved alternatives, 25-page rhythm plan, and user-selected Spread A/Palette A direction |
| AI-PROMPT-001 | Design the research-gated Development Evidence Lab scaffold | Editorial & Interaction Agent | DONE | Master prompt, research-pack template, and acceptance checklist |
| AI-PROMPT-002 | Fill, test, and approve the factual AI activity | Editorial & Interaction Agent | BLOCKED | Completed research pack, tested prompt, and offline alternative |
| GAME-001 | Define and prototype the companion game | Interaction Agent | MISSING | Evidence-linked game concept, prototype, rules, and static/offline form |

## Recommended next batch

The 2026-10-07 controller review accepted `DATA-008`, `ECON-001`, and `DESIGN-001`. DATA-008 releases `research/source_registry.csv`; the economic pack is ready for later theory synthesis; the user selected Spread A (Evidence Ledger) and Palette A with a mandatory Mauritius contrast repair and bounded national accents. The next non-overlapping batch is:

1. `SRC-003` — register every approved RES-001 claim and verify the 1914 map, Ghana railway, and Ghana–Togo/border visual rights and geometry decisions.
2. `VIS-002` — formalise only the selected Spread A/Palette A system, fix premature lock language, implement the Mauritius keyline rule, and produce a classroom 16:9 proof without altering the preserved VIS-001 SVG.

After SRC-003, reconcile the historical registries/rights record and prepare the focused economic/culture source integration needed before `THEORY-001`. `THEORY-001`, `WRITE-001`, and `AI-PROMPT-002` remain dependency-blocked.

## Known risks

- The repaired core package passes all 131 source joins, exact dictionary units, proxy/class checks, and 12 deterministic employment display totals; thematic/map datasets still require separate approval.
- Ghana and South Korea explicitly retain unresolved historical, export, literacy, informality, and trust gaps; rejected claims are preserved only as rejection/correction notes.
- The shared registries contain 63 sources and 262 six-country claims. DATA-007 corrected or qualified all 25 revision-required and four rejected newer-country claims in the country files, but registry-status reconciliation and 10 unresolved claims remain.
- Export composition, firm size/informality, direct trust, several historical anchors, and a seamless Philippines manufacturing trajectory remain excluded from common charts.
- RES-001 is accepted as an evidence pack, not as finished maps or pages; historical claims and asset rights still need shared-registry/rights review.
- VIS-001's proof chart passed numeric, APA, A4, grayscale, contrast, direct-label, and non-creator AI five-second checks. The user selected Spread A and Palette A, but `COMPARISON_SYSTEM.md` still needs production wording, Mauritius needs a mandatory keyline/under-stroke, and physical A4 plus human classroom/back-row checks remain outstanding.
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
