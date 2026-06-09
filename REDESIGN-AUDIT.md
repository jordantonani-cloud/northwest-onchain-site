# Redesign Audit — "Column Feel, Northwest Onchain Brand" (Phase 0)

**For:** Jordan · **Author:** lead frontend (Claude) · **Date:** June 8, 2026
**Status:** Phase 0 output. Read, mark up, approve. I do not touch a component until you sign off on §3–§4.

This is the teardown-and-plan the brief (`COLUMN-REDESIGN-PROMPT.md` §4) asks for before any building. It assumes the site as it stands today: the content refinement from `WEBSITE-AUDIT.md` / `IMPLEMENTATION-PLAN.md` is largely *done* — real founder, honest proof framing, four-tier offer, FAQ, schema. **What's missing is not content. It's the *feel*.** This redesign is a motion-and-proof layer, not a rewrite.

---

## 0. One-paragraph verdict

The bones are strong and the copy is finished. The site reads like a well-written argument; Column *shows* its argument. Today every NWO claim is followed by more prose or a flat bordered card. Column never lets a claim sit unproven — it pairs each one with a living artifact (an account card, a raw JSON object, a scrolling ledger, a `curl` call) that says "engineers built this, the thing is real, look." We have a real onchain world to render the same way — settlements, tx feeds, tokenization configs, contract calls — and we are currently rendering *none* of it. The single highest-leverage move is to **build a reusable onchain-artifact component system and a small motion vocabulary, then re-thread the homepage on a strict claim→proof cadence.** Everything else is application.

---

## 1. Column teardown — the mechanics we're porting

Observed from the live column.com homepage (fetched June 8, 2026). We copy the *mechanics in the left column below*, never the navy/blue palette or the bank copy.

### 1.1 Hero
- **One short declarative headline:** "Move, hold, and lend the dollar at scale." Verb-first, 7 words, no hedging.
- **One supporting line**, one sentence, no second paragraph.
- **Two CTAs:** filled primary ("Sign up") + quiet secondary ("Documentation"). The secondary is the *docs/proof* path, not a second sell.
- **Beside the copy: the hero artifact.** Floating account cards (Operating Account, New York — $10,293.29 USD; John Doe, London — £9,102.07 GBP; "Completed"; "International Wire") *plus* a full, real-looking JSON object (`swft_…` Swift transfer, 40+ fields) rendered as a design block. The product proves itself in the first viewport.

### 1.2 Stat band
Four big honest numbers, mono labels: **$2T+** annual volume · **99.999%** uptime · **No. 1** real-time payments issuer · **$100B+** intl payments. Confident, specific, sourced to themselves.

### 1.3 Named social proof as visual objects
Brex, Mercury, Ramp, Best Egg — each rendered as a **mini account-transfer artifact** (real account labels, debit/credit amounts, EUR/USD) + a **named quote with title** ("No one comes close to Column's level of technical infrastructure." — Pedro Franceschi, CEO, Brex) + product tags. Proof is shown as a *thing*, then attributed to a *named human*.

### 1.4 "Building blocks" — alternating claim → artifact
Each capability (Payments, Bank Accounts, Cards, Lending) is a tight headline + one line, paired with a **technical artifact**:
- A real `curl` POST (`curl 'https://api.column.com/transfers/ach' -XPOST …`) as a code design-object.
- The **scrolling transaction ledger** — dozens of rows (ACH, Wire, Check, Book Transfer, Realtime) with amounts + relative timestamps ("12 mins ago"), looping slowly. This is the single most "alive" element on the page.
- A virtual card visual; a stacked list of loans with amounts/dates.

### 1.5 Motion (the "smooth" lever)
Understated and eased: cards drift/settle into place, the ledger feed scrolls slowly and continuously, elements fade-and-rise on scroll, numbers read as counted. Nothing bounces. Everything ~300–600ms on one easing curve. It feels expensive *because* it's quiet.

### 1.6 Chrome & close
- **Sticky, quiet nav** with structured mega-menu (Products / Developers / Blog / Company) and a persistent primary CTA ("Get started") next to "Sign in."
- **Confident three-option close:** "Documentation / Get started / Contact sales" — three calm doors, not a desperate form.

