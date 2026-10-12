# Build prompt: interactive 100-point development choices

Copy the prompt below into the coding agent you want to use. The requested output is an actual, working HTML activity, not a mock-up or another design brief.

---

You are a careful front-end developer and evidence editor working in the project repository:

`/Users/marcusgrude-grodem/Documents/GitHub/USIL/africa-asia-development-magazine`

Build a small, polished, accessible HTML website that replaces the static allocation exercise on magazine page 9. The site should let a student allocate 100 points among six development priorities, submit the allocation, and discover which of six country discussion profiles their choices most resemble. Show a concise, sourced account of that country’s development path with the result.

This is a classroom thought experiment. There is no correct allocation, winning country, or recommended national budget. A closest match is a discussion prompt based on a transparent, group-authored comparison rubric. It is not a historical budget, a measurement of national priorities, a policy recommendation, or evidence that the student has the same culture as a country’s population.

## Read before writing

Use the project's `AGENTS.md`, `SCOPE_LOCK.md`, `PRODUCT.md`, `project-control/SOURCE_APA_AND_CHART_RULES.md`, `research/THEORY_EVIDENCE_MATRIX.md`, relevant approved evidence packs, `research/source_registry.csv`, `research/claim_registry.csv`, and `data/master/six_country_chart_inputs.csv`. Read the relevant country rows in the approved chart CSVs when they clarify dates or comparison limits. Follow `SCOPE_LOCK.md` if older materials conflict.

Use only approved claims and exact source wording/locators from the registries. Do not browse for facts, invent statistics, interpolate values, write fictional quotations, infer country culture, or turn a qualitative source into a numeric “country score.” When the approved files do not support a detail, omit it or visibly mark it `EDITORIAL PLACEHOLDER — VERIFIED ASSET OR APPROVED COPY REQUIRED`.

## Activity framing

Open with a clear title such as **“You have 100 points. What would you prioritise?”** Explain the task in plain language:

“Imagine you are helping shape a development plan around 1960. Divide 100 points among six priorities. The points show what you would prioritise in this exercise; they are not percentages of a real budget.”

Add a visible date qualification: the six present-day country cases were not all independent states in 1960. Ghana and the Philippines were independent; South Korea was established as a republic in 1948; the Federation of Malaysia formed in 1963; Botswana and Mauritius became independent in 1966 and 1968. Preserve the project's exact approved wording and sources when printing these dates. Frame the exercise as advice about a country/territory's development choices, not as a claim that every participant was the president of a sovereign state in 1960.

The six allocation categories are exactly:

- Schools and skills
- Factories and productive firms
- Roads and transport
- Health
- Security
- State capacity

Provide six labeled range sliders, each from 0 to 100, with a visible numeric value and keyboard-accessible controls. Start each at zero and show a prominent live total, `0 / 100 points allocated`. Include a brief instruction that the student can adjust the sliders until the total equals 100. Do not silently redistribute points between categories. If the total is below or above 100, explain the difference and disable submission. Enable **“See the closest discussion profile”** only when the total equals exactly 100. Include a clearly labelled reset action. Keep values and total readable without colour; do not rely on colour alone to show errors or completion.

Before submission, show compact context for the six cases, written only from approved evidence. Keep this concise; the result page can provide more. Make clear that priorities create trade-offs and that outcomes depend on institutions, history, resources, distribution, policy, external conditions and events—not just the points selected.

## Matching and result

After a valid submission, show the closest of the six cases: Ghana, Botswana, Mauritius, South Korea, Malaysia, or the Philippines. Describe it as **“Your closest discussion profile”** or **“Your allocation most resembles this exercise’s profile.”** Do not say the student is this country, that the country's government actually allocated money this way, or that this is the correct/optimal development strategy.

The country-profile weights and matching formula are an explicit, editable classroom rubric authored for this activity. They are not observed historical spending shares or research data. Store them in a small, clearly named data structure in the source code. Include a short **“How the match works”** disclosure beside the result that:

1. explains that the six reference profiles were created by the project team as simplified discussion archetypes from the approved country evidence;
2. states that the profiles are not historical budget records and the match is not a validated social-science measure;
3. names the distance/similarity rule in plain language and shows enough of the profile weights for a student to inspect what drove the match;
4. displays the nearest second match as well when the scores are close or tied, without inventing false precision;
5. invites the student to change the weights and compare how the result changes.

Do not hide uncertainty behind a percentage match. Prefer **“closest fit under this exercise’s rubric”** with the category overlaps and differences. If using numeric similarity, label it as an internal rubric score, not a probability or measured national similarity. The six weight profiles must each use the same six categories and the same total-point scale. Explain why their distinguishing patterns were chosen with approved country-specific evidence; do not create “national budget” stories to make the algorithm work. If the evidence does not justify a distinguishing profile for a country, state that and revise the matching rubric rather than making up a score.

