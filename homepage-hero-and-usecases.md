# Northwest Onchain — Hero, Use-Case Grid & "Why Now" (copy + Astro/Tailwind markup)

**For:** Claude Code · **Brand:** Beacon (see `BRAND-BOOK.md`) · **Pattern:** BCG X — left-anchored, full-bleed, one CTA per section · **Date:** June 4, 2026

> Tailwind token assumptions (from `BRAND-BOOK.md`, set in `tailwind.config.mjs`): colors `ink #10221C`, `evergreen #12463A`, `moss #1C5E4A`, `signal #2FBF98`, `mist #EEF1ED`, `fog #AEC2BA`, `graphite #33454B`, `copper #C58A5B`; fonts `font-display` (Space Grotesk), `font-mono` (JetBrains Mono), body Inter. If your token names differ, remap. These are drop-in components — adapt class names to your conventions.

---

## 0. Regulatory fact-check (verified June 4, 2026 — use these statuses, hedged)

| Bill | Status (as of June 2026) | Safe language to use |
|---|---|---|
| **GENIUS Act** (payment stablecoins) | **Signed into law July 18, 2025.** Senate 68–30 (Jun 17 '25), House (Jul 17 '25), signed Jul 18 '25. First federal stablecoin framework: 1:1 reserves, permitted issuers. Effective within 18 months of enactment or 120 days after final rules. | "Signed into law in 2025"; "now a federal framework"; note "rulemaking is ongoing." Do **not** imply it's fully in force yet. |
| **CLARITY Act** (digital-asset market structure, H.R.3633) | **Advancing — not enacted.** Passed the House; **cleared the Senate Banking Committee 15–9 on May 14, 2026.** Still needs reconciliation with the Senate Ag version, an ethics provision, and a 60-vote Senate floor vote. | "Advancing through the Senate"; "cleared the Senate Banking Committee"; "not yet law." Do **not** call it law or promise passage. |

Always pair with: *"Regulatory status as of June 2026. Directional, not legal advice."*

---

## 1. Hero — left-anchored, full-bleed (replaces the center-floating version)

**Copy (present-tense, outcome-led):**
- Eyebrow: `// Blockchain strategy & delivery`
- H1: **The bridge from boardroom to blockchain.**
- Subhead: *Stablecoin settlement, tokenized assets, onchain credit, and 24/7 markets aren't theory — they're in production today. We help banks, investors, and operators find where onchain creates real value, then deliver the proof.*
- Primary CTA: **Get the $1,500 Opportunity Audit →**  · micro-line: *Flat fee. 3–5 days. Credited toward whatever comes next.*
- Secondary: **See where blockchain wins today →** (anchors to `#use-cases`)

```astro
---
// src/components/Hero.astro
---
<section class="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-ink text-mist">
  <!-- full-bleed topographic backdrop (the brand "survey/summit" motif, not generic nodes) -->
  <svg aria-hidden="true" preserveAspectRatio="xMidYMid slice"
       class="absolute inset-0 h-full w-full" viewBox="0 0 1440 800">
    <g fill="none" stroke="#1C5E4A" stroke-width="1" opacity="0.35">
      <path d="M-40 560 C320 480 560 660 880 560 S1320 420 1500 520"/>
      <path d="M-40 620 C340 540 580 700 900 610 S1330 470 1500 575"/>
      <path d="M-40 500 C300 430 540 600 880 500 S1330 360 1500 460"/>
      <path d="M-40 440 C320 370 560 530 880 440 S1320 300 1500 405"/>
    </g>
    <path d="M-40 530 C300 455 545 625 880 525 S1325 388 1500 488"
          fill="none" stroke="#2FBF98" stroke-width="1.2" opacity="0.5"/>
  </svg>
  <!-- left-anchor legibility gradient -->
  <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30"></div>

  <div class="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
    <div class="max-w-2xl">
      <p class="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-signal">// Blockchain strategy &amp; delivery</p>
      <h1 class="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
        The bridge from boardroom to blockchain.
      </h1>
      <p class="mt-6 max-w-xl text-lg text-fog sm:text-xl">
        Stablecoin settlement, tokenized assets, onchain credit, and 24/7 markets aren't theory —
        they're in production today. We help banks, investors, and operators find where onchain
        creates real value, then deliver the proof.
      </p>
      <div class="mt-9 flex flex-wrap items-center gap-4">
        <a href="/contact"
           class="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-mono text-sm font-semibold text-ink transition hover:-translate-y-0.5">
          Get the $1,500 Opportunity Audit →
        </a>
        <a href="#use-cases"
           class="inline-flex items-center gap-2 rounded-full border border-fog/40 px-6 py-3.5 font-mono text-sm text-mist transition hover:border-signal hover:text-signal">
          See where blockchain wins today →
        </a>
      </div>
      <p class="mt-4 font-mono text-xs text-fog/80">Flat fee. 3–5 days. Credited toward whatever comes next.</p>
    </div>
  </div>
</section>
```

