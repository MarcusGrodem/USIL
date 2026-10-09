# Theory evidence matrix — production and source specification

**Task:** VIS-005
**Status:** REVIEW
**Figure ID:** VIS-005-THEORY-MATRIX
**Target page:** 18 (theory-test matrix, per `design/PAGE_RHYTHM_PLAN.md`)

## Outcome

One editable A4 portrait SVG at `design/figures/theory_evidence_matrix.svg` that renders the accepted three-theory, six-country matrix as a compact theory-test visual. The visual lets a reader compare the three bounded verdicts, strongest support, strongest challenge, limitation, and revision condition without reading the full research matrix. Supporting tidy data at `data/charts/theory_evidence_matrix.csv`.

This specification does not approve a final page, final typeface, physical print proof, or human classroom/colour-vision readability. Those gates remain under VIS-004.

## Editorial concept and five-second entry point

- **Five-second question:** "Do the three ideas survive the six-country evidence?"
- **Immediate cues:** three vertical theory columns, each capped by a verdict badge whose pattern alone distinguishes `SUPPORTED-WITH-EXCEPTIONS` (hatched border) from `INCONCLUSIVE` (dashed open box).
- **Reading order ribbon:** 1 Verdict → 2 Six country cells → 3 Star Strongest support → 4 Heavy cross Strongest challenge → 5 Limitation → 6 Would revise or reject if.
- **Thirty-second read:** six country cells per theory (country marker, country name, short cell verdict, inline support/challenge badges), prose strongest-support and strongest-challenge blocks, bounded limitation and revision condition.

## Approved content route

- **Source document:** `research/THEORY_EVIDENCE_MATRIX.md` (THEORY-002 revalidated).
- **Shared registries:** `research/claim_registry.csv` and `research/source_registry.csv`.
- **Status:** no new sources or claims are introduced. The visual draws only on the accepted THEORY-001/002 wording and the APPROVED claim IDs listed below. The three theories remain original group hypotheses, not established academic theories.

## Tidy data

`data/charts/theory_evidence_matrix.csv`, 18 cell rows (3 theories x 6 countries). Columns:

| Column | Meaning |
|---|---|
| `theory_id` | T1, T2, or T3 |
| `theory_name` | full theory label |
| `bounded_verdict` | Supported-with-exceptions or Inconclusive |
| `country` | Ghana, Botswana, Mauritius, South Korea, Malaysia, Philippines |
| `region` | Africa or Asia (navigation only) |
| `case_role` | strongest_support, strongest_challenge, consistent, support_with_conditions, support_with_major_alternatives, counterexample_to_sufficiency, unresolved, mechanism_plausible, plausible_substitutes, strong_qualified_support, moderate_qualified_support, qualified_support_and_warning |
| `cell_verdict_short` | short label used on the figure |
| `cell_summary` | one-sentence justification using accepted wording |
| `cell_claim_ids` | semicolon-separated APPROVED claim IDs |
| `cell_source_ids` | semicolon-separated source IDs |
| `theory_limitation` | theory-level limitation (repeated per cell) |
| `theory_revision_or_rejection_condition` | theory-level revise/reject condition (repeated per cell) |

Semicolons separate list values inside a cell so the field remains CSV-safe.

## Claim and source references used on the figure

Only APPROVED claims. PARTIAL sources are preserved paired per the THEORY-001 limitation; no PARTIAL source is relied on alone for a unique causal verdict.

### Theory 1 — Connected Development (supported-with-exceptions)

