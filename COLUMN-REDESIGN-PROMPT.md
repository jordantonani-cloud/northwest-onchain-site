# Frontend Redesign Prompt — "Column Feel, Northwest Onchain Brand"

> Paste this into the AI that will execute the redesign (Claude Code, in this repo).
> It is written to be run against the live Astro + Tailwind codebase at the repo root.
> Read it top to bottom before touching a file. Do the audit first. Do not skip Phase 0.

---

## 0. Role and standard

You are the lead frontend designer/engineer for **Northwest Onchain (NWO)** — a blockchain strategy & execution consultancy ("Onchain, on purpose."). I am rebuilding the marketing site to feel as smooth, confident, and *alive* as [column.com](https://column.com), **without changing our brand.** We keep our evergreen/mint palette, our fonts, our voice. We steal Column's *structure, motion, rhythm, and "show-don't-tell" proof* — not its colors.

Hold a high bar. This is a revenue site for a consultancy selling technical credibility to serious people (TradFi execs, fund operators, fintech founders in the PNW). Every section must earn its place, load fast, and look like it was made by someone who ships. No filler, no stock-illustration energy, no generic SaaS gradients. If a section doesn't build trust or move someone toward booking a call, cut it.

**Stack you are working in (do not change without flagging):**
- Astro 5 + `@astrojs/tailwind` (Tailwind 3.4), MDX content collections, astro-icon, sharp.
- Brand tokens already live in `tailwind.config.mjs` and `src/styles/global.css` (kept in sync). **Reference tokens, never raw hex.**
- Fonts via fontsource: Space Grotesk (display), Inter (body), JetBrains Mono (code/artifacts), Fraunces (available).
- Components in `src/components/*.astro`, pages in `src/pages/`, layout `src/layouts/BaseLayout.astro`.
- Lighthouse CI is wired (`lighthouserc.json`, `.lighthouseci/`). Perf/a11y budgets are real — don't regress them.
- Existing prior audit: `WEBSITE-AUDIT.md`. Brand rules: `BRAND-BOOK.md`. Read both.

**Hard constraints (non-negotiable):**
- **Brand:** evergreen `#12463A`, ink `#10221C`, mist `#EEF1ED`, signal mint `#2FBF98` / bright `#34E0B5` / dim `#0E7458`, fog, graphite, copper (≤5% of any layout). Fonts as above. Do not introduce new brand colors or typefaces.
- **Accessibility:** WCAG 2.1 AA. Honor the Brand Book contrast rule — mint is for UI/large/dark only; small accent text on light uses `signal.dim`. All interactive states keyboard-reachable, focus-visible. Respect `prefers-reduced-motion` for every animation (see §3).
- **SEO best practices (required):** semantic HTML5 landmarks, one `<h1>` per page, logical heading order, descriptive `<title>`/meta description per page, Open Graph + Twitter cards, canonical URLs, JSON-LD (Organization, Service, FAQ, Article/BlogPosting where relevant — extend `src/lib/jsonld.ts`), image `alt` everywhere, `sitemap.xml` + `robots.txt` valid, fast LCP, no layout shift. Content must be server-rendered in the HTML (Astro static) — never hide primary copy behind JS.
- **Performance:** ship near-zero JS. Animations are CSS-first / IntersectionObserver, no heavy libraries. Target Lighthouse ≥95 perf, 100 a11y/best-practices/SEO on the homepage. Images via sharp/`astro:assets`, lazy-loaded below the fold, explicit dimensions.

---

## 1. What actually makes Column feel good (the design DNA to port)

Don't copy Column's pages. Port the *mechanics* below. These are the specific reasons it feels smooth:

1. **Show-don't-tell proof.** Almost every claim is paired with a *living visual artifact* — floating account cards, a scrolling ledger of transactions, real JSON/`curl` snippets rendered as design objects. The product demonstrates itself. Credibility comes from showing real technical artifacts, not adjectives.
2. **Section rhythm = claim → proof → claim → proof.** Tight, declarative headline. Supporting line. A visual that proves it. Repeat. Predictable cadence; never two text blocks back to back.
3. **Restraint + contrast.** Mostly one dark base, lots of negative space, *one* accent used sparingly for signal. Big, confident type. Calm, not busy.
4. **Motion that respects you.** Subtle, purposeful: cards drift/settle, feeds scroll slowly, numbers count up, elements fade-and-rise on scroll. Nothing bounces or demands attention. Everything eases (cubic-bezier, ~300–600ms). It feels expensive *because* it's understated.
5. **Named, specific social proof.** Real logos, real quotes attributed to real people with titles. Big stat numbers ($2T+, 99.999%, No.1).
6. **Technical artifacts as decoration.** Code blocks, schemas, IDs, routing numbers — used as texture that signals "engineers built this." This is the single biggest "feel" lever and the one most sites skip.
7. **Sticky, quiet nav** with a structured menu; clear primary CTA ("Get started") persistent.
8. **A confident, low-pressure close.** A clean three-option footer-CTA ("Documentation / Get started / Contact sales") rather than a desperate form.

---

## 2. NWO's translation (this is the creative core — get it right)

We can't show a bank API. **Our equivalent of Column's animated product mockups is animated "onchain artifact" cards** — visual proof of the work we do and the world we operate in. This is the motif that carries the whole redesign. Build a small, reusable system of these:

- **Settlement-flow card:** a stablecoin payment moving counterparty → counterparty, "Completed," settles in seconds vs. a greyed-out wire taking days. (Directly mirrors Column's transfer cards; sells our "stablecoin settlement vs. wires" thesis.)
- **Onchain transaction feed:** a slowly scrolling ledger of real-looking onchain events (transfers, mints, vault deposits) with tx hashes, amounts, timestamps. Mirrors Column's account-activity feed. Pure CSS marquee, pauses on hover, frozen under `prefers-reduced-motion`.
- **Tokenization model snippet:** a JSON or table artifact — an RWA tokenization config, a tokenomics row, a vault position — rendered in JetBrains Mono as a design object. Mirrors Column's JSON blocks. Signals technical depth.
- **Smart-contract / call excerpt:** a short, real-looking Solidity or `cast`/RPC snippet as texture next to a claim about execution capability.
- **POC-scope artifact (optional, for services/process):** a compact "scope card" — milestone, timeline, cost band — that animates in. Proof we turn ambition into a shippable plan.

Rules for the artifact system:
- Build them as **reusable `.astro` components** parameterized by data (e.g. `OnchainFeed.astro`, `SettlementCard.astro`, `ArtifactCode.astro`). One source of truth, themed with brand tokens.
- Data must look **plausible and real** (correct hash lengths, realistic amounts, real chains/assets), but contain **no real client data and no real private keys/addresses** — clearly synthetic.
- These are *decoration that proves competence.* They must never block content, never be the only way to read a claim, and must degrade to a clean static state without JS or with reduced motion.
- Themed in **our** palette: ink/evergreen surfaces, mist text, mint as the single signal accent, mono for the code. Not navy. Not Column's blue.

---

## 3. Motion system (define once, reuse)

Create a tiny, shared motion vocabulary in `global.css` and reuse it. No animation library.
- **fade-rise:** opacity 0→1, translateY 12px→0, ~450ms ease-out, triggered by IntersectionObserver as sections enter. Stagger children ~60ms.
- **drift/settle:** artifact cards ease into place on first view.
- **count-up:** stat numbers animate from 0 to value once, on view.
- **slow-feed:** the onchain feed marquee, ~30–60s loop, linear, pause on hover.
- **Easing:** standardize on one or two cubic-beziers (e.g. `cubic-bezier(0.22, 1, 0.36, 1)`). Durations 300–600ms. Nothing faster (janky) or slower (sluggish).
- **`prefers-reduced-motion: reduce` → all of the above collapse to instant final state.** Test this.

---

## 4. The work — phased. Show me Phase 0 output before building.

### Phase 0 — Audit (do this first, output as `REDESIGN-AUDIT.md`, then stop and let me review)
1. **Column teardown:** document the specific patterns we're porting (nav, hero, proof sections, artifact mockups, stats, social proof, footer-CTA, motion, spacing scale, type scale). Be concrete — sizes, rhythm, what creates the "smooth" feeling.
2. **NWO current-state audit:** go through every page (`index`, `about`, `services`, `process`, `contact`, `insights` index + article template, `privacy`, `404`) and every component. For each: what works, what feels flat/generic vs. Column, what to keep, what to rebuild. Reference the existing `WEBSITE-AUDIT.md` so we don't relitigate solved issues.
3. **Gap → plan:** a section-by-section mapping of how each NWO page adopts the Column mechanics from §1 using the artifact system from §2, in our brand. Call out exactly where each artifact-card type appears.
4. **Component inventory:** which existing components to keep as-is, restyle, or replace; which new components to create (the artifact system, motion utilities, any new section blocks).
Pause here.

### Phase 1 — Design system & shared chrome
- Implement the motion utilities (§3) and the onchain-artifact component system (§2).
- Rebuild **Header** (sticky, quiet, structured nav, persistent primary CTA) and **Footer** (confident three-option close).
- Lock the page-section rhythm primitives (section wrapper, eyebrow, headline, proof slot) so every page reuses them.

### Phase 2 — Homepage (the proof of concept)
Rebuild `src/pages/index.astro` to Column's claim→proof cadence in our brand:
- **Hero:** one sharp declarative headline (use/adapt existing homepage copy in `homepage-hero-and-usecases.md` / `homepage-and-founder-copy.md`), one supporting line, primary CTA (book a call) + secondary (insights/docs-equivalent). Beside it: the hero **onchain-artifact** (settlement card or feed) drifting in.
- Alternating proof sections built on the artifact system, each tied to a real NWO thesis (stablecoin settlement, RWA tokenization, onchain credit/vaults, 24/7 markets — these already exist as insights).
- **Stat band** (count-up) with honest, defensible numbers — do not invent metrics; use real, sourced figures or Jordan's verifiable background (8yr TradFi + onchain: Morgan Stanley → Index Coop → Lotus Labs). Flag any number you can't substantiate instead of fabricating.
- **Named credibility / founder band** (Jordan), and a clean closing CTA band.
Run Lighthouse. Hit the budgets. Then pause for review.

### Phase 3 — Roll to the full site
Apply the locked system to `about`, `services`, `process`, `contact`, the `insights` index and the article template (`[...slug].astro`), `privacy`, `404`. Each page: same rhythm, same chrome, at least one relevant artifact where it earns its place (e.g. POC-scope card on services/process; settlement/feed on relevant insight articles). Keep article reading surface clean and fast — artifacts support, never interrupt, the read.

### Phase 4 — Verification (required, do not skip)
- `pnpm build` clean (incl. `astro check`), lint + prettier pass.
- Lighthouse on homepage + one inner page + one article: perf ≥95, a11y/SEO/best-practices 100. Paste scores.
- Manual a11y pass: keyboard-only nav of every interactive element, visible focus, `prefers-reduced-motion` verified to freeze all motion, AA contrast spot-checked (esp. mint usage per Brand Book).
- SEO pass: titles/meta/OG/canonical/JSON-LD present and valid per page; sitemap + robots valid; headings sane.
- Cross-check against this prompt's hard constraints and the Phase 0 plan. List anything deferred and why.

---

## 5. How to work

- Keep diffs reviewable; commit per phase with clear messages.
- When you must choose between "looks like Column" and "is on-brand / accessible / fast," **brand + a11y + speed win.** The goal is *the feel*, not a clone.
- If something in the existing code or brand rules blocks a Column pattern, say so and propose the on-brand alternative — don't silently drop it.
- Don't invent claims, metrics, logos, or testimonials. Real proof or no proof.
- Ask me before: changing brand tokens/fonts, adding any JS dependency, or removing a page.

Start with Phase 0. Output `REDESIGN-AUDIT.md` and wait.
