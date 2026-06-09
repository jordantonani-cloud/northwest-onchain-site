# Northwest Onchain — Brand Book & Guidelines

**Version 1.1 · June 2026 · Source of truth**

This is the canonical brand guide. It supersedes any color/logo values in earlier prototype files. It is written to be used by humans *and* by AI tools (Claude Code, ChatGPT, v0, Figma plugins, etc.). Section 12 is a copy-paste handoff block for AI.

---

## 0. Quick reference (the 10-second version)

- **Name:** Northwest Onchain (never "NW Onchain," "Northwest On-Chain," or "NWO" in prose — "NWO" is acceptable only as an internal shorthand, never in customer-facing copy).
- **Tagline:** *Onchain, on purpose.*
- **What we are:** A blockchain strategy & execution consultancy that bridges traditional finance and onchain technology.
- **Logo:** The "Beacon" mark — a peak built from two edges and three nodes, with the summit node radiating signal rings.
- **Core colors:** Evergreen `#12463A`, Ink `#0A1D18`, Signal mint `#2FBF98` / `#34E0B5`, Mist `#EDF1EE`.
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- **Feeling:** Modern & ahead, minimal & restrained. Fintech precision (Stripe/Mercury) warmed by PNW heritage craft (Filson/Snow Peak).
- **Voice:** Calm expert. Lead with outcomes, willing to say "don't," allergic to hype. AI framed as *speed*, never as the pitch.

---

## 1. Brand foundation

**Positioning.** For organizations that need to move from *"should we do something with crypto?"* to a working, measured proof of concept, Northwest Onchain is a blockchain strategy and execution partner that bridges traditional-finance discipline with deep onchain networks. Unlike crypto-native shops that can't model a business case or big-firm strategists who've never shipped, we diagnose the real opportunity, assemble the right builders from a vetted network, and run delivery to defined metrics, cost, and ROI.

**Who we serve.** (1) Enterprise / TradFi exploring tokenization, payments, settlement, RWA. (2) Investors — VCs and family offices needing diligence and an operating partner. (3) Founders new to crypto wanting a credible onchain angle without agency markup. The through-line: non-natives who need judgment they can trust and a network they don't have.

**The six differentiators.**
1. **Both sides of the ledger** — TradFi financial rigor + native onchain fluency.
2. **Network, not headcount** — a vetted bench of builders on demand.
3. **Metrics-first** — success, cost, and ROI defined before any code.
4. **Vendor-neutral** — we don't sell a chain or token; we'll say "don't."
5. **PNW-grounded** — long-term, relationship-driven, low-hype.
6. **Lean by design** — answers in days, not quarters, at a fraction of big-firm cost. (Frame as speed/efficiency, never "we just use AI.")

---

## 2. The logo

### 2.1 The Beacon mark
A peak drawn as two edges meeting at a summit node, anchored by two base nodes. The summit node radiates two concentric "signal" rings — the onchain signal on the mountain. It fuses three ideas: a Cascade peak (PNW), a node graph (blockchain), and a beacon/signal (clarity, guidance).

Canonical mark geometry (64×64 artboard, this is the master — scale, never redraw):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Northwest Onchain">
  <circle cx="32" cy="18" r="12.5" fill="none" stroke="#2FBF98" stroke-width="1" opacity="0.28"/>
  <circle cx="32" cy="18" r="8" fill="none" stroke="#2FBF98" stroke-width="1.3" opacity="0.55"/>
  <path d="M16 46 L32 18 L48 46" fill="none" stroke="#12463A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16" cy="46" r="3.2" fill="#12463A"/>
  <circle cx="48" cy="46" r="3.2" fill="#12463A"/>
  <circle cx="32" cy="18" r="4.5" fill="#2FBF98"/>
</svg>
```

### 2.2 Logo files (in `/brand-kit/`)
| File | Use |
|---|---|
| `nwo-mark.svg` | Mark only, full color, light backgrounds |
| `nwo-mark-dark.svg` | Mark only, brightened, dark backgrounds |
| `nwo-mark-mono.svg` | Single color (`currentColor`) — stamps, embossing, one-color print |
| `nwo-logo-horizontal.svg` | Mark + wordmark + tagline, light backgrounds |
| `nwo-logo-horizontal-dark.svg` | Mark + wordmark + tagline, dark backgrounds |
| `nwo-favicon.svg` | App icon / favicon (mark in rounded Ink tile) |

### 2.3 Lockups
- **Primary (horizontal):** mark left, wordmark right. Default for site header, email signature, decks.
- **Stacked:** mark centered above wordmark — for square spaces, social profile headers.
- **Mark-only:** favicon, avatar, app icon, watermark.
- **Wordmark-only:** acceptable in tight horizontal spaces (footers) where the mark is already present elsewhere.

**Wordmark spec:** "Northwest Onchain" set in Space Grotesk 600. "Northwest" in Ink (`#10221C`) or white on dark; "Onchain" in Evergreen (`#12463A`) on light, Signal mint (`#34E0B5`) on dark. Optional mono tagline "ONCHAIN, ON PURPOSE" in JetBrains Mono 500, letter-spaced 3px, in `#2A8E72` (light) / `#5BD9BB` (dark).

