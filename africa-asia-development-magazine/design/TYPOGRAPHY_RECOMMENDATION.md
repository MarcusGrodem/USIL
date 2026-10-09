# Typography recommendation — TYPE-001

**Task:** TYPE-001
**Status:** REVIEW — awaiting the project lead's selection among three candidates
**Produced:** 2026-10-09
**Visual tester:** `design/typography_tester/type-001_visual_tester.pdf` (3 pages, A3 landscape, self-contained with embedded fonts)

## Purpose

Replace the unapproved **Aptos** default across the magazine's figure and page system with a confirmed modern typeface family that supports a multi-size headline hierarchy, carries tabular lining numerals for charts, and ships under an open licence compatible with print, web, and classroom projection.

This document is a **recommendation**, not a lock. The project lead chooses one of the three candidates after inspecting the visual tester PDF.

## The three candidates

All three are **SIL Open Font Licence 1.1**, available from Google Fonts, embeddable in PDF/web/print without licensing fees, and support tabular lining numerals via `font-variant-numeric: tabular-nums lining-nums`.

| | Candidate 1 | Candidate 2 | Candidate 3 |
|---|---|---|---|
| **Family** | Montserrat | Inter | IBM Plex Sans |
| **Designer** | Julieta Ulanovsky | Rasmus Andersson | Mike Abbink / Bold Monday for IBM |
| **Classification** | Geometric sans | Humanist sans (screen-tuned) | Editorial-technical sans |
| **Weights available** | 100 – 900 incl. **Black 900** | 100 – 900 incl. **Black 900** (variable) | 100 – 700 (no Black) |
| **Italic cuts** | Yes | Yes | Yes |
| **Numerals** | Lining; tabular supported | Lining; tabular purpose-built | Lining; tabular supported |
| **Siblings** | — | Display cuts for ≥ 32 pt | Condensed, Mono, Serif |
| **Licence** | SIL OFL 1.1 | SIL OFL 1.1 | SIL OFL 1.1 |
| **Hosted by** | Google Fonts | Google Fonts | Google Fonts |
| **Also used by** | Lonely Planet; many infographic shops | Financial Times, Pudding, Our World in Data, GitHub | IBM, major editorial PDFs |
| **Voice** | Modern, friendly, confident | Neutral, data-journalistic | Editorial, technical, serious |

### Why these three

The project lead named Montserrat directly. The other two cover the two most useful counterpoints:

- **Inter** is the proven standard in editorial data journalism. If the magazine needs its covers and body copy to privilege absolute data legibility and screen-tuned small-size reading over display personality, Inter wins.
- **IBM Plex Sans** adds editorial-technical character and brings a shipped family of siblings (Serif, Mono, Condensed) if the magazine later wants pull-quote serif or figure-callout mono without a second licence to verify.

Alternatives *not* carried forward: Aptos (the current default — not confirmed by the project lead); Helvetica / Söhne / proprietary families (licensing restrictions for a classroom-distributed magazine); Space Grotesk and Work Sans (strong but narrower weight range than the three above, which weakens the display–body hierarchy).

## Proposed hierarchy (identical across the three candidates)

The same role table applies to all three families; only the weight choice shifts because IBM Plex Sans has no 900.

### Page-level editorial scale (A4, points)

| Role | Weight | Size (pt) | Line-height (pt) | Tracking | Case | Notes |
|---|---|---:|---:|---|---|---|
| H0 — Section opener display | **900** / Plex **700** | 72 | 76 | −2 % | Mixed | Covers; chapter openers |
| H1 — Page headline | **700** | 48 | 52 | −1.5 % | Mixed | One per page |
| H2 — Subhead | **700** | 32 | 36 | −1 % | Mixed | Within-page section |
| H3 — Section head | **600** | 22 | 26 | 0 | Mixed | Minor sections |
| Deck / intro | 400 or **500** | 16 | 22 | 0 | Mixed | Dropped-first-paragraph intro |
| Eyebrow / section tag | **700** | 11 | 14 | +14 % | **UPPERCASE** | Tracked spacing |
| Body copy | 400 | 10.5 | 14 | 0 | Mixed | 55–75 char measure |
| Caption / label | **500** | 9 | 12 | 0 | Mixed | Figure captions |
| Figure note (APA) | 400 | 7.5 – 8 | 11 | 0 | Mixed | At figure foot |
| Credit / folio | **500** | 7 | 10 | +2 % | UPPERCASE | Page edges |

