# Agent Operating Rules

This is a multi-agent research and magazine-production project. A future agent must be able to understand the work without access to earlier chats.

## Assigned topic

**Economic development in Africa: Why this region couldn't grow like the Asia region — cultural analysis.**

This teacher-assigned wording is the central topic for the magazine, presentation, planned AI prompt, and game. Investigate it as a question; do not assume that Africa is uniform, Asia is uniform, culture is the sole cause, or the premise is already proven. Use the locked country cases, comparative evidence, counterexamples, and alternative explanations to qualify the answer.

## Read before working

1. `PRODUCT.md` — audience, purpose, personality, anti-references, and design principles.
2. `SCOPE_LOCK.md` — authoritative countries, years, and section ownership.
3. `project-control/REPORT_CHECKLIST.md` — simple view of what the report needs and what is missing.
4. `project-control/STATUS.md` — active tasks, owners, blockers, and next assignments.
5. `project-control/ROADMAP.md` — phases, dependencies, and quality gates.
6. Your sector log under `project-control/logs/`.
7. `project-control/SOURCE_APA_AND_CHART_RULES.md` for research, writing, data, and visuals.

If an older file conflicts with `SCOPE_LOCK.md`, follow `SCOPE_LOCK.md` and report the conflict in your log.

## Work rules

- Work from one task ID assigned in `project-control/STATUS.md`.
- Use only the output paths in your prompt. Avoid editing a file assigned to another active agent.
- Status values: `MISSING`, `READY`, `IN PROGRESS`, `REVIEW`, `BLOCKED`, and `DONE`.
- Only the Roadmap Controller updates the master checklist and status board.
- A specialist agent updates its own append-only sector log before stopping.
- A file existing does not make a task done. It must pass the listed acceptance check.

## Evidence rules

- Use APA 7 for in-text citations and the reference list.
- Every statistic, chart, map, image, and substantive claim needs a traceable source.
- Record exact indicator, definition, unit, country, year, page/table, URL/DOI, and verification date as applicable.
- Never silently interpolate a value, replace an anchor year, mix definitions, or use a storyboard placeholder as evidence.
- Separate sourced evidence, interpretation, and original group theories.

## Teacher assessment priorities

Treat these five dimensions as explicit qualification criteria for every relevant deliverable:

1. Quality of research.
2. Relevant examples that explain the analysis.
3. Use of different cultural dimensions.
4. Creativity in the magazine design.
5. Innovation in the report.

- Do not mention an example without explaining what it demonstrates, challenges, or cannot establish.
- Use multiple cultural dimensions where relevant and distinguish cultural evidence from stereotypes, institutional explanations, economic conditions, and original group theories.
- Evaluate creative or innovative ideas by whether they strengthen understanding, participation, comparison, or recall—not by novelty alone.
- Treat the magazine as one component of a connected project that will also include a game and an AI prompt. The AI prompt is a Socratic teacher for a student group: it quizzes one question at a time, gives progressive clues, and evaluates evidence-based reasoning. Its factual quiz content must wait for approved research, and its platform is not yet locked.
- Keep research standards consistent across the magazine, game, AI prompt, and presentation. A playful or interactive format does not permit unsupported claims or misleading simplification.

## Simplicity and research depth

- The project is not meant to be encyclopedic or unnecessarily complex. Optimise for clear understanding of the topic and the selected research.
- Use the smallest sufficient evidence set: a few credible, representative findings and examples explained well are better than many facts with little interpretation.
- Write in plain language and explain technical terms when they are necessary.
- Keep essential sources, definitions, uncertainty, and limitations visible, but place secondary methodological detail in notes, references, or appendices when it would interrupt the main story.
- Stop expanding research when the key claim is adequately supported, challenged by a meaningful counterexample, and explained at the audience's level. Do not chase completeness that does not improve the final argument.
- Simplicity must come from careful selection and explanation, not from removing necessary nuance or making unsupported generalisations.

## Comparison rules

- Direct comparisons use the same indicator definitions, units, years, scales, and chart geometry unless a visible note explains an exception.
- Prefer direct labels, matched panels, and small multiples.
- Do not rely on colour alone.
- Save the data behind every graph.
- State what a major comparison cannot prove.

## Visual and editorial quality

- The professor values visual communication, creativity, and engaging presentation. Treat design quality as a graded requirement, not decoration added after research.
- Every spread needs one dominant idea and a clear visual hierarchy. A reader should understand the main comparison or question within five seconds.
- Use logical, stable colour meanings. Colour must identify a country, region, category, direction, or emphasis consistently; never assign colours merely because they look attractive.
- Avoid dense legend-dependent graphs. Prefer direct labels, visible values, short annotations, and matched scales.
- Avoid repetitive page templates. Alternate charts, maps, timelines, archival imagery, diagrams, quotes, questions, and short analytical text while preserving a coherent grid and type system.
- Body text must be concise and purposeful. Break long explanations into headlines, decks, captions, evidence callouts, or short paragraphs. Do not turn the magazine into an essay with pictures.
- Visual interest must never hide uncertainty, missing data, definitions, APA sources, or comparison limitations.
- Use real, context-specific photographs from the six locked African and Asian country cases throughout the magazine. Prefer images with a known country, place, date or period, creator, source, and subject; do not use generic “Africa” or “Asia” stock imagery or substitute one country for another. Captions must explain what the image contributes to the argument rather than treating people or places as decoration.
- Non-commercial classroom use does not by itself establish permission to reproduce a photograph. Prefer public-domain, Creative Commons, institutional open-access, team-owned, or explicitly permitted images; follow the exact licence terms and record attribution, allowed modifications, and rights status before publication.

## Design showroom and testing

- Before locking the magazine's design system or a major spread direction, create a clearly organised showroom of materially different drafts so the user can compare them side by side and choose the strongest direction.
- Label every draft with a version name and briefly state what it is testing, such as hierarchy, composition, typography, chart treatment, imagery, or editorial tone. Use the same representative content where possible so the comparison tests the design rather than different evidence.
- Include multiple colour-palette trials before selecting the final palette. Test each palette for logical country and region meanings, contrast, colour-blind accessibility, greyscale legibility, A4 print reproduction, and classroom-screen visibility.
- Do not treat the first draft, a storyboard, or an internal prototype as approved. Record the user's selected direction, requested combination of elements, and rejected alternatives before applying the system magazine-wide.
- Preserve showroom drafts and palette tests as review artefacts with clear filenames; do not overwrite alternatives before a direction is chosen.
- Design experimentation does not relax the evidence rules. Drafts may use clearly labelled placeholders for layout testing, but placeholders must never be presented as evidence or survive into final pages.

## Required handoff

Append this information to the correct sector log:

- date, agent name, and task ID;
- status and objective;
- inputs read;
- files created or changed;
- sources added or rejected;
- verification performed;
- limitations and blockers;
- exact next action.

If another review is required, mark the task `REVIEW`, not `DONE`.