### 2.4 Clear space & minimum size
- **Clear space:** keep padding equal to the base width of the mark (the distance between the two base nodes) on all sides. Nothing intrudes.
- **Minimum size:** mark 20px (digital) / 8mm (print). Horizontal lockup 120px wide minimum. Below 20px, drop the signal rings (use the favicon construction).

### 2.5 Logo misuse (never)
Do not: recolor outside the palette · stretch, skew, or rotate · add drop shadows, gradients, or glows beyond the defined signal rings · change the wordmark typeface · re-letter-space the wordmark · place full-color mark on busy or low-contrast backgrounds (use mono/reversed) · outline or re-draw the peak · crop the mark · add taglines in other fonts.

---

## 3. Color system

### 3.1 Core palette

> **v1.1 (June 2026):** reconciled to the shipped "north-star" base — Ink deepened to `#0A1D18`, the `Ink-2` elevated surface and `Signal Soft` headline accent added, and Mist/Fog/Copper aligned to the values running in `tailwind.config.mjs` + `global.css`. These are now canonical.

| Token | Hex | Role |
|---|---|---|
| **Ink** | `#0A1D18` | Darkest base background (glows layer on top); primary text on light |
| **Ink-2** | `#0D2620` | Elevated surface tint (cards, raised sections) on the Ink base |
| **Evergreen** | `#12463A` | Primary brand color; slopes, "Onchain" wordmark on light, dark UI sections |
| **Moss** | `#1C5E4A` | Mid-green; hovers, secondary surfaces |
| **Signal** | `#2FBF98` | Primary accent on light/neutral; apex node, small CTAs |
| **Signal Bright** | `#34E0B5` | Accent on dark backgrounds; CTAs, glows, links on dark |
| **Signal Soft** | `#86F0D8` | Italic headline accent + gradient top-stop on dark |
| **Signal Dim** | `#0E7458` | AA-safe mint for small accent text on light (~5.0:1 on Mist) |
| **Mist** | `#EDF1EE` | Primary light background |
| **Fog** | `#9BB0A8` | Muted sage; secondary text on dark (~7:1 on Ink) |
| **Graphite** | `#33454B` | Secondary text on light |
| **Copper** | `#D08A57` | Warm secondary accent — use sparingly (≤5% of any layout) for heritage warmth |
| **White** | `#FBFDFC` | Pure text/elements on dark |

### 3.2 Usage rules
- **Dark-first brand.** Hero and key sections live on Ink/Evergreen with Signal accents. Light sections use Mist.
- **Signal is precious.** Use mint for the single most important action on a screen, the apex node, links, and key data — not for large fills. If everything glows, nothing does.
- **Copper is a seasoning,** not a main course. One small moment per layout (a divider, a stat, a base node) to warm the cool greens.
- **Greens carry the PNW; mint carries the onchain; copper carries the heritage.**

### 3.3 Contrast / accessibility (WCAG 2.2 AA)
- Body text on light: Ink `#10221C` or Graphite `#33454B` on Mist — passes AA.
- Body text on dark: Fog `#AEC2BA` or White on Ink — passes AA.
- **Never** use Signal mint for small body text on light (fails contrast). Mint is for accents, large display, UI elements, and text on dark only.
- Always verify any new pairing at 4.5:1 (body) / 3:1 (large/UI) before shipping.

---

## 4. Typography

| Role | Typeface | Weights | Use |
|---|---|---|---|
| Display | **Space Grotesk** | 400, 500, 600, 700 | Headlines, wordmark, section titles |
| Body | **Inter** | 400, 500, 600 | Paragraphs, UI, everything readable |
| Mono | **JetBrains Mono** | 400, 500 | Eyebrows, labels, stage numbers, data, code |

All three are free, open-source, and on Google Fonts. **Self-host in production** (`@fontsource`) for performance and privacy.

**Scale (desktop, rem):** H1 clamp 2.5–4.5 / H2 1.9–2.8 / H3 1.3–1.5 / lead 1.05–1.28 / body 1.0 / small 0.86 / mono-label 0.72.

