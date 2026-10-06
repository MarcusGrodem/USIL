# Agent Status Board

**Owner:** Roadmap Controller Agent  
**Last reconciled:** 2026-10-05
**Current stage:** Six-country evidence assembled; comparability freeze and thematic research next
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
| DATA-006 | Run six-country comparability review and freeze approved chart inputs | Country Data Agent | READY | Comparability report, indicator dictionary, frozen master table |
| SRC-002 | Register and audit Botswana/Mauritius/Malaysia/Philippines sources and claims | Sources & APA Agent | READY | Expanded source and claim registries plus audit |
| RES-001 | Verify colonialism, borders, infrastructure, and independence claims | History & Theory Agent | READY | Page-mapped evidence pack |
| RES-002 | Verify Hofstede, critiques, and trust literature | History & Theory Agent | READY | Page-mapped evidence pack |
| THEORY-001 | Complete the theory evidence matrix | History & Theory Agent | BLOCKED | `research/THEORY_EVIDENCE_MATRIX.md` |
| VIS-001 | Define graph system and build one verified proof chart | Charts & Maps Agent | READY | Chart specification, data, figure, APA note |
| WRITE-001 | Draft pages 24–26 | Editorial & Design Agent | BLOCKED | Page-ready Ghana/Korea copy |
| DESIGN-001 | Create a 45-page rhythm map and visual-variety plan | Editorial & Design Agent | BLOCKED | Approved comparison system and page evidence priorities |

## Recommended next parallel batch

The 2026-10-04 data batch has returned and passed controller review. The next non-overlapping order is:

1. `VIS-001` — build only the verified Ghana/South Korea GDP proof chart.
2. `DATA-006` — reconcile indicator definitions, releases, proxies, and exclusions across all six countries and freeze approved chart inputs.
3. `SRC-002` — normalize and register the four newer country files' APA sources and claims.
4. `RES-001` — begin the page-mapped colonialism, borders, infrastructure, and independence evidence pack.

`RES-002` should follow as soon as a slot opens. `THEORY-001`, `WRITE-001`, and `DESIGN-001` remain dependency-blocked.

## Known risks

- All six country evidence files now exist, but they are not yet harmonised for charting.
- Ghana and South Korea explicitly retain unresolved historical, export, literacy, informality, and trust gaps; rejected claims are preserved only as rejection/correction notes.
- The claim registry covers Ghana and South Korea only; Botswana, Mauritius, Malaysia, and the Philippines still require shared-registry integration.
- No project-wide frozen chart dataset exists. WGI release vintages, export classifications, national-account vintages, proxy years, and missing anchors require a six-country comparability decision.
- The rough PDF contains placeholders and an obsolete palette.
- No final deliverable exists.
- The accepted second-batch files and this reconciliation are currently uncommitted; Git history and `origin/main` otherwise exist.

## Controller reconciliation steps

1. Dispatch the next bounded, non-overlapping task batch from this board.
2. Read each returned sector log and inspect the real deliverables.
3. Accept, reject, or move work to `REVIEW` against its acceptance criteria.
4. Update this board and `REPORT_CHECKLIST.md` only when evidence supports a changed state.
5. Record every reconciliation in `logs/controller.md`.
