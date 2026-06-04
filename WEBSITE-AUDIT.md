# Northwest Onchain — Website Audit & Refinement Brief

**For:** Claude Code · **Type:** Refinement pass (not a rebuild) · **Date:** June 2026

---

## How to use this document

Work **top-down by priority** (Section 3). Each fix maps to a concrete instruction in the Implementation Brief (Section 11) and cites the finding that justifies it. Map the component/page names here to the actual files in the repo.

**Two hard guardrails:**
1. **Do not remove or weaken existing SEO/schema.** The site already has good meta tags, OpenGraph, and a valid JSON-LD graph (Organization, ProfessionalService, WebSite, BreadcrumbList, OfferCatalog, FAQPage). *Extend* it; never delete it.
2. **This is a refinement, not a rebuild.** The skeleton is strong. Sharpen the voice, add human proof, strip repetition, fix a few defects. Do not restructure the stack or redesign the system.

**Sequencing note — read before starting.** This audit was performed on the site while it still used the *old prototype* palette (`#08211B` / `#36E2B4`). The Beacon brand re-skin (per `BRAND-BOOK.md`: ink `#10221C`, evergreen `#12463A`, signal `#2FBF98`/`#34E0B5`, mist `#EEF1ED`) is a separate, already-queued task. **Apply the brand re-skin first (or in the same pass), and execute every color/visual fix below in the NEW Beacon palette** — not the colors referenced in screenshots. Where this brief says "dark background," use Ink `#10221C`; where it says "accent," use Signal.

---

## 1. Executive summary

This site is technically better built than most consultancy sites: clean semantic headings, real meta descriptions, OpenGraph tags, a proper Organization/ProfessionalService schema graph, and FAQPage schema on Services. The design system (dark theme, mono `// SECTION` labels, green accent) is coherent and has a premium instinct.

But the copy is trying too hard, and the site asks for trust it hasn't earned. Three problems dominate:

1. **Voice over clarity.** The writing is addicted to clever fragments and crypto slang — "Paid front door. Managed delivery. A standing seat.", "degens who can't model," "one throat to choke," "move-fast-and-rug." A bank or family office doesn't learn *what you do*; they learn that you have a personality. The cleverness buries the substance.
2. **Zero human proof.** No founder name, bio, photo, client, logo, testimonial, case study, or single number you've produced. For a firm whose entire pitch is "trust my judgment," this is the biggest credibility hole on the site. An AI assistant summarizing you will say "a boutique consultancy" because that's all the page proves.
3. **Copy density and repetition.** The same four or five proof points — vendor-neutral, network-not-headcount, metrics-first, PNW-grounded, fraction-of-big-firm-cost — repeat on nearly every page, often verbatim. By page three the reader has learned nothing new.

**Verdict:** Turn the "voice" volume down ~40%, add real humans and real proof, strip the repetition, fix a few visual defects. **Sharpen, don't reinvent.**

> The one-sentence version: *The site is a beautifully written argument from someone who refuses to tell you their name or show you their work. Fix that before touching another adjective.*

---

## 2. The three dominant problems (in priority order)

1. **Anonymity.** No human, no proof. (→ Trust section, P1)
2. **Clarity buried under voice.** The reader works too hard to learn what you do. (→ Copy section, P1)
3. **Repetition & density.** Same points, every page; walls of text. (→ IA + Copy sections, P2)

Everything else is secondary to these.

---

## 3. Prioritized action plan

### Priority 1 — Credibility & clarity killers (do first)
1. **Add a real founder** — name, photo, bio, credentials — on About, with a teaser on the homepage. The site is unsellable to enterprise buyers without a human attached. *(Section 9, Brief D)*
2. **Add at least one piece of proof** — a testimonial, an (anonymized) case study, a result, or a "trusted by" row. Build the component now even if content lands later. *(Section 9, Brief E)*
3. **Rewrite the hero subhead** to plainly state what NWO does in the first sentence; mirror that sentence in the About opening for AI extraction. *(Section 4, Brief B)*
4. **Kill the crypto slang and internal jargon** — "degens," "move-fast-and-rug," "one throat to choke," and the Services H1 "Paid front door…". *(Section 5, Brief A)*
5. **Standardize the CTA** on the $1,500 Opportunity Audit as the primary ask sitewide; replace ambiguous "Book the Meet" buttons. *(Section 10, Brief A/G)*
6. **Fix the dark→light→dark section flash** on the homepage (in the new Beacon palette). *(Section 6, Brief F)*

