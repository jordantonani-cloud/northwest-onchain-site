/**
 * Homepage FAQ — answer-first for AI extraction. The same array renders the
 * visible <HomeFAQ> and the FAQPage JSON-LD, so on-page text and schema always
 * match. Voice rules: STRATEGIC-REVISION-PROMPT directive 1 (short, no em
 * dashes) and 3 (outcomes, not finance framing).
 */
import type { FaqItem } from '../components/Faq.astro';

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'What does a blockchain consulting firm actually do?',
    answer:
      "A blockchain consulting firm helps an organization decide whether and how to use blockchain, then makes it real. Northwest Onchain finds where onchain creates measurable value (and where it doesn't), defines the metrics and cost, assembles the right team, and delivers a working pilot. The recommendation holds up on both the business side and the engineering side.",
  },
  {
    question: 'How much does a blockchain proof of concept cost?',
    answer:
      'Most enterprise pilots cost between $15,000 and $75,000 to build, depending on scope. We start with a free conversation, then a short diagnostic before any build, so you only fund a full project once the metrics and budget are agreed.',
  },
  {
    question: "What's the difference between a blockchain strategy firm and a development agency?",
    answer:
      'A development agency is paid to build, so the answer is almost always "yes, let\'s build." A strategy firm is paid for judgment, including the judgment to say "don\'t build this." Northwest Onchain is vendor-neutral: we don\'t sell a chain, a token, or our own product, so the recommendation follows your business case, not our backlog.',
  },
  {
    question: 'Should my company build on a blockchain at all?',
    answer:
      'Often the honest answer is no, and a good advisor will tell you that. Blockchain earns its place in specific situations: settling in minutes instead of days, moving value without intermediaries, opening assets to more buyers, proving provenance. If a database solves your problem better, we will say so. The first conversation is free and exists to answer exactly this.',
  },
  {
    question: 'What is real-world asset (RWA) tokenization, and is it worth it?',
    answer:
      'RWA tokenization means representing a real asset (a fund, a bond, real estate) as a token on a blockchain, so it can be transferred, settled, and divided more efficiently. It is the fastest-growing institutional use of blockchain, and it is worth it when the efficiency or distribution gain outweighs the compliance cost. We size that trade-off before you commit a dollar.',
  },
  {
    question: 'How do I run due diligence on a crypto or tokenization deal?',
    answer:
      "Crypto due diligence spans the technology and the financials: smart-contract risk, the token's economic design, the team, regulatory exposure, and the business model. Northwest Onchain runs diligence from both sides. We read the contract and the cap table.",
  },
  {
    question: 'How long does an enterprise blockchain PoC take?',
    answer:
      'Faster than most expect. A diagnostic takes one to two weeks, and most pilots deliver in weeks rather than quarters, because the team is matched to the problem instead of staffed from a bench.',
  },
  {
    question: 'Do you recommend a specific blockchain or token?',
    answer:
      "No. Northwest Onchain is vendor-neutral and chain-agnostic. We don't resell a platform or hold a position that would bias the advice. We recommend whatever fits your constraints, or no blockchain at all if that is the honest answer.",
  },
];
