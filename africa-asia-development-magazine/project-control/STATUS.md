# Agent Status Board

**Owner:** Roadmap Controller Agent  
**Last reconciled:** 2026-10-04  
**Current stage:** Research foundation and paired-comparison prototyping  
**Checklist:** `project-control/REPORT_CHECKLIST.md`

## Task queue

| ID | Task | Suggested owner | State | Output |
|---|---|---|---|---|
| CTRL-001 | Install and reconcile project controls | Roadmap Controller | DONE | Control files and sector logs |
| SRC-001 | Verify Ghana/South Korea sources and create APA 7 records | Sources & APA Agent | READY | Updated `SOURCES.md` and registries |
| DATA-001 | Close or explicitly retain Ghana/South Korea data gaps | Country Data Agent | READY | Updated `data/ghana.md` and `data/south_korea.md` |
| DATA-002 | Research Botswana with the common template | Country Data Agent | READY | `data/botswana.md` |
| DATA-003 | Research Mauritius with the common template | Country Data Agent | READY | `data/mauritius.md` |
| DATA-004 | Research Malaysia with the common template | Country Data Agent | READY | `data/malaysia.md` |
| DATA-005 | Research Philippines with the common template | Country Data Agent | READY | `data/philippines.md` |
| RES-001 | Verify colonialism, borders, infrastructure, and independence claims | History & Theory Agent | READY | Page-mapped evidence pack |
| RES-002 | Verify Hofstede, critiques, and trust literature | History & Theory Agent | READY | Page-mapped evidence pack |
| THEORY-001 | Complete the theory evidence matrix | History & Theory Agent | BLOCKED | `research/THEORY_EVIDENCE_MATRIX.md` |
| VIS-001 | Define graph system and build one verified proof chart | Charts & Maps Agent | READY | Chart specification, data, figure, APA note |
| WRITE-001 | Draft pages 24–26 | Editorial & Design Agent | BLOCKED | Page-ready Ghana/Korea copy |

## Recommended parallel batch

Ready-to-copy prompts are in `project-control/NEXT_AGENT_PROMPTS.md`.

1. `SRC-001`
2. `DATA-002`
3. `DATA-003`
4. `VIS-001`

## Known risks

- Four country evidence files are missing.
- Existing bibliography entries are mostly not complete APA citations.
- No claim registry or frozen chart dataset exists.
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