### 1.7 Spacing / type rhythm (what creates calm)
One dark base, very large negative space between bands, big type, one accent color used only for signal, and a *predictable cadence*: eyebrow → headline → one line → artifact, repeated. The reader is never asked to process two prose blocks in a row.

---

## 2. NWO current-state audit

### 2.1 The split-brain problem (most important structural finding)
There are **two design systems live in this repo**:

1. **The shared system** (`global.css` + `src/components/*`) — used by `about`, `services`, `process`, `contact`, `insights`. Polished, on-brand, honest, accessible. Uses `PageHero`, `Card`, `ProofBand`, `FounderCard`, `CtaBand`, `Faq`.
2. **The homepage "v2 north-star"** (`src/pages/index.astro`) — a *separate*, all-scoped CSS world (`.hp-*` classes, ~460 lines of in-file styles) that does **not** use the shared components and re-implements its own hero, eyebrows, cards, and steps.

This is the core thing to resolve. The redesign should **collapse these into one system** — promote the homepage's best ideas (the editorial index, the "Live now" dispatch card) into shared, reusable, *animated* components, and kill the duplicate scoped CSS. Otherwise every future change is done twice and drifts.

### 2.2 Per-page audit

| Page | Works (keep) | Flat / un-Column (rebuild) |
|---|---|---|
| **`index` (home)** | Strong editorial voice; "Live now" dispatch card is a real artifact seed; editorial index of the four shifts; honest "we'll talk you out of" closer; founder arc line. | **No motion** beyond a pulsing dot + hover padding-shift. No claim→proof rhythm — it's claim→claim→claim (text bands). The "Live now" card is static, not the living feed it wants to be. Hero has no drifting artifact. Scoped CSS duplicates the design system. No stat band. No settlement/feed/JSON artifacts. |
| **`services`** | Four-tier ladder + AuditBanner is genuinely good (productized price is an asset). FAQ + schema solid. 8-card value grid is comprehensive. | Value grid is 8 flat `.card`s — wall of equal-weight boxes, no proof, no rhythm. No artifact anywhere (a POC-scope card belongs here). No motion. |
| **`about`** | Real founder, Person schema, KeyTakeaways AEO block, honest beliefs. E-E-A-T is done. | Beliefs = 4 flat cards. No artifact texture (a "career arc" timeline or a redacted scope artifact would carry it). Founder photo is a placeholder. No motion. |
| **`process`** | Survey→Chart→Assemble→Summit step rows are clear and on-brand; principles grid thorough. | Steps are static rows; a **POC-scope artifact** (milestone → timeline → cost band animating in) is the obvious proof object and is absent. Principles = 6 flat cards. No motion. |
| **`contact`** | Booking + "what happens next" 3-step is a real trust asset. | (Read at component level.) Needs the proof band above the form per its own audit; no artifact. |
| **`insights` index + `[...slug]`** | Clean reading surface, `.prose` is well-built, tables styled for AEO, cluster filter. | Article template is text-only — relevant artifacts (settlement card on the stablecoin piece, feed on "who's already live") would support the read. Keep the reading surface fast; artifacts decorate, never interrupt. |
| **`privacy` / `404`** | Fine as utility pages. | Low priority; inherit new chrome only. |

### 2.3 Component inventory (current)
Chrome: `Header` (sticky, blur, single "Book the Meet" CTA), `Footer` (two-column, social), `BaseLayout` (self-hosted fonts, preload, skip-link, Seo). Section primitives: `PageHero`, `Eyebrow`, `Card`, `CtaBand`, `ProofBand`, `FounderCard`, `Faq`, `HomeFAQ`, `StepRow`, `PriceCard`, `AuditBanner`, `KeyTakeaways`, `WhatHappensNext`, `UseCases`, `WhyNow`, `ArticleCard`, `Prose`. Decorative: `TopoLines`, `NodeGlow`, `PeakMark`, `Logo`, `BookingEmbed`, `ContactForm`. **There is no artifact component and no motion utility. That is the gap.**