For the winning case, include:

- country name and the project's country marker/colour, with its marker shape and written country name so colour is never the only identifier;
- a short **“A little about this country”** introduction;
- a concise, dated **“How its development path unfolded”** summary, ideally three to five bullets or a mini timeline;
- one **“What this case shows”** insight and one **“What this case cannot prove”** limitation;
- concise APA-style in-text citations next to the relevant claims, with source locators (page, table or section) drawn from the approved registry;
- a **“Try again”** action that returns to the sliders while preserving or resetting the prior allocation by choice.

Country copy should distinguish sourced evidence from interpretation and should reflect these bounded case distinctions:

- **Ghana:** independence in 1957; cocoa/export dependence and inherited transport/public assets; subsequent labour reallocation did not produce South Korea-like manufacturing deepening. Do not imply that Ghana failed to transform at all.
- **Botswana:** independence in 1966, a thin inherited infrastructure and skills base, followed by major income gains associated with mineral resources and institutional choices; diversification and manufacturing depth remained limited. It challenges simple claims that extensive inherited infrastructure was a prerequisite, but does not show that productive connections were unnecessary.
- **Mauritius:** independence in 1968 after a highly sugar-dependent export structure; later adaptation included export processing zones, tourism and services. Do not imply this small-island path can be copied directly or that merchandise exports capture the whole economy.
- **South Korea:** recovery and foundations, coordinated investment and export-linked discipline, costly heavy-industry pressures, and later adjustment and upgrading. Include external conditions and avoid a triumphalist or culture-only explanation.
- **Malaysia:** commodity inheritance followed by export-oriented manufacturing and electronics clusters with foreign investment; infrastructure, skills and firms connected to world markets, while foreign-led production and imported inputs qualify claims about domestic value capture.
- **Philippines:** a distinct, interrupted path; labour shifted substantially toward services while industrial deepening was more limited. Electronics and global links coexisted with imported inputs and domestic-linkage constraints. Do not present Asia as one model.

Those are content boundaries, not permission to invent dates or add unsupported detail. Verify every sentence against the approved source registry and relevant evidence pack; retain registered caveats and page/table locators. If an exact citation is not verified, print `[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]` rather than fabricate it.

## Design and implementation

- Build a distinctive, readable editorial activity consistent with the selected Evidence Ledger system: paper cream `#F4F0E7`, charcoal `#252525`, dark neutral `#514E48`, secondary grey `#B7B0A4`, Montserrat typography and generous spacing. Avoid generic dashboards, decorative cards, gradients and stock imagery.
- Use the locked country identities consistently: Ghana terracotta circle `#B95332`; Botswana green square `#3F684E`; Mauritius ochre outlined triangle `#D6A23A`; South Korea blue diamond `#315A78`; Malaysia teal hexagon `#3E7568`; Philippines red cross with charcoal under-stroke `#A63A3A`.
- Use semantic HTML, responsive layouts, meaningful headings, visible focus, adequate contrast, reduced-motion support, keyboard-operable sliders and submission, and screen-reader announcements for total validation and result changes. Do not add animation that delays or obscures the outcome.
- Implement as a static HTML site with local CSS and JavaScript, no required backend and no third-party analytics. It should run by opening `index.html` or through a minimal static server. Keep the matching logic separate from rendering so the rubric can be reviewed and revised.
- Do not use a framework, package installation, external fonts, APIs, map tiles, generated photographs or external image links unless the project specifically approves them. A text/shape-led interface is preferred; no photo is necessary for the allocation game.
- Include a short README with how to run it, where to edit the profiles, how the matching calculation works, and the evidence/limitations that must be checked before publishing.

## Deliverables and acceptance

Create the working site under `design/interactive_allocation/` with at minimum `index.html`, `styles.css`, `app.js`, and `README.md`. Keep any authored country-profile rubric in an editable, clearly documented structure in `app.js` or a separate JSON file. Do not edit another agent's assigned files or master status/checklist boards.

The deliverable is complete only when:

- all six sliders work, have accessible names, show their live values, and preserve an exact 100-point total without hidden redistribution;
- submission is blocked clearly at totals other than 100 and works at exactly 100;
- each of the six countries can be reached as a closest result through reasonable test allocations, or ties are explained and handled fairly;
- each result includes approved, cited country context, a dated development-path explanation, a case insight and a limitation;
- the rubric and its heuristic nature are visible to the student and editable by the project team;
- there is no “correct answer,” country ranking, causal claim, or unsupported cultural inference;
- the site works at mobile and desktop sizes and with keyboard-only navigation;
- a reviewer has checked the copy against the approved registries and verified the visible totals, ties, reset and retry states.

At the end, report the files created, how to run the site, which source locators support each country result, how the heuristic matching rubric works, what you verified, and what remains a publication gate. Do not claim publication readiness if any evidence, accessibility or rights review is incomplete.

---
