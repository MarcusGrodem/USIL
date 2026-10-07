# DESIGN-001 comparison showroom

**Status:** REVIEW, user selection required  
**Prepared:** 2026-10-07  
**Decision scope:** editorial spread treatment, six-country palette logic, and page rhythm only. Nothing in this showroom is a magazine-wide lock.

## Read this first

This showroom compares design, not evidence. All three spread treatments use the same approved Ghana and South Korea GDP-per-capita observations from `data/charts/ghana_korea_gdp_per_capita.csv`:

| Country | 1960 | 1990 | 2020 |
|---|---:|---:|---:|
| Ghana | US$1,101 | US$856 | US$1,970 |
| South Korea | US$1,038 | US$9,673 | US$33,216 |

The indicator is World Bank `NY.GDP.PCAP.KD`, GDP per capita in constant 2015 US dollars. The exact unrounded values remain in the approved CSV. The 2020 ratio is 16.9 to 1. The shared evidence statement is: **near parity in 1960 became a nearly 17-to-1 difference by 2020**.

Every version retains the same limitation: the comparison describes income divergence, but does not identify whether culture, policy, institutions, war, aid, or another factor caused it. The 2020 observation is also from the COVID-19 year. Straight connectors join only the three observed anchors and do not estimate intervening annual values.

The visual sheets are editable SVGs:

- [`spread_trials.svg`](spread_trials.svg): three materially different composition trials using the same content.
- [`palette_trials.svg`](palette_trials.svg): three six-country palette and marker trials with test results.
- [`../PAGE_RHYTHM_PLAN.md`](../PAGE_RHYTHM_PLAN.md): draft 25-page pacing plan and gate map.

## Governance correction carried into the showroom

QA-001 passed the numeric, geometric, APA, grayscale, A4, contrast, direct-label, and non-creator five-second checks for the existing VIS-001 proof chart. It did **not** approve that chart's palette as the magazine-wide system.

The inherited `design/figures/COMPARISON_SYSTEM.md` and `design/DESIGN_GUIDE.md` contain premature terms such as “fixed,” “locked,” “approved,” and “final.” Newer controller and QA records supersede that language for design governance. In this showroom:

- the original VIS-001 SVG remains unchanged at `design/figures/ghana_korea_gdp_per_capita.svg`;
- its palette and marker mapping are presented as **Candidate A**, not as a final system;
- Palette A's Mauritius ochre has only 2.03:1 contrast against cream and therefore requires a charcoal outline or under-stroke for essential marks;
- the proof chart's supporting notes remain marginal for back-row reading in a 1280 × 720 classroom fit, so a later 16:9 projection export and human back-row check are still required;
- no final palette or spread direction may be propagated until the user completes the decision form below.

## Constant test content

Each spread trial includes these same elements:

1. finding-led headline;
2. indicator, unit, countries, and three observed years;
3. one shared zero-based 0 to 35,000 scale;
4. all six rounded values;
5. direct country labels plus circle/diamond and solid/dashed identification;
6. observed-anchor notice;
7. “What this cannot prove” statement;
8. World Bank source note and `SRC-WDI-001` traceability;
9. an explicitly gated photo area rather than an invented or unlicensed image.

This control makes hierarchy, composition, chart treatment, imagery role, and editorial tone the only meaningful variables.

## Spread A: Evidence Ledger

**Design question:** Should the verified VIS-001 proof chart remain the primary visual language, with the page behaving like a precise evidence plate?

**What it tests:** chart-first hierarchy, strict horizontal grid, restrained editorial voice, and maximum continuity with the already audited proof.

**Five-second entry:** the headline and the steep South Korea trajectory occupy the first visual field.

**Composition:** one wide chart across roughly two-thirds of the spread; a narrow evidence rail contains the source, observed-anchor note, limitation, and one rights-gated photograph slot. The original VIS-001 chart is the canonical source for this option and stays unchanged.

**Strengths:**

- strongest continuity with an independently checked figure;
- clearest axis, values, years, source, and limitation;
- calm enough for dense analytical pages;
- easy to reproduce as a chart system.

**Risks:**

- can feel procedural if reused too often;
- current proof-note size is not a back-row projection solution;
- image storytelling is secondary;
- inherited palette remains only a candidate.

**Best fit:** core evidence spreads, theory matrices, and any page where exact comparison is the main event.

## Spread B: Paired Field Notes

**Design question:** Can a symmetrical Ghana/South Korea composition make both cases feel equally present while preserving one shared quantitative scale?

