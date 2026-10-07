# Agent Status Board

**Owner:** Roadmap Controller Agent  
**Last reconciled:** 2026-10-06
**Current stage:** Country-file repair and culture pack accepted; proof chart passed QA; core-data gate repair, economic evidence, rights registration, and design showroom next
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
| DATA-006 | Run six-country comparability review and freeze approved chart inputs | Country Data Agent | REVIEW | Comparability report accepted; frozen table failed QA traceability/unit/rounding gate and needs DATA-008 repair |
| DATA-007 | Apply accepted SRC-002/DATA-006 corrections to four country files | Country Data Agent | DONE | Corrected Botswana, Mauritius, Malaysia, and Philippines evidence files |
| DATA-008 | Repair the QA-001 frozen-data gate defects | Data/source integration agent | READY | Registry-ready source IDs, canonical units, deterministic employment display rule, and clean validation |
| SRC-002 | Register and audit Botswana/Mauritius/Malaysia/Philippines sources and claims | Sources & APA Agent | DONE | Expanded source and claim registries plus audit |
| SRC-003 | Register RES-001 claims and verify proposed map/image rights | Sources & APA Agent | READY | Historical claim/source rows plus rights audit |
| RES-001 | Verify colonialism, borders, infrastructure, and independence claims | History & Theory Agent | DONE | Page-mapped evidence pack |
| RES-002 | Verify Hofstede, critiques, and trust literature | History & Theory Agent | DONE | Page-mapped evidence pack |
| ECON-001 | Verify structural transformation, East Asian industrialisation, exports, and within-region variation | Economic Research Agent | READY | Page-mapped economic evidence pack |
| THEORY-001 | Complete the theory evidence matrix | History & Theory Agent | BLOCKED | `research/THEORY_EVIDENCE_MATRIX.md` |
| VIS-001 | Define graph system and build one verified proof chart | Charts & Maps Agent | REVIEW | Proof chart passed QA; system document must remove lock language and user palette choice remains pending |
| QA-001 | Independently audit the DATA-006 freeze and VIS-001 proof chart | QA Agent | DONE | Audit accepted: DATA-006 failed narrow gate; proof chart passed; palette lock rejected |
| WRITE-001 | Draft pages 24–26 | Editorial & Design Agent | BLOCKED | Page-ready Ghana/Korea copy |
| DESIGN-001 | Create the design showroom, palette tests, and 45-page rhythm plan | Editorial & Design Agent | READY | Preserved alternatives for user choice; no final system lock |
| AI-PROMPT-001 | Design the research-gated Development Evidence Lab scaffold | Editorial & Interaction Agent | DONE | Master prompt, research-pack template, and acceptance checklist |
| AI-PROMPT-002 | Fill, test, and approve the factual AI activity | Editorial & Interaction Agent | BLOCKED | Completed research pack, tested prompt, and offline alternative |
| GAME-001 | Define and prototype the companion game | Interaction Agent | MISSING | Evidence-linked game concept, prototype, rules, and static/offline form |

## Recommended next batch

The 2026-10-06 QA/culture/country-repair batch has returned. `QA-001`, `RES-002`, and `DATA-007` passed controller review. QA passed the VIS-001 proof chart but found two P1 and two P2 defects around the frozen-data package and candidate-system wording. The next order is:

1. `DATA-008` — repair the frozen-data source IDs, canonical units, employment display-rounding rule, and related registry locators; this task temporarily owns the shared registries.
2. `ECON-001` — build the structural-transformation, East Asian industrialisation, manufactured-exports, and within-region-variation evidence pack.
3. `DESIGN-001` — create materially different showroom and palette trials plus a draft 45-page rhythm plan; do not lock a final system before user selection.
4. `SRC-003` — run after `DATA-008` releases the shared registries; register RES-001 claims and verify proposed map/image rights.

After DESIGN-001 review, present the alternatives to the user. `VIS-002` may then apply the selected direction and remove remaining candidate-lock wording. `THEORY-001`, `WRITE-001`, and `AI-PROMPT-002` remain dependency-blocked.

## Known risks

- The core six-country values and coverage passed independent numeric checks, but DATA-006 failed the traceability/unit/rounding gate: all 131 master `source_id` cells use non-registry extraction labels, 36 unit cells differ from the dictionary, and four employment panels need a deterministic display-rounding rule.
- Ghana and South Korea explicitly retain unresolved historical, export, literacy, informality, and trust gaps; rejected claims are preserved only as rejection/correction notes.
- The shared registries contain 63 sources and 262 six-country claims. DATA-007 corrected or qualified all 25 revision-required and four rejected newer-country claims in the country files, but registry-status reconciliation and 10 unresolved claims remain.
- Export composition, firm size/informality, direct trust, several historical anchors, and a seamless Philippines manufacturing trajectory remain excluded from common charts.
- RES-001 is accepted as an evidence pack, not as finished maps or pages; historical claims and asset rights still need shared-registry/rights review.
- VIS-001's proof chart passed numeric, APA, A4, grayscale, contrast, direct-label, and non-creator AI five-second checks. It is still not an approved magazine-wide system: `COMPARISON_SYSTEM.md` contains premature lock language, a human classroom/back-row check remains advisable, and the required user showroom/palette decision is pending.
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
