# Northwest Onchain — Implementation Plan (master build order)

**For:** Claude Code · **Date:** June 4, 2026 · **Type:** Refinement pass on the existing Astro/Netlify site

This is the single orchestration doc. It sequences every approved change and points to the detailed source docs for the exact copy and markup. **Work phase by phase, commit after each, and pause after Phase 1 to show me the re-skin before continuing.** Do not re-derive copy you find in the source docs — use it verbatim.

---

## 0. Source documents (all in repo root unless noted)

| Doc | What it contains |
|---|---|
| `BRAND-BOOK.md` | **Source of truth.** Brand identity: Beacon logo, color tokens, fonts, voice rules (§6), AI-handoff tokens (§12). |
| `WEBSITE-AUDIT.md` | Full audit findings, rationale, and the priority order behind these changes. |
| `homepage-and-founder-copy.md` | Verbatim copy: hero subhead (§1), founder bio teaser + full (§2), proof/track-record assets (§2.5), homepage FAQ (§3). |
| `homepage-hero-and-usecases.md` | Astro/Tailwind markup + copy: hero (§1), use-case grid (§2), "Why now" regulatory section (§3); verified GENIUS/CLARITY facts (§0). |
| `public/brand/*.svg` | Logo assets (mark, dark, mono, favicon, horizontal lockups). |
| `src/content/insights/` | Three new MDX articles already added (validate in Phase 5). |

---

## 1. Guardrails (non-negotiable)

1. **Refinement, not rebuild.** The skeleton and schema are good. Sharpen; don't restructure the stack.
2. **Extend existing SEO/JSON-LD; never delete it.** The site already has Organization/ProfessionalService, WebSite, BreadcrumbList, OfferCatalog, and FAQPage schema — keep and enrich.
3. **Brand voice** (`BRAND-BOOK.md` §6): plain, outcomes-first, willing to say "don't," no crypto slang, no hype words, no emojis.
4. **Honesty framing (critical):**
   - Proof/logos = **Jordan's career track record, not NWO clients.** Label it "Built & partnered with" or "Across Jordan's career" — **never** "Trusted by" / "Our clients."
   - Use cases = **industry patterns and outcomes**, not claimed NWO wins.
   - **No fabricated numbers.** Use only the figures in the source docs (which are cited) or clearly-general adoption tags ("In production today").
   - Regulatory copy stays **hedged** with "as of June 2026" + "not legal advice."
5. **Do the brand re-skin (Phase 1) FIRST**, and execute every color/visual fix in the new Beacon palette — not the old prototype colors (`#08211B`/`#36E2B4`).

---

## 2. Final homepage section order

Hero → The problem (+ 3 audience cards) → **Where blockchain wins — today (use cases)** → **Why now (regulation)** → Services & pricing → **Proof band** → Why Northwest Onchain (trimmed to 4) → Process (4 step titles, link out) → **Founder snapshot** → FAQ → Final CTA.

---

## 3. Phased execution

### Phase 1 — Brand re-skin (do first, then pause for review)
- Rewrite the palette in `tailwind.config.mjs` and the CSS-var mirror in `src/styles/global.css` to the Beacon tokens (`BRAND-BOOK.md` §3 / §12): `ink #10221C`, `evergreen #12463A`, `moss #1C5E4A`, `signal #2FBF98`, `signal-bright #34E0B5`, `mist #EEF1ED`, `fog #AEC2BA`, `graphite #33454B`, `copper #C58A5B`, `white #FBFDFC`. Replace all old `#08211B`/`#36E2B4` usages.
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono) — self-hosted.
- Swap favicon → `/brand/nwo-favicon.svg`. Replace the inline header/footer logo with `/brand/nwo-logo-horizontal-dark.svg` (dark sections) and `/brand/nwo-logo-horizontal.svg` (light).
- Re-run a WCAG-AA contrast pass; re-derive accent/CTA/focus/hover/OG colors.
- **Commit. Pause. Show the re-skinned site.**

### Phase 2 — Homepage (Priority 1)
- **Hero:** replace with the left-anchored, full-bleed Hero in `homepage-hero-and-usecases.md` §1 (keep H1; use the new present-tense subhead; primary CTA = "Get the $1,500 Opportunity Audit" + micro-line; secondary anchors to `#use-cases`). Remove the center-floating layout and the offset tech graphic.
- **Use cases:** add the `UseCases` section (`homepage-hero-and-usecases.md` §2) directly below the problem block.
- **Why now:** add the `WhyNow` section (`homepage-hero-and-usecases.md` §3) after use cases. Keep the hedged language + disclaimer exactly.
- **Proof band:** build `<ProofBand>` from `homepage-and-founder-copy.md` §2.5 (stats, "Built & partnered with" logo row with the honest qualifier, press row). Place before the final CTA.
- **Founder snapshot:** build `<FounderCard>` teaser from `homepage-and-founder-copy.md` §2b; link to `/about`.
- **FAQ:** build `<HomeFAQ>` from `homepage-and-founder-copy.md` §3 and mirror it in `FAQPage` JSON-LD (visible text must match schema).
- **Voice cleanup:** remove slang sitewide — "degens" → "crypto specialists", "move-fast-and-rug" → "the hype cycle", "one throat to choke" → "a single point of accountability".
- **CTA standardization:** primary = "Get the $1,500 Opportunity Audit"; secondary = "Book a free 30-min call"; reserve "the Meet" for Contact-page flavor only.
- **Fix the dark→light→dark flash:** enforce a consistent dark base on homepage sections with subtle elevation only (Ink `#10221C` → lifted `#13302A`); no accidental white bands.
- Remove the redundant "In short" box; add the condensed "What happens next" 3-step above the final CTA (`<WhatHappensNext>`).