**What it tests:** mirrored page architecture, country parity, editorial annotations close to the data, and two rights-gated documentary-image roles.

**Five-second entry:** the reader sees “same start” at the centre seam and “different 2020 outcomes” at the outer edges.

**Composition:** Ghana owns the left page and South Korea the right, but both lines are drawn against the same continuous 0 to 35,000 scale. A central 1960 hinge makes near parity explicit. Values sit next to observed markers. Photo placeholders are small documentary windows, not decorative hero images.

**Strengths:**

- gives both cases equal visual dignity;
- makes the paired comparison feel editorial rather than dashboard-like;
- creates natural locations for short historical annotations later;
- photographs can establish place without replacing evidence.

**Risks:**

- symmetry may falsely imply that contextual evidence is equivalent in amount or quality;
- the fold can become a visual obstacle in some export formats;
- needs careful copy control to avoid two parallel essays;
- a split layout must never become two unmatched axes.

**Best fit:** the main Ghana/South Korea comparison, paired country profiles, and carefully matched counterexample spreads.

## Spread C: Question, Reveal, Qualification

**Design question:** Can the comparison become more memorable if the reader encounters a question and a visual reveal before the method note?

**What it tests:** dramatic typographic pacing, a diagonal reading path, sparse chart annotation, and explicit separation of evidence from interpretation.

**Five-second entry:** “Same starting line?” dominates the first page; the nearly 17-to-1 endpoint answers it on the facing page.

**Composition:** the left page is a large question with the two 1960 values and an unapproved-image placeholder. The right page reveals the shared-axis trajectories, followed by a high-contrast limitation block. The source remains on the evidence page rather than in hidden back matter.

**Strengths:**

- strongest classroom recall and presentation crossover;
- turns the spread into a sequence: ask, inspect, qualify;
- breaks the rhythm of data-heavy sections;
- makes the causal limitation visually unavoidable.

**Risks:**

- less efficient for pages carrying many indicators;
- dramatic type can overpower the chart if not tightly edited;
- needs a static answer path so the question does not read as a gimmick;
- requires the most care in print imposition and projection adaptation.

**Best fit:** section openers, the pivotal Ghana/South Korea spread, and transitions from evidence to theory.

## Spread comparison matrix

| Criterion | A: Evidence Ledger | B: Paired Field Notes | C: Question, Reveal, Qualification |
|---|---|---|---|
| First visual priority | Verified chart | Equal country presence | Provocative question, then answer |
| Grid character | Strict horizontal evidence grid | Mirrored paired pages | Asymmetric editorial sequence |
| Image role | One supporting evidence window | Two matched documentary windows | One atmospheric but rights-gated opener |
| Source visibility | Highest | High | High, concentrated on answer page |
| Classroom recall | Medium | High | Highest |
| Dense-data capacity | Highest | Medium | Low |
| Main misuse risk | Repetition | False symmetry | Drama outrunning evidence |
| Recommended use case, if selected | Reusable analytical base | Main paired cases | Pivotal openers and transitions |

## Palette trials

All palettes use a paper-toned background, charcoal text, stable country labels, and six different markers. Country colour identifies a case only. It never means success, failure, richer, poorer, African, or Asian by itself.

### Palette A: Inherited Editorial

**Design question:** Should the current guide's warm Africa and cool/mixed Asia colours be retained with its known accessibility repair?

This is the exact VIS-001 candidate family: Ghana terracotta/circle, Botswana green/square, Mauritius ochre/up-triangle, South Korea blue/diamond, Malaysia jade/hexagon, Philippines red/cross.

**Test summary:** five country colours exceed 3:1 against cream for non-text marks. Mauritius ochre is 2.03:1, so this option passes only when every ochre mark has a charcoal keyline or under-stroke and a direct label. Markers and labels preserve identification in grayscale and colour-vision-deficiency conditions. A4 is strong; projection requires the separate note-size repair already identified by QA-001.

### Palette B: Deep Earth / Deep Water

**Design question:** Should regional families remain visible while every country colour independently clears strong contrast on paper?

Africa uses rust, forest, and deep ochre. Asia uses cobalt, teal, and violet. All six country colours exceed 5:1 against the off-white ground. Shapes remain unchanged.

**Test summary:** strongest raw contrast and grayscale separation of the three most important paired marks. Warm/cool families remain apparent, but no chart may use family hue without country labels. This trial is the most projection-resilient of the three at equal stroke widths.

### Palette C: Country First / Region in Navigation

**Design question:** Should country distinction take priority over a continent-colour story, with region shown instead through labelled navigation bands?