---

## 2. "Where blockchain wins — today" — 4-pillar use-case grid

> Place directly below the hero/problem, **before** the services pricing. Make it the most prominent block on the page. Honesty: these are industry patterns/outcomes, not NWO client wins. The `tag` lines are general adoption signals, not specific claims — keep any hard numbers out until verified.

```astro
---
// src/components/UseCases.astro
const useCases = [
  {
    n: "01",
    title: "Stablecoin settlement",
    outcome: "Take cost out of the value chain.",
    body: "Replace multi-day correspondent-banking cycles and FX spreads with stablecoin rails that settle in minutes, around the clock — stripping intermediary fees, pre-funding, and float out of payments, payroll, treasury, and supplier settlement.",
    mech: "Same-asset atomic settlement, no batch windows.",
    tag: "In production today",
  },
  {
    n: "02",
    title: "Tokenization",
    outcome: "Liquidity, fractionalization, distribution.",
    body: "Bring funds, credit, real estate, and commodities onchain to unlock 24/7 transferability, fractional ownership that widens the buyer base, programmable distribution, and near-instant secondary liquidity for traditionally illiquid assets.",
    mech: "Assets as programmable tokens with embedded compliance.",
    tag: "Fastest-growing institutional segment",
  },
  {
    n: "03",
    title: "Onchain vaults & credit",
    outcome: "New product lines, transparent reserves.",
    body: "Use onchain vaults and lending primitives to launch yield products, structured credit, and collateralized lending with transparent, real-time, auditable reserves — new revenue lines for issuers and new visibility for end users.",
    mech: "Composable vaults + transparent on-chain collateral.",
    tag: "Available now",
  },
  {
    n: "04",
    title: "Perps & 24/7 derivatives",
    outcome: "Markets that never close.",
    body: "Stand up or tap perpetuals and derivatives venues for round-the-clock hedging, leverage, and price exposure — markets that settle continuously without a central clearinghouse.",
    mech: "Onchain perpetual markets with continuous funding.",
    tag: "Trading 24/7 today",
  },
];
---
<section id="use-cases" class="bg-ink py-24 text-mist sm:py-32">
  <div class="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
    <p class="font-mono text-xs uppercase tracking-[0.22em] text-signal">// Where blockchain wins — today</p>
    <h2 class="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
      Concrete value, already in production.
    </h2>
    <p class="mt-4 max-w-2xl text-fog">
      Not theory or roadmap — four places blockchain is creating measurable value for finance today.
      We help you find which one fits your business, and prove it.
    </p>

    <div class="mt-14 grid gap-5 sm:grid-cols-2">
      {useCases.map((u) => (
        <article class="group rounded-2xl border border-fog/15 bg-evergreen/10 p-8 transition hover:border-signal/50">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs tracking-[0.2em] text-signal">{u.n}</span>
            <span class="rounded-full bg-signal/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-signal">{u.tag}</span>
          </div>
          <h3 class="mt-5 font-display text-xl font-semibold text-white">{u.title}</h3>
          <p class="mt-1 font-display text-lg text-signal">{u.outcome}</p>
          <p class="mt-4 text-sm leading-relaxed text-fog">{u.body}</p>
          <p class="mt-5 font-mono text-xs text-fog/70">→ {u.mech}</p>
        </article>
      ))}
    </div>

    <p class="mt-10 max-w-2xl text-fog">
      And the ones we'll talk you out of. Not every problem needs a chain — that's why the audit comes first.
    </p>
  </div>
</section>
```

---

## 3. "Why now" — regulatory window (hedged, fact-checked)