**Rules:**
- **Sentence case** for all headings and UI ("Book the Meet," not "Book The Meet"). Exception: the wordmark ("Northwest Onchain", title case) and mono eyebrow labels (UPPERCASE, letter-spaced 0.2em, e.g. `// 01 SURVEY`).
- Tight tracking on display (-0.02em); normal on body; wide on mono labels.
- Two weights max per block. Confidence reads as restraint.
- Mono eyebrows often prefixed with `//` for the technical/onchain signal.

---

## 5. Motif — "Topographic Mesh"

The supporting visual language: PNW topographic contour lines that double as a blockchain node-network — the same idea as the logo, extended.

- **Contour lines:** thin, layered curves (Moss/Evergreen, ~0.3 opacity) as section backdrops and dividers. Optionally one line in Signal to echo the brand.
- **Node mesh:** sparse dots + thin connecting lines, used as hero accents. Apex/key nodes glow Signal.
- **Signal rings:** the concentric-ring motif from the Beacon mark, reused sparingly as a "live/active" indicator or hover state.
- **Restraint:** motifs are atmosphere, never clutter. Lots of negative space. Respect `prefers-reduced-motion` (no animation for users who opt out).

---

## 6. Voice & tone

**Personality:** the senior operator who has seen the hype cycles, doesn't need to oversell, and tells you the truth — including when the truth is "this won't work." Calm, precise, financially literate.

**Do:**
- Lead with the business outcome ("cut settlement from 2 days to minutes"), then the technology.
- Use numbers, ranges, and timelines over adjectives.
- Be willing to say no in the copy — "sometimes the answer is don't" is a selling point.
- Short, declarative sentences.
- Frame our AI leverage as *speed and leanness* ("days, not quarters, at a fraction of big-firm cost").

**Don't:**
- "Revolutionary," "game-changer," "disrupt," "Web3 native," "to the moon," emojis, exclamation marks.
- Jargon before you've earned it with a plain-English point.
- Lead with "we use AI." It's the back-office engine, not the pitch.
- Anything a CFO would roll their eyes at.

**Example — on-brand:** "We diagnose where blockchain actually creates value — and where it doesn't. Then we define the metrics, cost, and team before any build begins. Sometimes the most valuable thing we say is 'don't.'"

**Example — off-brand:** "We're a revolutionary Web3-native studio leveraging cutting-edge blockchain to disrupt finance! 🚀"

---

## 7. Messaging toolkit

- **Tagline:** Onchain, on purpose.
- **One-liner:** The bridge between traditional finance and blockchain.
- **Elevator pitch:** Northwest Onchain helps enterprises, investors, and founders turn a vague "we should do something with crypto" into a working, measured proof of concept — bridging TradFi discipline with deep onchain networks. We diagnose the real opportunity, assemble the right builders from a vetted network, and deliver to defined metrics, cost, and ROI.
- **Boilerplate (short):** Northwest Onchain is a blockchain strategy and execution consultancy bridging traditional finance and onchain technology. Onchain, on purpose.
- **Boilerplate (long):** Northwest Onchain is a Pacific Northwest–based blockchain strategy and execution consultancy. We bridge traditional-finance rigor with native onchain fluency to help enterprises, investors, and founders move from question to measured proof of concept — diagnosing real opportunities, assembling vetted builders, and delivering to defined metrics, cost, and ROI. Vendor-neutral, metrics-first, low-hype.

---

## 8. Services & pricing (reference)

A funnel: a low-friction paid front door leading to delivery margin and recurring retainers. Frame pricing as below-market *because we're lean*, never as "cheap."

| Tier | Price | Note |
|---|---|---|
| **Opportunity Audit** | $1,500 flat, 3–5 days | The wedge. Credited toward next step. |
| **Diagnostic Sprint** | $4k–$7.5k, 1–2 weeks | Metrics + costed roadmap + team. Credited toward delivery. |
| **PoC / Project Delivery** | build + 15–20% (or fixed $8k–$25k) | Managed delivery via the network. |
| **Fractional Onchain Advisor** | $3k–$8k/mo | Recurring strategic seat. |

**Process (PNW expedition):** `// 01 SURVEY` (meet & diagnose) → `// 02 CHART` (find the path) → `// 03 ASSEMBLE` (build the crew) → `// 04 SUMMIT` (deliver & measure).

---

## 9. Applications

- **Website:** dark-first. Ink/Evergreen hero with Signal CTA + Topographic Mesh backdrop; Mist content sections. Mono eyebrows.
- **Favicon / avatar:** `nwo-favicon.svg` (Ink tile, bright mark).
- **Business card:** Ink front with reversed lockup + a single copper hairline; Mist back with mono contact block.
- **Email signature:** horizontal lockup (light) + name in Inter 600 + role in Graphite + mono tagline.
- **Slides:** Ink title slides with mark top-left; Mist content slides; Space Grotesk headers, Inter body, mono section tags.
- **Social:** stacked lockup on Ink; Signal used only for the single key element per asset.