### Phase 3 — Services
- H1 → "Four ways to work with us — each one de-risks the next." (`WEBSITE-AUDIT.md` §5)
- Delete the `// WHAT IT COSTS` paragraph; replace with: "Start small. Each fee credits toward the next step if you continue."
- Expand the "Where we create value" grid to mirror the four homepage pillars **and add the two missing ones: Onchain credit & vaults, and Derivatives & 24/7 markets.**
- Equalize the four pricing-card heights; increase gutter spacing.

### Phase 4 — About
- Add the full `<FounderCard>` using `homepage-and-founder-copy.md` §2c (Jordan Tonani bio). Headshot is a `TODO(owner)` placeholder.
- Add `Person` schema (`homepage-and-founder-copy.md` §2d) linked to the Organization via `founder`; reuse this `Person` `@id` as `author` on Insights articles.
- Ensure a unique server-rendered `<title>` + meta description (was defaulting to the URL).

### Phase 5 — Insights (validate; already added)
- Three new MDX files are in `src/content/insights/`: `how-stablecoins-take-cost-out-of-the-value-chain`, `onchain-credit-and-vaults-explained`, `why-now-genius-clarity-act`.
- Validate frontmatter against the content schema; confirm they render, appear in the index, and filter into their clusters (`enterprise-strategy`, `tokenization-rwa`).
- Wire the `Jordan Tonani` author byline to the `Person` node from Phase 4.

### Phase 6 — SEO / schema
- Unique server-rendered `<title>` + meta description on **every** route (audit About, Process, Insights, Contact). Homepage title/description per `WEBSITE-AUDIT.md` §7.
- Add `FAQPage` JSON-LD to the homepage (matches `<HomeFAQ>`).
- Enrich Organization schema with `serviceType`, `areaServed`, `knowsAbout`.
- Confirm `og:image` URLs resolve on the production domain; fix if the domain isn't live.

### Phase 7 — Polish & dedup
- Trim "Why Northwest Onchain" from 6 → 4 (Both sides fluent, Network not headcount, Metrics-first, Vendor-neutral); render as a 2×2 icon-card grid; fold PNW + Lean into copy.
- Deduplicate repeated phrases to ≤2 occurrences sitewide ("vendor-neutral and chain-agnostic," "network, not headcount," "a fraction of big-firm cost," "including when the answer is don't," "Onchain, on purpose").
- Reduce hero vertical padding ~25%; cap wide paragraph blocks ~65ch.
- Verify the Process page secondary button shows visible label text; standardize buttons (one filled primary, one ghost secondary).
- Align services to "four" everywhere (homepage previously said "three").

### Phase 8 — Verify
- Run `check` / `lint` / `build` / Lighthouse; validate JSON-LD in the Rich Results test.
- Report, file by file, what changed, plus any remaining `TODO(owner)` items (headshot, real metrics, production domain).

---

## 4. New components to build
`<UseCases>` · `<WhyNow>` · `<ProofBand>` (honest framing) · `<FounderCard>` (teaser + full) · `<HomeFAQ>` (+ FAQPage schema) · `<WhatHappensNext>`.

---

## 5. Definition of Done
- [ ] Site renders in the Beacon palette + logo; no old prototype colors remain.
- [ ] Homepage matches the §2 section order, with new hero, use cases, why-now, proof band, founder teaser, FAQ.
- [ ] Founder bio live on About with `Person` schema; proof framed as career track record, not NWO clients.
- [ ] Slang removed; CTAs standardized on the $1,500 Audit; dark-flash fixed.
- [ ] Services grid includes all six value areas incl. vaults/credit + perps; cost paragraph deleted.
- [ ] 3 new articles validate, render, and filter into clusters with the founder byline.
- [ ] Every route has unique title/meta; homepage FAQPage schema added; existing schema intact and enriched.
- [ ] `check`/`lint`/`build`/Lighthouse pass; Rich Results clean.
- [ ] Remaining `TODO(owner)` items listed for me.

---

## 6. Kickoff
Start with **Phase 1**, commit, and pause to show the re-skin. Then proceed through Phases 2–8 in order, committing at each. Flag anything in the source docs that conflicts with the live code rather than guessing.