### Priority 2 — Flow, conversion, density
7. **Reorder the homepage** (Section 8): move Services up, insert a proof band, trim "Why" to 3–4, add a founder teaser.
8. **Delete redundancies** — the homepage "In short" box and the dense Services "What it costs" paragraph — and **deduplicate** the five repeated proof phrases across pages. *(Brief A/B/C)*
9. **Align the offer ladder** — the homepage says "three" services but there are **four** (Audit, Sprint, Delivery, Advisor). Make it four everywhere. *(Brief B)*
10. **Add a homepage FAQ** with FAQPage schema, and promote the Contact page's "what happens next" 3-step onto the homepage. *(Section 7, Brief F/G)*

### Priority 3 — Polish
11. Reduce hero vertical padding, cap paragraph width (~65ch), fix the empty-looking Process secondary button, standardize buttons. *(Section 6, Brief F)*
12. Convert "Why" from a stacked list to a 2×2 card grid with an icon/numeral per card. *(Section 6, Brief B)*
13. Add Person + BlogPosting schema; enrich Organization schema; verify per-page unique titles/descriptions; confirm `og:image` resolves on the production domain. *(Section 7, Brief F)*
14. Add real imagery (founder photo, a redacted deliverable/roadmap mockup) to replace the philosophy-only feel.

---

## 4. Positioning & clarity

| Question | Answered? | Assessment |
|---|---|---|
| What does NWO do? | Partially | Buried under metaphor. "The bridge from boardroom to blockchain" is a vibe, not a service. Takes ~4 paragraphs to learn it's blockchain strategy + managed PoC delivery. |
| Who is it for? | **Yes** | Strongest part — three clear segments (Enterprise/TradFi, Investors, Founders). **Keep.** |
| What problem does it solve? | Yes, but wordy | "A board mandate to do something with crypto, and a market full of hype" is genuinely good — just over-worded. |
| Why trust this firm? | **No** | The failure. Asserts judgment and experience but shows nothing — no name, track record, client, or result. |
| What to do next? | Mostly | "Book the Meet" is everywhere but is jargon; and the entry point conflicts (homepage pushes "Diagnostic Sprint," Services leads with the $1,500 Audit). |

**Fixes:** lead the hero subhead with a plain-English definition before the clever line; resolve the entry-point conflict by making the $1,500 Audit the single primary CTA; add a "who's behind this" answer (founder).

---

## 5. Copy audit

**Dominant pattern:** clever fragments and crypto-native slang where a serious buyer wants a plain sentence. Rewrite as if briefing a CFO who's heard ten crypto pitches this quarter and is tired. **Confidence comes from precision and proof, not from edge.** (This aligns with `BRAND-BOOK.md` §6 — treat the brand voice rules and this audit together.)

### Homepage
| Location | Problem | Cleaner rewrite |
|---|---|---|
| Hero subhead ("Most crypto consultants can't read a P&L…") | 50+ words; leads with a dig instead of saying what you do | "Northwest Onchain is a blockchain strategy and delivery consultancy. We help banks, investors, and operators find where onchain creates real value — then deliver a working proof of concept against defined metrics, cost, and ROI." |
| "Why" headline ("…degens who can't model… the third thing.") | "degens" is in-group slang; "the third thing" is vague | "Crypto specialists rarely understand the business case. Strategy firms rarely understand the technology. We do both." |
| `// THE PROBLEM` body | Good content, slightly overwritten | Tighten: "You can't tell a real opportunity from a pitch deck, and you don't want to hire a full Web3 team to find out. You need independent judgment — and a network you don't have." |
| "PNW-grounded" ("…move-fast-and-rug culture…") | Insider slang | "Long-term and relationship-driven — the opposite of the hype cycle this space is known for." |
| "Lean by design" ("big-firm rigor at a fraction of big-firm cost") | "big-firm" twice | "Big-firm rigor, delivered in days instead of quarters, at a fraction of the cost." |

### Services
| Location | Problem | Cleaner rewrite |
|---|---|---|
| H1 "Paid front door. Managed delivery. A standing seat." | Internal business-model jargon; means nothing to a cold visitor | "Four ways to work with us — each one de-risks the next." |
| `// WHAT IT COSTS` paragraph | ~70-word run-on listing all four prices, immediately repeated by the cards below | **Delete it.** Replace with one line: "Start small. Each fee credits toward the next step if you continue." |

