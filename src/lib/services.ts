/**
 * How the partnership works — single source of truth.
 * Three engagement shapes (Diagnose → Deliver → Advise), not a menu of priced
 * packages (STRATEGIC-REVISION-PROMPT directive 5). Pricing appears only as
 * honest context (PRICING_CONTEXT) so leads self-qualify; exact scope and
 * pricing are agreed in conversation. Consumed by /services, the OfferCatalog
 * JSON-LD, and the llms.txt files.
 */
import type { OfferInput } from './jsonld';

export interface Engagement {
  /** Anchor id on /services (e.g. #diagnose). */
  id: string;
  /** Mono kicker, e.g. "01 · Diagnose". */
  tag: string;
  name: string;
  blurb: string;
  features: string[];
}

export const ENGAGEMENTS: Engagement[] = [
  {
    id: 'diagnose',
    tag: '01 · Diagnose',
    name: 'Find the opportunity',
    blurb:
      'A short, fixed-scope diagnostic. We map where onchain improves your distribution, costs, or stakeholder outcomes, and tell you plainly if it does not.',
    features: [
      'Discovery sessions with your team',
      'Honest opportunity map, including what not to build',
      'Success metrics and costed roadmap',
      'The right team, identified',
    ],
  },
  {
    id: 'deliver',
    tag: '02 · Deliver',
    name: 'Prove it works',
    blurb:
      'We assemble the right builders from a vetted network and deliver a working pilot against the metrics we agreed. You manage one relationship: us.',
    features: [
      'Scope, metrics, and milestones locked up front',
      'Cost, timeline, and vendor management',
      'A working pilot, delivered and measured',
      'A clear path to production, or a clear stop',
    ],
  },
  {
    id: 'advise',
    tag: '03 · Advise',
    name: 'Stay ahead',
    blurb:
      'A standing seat at your table. We vet vendors and deals, guide the roadmap, and keep you positioned as the rules and rails evolve.',
    features: [
      'Ongoing strategic counsel',
      'Vendor and deal vetting',
      'Roadmap and design guidance',
      'Priority access to the network',
    ],
  },
];

/**
 * Honest pricing context — the only place numbers appear (matches the
 * OfferCatalog ranges below; never let schema claim what the page doesn't).
 */
export const PRICING_CONTEXT =
  'Every partnership starts with a free conversation. Diagnostics typically run $1.5k–$7.5k and pilot builds $15k–$75k depending on scope, with fees credited forward as the work continues. Exact scope and pricing are agreed together, in conversation.';

/** Engagement shapes as schema.org Offer inputs (ranges match PRICING_CONTEXT). */
export function offerInputs(): OfferInput[] {
  return [
    {
      name: 'Onchain Opportunity Diagnostic',
      description:
        'Short fixed-scope diagnostic: where onchain improves distribution, costs, or stakeholder outcomes, with success metrics and a costed roadmap.',
      url: '/services#diagnose',
      minPrice: 1500,
      maxPrice: 7500,
    },
    {
      name: 'Pilot Delivery',
      description:
        'Managed pilot delivery using a vetted builder network, run to agreed metrics, cost, and timeline.',
      url: '/services#deliver',
      minPrice: 15000,
      maxPrice: 75000,
    },
    {
      name: 'Ongoing Onchain Advisory',
      description:
        'Standing strategic advisory: vendor and deal vetting, roadmap guidance, market positioning.',
      url: '/services#advise',
    },
  ];
}
