# Agent Status Board

**Owner:** Roadmap Controller Agent  
**Last reconciled:** 2026-10-04  
**Current stage:** Research foundation and paired-comparison prototyping  
**Checklist:** `project-control/REPORT_CHECKLIST.md`

## Task queue

| ID | Task | Suggested owner | State | Output |
|---|---|---|---|---|
| CTRL-001 | Install and reconcile project controls | Roadmap Controller | DONE | Control files and sector logs |
| SRC-001 | Verify Ghana/South Korea sources and create APA 7 records | Sources & APA Agent | DONE | Registries and `research/ghana_korea_source_audit.md` |
| DATA-001 | Close or explicitly retain Ghana/South Korea data gaps | Country Data Agent | IN PROGRESS | Updated `data/ghana.md` and `data/south_korea.md` |
| DATA-002 | Research Botswana with the common template | Country Data Agent | DONE | `data/botswana.md` |
| DATA-003 | Research Mauritius with the common template | Country Data Agent | DONE | `data/mauritius.md` |
| DATA-004 | Research Malaysia with the common template | Country Data Agent | IN PROGRESS | `data/malaysia.md` |
| DATA-005 | Research Philippines with the common template | Country Data Agent | IN PROGRESS | `data/philippines.md` |
| RES-001 | Verify colonialism, borders, infrastructure, and independence claims | History & Theory Agent | READY | Page-mapped evidence pack |
| RES-002 | Verify Hofstede, critiques, and trust literature | History & Theory Agent | READY | Page-mapped evidence pack |
| THEORY-001 | Complete the theory evidence matrix | History & Theory Agent | BLOCKED | `research/THEORY_EVIDENCE_MATRIX.md` |
| VIS-001 | Define graph system and build one verified proof chart | Charts & Maps Agent | READY | Chart specification, data, figure, APA note |
| WRITE-001 | Draft pages 24–26 | Editorial & Design Agent | BLOCKED | Page-ready Ghana/Korea copy |
| DESIGN-001 | Create a 45-page rhythm map and visual-variety plan | Editorial & Design Agent | BLOCKED | Approved comparison system and page evidence priorities |

## Active parallel batch

Dispatched with mutually exclusive output files on 2026-10-04:

1. `DATA-001`
2. `DATA-004`
3. `DATA-005`

`VIS-001` remains `READY` and should start after `DATA-001` returns, so the proof chart reads stable Ghana/South Korea inputs.

## Known risks

- Two country evidence files are missing: Malaysia and the Philippines.
- Ghana and South Korea still contain claims and cells that SRC-001 marked revision-required, unresolved, or rejected.
- The claim registry covers Ghana and South Korea only; no project-wide frozen chart dataset exists.
- The rough PDF contains placeholders and an obsolete palette.
- No final deliverable exists.
- The folder has no usable Git history.

## Controller reconciliation steps

1. Read new sector-log entries.
2. Inspect the claimed deliverables.
3. Accept, reject, or move work to `REVIEW`.
4. Update this board.
5. Update `REPORT_CHECKLIST.md` only when evidence supports a changed box.
6. Record the reconciliation in `logs/controller.md`.
