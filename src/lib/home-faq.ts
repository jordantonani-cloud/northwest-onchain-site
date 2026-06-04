/**
 * Homepage FAQ — final copy (homepage-and-founder-copy.md §3), verbatim.
 * Answer-first for AI extraction. The same array renders the visible <HomeFAQ>
 * and the FAQPage JSON-LD, so on-page text and schema always match.
 */
import type { FaqItem } from '../components/Faq.astro';

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'What does a blockchain consulting firm actually do?',
    answer:
      "A blockchain consulting firm helps an organization decide whether and how to use blockchain — then makes it real. Northwest Onchain diagnoses where onchain technology creates measurable value (and where it doesn't), defines the success metrics and cost, assembles the right engineering team, and delivers a working proof of concept. Because we bridge traditional finance and onchain technology, the recommendation holds up to both a CFO and a core developer.",
  },
  {
    question: 'How much does a blockchain proof of concept cost?',
    answer:
      'Most enterprise blockchain proofs of concept cost between $15,000 and $75,000 to build, depending on scope. Northwest Onchain starts much smaller: a $1,500 Opportunity Audit (3–5 days) tells you whether there is a real opportunity before you commit, and a $4,000–$7,500 Diagnostic Sprint produces a costed roadmap. You only fund a full build once the metrics and budget are agreed.',
  },
  {
    question: "What's the difference between a blockchain strategy firm and a development agency?",
    answer:
      'A development agency is paid to build, so the answer is almost always "yes, let\'s build." A strategy firm is paid for judgment — including the judgment to say "don\'t build this." Northwest Onchain is vendor-neutral: we don\'t sell a chain, a token, or our own product, so the recommendation is based on your business case, not our backlog.',
  },
  {
    question: 'Should my company build on a blockchain at all?',
    answer:
      'Often the honest answer is no, and a good advisor will tell you that. Blockchain earns its place in specific situations: moving value between parties without a trusted intermediary, settling in minutes instead of days, tokenizing real-world assets, or proving provenance. If a database solves your problem better, we will say so — the $1,500 Opportunity Audit exists to answer this question cheaply.',
  },
  {
    question: 'What is real-world asset (RWA) tokenization, and is it worth it?',
    answer:
      'RWA tokenization means representing a real asset — a fund, a bond, real estate, a commodity — as a token on a blockchain, so it can be transferred, settled, and fractionalized more efficiently. It is the fastest-growing institutional use of blockchain, but it is only worth it when the efficiency or liquidity gain outweighs the legal and compliance cost. We model that trade-off before you commit a dollar to building.',
  },
  {
    question: 'How do I run due diligence on a crypto or tokenization deal?',
    answer:
      'Crypto due diligence spans both the technology and the financials: smart-contract and security risk, the token\'s economic design, the team, regulatory exposure, and the actual business model. Northwest Onchain runs diligence from both sides — we read the contract and the cap table — for VCs and family offices evaluating onchain investments.',
  },
  {
    question: 'How long does an enterprise blockchain PoC take?',
    answer:
      'Faster than most expect. A Diagnostic Sprint takes one to two weeks to produce a costed roadmap, and most proofs of concept are scoped to deliver in weeks rather than quarters — because we run lean and assemble a team matched to the specific problem instead of staffing a standing bench.',
  },
  {
    question: 'Do you recommend a specific blockchain or token?',
    answer:
      "No. Northwest Onchain is vendor-neutral and chain-agnostic. We don't resell a platform or hold a token position that would bias the advice. We recommend whatever fits your constraints — or no blockchain at all, if that is the honest answer.",
  },
];