### 2.4 What's already good (do not regress)
Near-zero JS; self-hosted variable fonts with preloads; `prefers-reduced-motion` is handled globally in `global.css` (kills all transition/animation/scroll-behavior — a strong baseline to build on); full JSON-LD graph; per-page titles/meta/OG; honest proof framing ("Built & partnered with," career arc, not "clients"); WCAG-aware mint usage with `--signal-dim` for small-on-light.

---

## 3. Gap → plan — section-by-section, with artifact placement

The creative core is a reusable **onchain-artifact system** (brief §2). Proposed components and where each lands:

- **`SettlementCard.astro`** — stablecoin payment settling in seconds beside a greyed-out multi-day wire. → Homepage proof slot #1 (stablecoin thesis); stablecoin insight article.
- **`OnchainFeed.astro`** — slow CSS marquee of plausible onchain events (tx hash, asset, amount, timestamp), pause-on-hover, frozen under reduced-motion. → Homepage hero companion *and* a proof band; "who's already live" articles. **This is our equivalent of Column's scrolling ledger — the highest-impact single element.**
- **`ArtifactCode.astro`** — JetBrains-Mono code/JSON design-object (tokenization config, vault position, a `cast`/Solidity excerpt). → Homepage tokenization proof slot; services value grid; relevant articles.
- **`ScopeCard.astro`** — milestone → timeline → cost-band card that animates in. → Services + Process (proves we turn ambition into a shippable plan).
- **`StatBand.astro`** — count-up honest numbers. → Homepage. **Numbers must be real and sourced** (the cited insight stats — ~$34B tokenized, $14B+ onchain loans — or Jordan's verifiable arc). I will *not* invent metrics; any slot without a defensible number gets cut, not faked.

### Proposed homepage cadence (claim → proof, never two text blocks back-to-back)
1. **Hero** — keep the H1 ("infrastructure for onchain finance is *live*"); one supporting line; primary CTA + quiet secondary. **Beside it: `OnchainFeed` or `SettlementCard` drifting in.** (Replaces today's static "Live now" card.)
2. **Stat band** (`StatBand`, count-up) — real sourced figures.
3. **Proof slot — Stablecoin settlement** → claim + `SettlementCard`.
4. **Proof slot — Tokenization** → claim + `ArtifactCode` (RWA config / tokenomics row).
5. **Proof slot — Onchain credit & vaults** → claim + `ArtifactCode` (vault position) or a feed filtered to vault events.
6. **Proof slot — 24/7 markets** → claim + `OnchainFeed` (continuous funding ticks).
7. **Why NWO** (4 pillars) — restyled, with motion; the one mostly-text band, kept short.
8. **Founder snapshot** → named credibility (Jordan), arc line, link to About.
9. **Confident close** — three calm doors (mirrors Column): *See what's live (insights) / Start a conversation (contact) / Read the approach (process)* — keep it low-pressure, on-brand.

Each inner page then adopts: one shared chrome, the section rhythm primitives, and **at least one artifact where it earns its place** (Scope on services/process; Settlement/feed on relevant insights).

---

## 4. Component inventory — keep / restyle / replace / new

**Keep as-is:** `BaseLayout`, `Seo`, `Logo`, `Faq`, `HomeFAQ`, `KeyTakeaways`, `ContactForm`, `BookingEmbed`, `ArticleCard`, `Prose`, `PriceCard`, `AuditBanner`, JSON-LD lib.

**Restyle (add motion + proof slots, no API change):** `Header` (keep sticky/quiet; standardize the persistent primary CTA), `Footer` (move toward the three-door close), `PageHero`, `Card`, `CtaBand`, `ProofBand` (render real artifacts, not just text), `FounderCard`, `StepRow`, `UseCases`, `WhyNow`, `WhatHappensNext`.

**Replace / absorb:** the entire `index.astro` scoped `.hp-*` CSS world → re-express its good ideas (editorial index, dispatch card) as shared animated components. `NodeGlow` / `TopoLines` / `PeakMark` → audit whether they still earn their place against the new artifact motif (likely keep `TopoLines` as atmosphere, retire redundant glows).

**New (the creative core):**
`SettlementCard.astro` · `OnchainFeed.astro` · `ArtifactCode.astro` · `ScopeCard.astro` · `StatBand.astro` · plus motion utilities in `global.css` (`.fade-rise`, `.drift-in`, `data-countup`, `.feed-marquee`) and one tiny IntersectionObserver script (shared, ~30 lines, bundled not inline so CSP stays `script-src 'self'`).

Synthetic-data rules (brief §2): plausible hash lengths, real chains/assets, realistic amounts; **no real client data, no real keys/addresses** — clearly synthetic. One source-of-truth data file (`src/lib/artifacts.ts`).

---

## 5. Motion system (to implement in Phase 1, define once)
- **fade-rise:** opacity 0→1, translateY 12→0, ~450ms, `cubic-bezier(0.22,1,0.36,1)`, IntersectionObserver on section enter, stagger children ~60ms.
- **drift/settle:** artifact cards ease into place on first view.
- **count-up:** stat numbers 0→value once, on view.
- **slow-feed:** marquee 30–60s linear loop, pause on hover.
- **Reduced motion:** the global `prefers-reduced-motion` block already nukes transitions/animations — I'll extend it so the feed renders frozen at a static final state and count-ups show final values immediately. **Will verify, not assume.**

---

## 6. Risks & flags (you asked me to be ruthless — these need a decision)

1. **Token drift between the two sources of truth.** `tailwind.config.mjs` and `BRAND-BOOK.md` say ink `#10221C`, mist `#EEF1ED`, fog `#AEC2BA`, copper `#C58A5B`. But `global.css :root` ships *different* values: `--ink:#0a1d18`, `--mist:#edf1ee`, `--fog:#9bb0a8`, `--copper:#d08a57`, and introduces `--signal-soft:#86f0d8` which **is not in the brand book at all.** The brief says reference tokens and don't change them without flagging — so I'm flagging: these are *already* off-book. **Recommendation:** reconcile to one set before building (either update the Brand Book to bless the v2 values, or snap `global.css` back to canonical). I'd lean toward blessing the slightly-darker `#0a1d18` base + adding `signal-soft` to the book, since the live site is built on them — but that's your call, not mine to make silently.
2. **Headline typeface vs Brand Book.** Brand Book §4 names **Space Grotesk** as display/headlines. The live site uses **Fraunces** (serif) for all headings. Your brief explicitly keeps Fraunces ("currently used for headlines"), so I'll treat Fraunces-for-display as the accepted decision — but the Brand Book should be updated to match so the next tool doesn't "fix" it back.
3. **Honesty wall on proof.** Column's proof is named clients with logos and quotes. We do **not** have NWO client logos/testimonials. Per `IMPLEMENTATION-PLAN.md` §1.4, proof stays framed as Jordan's *career track record* ("Built & partnered with," not "Trusted by"), and stats stay sourced. I will not borrow Column's "named client quote" pattern unless you supply real, attributable quotes. If/when you have one, it's the single biggest credibility upgrade available.
4. **Performance budget vs motion.** Target is Lighthouse ≥95 perf / 100 a11y-SEO-BP. The feed marquee and IntersectionObserver are cheap, but I'll keep all artifacts CSS-first, server-rendered, with explicit dimensions (no CLS), and the JS under ~1KB. If any artifact threatens LCP, the static fallback ships and the motion is progressive enhancement.
5. **Founder photo + real numbers are still `TODO(owner)`.** The redesign can ship with the placeholder, but the founder snapshot and stat band land at full strength only when you provide a headshot and confirm which figures are defensible.

---

## 7. What I need from you to start Phase 1
- **Token/font reconciliation decision** (§6.1, §6.2) — bless v2 values or revert.
- **Stat band numbers** — which figures are real and defensible (the cited insight stats are safe; anything about NWO's own track record needs your confirmation).
- **Go / adjust on the homepage cadence in §3** and the new-component list in §4.

On approval, Phase 1 is: motion utilities + the artifact component system + chrome (Header/Footer) + section primitives, committed and shown before I touch the homepage (Phase 2).

**Pausing here for your review.**
