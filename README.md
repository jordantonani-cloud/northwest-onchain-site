# Northwest Onchain — website

Marketing site for **Northwest Onchain**, a boutique blockchain strategy & execution consultancy that bridges traditional finance and onchain technology. _Onchain, on purpose._

Built with **Astro** (static output), **Tailwind CSS**, and **MDX** content collections — engineered for traditional SEO **and** AI answer-engine optimization (GEO/AEO), with a strict performance and accessibility budget.

## Lighthouse (desktop, production build)

| Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| Home | 100 | 100 | 100 | 100 | 0.4s | 0 |
| Services | 100 | 100 | 100 | 100 | 0.4s | 0 |
| Article | 100 | 100 | 100 | 100 | 0.4s | 0 |

Re-run any time with `pnpm lhci` (config in `lighthouserc.json`).

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:4321
```

## Scripts

| Script             | What it does                                                |
| ------------------ | ----------------------------------------------------------- |
| `pnpm dev`         | Local dev server                                            |
| `pnpm build`       | `astro check` (types) → generate assets → static build to `dist/` |
| `pnpm preview`     | Serve the production build locally                          |
| `pnpm check`       | TypeScript / Astro diagnostics                              |
| `pnpm lint`        | ESLint (JS/TS/Astro)                                        |
| `pnpm format`      | Prettier write                                              |
| `pnpm gen:assets`  | Regenerate favicons + per-page OG images (also runs in `prebuild`) |
| `pnpm lhci`        | Lighthouse CI against the production build                  |

## Configuration — one file

Everything an owner might change lives in [`src/consts.ts`](src/consts.ts). Search the repo for `TODO(owner)` to find every placeholder. The full list:

| What | Where | Notes |
| --- | --- | --- |
| Final domain | `SITE.url` + `astro.config.mjs` | If not `northwestonchain.com` |
| Booking link | `BOOKING.calLink` / `BOOKING.url` | Real Cal.com (or Calendly) URL |
| Founder bio / credentials / headshot | `FOUNDER` | Fill, add headshot to `/public`, set `published: true` |
| Social profiles | `SOCIAL` | Drives footer + schema `sameAs` |
| Analytics | `ANALYTICS` | Set `enabled: true` + domain (cookieless Plausible/Umami) |
| Search Console / Bing tokens | `VERIFICATION` | Paste verification `content` values |

No code changes are needed beyond `consts.ts` for any of these.

## Project structure

```
├─ astro.config.mjs        site, integrations (tailwind, mdx, sitemap, icon)
├─ tailwind.config.mjs     brand tokens (colors, fonts, radius, max width)
├─ netlify.toml            build, security headers + CSP, caching, redirects
├─ lighthouserc.json       Lighthouse CI budgets
├─ scripts/gen-assets.mjs  favicon + per-page OG image generator (Sharp)
├─ src/
│  ├─ consts.ts            single config source (domain, booking, socials, …)
│  ├─ content.config.ts    Insights collection schema (zod)
│  ├─ content/insights/    *.mdx articles
│  ├─ layouts/BaseLayout.astro
│  ├─ components/          Seo, Header, Footer, Logo, Button, Card, PriceCard,
│  │                       AuditBanner, Faq, HomeFAQ, FounderCard, ProofBand,
│  │                       WhatHappensNext, TopoLines, PeakMark, NodeGlow,
│  │                       KeyTakeaways, Prose, BookingEmbed, ContactForm, …
│  ├─ lib/                 jsonld.ts (schema builders), services.ts, insights.ts,
│  │                       home-faq.ts
│  ├─ pages/               index, services, process, about, contact, privacy,
│  │                       404, insights/[...slug], rss.xml, llms(.full).txt
│  └─ styles/global.css    design system (brand tokens + ported component CSS)
└─ public/                 robots.txt, favicons, og/, booking-cal.js, manifest
```

## Authoring an Insights article

1. Create `src/content/insights/<slug>.mdx`. The filename becomes the URL: `/insights/<slug>`.
2. Frontmatter (validated by zod in [`src/content.config.ts`](src/content.config.ts)):

```mdx
---
title: 'Your title'                      # ≤ 75 chars
description: 'Meta description.'          # 50–165 chars (used for <meta> + cards)
pubDate: 2026-06-01
updatedDate: 2026-06-15                  # optional → surfaces "Updated" + dateModified
cluster: 'enterprise-strategy'           # enterprise-strategy | tokenization-rwa | crypto-tradfi
tags: ['keyword', 'keyword']
draft: false                             # true → no page, hidden from index/RSS
keyTakeaway: 'A 2–3 sentence answer-first TL;DR (lifted by answer engines).'
keyPoints:                               # optional scannable bullets
  - 'Point one.'
