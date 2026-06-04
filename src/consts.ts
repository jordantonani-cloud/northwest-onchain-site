/**
 * Single source of truth for swappable site configuration.
 * Everything an owner might need to change lives here. Grep for TODO(owner)
 * to find the placeholders that need real values before launch.
 */

export const SITE = {
  name: 'Northwest Onchain',
  legalName: 'Northwest Onchain',
  domain: 'northwestonchain.com',
  // TODO(owner): change if the final domain is not northwestonchain.com.
  url: 'https://northwestonchain.com',
  tagline: 'Onchain, on purpose.',
  shortPitch: 'The bridge between traditional finance and blockchain.',
  description:
    'Northwest Onchain bridges traditional finance and blockchain. We diagnose where onchain creates real value, assemble the right team from a vetted network, and deliver a working proof of concept against defined metrics, cost, and ROI.',
  email: 'hello@northwestonchain.com',
  region: 'Pacific Northwest',
  // areaServed surfaces in ProfessionalService JSON-LD.
  areaServed: ['United States', 'Pacific Northwest'],
  locale: 'en_US',
  lang: 'en',
} as const;

/**
 * Booking ("The Meet") configuration.
 * TODO(owner): replace with the real Cal.com (or Calendly) link + namespace.
 * The Cal.com embed (Milestone 6) reads `calLink`; the fallback CTAs use `url`.
 */
export const BOOKING = {
  provider: 'cal.com' as 'cal.com' | 'calendly',
  // e.g. "northwest-onchain/the-meet" for cal.com, or a full Calendly URL.
  calLink: 'northwest-onchain/the-meet',
  url: 'https://cal.com/northwest-onchain/the-meet',
  ctaLabel: 'Book the Meet',
} as const;

/**
 * Social profiles — emitted as schema.org `sameAs` (the E-E-A-T entity graph)
 * and rendered in the footer.
 * TODO(owner): confirm or replace these URLs.
 */
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/northwest-onchain',
  x: 'https://x.com/northwestonchain',
} as const;

/**
 * Analytics — privacy-friendly, cookieless, behind a flag (off by default).
 * TODO(owner): set enabled: true and confirm the domain/provider before launch.
 */
export const ANALYTICS = {
  enabled: false,
  provider: 'plausible' as 'plausible' | 'umami',
  domain: 'northwestonchain.com',
  src: 'https://plausible.io/js/script.js',
} as const;

/** Search-console verification tokens (commented slots rendered in <head>). */
export const VERIFICATION = {
  // TODO(owner): paste the content value from Google Search Console.
  google: '',
  // TODO(owner): paste the content value from Bing Webmaster Tools (feeds ChatGPT/Copilot).
  bing: '',
} as const;

/** Primary navigation. Clean, lowercase, hyphenated URLs. */
export const NAV: { label: string; href: string }[] = [
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
];

/** Footer link groups. */
export const FOOTER_NAV: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Explore',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Process', href: '/process' },
      { label: 'Insights', href: '/insights' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Engage',
    links: [
      { label: 'Opportunity Audit', href: '/services#audit' },
      { label: 'Diagnostic Sprint', href: '/contact' },
      { label: 'PoC Delivery', href: '/services#delivery' },
      { label: 'Fractional Advisor', href: '/services#advisor' },
    ],
  },
];

/** Stable schema.org node @ids — referenced across pages to build one entity graph. */
export const SCHEMA_IDS = {
  org: `${SITE.url}/#org`,
  website: `${SITE.url}/#website`,
  founder: `${SITE.url}/about#founder`,
} as const;

/** Topic clusters for the Insights blog (pillar → supporting). */
export const CLUSTERS = {
  'enterprise-strategy': 'Enterprise blockchain strategy',
  'tokenization-rwa': 'Tokenization & RWA',
  'crypto-tradfi': 'Crypto for TradFi & investors',
} as const;

export type ClusterId = keyof typeof CLUSTERS;