- Ghana cell: `RES001-A02`, `RES001-A09`, `ECON001-A02` with `SRC-WB-GHA85-001`, `SRC-JEDWAB-MORADI12-001`, `SRC-WDI-001`, `SRC-WB-GHA20-001`.
- Botswana cell (strongest challenge): `BWA-HIST-IND`, `BWA-THEORY-COUNTER`, `BWA-ELC-2020`, `BWA-MANF-FIND`, `BWA-THEORY-INST` with `SRC-MAIPOSE08-001`, `SRC-WDI-001`, `SRC-IMF-BWA98-001`, `SRC-SB-TRADE21-001`, `SRC-WB-BWA23-001`, `SRC-HILLBOM14-001`.
- Mauritius cell: `MUS-HIST-DIVERS`, `MUS-ELC-1990`, `RES001-A12` with `SRC-WB-MUS97-001`, `SRC-WDI-001`, and the eleven paired six-case inheritance sources listed in the registry for `RES001-A12`.
- South Korea cell: `ECON001-A03`, `RES001-A07` with `SRC-WB-EAM93-001`, `SRC-KOHLI94-001`, `SRC-HAGGARD97-001`.
- Malaysia cell (strongest support): `MYS-THEORY-CONN`, `MYS-TNC-1992` with `SRC-WB-GHA20-001`, `SRC-WB-MYS16-001`, `SRC-WDI-001`.
- Philippines cell: `PHL-THEORY-CONN`, `PHL-EMP-FIND`, `PHL-FIND-PARTIAL` with `SRC-ADB-PHL07-001`, `SRC-NASUTION00-001`, `SRC-WDI-001`, `SRC-BSP-BPO11-001`.

### Theory 2 — Radius of Trust, institutional/organisational-substitutes form (inconclusive)

- Ghana cell (unresolved): `RES002-A09`, `RES002-A08`, `ECON001-A02` with `SRC-AFRO-BWA21-001`, `SRC-AFRO-MUS21-001`, `SRC-IPSOS-MYS20-001`, `SRC-WVS-PHL24-001`, `SRC-WGI26-001`, `SRC-WDI-001`, `SRC-WB-GHA20-001`.
- Botswana cell: `BWA-TRUST-2019`, `BWA-TRUST-QUAL`, `BWA-THEORY-TRUST` with `SRC-AFRO-BWA21-001`, `SRC-SB-LFS20-001`.
- Mauritius cell (strongest support): `MUS-THEORY-ROT`, `MUS-TRUST-2020`, `MUS-INF-2013`, `MUS-THEORY-LIMIT` with `SRC-WGI26-001`, `SRC-IMF-MUS14-001`, `SRC-AFRO-MUS21-001`, `SRC-WB-MUS19-001`, `SRC-WB-MUS97-001`.
- South Korea cell (unresolved): `RES002-A09`, `RES002-A08`, `ECON001-A03` with the same four direct-trust sources as Ghana plus `SRC-WGI26-001` and `SRC-WB-EAM93-001`.
- Malaysia cell: `MYS-THEORY-ROT`, `MYS-TRUST-2020` with `SRC-WGI26-001`, `SRC-IPSOS-MYS20-001`, `SRC-DOSM-INF20-001`, `SRC-WB-MYS22-001`.
- Philippines cell (strongest challenge): `PHL-THEORY-ROT`, `PHL-TRUST-2019` with `SRC-WVS-PHL24-001`, `SRC-WGI26-001`, `SRC-WB-PHL80-001`, `SRC-PSA-ASPBI23-001`.

### Theory 3 — Continuity + Adaptation (supported-with-exceptions)

- Ghana cell (unresolved): `GHA-MANF-H02`, `ECON001-A02` with `SRC-WDI-001`, `SRC-WB-GHA20-001`.
- Botswana cell (strongest challenge): `BWA-HIST-DIAM`, `BWA-THEORY-INST`, `BWA-THEORY-COUNTER` with `SRC-MAIPOSE08-001`, `SRC-HILLBOM14-001`, `SRC-WB-BWA23-001`, `SRC-WDI-001`, `SRC-IMF-BWA98-001`, `SRC-SB-TRADE21-001`.
- Mauritius cell: `MUS-THEORY-CONT`, `MUS-THEORY-LIMIT` with `SRC-IMF-MUS14-001`, `SRC-WB-MUS97-001`, `SRC-WB-MUS19-001`, `SRC-AFRO-MUS21-001`.
- South Korea cell (strongest support): `ECON001-A03`, `ECON001-A04` with `SRC-WB-EAM93-001`, `SRC-RODRIK95-001` (RODRIK95 remains PARTIAL and is paired with the opened `SRC-WB-EAM93-001`).
- Malaysia cell: `MYS-THEORY-CONT`, `MYS-THEORY-LIMIT`, `MYS-TNC-1992` with `SRC-WB-GHA20-001`, `SRC-WB-MYS16-001`, `SRC-WB-MYS24-001`, `SRC-WDI-001`.
- Philippines cell: `PHL-THEORY-CONT`, `PHL-HIST-ISI`, `PHL-HIST-CRISIS` with `SRC-HILL13-001`, `SRC-ADB-PHL07-001`, `SRC-WB-PHL87-001`.