Six separated dark hues identify countries. Africa and Asia are carried by explicit section labels and header bands rather than inferred from hue. All colours exceed 4.7:1 against the warm paper.

**Test summary:** strongest safeguard against visually flattening either region into one family. The six hues remain marker-supported in grayscale and colour-vision-deficiency checks. The trade-off is weaker instant regional grouping unless navigation labels remain visible.

## Palette test method and limits

The detailed results are printed inside `palette_trials.svg`. Tests used the following production criteria:

- **Contrast:** WCAG relative-luminance ratio against each palette's paper background. Essential non-text marks target 3:1. Text remains charcoal and exceeds 12:1 in all trials.
- **Colour blindness:** information-level stress check under complete hue loss and red/green confusion. Every country remains identifiable by direct name, unique marker, and line pattern. No result depends on colour naming. This is a structural test, not a substitute for a human colour-vision-deficiency review.
- **Grayscale:** each row includes a grayscale-order read and a marker-only sample. Palette A's Ghana and Philippines tones are close, so labels and shapes are mandatory. Palette B and C have some neighbouring luminance values, also making markers mandatory.
- **A4:** the sheets use an A4-proportioned viewBox. Minimum informational text is designed to resolve at approximately 9.5 to 10 pt when the complete sheet fills an A4 page. Final chart pages should still use the guide's 10 pt note and 11 pt axis minima.
- **Classroom screen:** titles, countries, values, and marker shapes are intended to survive a 1280 × 720 fit. Method and APA notes are not claimed as back-row-readable in a full A4 page fit. Final projected figures need dedicated 16:9 exports and a human back-row test.
- **Print:** no required content uses transparency, gradients, shadows, or overprint-dependent effects. A physical printer proof is still required before final lock.

## Recommended combinations for consideration

These are combinations to compare, not a selection:

1. **Evidence spine:** Spread A for most data pages, Spread C for section pivots, Palette B for high contrast.
2. **Paired investigation:** Spread B for the Ghana/South Korea centrepiece, Spread A for supporting charts, Palette C to keep country identity ahead of regional shorthand.
3. **Continuity with repair:** Spread A as the base, selected compositional moves from B, Palette A with the Mauritius outline rule and a later projection-specific export.
4. **Classroom narrative:** Spread C for the opening and theory transitions, Spread B for paired cases, Palette B or C after a physical A4 proof and human screen test.

## Non-negotiable regardless of selection

- Keep the original VIS-001 proof SVG unchanged as a review artefact.
- Keep one shared scale for direct Ghana/South Korea comparison.
- Use only observed anchor values and label proxies or gaps visibly.
- Keep the causal limitation on the same spread as the major comparison.
- Use direct labels, unique markers, and patterns so colour is never the only identifier.
- Replace every photo or map placeholder only after provenance, rights, date/place, and analytical caption are approved.
- Do not propagate a palette until the user records a dated selection.

## User decision form

**Reviewer name:** ______________________________________________  
**Decision date:** _______________________________________________

### 1. Spread direction

Select one base or write a combination.

- [ ] A: Evidence Ledger
- [ ] B: Paired Field Notes
- [ ] C: Question, Reveal, Qualification
- [ ] Combination: ______________________________________________

**Selected elements:**

__________________________________________________________________

__________________________________________________________________

**Rejected elements and why:**

__________________________________________________________________

__________________________________________________________________

### 2. Palette direction

- [ ] A: Inherited Editorial, with mandatory accessibility repair
- [ ] B: Deep Earth / Deep Water
- [ ] C: Country First / Region in Navigation
- [ ] Combination or requested revision: _________________________

**Selected country or region roles:**

__________________________________________________________________

**Rejected colours or associations:**

__________________________________________________________________

### 3. Typography and tone

- [ ] Evidence-dense and restrained
- [ ] Balanced editorial/documentary
- [ ] Question-led and dramatic
- [ ] Combination: ______________________________________________

**Notes on hierarchy, type, imagery, or tone:**

__________________________________________________________________

__________________________________________________________________

### 4. Rhythm plan response

**Pages or sequences to preserve:**

__________________________________________________________________

**Pages or sequences to revise:**

__________________________________________________________________

**Preferred interaction(s) to prototype later:**

__________________________________________________________________

### 5. Approval boundary

- [ ] Approve selected direction for a later visual-system specification.
- [ ] Request another showroom round before any system is locked.
- [ ] Approve only the Ghana/South Korea spread experiment, not magazine-wide use.

**Final instruction:**

__________________________________________________________________

__________________________________________________________________