Line-heights are starting values; verify in a physical A4 proof.

### Figure-level scale (SVG viewBox units; already locked by VIS-005/006/007/008)

The role sizes in the current four production specs stay unchanged. Only the typeface swap matters:

```
"Montserrat" | "Inter" | "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif
```

Numerals must retain `font-variant-numeric: tabular-nums lining-nums` on every axis, year, and value label. This is already set in all four SVGs.

## Recommended fallback stack (same for all three candidates)

```css
font-family: "<CHOSEN>", "Helvetica Neue", Arial, sans-serif;
font-variant-numeric: tabular-nums lining-nums;
```

For the Palette A country labels and figure numerals, the stack must resolve to a sans-serif with tabular lining numerals in every browser/PDF viewer the magazine is tested in; Helvetica Neue and Arial satisfy that.

## Trade-off summary (for the three-way decision)

| Dimension | Montserrat | Inter | IBM Plex Sans |
|---|---|---|---|
| Display drama at ≥ 48 pt | **Strongest** (Black 900) | Strong (Black 900) | Moderate (Bold 700 ceiling) |
| Small-size body reading | Good | **Best** (screen-tuned) | Good |
| Editorial voice | Modern / friendly | Neutral / data-first | **Most editorial** |
| Numeral behaviour in dense tables | Good | **Best** | Good |
| Breadth of siblings | — | Display cuts | **Serif, Mono, Condensed, Mono siblings available** |
| Risk of "default template" feel | Medium — mitigate with Black + Medium contrast | Low — if display cuts are used on covers | Low |
| Pairing with a serif display | Easy | Easy | **Already matches Plex Serif** |

## What is NOT changed by this recommendation

- Palette A country identities and data colours stay as locked in `design/SELECTED_COMPARISON_SYSTEM.md`.
- The locked figure geometry in VIS-005, VIS-006, VIS-007, VIS-008 is unchanged.
- Numeric values, caveats, source IDs, and acceptance criteria of any figure are unchanged.
- The release gates in VIS-004 — physical A4 proof, back-row five-second comprehension, human colour-vision review — are independent of this decision.

## Acceptance path

1. Project lead opens `design/typography_tester/type-001_visual_tester.pdf` and inspects the three columns on A3 landscape.
2. Project lead records the chosen family in `design/TYPOGRAPHY_DECISION.md` (new, created on selection) and signs off the weight set and hierarchy table above.
3. The chosen family is propagated into the four production SVGs by swapping only the `font-family` declaration; no geometry changes.
4. Each figure's spec is updated to name the chosen family and reference the decision record.
5. The final-typography sub-gate of VIS-004 can then be scheduled.

## Related files

- Visual tester (PDF): `design/typography_tester/type-001_visual_tester.pdf`
- Visual tester (HTML source): `design/typography_tester/type-001_visual_tester.html`
- Embedded font bundle (data: URIs): `design/typography_tester/fonts.css`
- Current selected comparison system: `design/SELECTED_COMPARISON_SYSTEM.md`
- Current figure specs that will swap the font-family: `design/figures/SIX_COUNTRY_GDP_ANCHOR_SPEC.md`, `design/figures/EMPLOYMENT_STRUCTURAL_TRANSFORMATION_SPEC.md`, `design/figures/MANUFACTURING_SHARE_SPEC.md`, `design/figures/THEORY_EVIDENCE_MATRIX_SPEC.md`
- Task log: `project-control/logs/TYPE-001.md`