### Overall boundary claim

The orienting non-cultural-determinism statement comes from `ECON001-A07` with `SRC-MCMILLAN-RODRIK-VERDUZCO14-001`, `SRC-WB-EAM93-001`, `SRC-RODRIK95-001`, `SRC-WB-GHA20-001`, `SRC-HILLBOM14-001`, `SRC-IMF-MUS14-001`, `SRC-NASUTION00-001`, `SRC-WDI-001`.

## A4 digital geometry

- Canvas: `210 mm × 297 mm`, SVG `viewBox="0 0 595 842"` (user unit = 1 pt). `width="210mm" height="297mm"` for correct physical mapping.
- Side margins 40 pt (≈ 14.1 mm). Top padding 25 pt. Bottom source-band baseline 828 pt (inside 842 pt).
- Three columns, 163 pt each, 13 pt gutters: Column 1 x = 40–203, Column 2 x = 216–379, Column 3 x = 392–555.
- Essential A4 text ≥ 11 pt (country name, country short verdict, verdict badge, block headers, deck). Source/limitation band is 10 pt per the selected system minima.
- Vertical layout: finding header 25–136 pt, column body 148–760 pt, source band rule 767 pt, source paragraphs 780–828 pt.

## Visual logic without colour

- Verdict badges differentiate without colour:
  - `SUPPORTED-WITH-EXCEPTIONS` — rectangle with a hatched outer border on cream.
  - `INCONCLUSIVE` — rectangle with a dashed open stroke and no fill.
- Country markers are drawn as grayscale geometric symbols that match the Palette A country shapes: Ghana circle, Botswana square, Mauritius triangle, South Korea diamond, Malaysia hexagon, Philippines cross. Fills are charcoal; a thin cream outline preserves separation. Country colour is intentionally not used; identity reads from name + shape + text verdict.
- Strongest support and challenge use filled star and heavy cross glyphs that are visually and semantically distinct, with the explicit text labels `STRONGEST SUPPORT` and `STRONGEST CHALLENGE` beside them to avoid legend hunting.
- Explicit phrases carry the uncertain cases: `Unresolved`, `Unresolved direct test`, `Unresolved channel`, `Mechanism plausible; causal test unavailable`, `Counterexample to strong form`, `Accumulation warning`, `does not show`, `cannot prove`. No qualitative verdict is converted to a numeric score and no country ranking is implied.

## Non-negotiable editorial boundaries

The visual must preserve the THEORY-002 boundaries:

- Verdicts are bounded qualitative conclusions, not causal estimates and not scores.
- The three theories are original group hypotheses, not established academic theories.
- The inconclusive Radius of Trust result stays as inconclusive. Trust constructs (generalized trust, family/network trust, named-institution trust, governance perception, survey responses) are not merged.
- No numeric aggregate, country ranking, or Africa-versus-Asia culture score is implied.
- `BWA-TRUST-2019`, `BWA-TRUST-QUAL`, and `BWA-THEORY-TRUST` are retained for the Botswana trust cell with their caveat that this is a snapshot that cannot show institutional trust caused firm scale or long-run growth. The Botswana labour report `SRC-SB-LFS20-001` is `PARTIAL` and is used only to limit, not support, a firm-scale or trust inference.
- `SRC-RODRIK95-001`, `SRC-HILLBOM14-001`, `SRC-BREWER-VENAIK14-001`, `SRC-PSA-TRADE21-001`, `SRC-PSA-ASPBI23-001`, `SRC-DOLAN93-001`, and `SRC-SB-LFS20-001` remain `PARTIAL`. The figure does not rely on any of them in isolation; each stays paired with an opened source as recorded in the registries.
- Hofstede long-term orientation cannot substitute for a Continuity + Adaptation policy timeline. The figure does not reference LTO as evidence.