### About
| Location | Problem | Fix |
|---|---|---|
| Entire page | No name, person, history, or proof — reads as a manifesto from an anonymous entity | Add a real founder section (Section 9). **Priority fix for this page.** |
| "Years in crypto. A real network. Financial discipline…" | Unquantified | Replace with specifics once supplied: "[X] years building in crypto. A vetted network of [N]+ engineers and protocol teams. Financial modeling that's survived [bank/fund] scrutiny." |
| "Trust compounds… an industry that forgot that." | 4th industry-bashing line on the site | Soften or cut — the point is made. |

### Cross-site phrases to deduplicate (keep each on ≤1–2 pages, not every page)
"Onchain, on purpose," "vendor-neutral and chain-agnostic," "including when the answer is don't," "network, not headcount," "a fraction of big-firm cost."

---

## 6. Information architecture & visual design

### Recommended homepage order
**Hero** (clever line + plain definition + single primary CTA "Get the $1,500 Opportunity Audit" + secondary "See how we work") → **The problem** (+ 3 audience cards) → **What we do** (move Services UP — after the problem, people want the solution, not philosophy) → **Proof band (NEW)** → **Why Northwest Onchain** (trim 6 → 3–4) → **Process** (condense to 4 step titles, link out) → **Founder teaser (NEW)** → **Final CTA**.

- **Delete** the `// In short` box from the homepage (redundant with hero + meta description). If wanted for AI-summary, re-add one plain factual sentence lower down (see Section 7).
- **Trim "Why NWO" to 4 cards** — keep **Both sides fluent, Network not headcount, Metrics-first, Vendor-neutral**. Fold *PNW-grounded* and *Lean by design* into those as supporting lines. Render as a **2×2 icon-card grid**, not a stacked 01–06 list.
- **Align service count to four** everywhere (homepage currently says three; the Audit is missing).

### Visual defects & fixes (execute in the Beacon palette)
| Severity | Issue | Fix |
|---|---|---|
| **High** | Dark→light→dark section flash around `// THE PROBLEM` — reads as a rendering bug, cheapens the premium feel | Enforce a consistent dark base across homepage sections. If a light **Mist** section is used (the brand permits it), make it a *deliberate, full, well-spaced* band — not a thin flash sandwiched between dark sections. Prefer subtle elevation steps (e.g., Ink `#10221C` → a slightly lifted `#13302A`) for separation. No accidental white bands. |
| Medium | Hero whitespace too tall; pushes content far below the fold | Reduce hero vertical padding ~20–30% so the next section peeks above the fold. |
| Medium | "Why" = monotonous wall of 6 stacked rows | Reduce to 4; 2×2 grid; icon/numeral anchor; body ≤2 lines. |
| Medium | Services "What it costs" gray text block | Delete (see Section 5). |
| Low | Process page secondary button ("How we work") appears empty / label invisible | Verify it renders visible label text; standardize button components (one filled primary, one ghost secondary). |
| Low | Body line-length runs ~90+ chars in wide blocks | Cap content width ~65–68ch for readability. |
| Low | `// LABEL` mono tags are good but on every section | Keep, don't add more. |

**Missing visual anchors:** no imagery of people, product, or work (only one abstract peak-as-network illustration). Add a founder photo and ideally a redacted deliverable/roadmap mockup for premium texture.

---

## 7. SEO & AI discoverability