> Place after the use-case section (value → why the window is open). Kept dark for cohesion with the BCG-style all-dark page (avoids the dark→light→dark flash the audit flagged). Copper accents carry the "regulatory/heritage" warmth.

```astro
---
// src/components/WhyNow.astro
---
<section class="bg-ink py-24 text-mist sm:py-32">
  <div class="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
    <p class="font-mono text-xs uppercase tracking-[0.22em] text-copper">// Why now</p>
    <h2 class="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
      For years the blocker wasn't the technology. It was the rules.
    </h2>
    <p class="mt-5 max-w-2xl text-fog">
      That's changing fast. A federal stablecoin law is now on the books, and digital-asset
      market-structure rules are advancing through Congress. The institutions that build now will be
      the ones ready when the rules fully land — not scrambling to catch up after.
    </p>

    <div class="mt-12 grid gap-5 sm:grid-cols-2">
      <article class="rounded-2xl border border-copper/30 bg-copper/5 p-8">
        <div class="flex items-center gap-3">
          <span class="font-display text-lg font-semibold text-white">GENIUS Act</span>
          <span class="rounded-full bg-signal/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-signal">Signed into law · 2025</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-fog">
          The first federal framework for payment stablecoins — requiring one-to-one reserves and
          permitted issuers. It turns stablecoin settlement from a gray area into a sanctioned rail
          enterprises can build on. (Implementation and rulemaking are still rolling out.)
        </p>
      </article>

      <article class="rounded-2xl border border-copper/30 bg-copper/5 p-8">
        <div class="flex items-center gap-3">
          <span class="font-display text-lg font-semibold text-white">CLARITY Act</span>
          <span class="rounded-full bg-fog/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-fog">Advancing · not yet law</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-fog">
          Digital-asset market-structure legislation that would divide regulatory oversight and reduce
          the "is it a security?" risk that has stalled tokenization. It cleared the Senate Banking
          Committee in May 2026 and still needs a full Senate vote.
        </p>
      </article>
    </div>

    <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <a href="/contact"
         class="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-mono text-sm font-semibold text-ink transition hover:-translate-y-0.5">
        Get ahead of the curve — start with the Audit →
      </a>
      <p class="font-mono text-[0.7rem] text-fog/70">Regulatory status as of June 2026. Directional, not legal advice.</p>
    </div>
  </div>
</section>
```

---

## 4. Builder notes
- **Page order:** Hero → Problem (+ audience cards) → **Use cases (§2)** → **Why now (§3)** → Services/pricing → Proof band → Why NWO → Process → Founder → FAQ → Final CTA. Use cases and Why-now are the new high-prominence blocks.
- **Honesty guardrails (keep):** use cases are industry patterns/outcomes, not NWO client wins; no fabricated stats — the `tag` lines are general adoption signals; regulatory language is hedged with an as-of date + "not legal advice." Re-verify both bill statuses at publish time (legislation moves).
- **Services grid:** expand "Where we create value" to mirror these four pillars — add **Onchain credit & vaults** and **Derivatives & 24/7 markets** to the existing list.
- **Insights:** seed three supporting articles — "How stablecoins take cost out of the value chain," "Onchain credit & vaults: new product lines explained," "Why now: what GENIUS & CLARITY mean for builders."
- **Motion (optional):** count-up animation on the track-record stat row; horizontal scroll on any future case cards. Keep motion sparse; respect `prefers-reduced-motion`.

---

### Sources (regulatory fact-check)
- GENIUS Act signed into law: [White House fact sheet (Jul 2025)](https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-signs-genius-act-into-law/) · [Congress.gov S.1582](https://www.congress.gov/bill/119th-congress/senate-bill/1582/text) · [Wikipedia: GENIUS Act](https://en.wikipedia.org/wiki/GENIUS_Act)
- CLARITY Act status: [CoinDesk — clears Senate committee (May 14, 2026)](https://www.coindesk.com/policy/2026/05/14/clarity-act-clears-u-s-senate-committee-on-its-way-to-a-final-test-in-congress) · [CNBC — clears Senate hurdle (May 2026)](https://www.cnbc.com/2026/05/14/clarity-act-congress-crypto-senate.html) · [Congress.gov H.R.3633](https://www.congress.gov/bill/119th-congress/house-bill/3633/text)