---

## 10. Do / Don't (at a glance)
**Do:** dark-first layouts · generous whitespace · sentence case · Signal for one key action · outcomes before tech · honest "don't" · self-hosted fonts.
**Don't:** rainbow of accents · mint body text on light · hype words/emojis · logo effects or recoloring · hexagon clichés · clutter the Topographic Mesh · lead with "we use AI."

---

## 11. Asset inventory
```
/brand-kit/
  nwo-mark.svg                 mark, full color, light
  nwo-mark-dark.svg            mark, dark backgrounds
  nwo-mark-mono.svg            mark, single color (currentColor)
  nwo-favicon.svg              app icon / favicon
  nwo-logo-horizontal.svg      lockup, light
  nwo-logo-horizontal-dark.svg lockup, dark
BRAND-BOOK.md                  this document
```
*Wordmark SVGs use live text with Space Grotesk via Google Fonts `@import`. For print or to guarantee rendering anywhere, outline the text in a vector editor (Figma/Illustrator: Type → Outline) and re-export.*

---

## 12. AI handoff block (copy-paste)

> Paste this section to any AI tool building Northwest Onchain assets.

**Brand:** Northwest Onchain — blockchain strategy & execution consultancy bridging TradFi and onchain. Tagline "Onchain, on purpose." Feeling: modern & ahead, minimal & restrained; fintech precision (Stripe/Mercury) × PNW heritage craft (Filson/Snow Peak). Voice: calm expert, outcomes-first, willing to say "don't," no hype words, no emojis; frame AI leverage as speed not as the pitch. Dark-first.

**Design tokens (CSS):**
```css
:root{
  --ink:#0A1D18;          /* darkest base bg; text on light */
  --ink2:#0D2620;         /* elevated surface tint */
  --evergreen:#12463A;    /* primary brand color */
  --moss:#1C5E4A;         /* mid green; hovers */
  --signal:#2FBF98;       /* accent on light/neutral */
  --signal-bright:#34E0B5;/* accent on dark; CTAs, glows */
  --signal-soft:#86F0D8;  /* italic headline accent + gradient top-stop */
  --signal-dim:#0E7458;   /* AA-safe mint for small text on light */
  --mist:#EDF1EE;         /* light bg */
  --fog:#9BB0A8;          /* muted text on dark */
  --graphite:#33454B;     /* secondary text on light */
  --copper:#D08A57;       /* warm accent, sparing */
  --white:#FBFDFC;
  --font-display:"Space Grotesk", sans-serif;
  --font-body:"Inter", sans-serif;
  --font-mono:"JetBrains Mono", monospace;
  --radius:14px;
}
```

**Design tokens (JSON):**
```json
{
  "color": {
    "ink":"#0A1D18","ink2":"#0D2620","evergreen":"#12463A","moss":"#1C5E4A",
    "signal":"#2FBF98","signalBright":"#34E0B5","signalSoft":"#86F0D8","signalDim":"#0E7458",
    "mist":"#EDF1EE","fog":"#9BB0A8","graphite":"#33454B","copper":"#D08A57","white":"#FBFDFC"
  },
  "font": {
    "display":"Space Grotesk","body":"Inter","mono":"JetBrains Mono"
  },
  "radius": 14,
  "tagline": "Onchain, on purpose.",
  "casing": { "ui":"sentence", "monoLabels":"upper", "wordmark":"title" }
}
```

**Fonts:** Google Fonts — `Space+Grotesk:wght@400;500;600;700`, `Inter:wght@400;500;600`, `JetBrains+Mono:wght@400;500`. Self-host in production.

**Logo mark (embed this SVG directly):**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Northwest Onchain">
  <circle cx="32" cy="18" r="12.5" fill="none" stroke="#2FBF98" stroke-width="1" opacity="0.28"/>
  <circle cx="32" cy="18" r="8" fill="none" stroke="#2FBF98" stroke-width="1.3" opacity="0.55"/>
  <path d="M16 46 L32 18 L48 46" fill="none" stroke="#12463A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="16" cy="46" r="3.2" fill="#12463A"/>
  <circle cx="48" cy="46" r="3.2" fill="#12463A"/>
  <circle cx="32" cy="18" r="4.5" fill="#2FBF98"/>
</svg>
```
For dark backgrounds, swap: slopes `#5BD9BB`, base nodes `#2E8A70`, apex + rings `#34E0B5`.

**Hard rules:** sentence case everywhere except the wordmark and UPPERCASE mono labels (prefix `//`). Signal mint = one key action per screen, never small body text on light. Copper ≤5% of a layout. No gradients/shadows/glows on the logo beyond its built-in signal rings. No hype words, no emojis. Verify WCAG AA contrast on every text/background pair.
