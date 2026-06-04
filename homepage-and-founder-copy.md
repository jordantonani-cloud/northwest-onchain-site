# Northwest Onchain — Final Copy: Hero, Founder, FAQ

**For:** Claude Code (drop into the relevant components) + the client (fill the founder slots)
**Voice:** per `BRAND-BOOK.md` §6 — plain, outcomes-first, willing to say "don't," no slang, no hype words, no emojis.

---

## 1. Homepage hero (final — ready to ship)

**Eyebrow (mono label):**
`// Blockchain strategy & delivery`

**H1 (keep — distinctive and crawlable):**
The bridge from boardroom to blockchain.

**Subhead (plain-English definition — this is the AI-extraction sentence; keep it the first `<p>` after the H1, max ~2 lines on desktop):**
Northwest Onchain is a blockchain strategy and delivery consultancy. We help banks, investors, and operators find where onchain creates real value — then deliver a working proof of concept against defined metrics, cost, and ROI.

**Primary CTA (button):**
Get the $1,500 Opportunity Audit →
*Subtext under the button:* Flat fee. 3–5 days. Credited toward whatever comes next.

**Secondary CTA (text link / ghost button):**
See how we work

> Notes for Claude Code:
> - This subhead replaces the old "Most crypto consultants can't read a P&L…" paragraph. It contains the literal phrase "blockchain strategy and delivery consultancy" for AI/SEO extraction — do not paraphrase it away.
> - Primary CTA links to `/contact` (or the Audit flow). The deeper-funnel "Book a free 30-minute call" CTA belongs in the final homepage CTA section and on Contact — not the hero.

---

## 2. Founder section (FINISHED — built from the founder's résumé)

> Founder: **Jordan Tonani**, Seattle, WA · linkedin.com/in/jordantonani. Everything below is drawn from his real track record. Ship as-is. Only a professional headshot is still needed.

### 2a. One-line credibility (hero teaser / meta use)
Morgan Stanley → Index Coop → Lotus Labs. Eight years across traditional finance and onchain — both sides, fluent.

### 2b. Homepage teaser (short — `<FounderCard>` teaser variant)
Northwest Onchain is led by **Jordan Tonani**, a Seattle-based operator with 8+ years across crypto, DeFi, and regulated finance. He's worked both sides of the table — from managing $150M in client assets at Morgan Stanley to leading partnerships at Index Coop, where onchain structured-product TVL grew 135% in a single year. The financial models a CFO trusts, and the onchain network that actually ships.
*[About → ] · [LinkedIn ↗]*

### 2c. About page (full — `<FounderCard>` full variant)
Northwest Onchain was founded by **Jordan Tonani**, who has spent more than eight years working both sides of finance — traditional and onchain.

He began at **Morgan Stanley**, where as Seattle's lead executive-compensation strategist he managed $150M in high-net-worth assets and guided pre-IPO executives through equity and 10b5-1 decisions — translating financial complexity into clear calls. He then moved fully onchain, leading partnerships and institutions at **Index Coop**, at the time the largest provider of onchain structured products, where he drove **135% year-over-year TVL growth** and shipped integrations with Coinbase, Gemini, MetaMask, and 21Shares while serving on the executive committee.

Today he is founding business-development lead at **Lotus Labs**, building an onchain credit platform anchored by firms like FalconX, Bitwise, and WisdomTree, with $30M+ in capital committed before launch. That path — wealth management to DeFi partnerships to onchain credit — is the entire premise of Northwest Onchain: most crypto specialists can't defend a business case to a CFO, and most finance professionals have never shipped onchain. Jordan does both. He brings a deep network of protocol founders, asset issuers, exchanges, market makers, and institutional allocators to every engagement — and a bias toward telling clients the truth, including when the answer is "don't build this."