**Already strong (don't break):** good titles, meta descriptions, OG/Twitter tags, single clean H1 with logical H2/H3 nesting, Organization + ProfessionalService schema with `@id`, WebSite + BreadcrumbList + OfferCatalog + FAQPage on Services. Above-average technical SEO.

**Gaps to fix:**
- **Per-page titles/descriptions:** verify About, Process, Insights, and Contact each have a unique, **server-rendered** `<title>` and meta description (About appeared to fall back to the raw URL on load). About should target "blockchain consultant / about" intent.
- **Person schema:** none (no founder listed). Once the founder is added, add `Person` schema linked to the Organization via `founder`/`employee`, and as `author` on Insights articles.
- **Homepage FAQPage schema:** only Services has it. Add a short visible FAQ + schema to the homepage.
- **BlogPosting schema:** verify each Insights article has `BlogPosting` with `headline`, `author`, `datePublished`, `dateModified`.
- **Organization enrichment:** add/confirm `serviceType`, `areaServed`, and `knowsAbout` (tokenization, RWA, stablecoin payments, crypto diligence, blockchain strategy).
- **`og:image`:** confirm `northwestonchain.com/og/*.png` resolves on the production domain (site is currently on a Netlify subdomain — if the real domain isn't live, OG previews break).

**Recommended homepage tags:**
- Title (≤60): `Blockchain Strategy & PoC Consulting | Northwest Onchain`
- Meta description (~155): "Independent blockchain consulting for banks, investors, and operators. Northwest Onchain finds where onchain creates value and delivers a working proof of concept. Start with a $1,500 Opportunity Audit."
- Keep H1 "The bridge from boardroom to blockchain." — but ensure the **first `<p>` contains the literal phrase** "blockchain strategy and delivery consultancy" for AI extraction.

**Recommended homepage H2 structure:** What Northwest Onchain does · Who we help · How we work with you (the four services) · Why finance teams choose an independent advisor · Our process: survey, chart, assemble, summit · Frequently asked questions · Start with an Opportunity Audit.

**Homepage FAQ questions (great for AI answer-extraction & snippets):**
- What does a blockchain consulting firm actually do?
- How much does a blockchain proof of concept cost?
- What's the difference between a blockchain strategy firm and a development agency?
- Should my company build on a blockchain at all?
- What is real-world asset (RWA) tokenization, and is it worth it?
- How do I run due diligence on a crypto or tokenization deal?
- How long does an enterprise blockchain PoC take?
- Do you recommend a specific blockchain or token? (answer: vendor-neutral)

**Target keywords (weave naturally):** blockchain consulting, blockchain strategy consultant, enterprise blockchain proof of concept, RWA tokenization consulting, stablecoin payments consulting, crypto due diligence for investors, fractional blockchain advisor, blockchain feasibility assessment, tokenization strategy, blockchain proof of concept cost.

**AI-summarizability:** AI assistants quote the first clear declarative sentence about an entity. Put one clean, factual, quotable sentence high on the homepage and in the About first paragraph: *"Northwest Onchain is a Pacific Northwest blockchain strategy and delivery consultancy that helps financial institutions, investors, and founders evaluate and build onchain projects."*

---

## 8. Conversion

| Element | Assessment | Fix |
|---|---|---|
| CTA clarity | "Book the Meet" is ambiguous — visitors don't know what "the Meet" is, costs, or commits to | Primary: **Get the $1,500 Opportunity Audit** (subtext: *Flat fee. 3–5 days. Credited toward whatever comes next.*). Secondary: **Book a free 30-min call.** Keep "the Meet" only as flavor inside the Contact page. |
| CTA consistency | Three different first asks (Sprint / Audit / "the Meet") | Standardize on the $1,500 Audit sitewide. |
| Trust before ask | Site asks for a call before showing any proof | Insert a proof band before every major CTA. |
| Offer concreteness | **Strong** — productized prices are a real asset most firms hide | Keep and surface "$1,500, 3–5 days" higher on the homepage. |
| "What happens next" | **Excellent** — Contact's 3-step "We meet → We scope → You get the path" | Promote a condensed version onto the homepage near the final CTA. |
| Credibility at point of conversion | None | Add a testimonial or "trusted by" row directly above the contact form. |

---

## 9. Trust & credibility — the highest-leverage work

The site currently proves nothing. Until a real name, face, and at least one concrete proof point appear, no copy polish will make it feel trustworthy to an enterprise buyer.

**Add, in priority order:**
1. **Founder bio + photo (CRITICAL)** — a named human with a credible background ("X years at [protocol/bank], shipped [thing]"), headshot, and LinkedIn. For judgment-based advisory, the buyer is buying a person. Anonymity reads as very early-stage or evasive.
2. **Track record** — concrete prior experience, even pre-NWO ("Previously built/advised on [X]").
3. **Case studies (or anonymized mini-cases)** — one is enough: "A regional bank asked us to evaluate stablecoin settlement. We delivered a costed PoC in 3 weeks; projected [X]% faster settlement." Anonymize if needed, but keep the specifics.
4. **Client logos / "trusted by"** — or "Networks & partners" / advisor logos if no client logos yet.
5. **Testimonials** — one or two real quotes with name + title outweigh paragraphs of self-description.
6. **Quantified results** — any number: PoCs delivered, days-to-delivery, $ modeled/saved, network size.

**Already strong, keep:** the Process page + "what happens next" (genuine trust assets), and the 3 Insights articles (add author bylines → ties to founder credibility + Person schema).

> **Scope note:** if real clients/results/founder details exist but were kept private, these become "surface what you already have" rather than "create from scratch." Either way, this is the highest-leverage work on the site.

---

## 10. Implementation brief for Claude Code

> Astro/Netlify, dark theme, mono-label section system. **Apply the Beacon brand re-skin first/with this pass.** Extend existing schema; don't delete it. Map names below to actual files.

### A. Global / cross-site
1. **Deduplicate** these phrases to ≤2 total occurrences sitewide: "vendor-neutral and chain-agnostic," "network, not headcount," "a fraction of big-firm cost," "including when the answer is don't," "Onchain, on purpose." Remove the rest.
2. **Replace slang** everywhere (search the codebase): "degens" → "crypto specialists"; "move-fast-and-rug culture" → "the hype cycle"; "one throat to choke" → "a single point of accountability."
3. **CTA labels:** primary → `Get the $1,500 Opportunity Audit`; secondary → `Book a free 30-min call`. Keep "the Meet" only as Contact-page body flavor.

### B. Homepage (`/`)
4. Keep H1 "The bridge from boardroom to blockchain." Replace the subhead with the plain definition in Section 5 (max ~2 visual lines on desktop). Ensure the first `<p>` contains "blockchain strategy and delivery consultancy."
5. Remove the `// In short` box from its early position (redundant). Optionally re-add one plain factual sentence lower for AI extraction.
6. Reduce "Why Northwest Onchain" from 6 → **4** (Both sides fluent / Network not headcount / Metrics-first / Vendor-neutral); 2×2 icon-card grid; fold PNW + Lean into the copy.
7. Change the services heading to **"Four ways to work together"** and ensure all four tiers (Audit, Sprint, Delivery, Advisor) appear.
8. **Reorder sections:** Hero → Problem (+audience cards) → What we do (move up) → Proof band (new) → Why (4) → Process (4 titles, link out) → Founder teaser (new) → Final CTA.
9. Add a condensed "What happens next" 3-step above the final CTA.

### C. Services (`/services`)
10. Replace H1 with "Four ways to work with us — each one de-risks the next."
11. **Delete** the `// WHAT IT COSTS` paragraph; replace with: "Start small. Each fee credits toward the next step if you continue."
12. Equalize the four pricing-card heights; increase gutter spacing.

### D. About (`/about`)
13. Add a **Founder section** (photo, name, role, 3–4 sentence bio with specific credentials). Scaffold the component now with placeholder props; client supplies content.
14. Replace "Years in crypto. A real network." with templated slots for specific numbers.
15. Add a unique `<title>` + meta description (was defaulting to URL).

### E. Visual / CSS (Beacon palette)
16. **Fix the dark→light→dark flash:** enforce a single dark base on homepage `<section>`s; allowed separation = subtle elevation only (Ink `#10221C` → lifted `#13302A`), or a *deliberately designed* full Mist band — never an accidental white flash.
17. Cap supporting paragraphs ~2 lines / ~65ch; convert overflow to short bullets.
18. Reduce hero vertical padding ~25%.
19. Verify the Process page secondary button shows visible label text; standardize to one filled primary + one ghost secondary.

### F. SEO / schema
20. Unique server-rendered `<title>` + meta description on **every** route (audit About, Process, Insights, Contact). Homepage title/description per Section 7.
21. Add `FAQPage` JSON-LD + a visible FAQ section to the homepage (questions in Section 7). Keep the Services FAQ.
22. When founder content lands: add `Person` schema linked via `founder`/`employee`; add `author` to Insights articles; verify `BlogPosting` on each article.
23. Enrich Organization schema with `serviceType`, `areaServed`, `knowsAbout`.
24. Confirm `og:image` URLs resolve on the production domain; fix if the domain isn't live.

### G. Conversion
25. Make the $1,500 Audit the primary hero CTA, with subtext "Flat fee. 3–5 days. Credited toward whatever comes next."
26. Add a "trusted by"/testimonial slot directly above the Contact form.

### H. New components to build (scaffold with placeholder props now)
- `<ProofBand />` — `logos[]`, `stats[]`, `testimonial{quote,name,title,company}`; render whichever are provided. Place before the final CTA on Home, Services, Contact.
- `<FounderCard />` — photo, name, role, bio, LinkedIn — on About, with a teaser variant on Home.
- `<HomeFAQ />` — visible FAQ + `FAQPage` schema.
- `<WhatHappensNext />` — reuse the Contact 3-step on the homepage final CTA.

---

## 11. Content the client still owes (blocks P1)

Claude Code should scaffold these with obvious `TODO(owner):` placeholders so the build ships, but they must be filled to actually close the trust gap:
- Founder: name, headshot, 3–4 sentence bio, credentials, LinkedIn URL.
- At least one proof point: a testimonial (name + title), or an anonymized case study with a real number, or a "trusted by / networks" list.
- Any quantified results: PoCs delivered, days-to-delivery, $ modeled, network size.

---

*Bones are strong. Sharpen the voice, put a real face and a real outcome on the page, and this goes from "interesting boutique with a vibe" to "a firm I'd wire money to."*
