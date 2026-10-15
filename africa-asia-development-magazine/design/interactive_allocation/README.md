# Interactive allocation activity — page 9

A single-file classroom activity for the Africa & Asia Development
Magazine. The site lets a student allocate 100 points across six
priorities and shows which of six country **discussion profiles** their
choices most resemble under an authored classroom rubric.

The activity is a thought experiment. It is **not** a historical national
budget, a measurement of any country's priorities, a policy recommendation,
or evidence that a student shares a culture with the population of a
country.

## Running

Open `index.html` directly in a modern browser. Everything — styles, data
and script — is inlined in that one file. No build step, no package
install, no network calls, no fonts loaded over the wire. If a browser
blocks local file scripts, serve the folder with any static server:

```
cd design/interactive_allocation
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Files

```
design/interactive_allocation/
├── index.html   — self-contained site (styles + data + script inline)
└── README.md    — this file
```

## Editing the activity

Everything a reviewer touches lives inside the `<script>` block at the
bottom of `index.html`:

- `CATEGORIES` — the six locked category keys and labels.
- `PROFILES` — the authored classroom rubric (six profiles × six
  categories, each summing to 100), together with a short
  `distinguishing_pattern` string defending each profile against approved
  evidence.
- `COUNTRIES` — short `history` paragraph, `history_cite`, and a
  per-factor `factors` object. Each factor entry is either a verified
  `{ text, cite }` claim or `{ placeholder: true }`.

### Editing the rubric

1. Open `index.html` and find the `PROFILES` object.
2. Change the integer weights for any category; make sure the six weights
   for that profile still sum to 100.
3. Update the `distinguishing_pattern` string to describe why the new
   pattern is defensible against approved evidence. Do not invent weights
   to force a particular country as the answer.
4. Reload the page. The full rubric table is visible under "How the match
   works → Inspect the six-profile rubric".

### Editing country copy

Country copy lives in `COUNTRIES`. Rules:

- Use only sentences that are supported by the approved source registry
  (`research/source_registry.csv`) and the claim registry
  (`research/claim_registry.csv`).
- Keep exact page/table/figure/section locators in every `cite`. Follow
  `project-control/SOURCE_APA_AND_CHART_RULES.md`.
- If an exact locator is not yet verified, leave the factor as
  `{ placeholder: true }`. The activity will render an honest placeholder
  with `[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]` rather
  than fabricating.

### Filling a placeholder cell

Each `factors.<catKey>` entry is either `{ placeholder: true }` or
`{ text: "…", cite: "…" }`. To replace a placeholder, swap the object:

```
health: { placeholder: true }
```

becomes

```
health: {
  text: "Short verified sentence drawn from the registry.",
  cite: "Source short-form (year, p. X)"
}
```

## How the matching works

The allocation and each profile are two vectors of six integers that each
sum to 100. The activity reports the **Manhattan distance** — the sum of
the absolute per-category differences. The profile with the smallest
total difference is the closest fit under this exercise's rubric. Smaller
means closer; it is not a probability or a measured similarity.

If a second profile is within `TIE_WINDOW` points of the winner (default
10), it is surfaced as a "close fit" alongside the winner.

The result page is reordered by the student's own allocation: the
category they put the most points into appears first, each with
country-specific approved evidence on how the matched country fared on
that factor.

## Sliders

Each slider's maximum is dynamically clamped to `currentValue + remaining`,
so the total can never exceed 100. Lowering one slider immediately frees
budget on the others. Native range inputs are fully keyboard-operable
(arrow keys, Home, End, Page Up, Page Down).

## Evidence support — closest-fit sources

- Ghana — World Bank (1985, printed p. 18 / PDF p. 27, paras. 1.01–1.03);
  World Bank (2026) WDI series `NY.GDP.PCAP.KD`, `SL.*.EMPL.ZS`,
  `NV.IND.MANF.ZS`.
- South Korea — Haggard, Kang & Moon (1997, pp. 867–881); Kohli (1994,
  pp. 1269–1291); World Bank (2026) WDI series as above.
- Botswana — Maipose (2008, pp. 3–4); Hillbom (2014, pp. 155–176);
  World Bank (2026) WDI series as above.
- Mauritius — UNESCO World Heritage Centre (2006, pp. 22–25); Xenos
  (1970, pp. 1–3); World Bank (1997, Executive Summary, pp. 1–2); IMF
  (2014, pp. 5–8); World Bank (2026) WDI series as above.
- Malaysia — Asadullah, Savoia & Tunçer (2024, pp. 13–15); World Bank
  (2020, Box 2, pp. 44–47); World Bank (2026) WDI series as above.
- Philippines — Dolan (1993, pp. 5–6, 28–34, 76–77); World Bank (1987,
  Vol. II, pp. 1–10); World Bank (2026) WDI series as above.

Full locator rows are in `research/source_registry.csv` and
`research/claim_registry.csv`.

## Accessibility notes

- Native range inputs — fully keyboard operable.
- Visible focus rings on every interactive element.
- Totals and status announce via `aria-live="polite"`.
- Country markers combine a distinct **shape**, a written **country name**
  and the locked **colour** — colour is never the only identifier.
  Mauritius's ochre triangle and the Philippines red cross carry a
  mandatory charcoal under-stroke per the magazine's design system.
- `prefers-reduced-motion: reduce` disables transitions and smooth scroll.
- No animation delays or obscures the result.

## Publication gates still open

This folder is a working classroom tool. Before it can be presented as
part of the published magazine, the following reviews are required and
have not been performed by this build:

- Evidence review: a human reviewer must verify every sentence in
  `COUNTRIES` against the registered claim and source rows; replace any
  remaining placeholders with verified `{ text, cite }` pairs.
- Accessibility review: a human reviewer must test keyboard-only
  navigation, screen-reader output and reduced-motion behaviour on at
  least one WebKit, Blink and Gecko browser.
- Rights review: no third-party assets are used in this folder, but
  publication alongside magazine imagery still requires the project's
  photography and asset-rights check.
- Rubric review: the authored weights in `PROFILES` should be read by
  the research lead and reconciled against the evidence packs before any
  external release.

Do not claim this folder is publication-ready until each of those gates
has been signed off.
