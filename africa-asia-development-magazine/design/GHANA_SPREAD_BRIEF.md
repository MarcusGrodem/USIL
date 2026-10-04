# Ghana spread — design brief

Draft 2026-09-22. Two-page spread inside the "Case One · Ghana" section. Preview: `design/ghana_spread_draft.html` — open in any browser.

## What the spread does

Sets up the paradox that anchors the whole Ghana case: a country that was as rich as South Korea in 1960 was poorer than itself thirty years later. This is the emotional and analytical hook for everything that follows.

Uses the project's core principle: **question before answer**. The reader sees the collapse before they get any explanation.

## Page 1 — "The lost three decades"

**Purpose:** Show the paradox. No causation yet.

- **Headline:** *The lost three decades.* Serif, warm terracotta accent on "three decades." Editorial not academic.
- **Deck:** One sentence stating the paradox — 1960 richer, 1990 poorer.
- **Hero chart:** GDP per capita 1960–2020. Three anchor dots (1960 · 1990 · 2020). Dashed green reference line at the 1960 level runs across the whole chart so the reader sees the 1990 dot dropping *below* it. This is the single most important visual in the section.
- **Reader prompt:** *"Before you read on — what would you guess caused the collapse?"* Italic serif with terracotta lead-in. This is where the reader forms an opinion; the analysis on the next spread either confirms or breaks it.
- **Stats strip (bottom):** three "then → now" tiles (urbanisation, electricity, literacy). Grey struck-through "then" value, big serif "now" value. Colour coded — green if a real gain, terracotta if a warning.

## Page 2 — "The aborted industrialisation"

**Purpose:** Show the mechanism behind the paradox — Ghana tried to industrialise, it worked for a decade, then collapsed. This is the "manufacturing share peaked at 14% in 1975" story the verifier caught us oversimplifying.

- **Headline:** *A factory that never opened.* Ochre italic accent.
- **Manufacturing chart:** the peak-collapse-partial-recovery curve. Three annotated points: **1975 peak (ochre) · 1983 crisis (terracotta) · 2020 (green)**. Colour is doing analytical work here — the reader can read the arc from the palette alone.
- **Timeline strip:** five dots below the chart mapping political events to the curve above. Dot colour matches meaning (green = enabling, terracotta = disrupting, ochre = mixed).
- **Export composition:** side-by-side stacked bars, 1960 vs 2020. Same total, different labels. The visual argument is *the structure hasn't changed* — Ghana still exports what it digs up.
- **Cliffhanger:** dark charcoal box at the bottom. "Next spread · South Korea, 1960. Same starting income. Same cocoa-and-gold economy? Not exactly." Sets up the pair.

## Colour usage

Locked palette (Africa side):

| Colour | Hex | Use in this spread |
|---|---|---|
| Terracotta | `#B95332` | The loss story — GDP line, 1990 anchor, 1983 crisis dot, kicker rules |
| Ochre | `#D6A23A` | The manufacturing story — peak annotation, gold in export bars |
| Green | `#3F684E` | Genuine gains — 1960 reference line, 2020 recovery point, electricity stat |
| Cream | `#F4F0E7` | Page background |
| Charcoal | `#252525` | Body text, cliffhanger block, oil segment |
| Grey | `#B7B0A4` | Chart gridlines, folios |

## Typography

- **Headlines:** Serif with italic accents. Georgia works for the draft; final should use a magazine-grade serif like **Playfair Display**, **Recoleta**, or **Canela** in Canva.
- **Deck / pull quotes:** Same serif, italic, lighter weight.
- **Body / captions / data:** Neutral sans. **Inter** or **Söhne** in Canva; Helvetica for the draft.
- **Chart labels:** Sans, all-caps for units, sentence case for values.

## Copy that must appear verbatim on the page

The magazine's credibility depends on these being on the page, not in a footnote:

- Sources under each chart (World Bank WDI series code + pull date).
- The "**Note: 2020 individual shares are placeholder**" warning under the export composition. Do not remove until the OEC/GSS 2020 CSV is verified.

## Interactive hook

The reader-prompt question on page 1 is a live opportunity: replace the static line with a Genially poll or QR-linked vote — "*What caused it?*" with four options (colonial legacy · coups · commodity prices · culture). Results become part of the class discussion.

## Data status

All values on the spread trace to `data/ghana.md`. Verified 2026-09-22 by the dual-agent workflow. Known gaps left as caveats on the page:

- 2020 export shares (Gold 45 / Oil 33 / Cocoa 22 shown are illustrative — real 2020 CSV pending).
- Literacy 1960 (~25%) marked with tilde on the stats strip because it's a secondary-source estimate.

## What's missing from this draft

- The final Canva typography.
- A real photograph or archival image (the current draft is all data — an image of Tema harbour or an Nkrumah-era factory would break up page 2).
- A source line for the timeline events.
- Accessibility check on colour contrast (the ochre-on-cream in the timeline labels needs review).

## Next steps

1. Get sign-off on this concept from the team.
2. Rebuild in Canva at real A4 size using the specified serif.
3. Source one archival photograph for page 2.
4. Add the poll/QR interaction on page 1.
5. Repeat the same layout system for the South Korea spread — same chart shapes, mirrored palette (Asia colours), so the two spreads read as a pair.
