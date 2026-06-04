/**
 * The four-tier service model — single source of truth.
 * Consumed by the home services preview, the Services page (Audit banner +
 * three cards), the OfferCatalog JSON-LD, and llms.txt. Copy is ported verbatim
 * from the approved prototype services.html; prices match the brand brief.
 */
import type { OfferInput } from './jsonld';

export interface Tier {
  /** Anchor id on /services (e.g. #sprint). */
  id: string;
  /** Mono kicker, e.g. "01 · The deep dive". */
  tag: string;
  name: string;
  /** Human price label, e.g. "$4k–$7.5k". */
  priceDisplay: string;
  /** Mono sub-line under the price. */
  unit: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  /** Structured price for schema.org Offer. */
  schema: { price?: number; minPrice?: number; maxPrice?: number };
}

/** The wedge / front door — rendered as a banner, not a column card. */
export const AUDIT: Tier = {
  id: 'audit',
  tag: '00 · The wedge',
  name: 'Onchain Opportunity Audit',
  priceDisplay: '$1,500',
  unit: 'flat · 3–5 days · credited toward next step',
  blurb:
    'A fast, productized read on one question: is there a real onchain opportunity here, how big, and what should you do — or not do — about it? Delivered in days, not weeks. Near-zero risk, and the fee credits toward whatever comes next.',
  features: [],
  badge: 'Start here',
  schema: { price: 1500 },
};

/** The three delivery columns. */
export const TIERS: Tier[] = [
  {
    id: 'sprint',
    tag: '01 · The deep dive',
    name: 'Diagnostic Sprint',
    priceDisplay: '$4k–$7.5k',
    unit: 'fixed fee · 1–2 weeks · credited toward delivery',
    blurb:
      'We meet, understand the business and the PoC ambition, then return with the real opportunity, defined success metrics, a costed roadmap, and a build recommendation with the right team attached.',
    features: [
      'Discovery sessions with your team',
      'Honest opportunity map — incl. what not to build',
      'Defined success metrics & KPIs',
      'Costed roadmap with timeline',
      'Recommended team, attached',
      'Board-ready summary',
    ],
    schema: { minPrice: 4000, maxPrice: 7500 },
  },
  {
    id: 'delivery',
    tag: '02 · Delivery',
    name: 'PoC / Project Delivery',
    priceDisplay: 'Build + 15–20%',
    unit: 'management fee on build · or fixed $8k–$25k',
    blurb:
      'We assemble and manage the right team from the network, define metrics and success up front, manage cost and timeline, and deliver a working proof of concept.',
    features: [
      'Right team assembled from the network',
      'Scope, metrics & milestones locked up front',
      'Cost, timeline & vendor management',
      'Working proof of concept delivered',
      'You own the outcome and the relationship',
      'Path to production defined',
    ],
    featured: true,
    badge: 'Margin engine',
    schema: {},
  },
  {
    id: 'advisor',
    tag: '03 · Ongoing',
    name: 'Fractional Onchain Advisor',
    priceDisplay: '$3k–$8k/mo',
    unit: 'monthly retainer · by cadence & seniority',
    blurb:
      'A standing strategic seat: stay ahead of the space, vet vendors and deals, guide the roadmap, and bring board-ready financial framing.',
    features: [
      'Standing strategic seat',
      'Vendor & deal vetting',
      'Roadmap & tokenomics guidance',
      'Board-ready financial framing',
      'Priority access to the network',
      'Ahead-of-the-curve market reads',
    ],
    schema: { minPrice: 3000, maxPrice: 8000 },
  },
];

/** All four tiers (audit first) as schema.org Offer inputs. */
export function offerInputs(): OfferInput[] {
  const descriptions: Record<string, string> = {
    audit:
      'Flat-fee 3–5 day productized assessment of whether a real onchain opportunity exists, its rough size, and what to do — or not do — about it.',
    sprint:
      'Fixed-fee 1–2 week blockchain opportunity assessment with defined metrics and a costed roadmap.',
    delivery:
      'Managed proof-of-concept delivery using a vetted builder network, run to defined metrics, cost, and timeline.',
    advisor: 'Ongoing strategic blockchain advisory retainer.',
  };
  return [AUDIT, ...TIERS].map((t) => ({
    name: t.name,
    description: descriptions[t.id] ?? t.blurb,
    url: `/services#${t.id}`,
    ...t.schema,
  }));
}
