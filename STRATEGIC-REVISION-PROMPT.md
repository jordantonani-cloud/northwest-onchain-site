# STRATEGIC-REVISION-PROMPT.md

Reusable brief for revising the Northwest Onchain marketing site. Paste this whole file (or point the AI at it) to run a strategic revision pass. Supersedes the conversion-path and voice guidance in older docs where they conflict; COLUMN-REDESIGN-PROMPT.md still governs motion mechanics and the artifact system's engineering.

---

## Role

You are the lead strategist, copywriter, and frontend designer for Northwest Onchain (NWO), a two-founder blockchain strategy and execution firm in Seattle. Your job in this pass is not decoration. Every change must produce a better strategic outcome: clearer positioning, a stronger first impression, and more booked conversations with the right people.

## Read first (in the repo)

1. `BRAND-BOOK.md` — colors, fonts, accessibility rules. Source of truth. Do not deviate.
2. `COLUMN-REDESIGN-PROMPT.md` — the motion + artifact system brief. Keep its mechanics; this brief changes what the system says, not how it moves.
3. `src/consts.ts` — all copy-as-config (founders, CTAs, proof). Most copy changes land here.
4. `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/services.astro`, `src/styles/global.css`.

## What Northwest Onchain is (get this right before touching anything)

The client's finances are the client's top concern. Ours is making sure they are set up for the onchain moment.

NWO finds and acts on onchain opportunities that, working with the client's point person, produce meaningful bottom-line improvements: better distribution, lower costs, better outcomes for stakeholders. Every engagement runs through one diligence with three questions: why build, what to build, who builds it. Jordan answers from the market side. Nathan answers from the systems side ($120B+ in onchain volume shipped, zero exploits). Two brothers, Seattle, one process.

We are not selling a program or a package. We are selling a partnership that positions a business for the onchain moment.

Never frame NWO as "CFO thinking," "the finance guys," or financial modelers first. We can model and we support those decisions, but that framing undersells the job. Purge it across the board, including client-facing lines like "survives a CFO's scrutiny." Replace with outcome language: distribution, cost, stakeholder value, readiness.

---

## The six directives

### 1. Cut the words

The site is too wordy and a bit too busy. It reads like it's trying to prove something. Confident firms say less.

- No em dashes anywhere on the site. Use periods, commas, or a colon. Short sentences.
- Budgets: headlines ≤ 8 words. Section leads ≤ 2 sentences. Card body copy ≤ 2 sentences. Bios are the only place allowed to breathe, and even they get a 20% trim.
- Concepts over jargon. The reader should get the idea before the vocabulary. Swap: "correspondent banking and FX spreads" → "wires that take days and skim fees." "Parameterized risk frameworks" → "risk systems that held through three crashes." "TVL" → say what the money did. Keep one or two technical terms per page where they earn trust; cut the rest.
- Acceptance test: read each section aloud. If you take a second breath before the period, the sentence is too long.

### 2. One live moment, then vary the proof

The scrolling feed in the hero works. Repeating the same data-card setup in section after section makes it wallpaper, and the tokenization JSON is the worst offender: too many numbers, the opportunity gets lost.

- Keep the hero feed and its floating settled-payment card. That is the one "live" moment.
- Each proof section gets a different visual form, and each artifact carries at most ONE number that matters. Everything else is texture or gets cut. The reader should understand the opportunity in 3 seconds without reading the copy.
- Replace the tokenization JSON with something conceptual: a simple before/after (locked asset → liquid, fractional, 24/7), not a config file.
- The settlement card (seconds vs. days) already passes the 3-second test. Use it as the bar.
- Acceptance test: cover the copy, look only at the artifact, and say the opportunity out loud. If you can't, redesign it.

### 3. Outcome positioning, not finance positioning

Covered above under "What Northwest Onchain is." Apply it everywhere: homepage, about, services, process, FAQ, insights teasers, llms.txt files, JSON-LD descriptions. The test for every claim: does it say what the client's business gets (distribution, cost, stakeholder outcomes, readiness), or does it describe us doing finance? Keep the first, rewrite the second.

### 4. Stronger visual hierarchy

Headers feel small, spacing feels off, sections run together. The page should feel like distinct chapters, not one long scroll.

- Bigger display type at the top of each section. Section h2s should land with weight (think 3.5rem+ at desktop, tight line-height, real presence).
- More vertical air between sections than within them. The gap between sections should be unmistakably larger than any gap inside one.
- Differentiate segments: alternate background treatments, use the existing light `.section.alt` more deliberately, or add a thin rule + eyebrow as a consistent chapter marker. Pick one system and apply it everywhere.
- Whitespace is the cheapest way to look expensive. When in doubt, remove an element instead of shrinking it.
- Hard constraints still apply: brand tokens only, WCAG AA, reduced-motion support, Lighthouse budgets (≥95 perf, 100 a11y/SEO). Hero h1 stays server-rendered and never reveal-gated.

### 5. One ask: a free conversation

Kill the three-door close and anything that reads like a menu of packages. The single call to action sitewide is a free first conversation. Low pressure, high confidence: we will tell you straight whether there's something real here for you.

- Header CTA, section CTAs, close band, footer: all point to the free conversation. One verb, one destination.
- Pricing comes OFF every header, CTA, button, and the footer. The "$1,500 Opportunity Audit" stops being the public ask.
- The services page keeps honest context so leads self-qualify ("engagements typically run $X–$Y depending on scope") but stops presenting tiers as products to pick from. Reframe services as: how the partnership works, what kinds of engagements exist, what a first conversation covers. Business logic and exact pricing live in the conversation, not on the site.
- The close band becomes one confident statement + one button. Keep the calm tone: no urgency tricks, no countdown energy.
- Update JSON-LD offers to match whatever pricing remains visible. Never let schema claim prices the page doesn't show.

### 6. The essence check (run last)

After all changes, read the homepage top to bottom once, fresh. It should feel like: a calm, technically serious firm from the Pacific Northwest that has already done this at scale, telling you the onchain moment is here and offering to walk through what it means for your business. If any section instead feels like a vendor, a pitch deck, or a crypto promoter, fix that section.

---

## Process

Work in three phases. Stop after each and present before continuing.

1. **Copy + positioning pass** (directives 1, 3, 5): consts.ts, page copy, FAQ, llms files, schema. Show a before/after table of the key lines.
2. **Visual pass** (directives 2, 4): artifacts, type scale, spacing, section system. Show what changed and why.
3. **Verification**: `astro check` clean, full build, one h1 per page, JSON-LD valid and consistent with visible copy, zero em dashes in rendered copy (`grep -r "—" dist/` on text content), reduced-motion intact, no inline scripts (CSP stays `script-src 'self'`).

Commits happen on the owner's machine. Prepare a single copy-paste commit command at the end.

## What not to break

- The motion runtime (`public/motion.js`, `public/nav.js`) and CSP setup.
- The artifact component system's engineering (props, a11y, reduced-motion behavior). Change contents and variety, not the machinery.
- Brand tokens, fonts, palette. No new colors or typefaces.
- SEO plumbing: titles, canonicals, sitemap, JSON-LD entity graph (update contents to match copy, keep the structure).
- The insights articles' substance. Trim teasers and ledes under directive 1, but do not rewrite article bodies in this pass.

## Definition of done

A first-time visitor (a busy operator, not a crypto person) can answer these in under 60 seconds on the homepage: What does this firm do? Why now? Why them? What do I do next? And the answer to the last one is obvious: book the free conversation.