faqs:                                    # optional → renders accordion + FAQPage JSON-LD
  - question: 'A question?'
    answer: 'A concise, self-contained answer.'
---

## Use question-shaped H2s

Body in Markdown/MDX. Tables and lists are styled and are favored by answer engines.
Link internally to [Services](/services) and [book the Meet](/contact).
```

3. The article automatically gets: `BlogPosting` + `FAQPage` + `BreadcrumbList` JSON-LD, a branded OG image (`pnpm gen:assets`), author byline → the About `Person`, prev/next, and a conversion CTA band.

**Topic clusters** (pillar → supporting) seed internal linking: _Enterprise blockchain strategy_, _Tokenization & RWA_, _Crypto for TradFi & investors_. Six draft stubs already outline the supporting articles.

## Design system & accessibility

The visual identity follows **`BRAND-BOOK.md` v1.0** (the source of truth). Brand tokens are first-class Tailwind utilities ([`tailwind.config.mjs`](tailwind.config.mjs)) mirrored as CSS custom properties in [`src/styles/global.css`](src/styles/global.css): ink `#10221C`, evergreen `#12463A`, moss `#1C5E4A`, signal `#2FBF98` / signal-bright `#34E0B5`, mist `#EEF1ED`, fog `#AEC2BA`, graphite `#33454B`, copper `#C58A5B`. The "Beacon" logo (peak + signal rings) lives in `PeakMark` / `Logo`; the "Topographic Mesh" motif in `TopoLines` and `NodeGlow`. Logo lockups are inlined (not the `public/brand/*.svg` files directly) so the wordmark uses the self-hosted Space Grotesk instead of the SVGs' Google-Fonts `@import` — crisper and CSP-safe.

WCAG 2.2 AA verified (Lighthouse a11y 100): skip link, visible focus, keyboard-operable nav/FAQ/forms, semantic landmarks, `prefers-reduced-motion` disables motion, AA contrast throughout. Per Brand Book §3.3, Signal mint is reserved for UI/large/dark; small accent text on the light `mist` background uses the AA-safe **`signal-dim #0E7458` (5.0:1)** since `signal #2FBF98` is only 3.5:1 there.

## SEO / AEO

- Per-page `<title>`, meta description, canonical, Open Graph + Twitter, and a **branded 1200×630 OG image** generated per route.
- A coherent JSON-LD entity graph (`@graph` with stable `@id`s): `Organization`/`ProfessionalService`, `WebSite`, `BreadcrumbList` site-wide; `OfferCatalog`, `FAQPage`, `Person`, `BlogPosting`, `ContactPage` where relevant. Validates clean.
- `sitemap-index.xml`, `rss.xml`, `robots.txt` (AI crawlers — GPTBot, ClaudeBot, PerplexityBot, etc. — explicitly allowed; flip to disallow in `public/robots.txt`).
- **`/llms.txt`** and **`/llms-full.txt`** — concise LLM-readable site maps, generated from the same data as the pages.
- Answer-first TL;DR (`KeyTakeaways`) on every page + article; question-shaped headings; cited pricing.

## Lead capture

- **Cal.com** inline embed on `/contact`, lazy-loaded (click or scroll-near — never blocks LCP). Loader is `public/booking-cal.js`. Set `BOOKING` in `consts.ts`.
- **Netlify Forms** fallback (`data-netlify` + hidden `form-name` + honeypot). Detected automatically at deploy. _Formspree swap for non-Netlify hosts is documented in [`ContactForm.astro`](src/components/ContactForm.astro)._

## Deploy

**Netlify (primary).** Connect the repo — build command `pnpm build`, publish dir `dist`. [`netlify.toml`](netlify.toml) sets the build, security headers (incl. CSP), asset caching, and `.html`→clean-URL redirects. Or:

```bash
pnpm build
netlify deploy --prod
```

**Vercel.** Use the "Astro" static preset; recreate the headers/redirects from `netlify.toml` in `vercel.json`. (Netlify Forms is Netlify-only — swap to Formspree as noted above.)

---

Brand follows **`BRAND-BOOK.md` v1.0** (palette, Beacon logo, voice, Section 12 hard rules); copy and pricing follow the approved brief. Generated by milestone; see the git history for the build sequence.