*[Headshot — TODO(owner): supply] · [LinkedIn ↗](https://linkedin.com/in/jordantonani)*

### 2d. Person schema (for Claude Code — values ready)
```
@type: Person
name: "Jordan Tonani"
jobTitle: "Founder & Principal"
worksFor: { @id: ".../#org" }     // Northwest Onchain
homeLocation / address: "Seattle, WA"
sameAs: ["https://www.linkedin.com/in/jordantonani"]
knowsAbout: ["DeFi partnerships","onchain structured products","tokenization","RWA",
  "incentive & tokenomics design","financial modeling","crypto go-to-market","blockchain strategy"]
description: <the 2c bio>
```
Link from the Organization node via `founder`. Reuse this `Person` `@id` as `author` on Insights articles.

---

## 2.5 Proof & track record (for `<ProofBand>` — honest framing matters)

> These are Jordan's career results and partners, not Northwest Onchain client engagements. **Frame them as the founder's track record**, never as "our clients." Use a heading like *"The track record behind the firm"* or *"Built and partnered with"* — not *"Trusted by."* This keeps it truthful and still lands the credibility.

### Stat strip (`stats[]`)
- **8+ years** across crypto, DeFi & regulated finance
- **$150M** in client assets managed at Morgan Stanley
- **135%** YoY onchain TVL growth led at Index Coop (2024)
- **$30M+** committed pre-launch at Lotus Labs
- **18 → 50+ months** runway extended via a strategic pivot (Index Coop)

### "Built & partnered with" logo row (`logos[]`)
Framed as the founder's experience and integrations — Morgan Stanley · Index Coop · Lotus Labs · Coinbase · MetaMask · Gemini · 21Shares · FalconX · Bitwise · WisdomTree · Arbitrum.
*(Use a qualifier label above the row: "Partnerships, integrations, and roles across Jordan's career include —")*

### Media & speaking (`press[]` — "As featured in")
CoinDesk · Nasdaq · Decrypt · Blockworks (Permissionless 2023) · The Edge Podcast (2025).

### Selected work (optional — honest mini-cases attributed to his roles, not NWO)
- **Onchain structured products at scale (Index Coop).** Led partnerships driving 135% YoY TVL growth; shipped exchange and wallet integrations (Coinbase, Gemini, MetaMask, 21Shares); won a $165K Arbitrum grant and designed the milestone-based incentive program around it.
- **Standing up an onchain credit market (Lotus Labs).** Built a design-partner program from zero — trading firms and market infrastructure including FalconX, Bitwise, and WisdomTree — with $30M+ LP and $20M+ borrower demand committed before launch.
- **Translating finance for executives (Morgan Stanley).** Managed $150M in HNW assets as Seattle's lead exec-comp strategist; advised pre-IPO C-suites on equity and 10b5-1 strategy.

---

## 3. Homepage FAQ (final — ready to ship; answer-first for AI extraction)

> Render as a visible FAQ section (`<HomeFAQ>`) AND mirror verbatim in `FAQPage` JSON-LD. Each answer leads with the direct answer, then supports — this is what AI engines and featured snippets lift. Keep answers tight.

**Q: What does a blockchain consulting firm actually do?**
A blockchain consulting firm helps an organization decide whether and how to use blockchain — then makes it real. Northwest Onchain diagnoses where onchain technology creates measurable value (and where it doesn't), defines the success metrics and cost, assembles the right engineering team, and delivers a working proof of concept. Because we bridge traditional finance and onchain technology, the recommendation holds up to both a CFO and a core developer.

**Q: How much does a blockchain proof of concept cost?**
Most enterprise blockchain proofs of concept cost between $15,000 and $75,000 to build, depending on scope. Northwest Onchain starts much smaller: a $1,500 Opportunity Audit (3–5 days) tells you whether there's a real opportunity before you commit, and a $4,000–$7,500 Diagnostic Sprint produces a costed roadmap. You only fund a full build once the metrics and budget are agreed.

**Q: What's the difference between a blockchain strategy firm and a development agency?**
A development agency is paid to build, so the answer is almost always "yes, let's build." A strategy firm is paid for judgment — including the judgment to say "don't build this." Northwest Onchain is vendor-neutral: we don't sell a chain, a token, or our own product, so the recommendation is based on your business case, not our backlog.

**Q: Should my company build on a blockchain at all?**
Often the honest answer is no, and a good advisor will tell you that. Blockchain earns its place in specific situations: moving value between parties without a trusted intermediary, settling in minutes instead of days, tokenizing real-world assets, or proving provenance. If a database solves your problem better, we'll say so — the $1,500 Opportunity Audit exists to answer this question cheaply.

**Q: What is real-world asset (RWA) tokenization, and is it worth it?**
RWA tokenization means representing a real asset — a fund, a bond, real estate, a commodity — as a token on a blockchain, so it can be transferred, settled, and fractionalized more efficiently. It's the fastest-growing institutional use of blockchain, but it's only worth it when the efficiency or liquidity gain outweighs the legal and compliance cost. We model that trade-off before you commit a dollar to building.

**Q: How do I run due diligence on a crypto or tokenization deal?**
Crypto due diligence spans both the technology and the financials: smart-contract and security risk, the token's economic design, the team, regulatory exposure, and the actual business model. Northwest Onchain runs diligence from both sides — we read the contract and the cap table — for VCs and family offices evaluating onchain investments.

**Q: How long does an enterprise blockchain PoC take?**
Faster than most expect. A Diagnostic Sprint takes one to two weeks to produce a costed roadmap, and most proofs of concept are scoped to deliver in weeks rather than quarters — because we run lean and assemble a team matched to the specific problem instead of staffing a standing bench.

**Q: Do you recommend a specific blockchain or token?**
No. Northwest Onchain is vendor-neutral and chain-agnostic. We don't resell a platform or hold a token position that would bias the advice. We recommend whatever fits your constraints — or no blockchain at all, if that's the honest answer.

> Optional 8th question if you want to surface the audience segments:
> **Q: Who does Northwest Onchain work with?**
> Three groups: enterprises and financial institutions exploring tokenization, payments, or settlement; investors (VCs and family offices) needing technical and financial diligence; and founders who want a credible onchain angle without hiring a full Web3 team.

---

## 4. Quick handoff note for Claude Code
- Hero subhead and all FAQ answers are final — use verbatim.
- Founder copy ships with `TODO(owner):` placeholders until the client fills Section 2c; scaffold `<FounderCard>` to accept those props.
- Mirror the FAQ in `FAQPage` JSON-LD (the visible text and schema must match).
- These reinforce, not contradict, `BRAND-BOOK.md` and `WEBSITE-AUDIT.md`.
