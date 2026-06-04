# Northwest Onchain — website

Marketing site for **Northwest Onchain**, a boutique blockchain strategy & execution consultancy that bridges traditional finance and onchain technology. _Onchain, on purpose._

Built with **Astro** (static output), **Tailwind CSS**, and **MDX** content collections, optimized for traditional SEO **and** AI answer-engine citation (GEO/AEO).

> Status: build in progress (milestone-based — see below). The README is finalized in Milestone 8.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Scripts

| Script              | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `pnpm dev`          | Local dev server                                      |
| `pnpm build`        | Type-check (`astro check`) then static build to `dist/` |
| `pnpm preview`      | Serve the production build locally                    |
| `pnpm check`        | TypeScript / Astro diagnostics                        |
| `pnpm lint`         | ESLint (JS/TS/Astro)                                  |
| `pnpm format`       | Prettier write                                        |
| `pnpm lhci`         | Lighthouse CI (perf/SEO/a11y budgets)                 |

## Configuration — one file

All swappable values live in [`src/consts.ts`](src/consts.ts): domain, contact email, booking URL, socials, analytics flag, nav, and schema @ids. Search the codebase for `TODO(owner)` to find every placeholder that needs a real value before launch:

- Final domain (if not `northwestonchain.com`)
- Real Cal.com / Calendly booking link (`BOOKING`)
- Founder bio, credentials, headshot for the About page + `Person` schema
- Social profile URLs for `sameAs` (`SOCIAL`)
- Analytics domain + `enabled: true` (`ANALYTICS`)
- Search Console / Bing verification tokens (`VERIFICATION`)

## Design system

Brand tokens are encoded as first-class Tailwind utilities in [`tailwind.config.mjs`](tailwind.config.mjs) and as CSS custom properties in [`src/styles/global.css`](src/styles/global.css) (kept in sync). The visual language ("Topographic Mesh" — PNW contour lines as a blockchain node-network) is ported from the approved prototype.

### Accessibility note

One intentional deviation from the prototype: the light-section accent color was darkened from `#1F8D72` (3.6:1 on `mist` — **fails** WCAG AA for small text) to **`#0E7458` (~5.1:1 — passes)**. See the comment in `tailwind.config.mjs`.

## Hosting

Targets **Netlify** (see [`netlify.toml`](netlify.toml) — build command, security headers, asset caching, `.html`→clean-URL redirects). A Vercel-compatible note is at the bottom of that file.

## Deploy

```bash
pnpm build      # outputs to dist/
```

Connect the repo to Netlify (build command `pnpm build`, publish dir `dist`) — or `netlify deploy --prod`.

---

_Authoring articles, full architecture, and the launch checklist are documented in Milestone 8._