## Figure note (final wording)

> **Figure VIS-005 · Theory evidence matrix (digital A4 proof).** *Note.* Verdicts are bounded, qualitative conclusions from the accepted three-theory matrix. They are not causal estimates, numeric scores, country rankings, or merged trust constructs. The Radius of Trust result is retained as inconclusive. The three theories are original group hypotheses, not established academic theories. Data from `research/THEORY_EVIDENCE_MATRIX.md` and the shared registries `research/claim_registry.csv` and `research/source_registry.csv`. Tidy data at `data/charts/theory_evidence_matrix.csv`. Marks: filled star = strongest support; heavy cross = strongest challenge.

APA references for every cited source already live in `research/source_registry.csv` and the project bibliography; no new APA entry is created by this figure.

## Grid, type, and construction summary

| Role | Treatment |
|---|---|
| Finding title | 22 pt bold, charcoal, sentence case, one line |
| Deck | 11 pt regular, two lines, charcoal |
| Eyebrow and ribbon | 10 pt bold, letter-spaced, dark neutral |
| Theory tag | 10 pt bold, letter-spaced, dark neutral |
| Theory name | 13 pt bold, charcoal |
| Verdict badge text | 11 pt bold, letter-spaced, centered |
| Country name | 11 pt bold, charcoal, directly beside marker |
| Country short verdict | 11 pt regular, dark charcoal |
| Block header (`STRONGEST SUPPORT`, `STRONGEST CHALLENGE`, `LIMITATION`, `WOULD REVISE OR REJECT IF`) | 11 pt bold, charcoal, letter-spaced lightly |
| Body paragraphs | 10 pt regular, charcoal, ~12 pt line height |
| Source band | 10 pt regular, dark charcoal, after a 1.2 pt rule |
| Markers | charcoal fill, cream outline, country-shape identity |
| Badges | filled star (support), heavy cross (challenge) |
| Patterns | 45° hatched border for supported-with-exceptions; dashed stroke for inconclusive |

The project typeface is **Montserrat**, locked by `design/TYPOGRAPHY_DECISION.md` (2026-10-09). The SVG uses the fallback stack `"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif`. Physical A4, back-row five-second, and colour-vision re-tests under this family remain outstanding VIS-004 release gates.

## Verification performed

| Check | Result | Method |
|---|---|---|
| SVG/XML well-formed | PASS | `xml.etree.ElementTree.parse` succeeds; 210 elements; root `svg` with correct `viewBox` and A4 physical dimensions. |
| CSV parses | PASS | `csv.DictReader` loads 18 rows; keys match the specification above; no duplicate `(theory_id, country)` combinations. |
| Every referenced claim ID | PASS | All claim IDs appearing in the figure/CSV are present in `research/claim_registry.csv` with `status = APPROVED`. |
| Every referenced source ID | PASS | All source IDs appearing in the figure/CSV are present in `research/source_registry.csv`. PARTIAL sources are preserved as PARTIAL and remain paired with an opened source. |
| Grayscale identity | PASS | Country identity reads from shape + name + text verdict; verdict badges distinguish by pattern (hatch vs dashed) rather than colour; support/challenge badges are shape-coded. The SVG uses only cream, charcoal, and dark neutral. |
| Digital A4 geometry | PASS | `width="210mm" height="297mm"`, `viewBox="0 0 595 842"`, body content stays within margins; last baseline at y=828 inside y=842. |
| Essential text sizes | PASS | Country name, country verdict, verdict badge text, block headers, and deck are 11 pt or larger. |
| Boundary wording | PASS | Explicit "cannot prove", "unresolved", "inconclusive", "not established academic theories" and "not causal estimates" statements are present. |

Outstanding gates — physical A4 reproduction, non-creator five-second comprehension, human colour-vision review, and final-typography review — remain under VIS-004 and are not relaxed by this figure.
