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
  // Header CTA — conversation-led (design north-star v2). The $1,500 audit is
  // surfaced softly on-page, never as a header button.
  ctaLabel: 'Start a conversation',
} as const;

/**
 * Standardized calls to action (WEBSITE-AUDIT §8/§10). The $1,500 Opportunity
 * Audit is the single primary ask sitewide; a free call is the secondary.
 * "The Meet" survives only as Contact-page flavor.
 */
export const CTA = {
  auditLabel: 'Get the $1,500 Opportunity Audit',
  auditShort: 'Get the Audit',
  auditSubtext: 'Flat fee. 3–5 days. Credited toward whatever comes next.',
  auditHref: '/contact',
  callLabel: 'Book a free 30-min call',
  callHref: '/contact',
  secondaryLabel: 'See how we work',
} as const;

/**
 * Social profiles — emitted as schema.org `sameAs` (the E-E-A-T entity graph)
 * and rendered in the footer.
 * TODO(owner): confirm or replace these URLs.
 */
export const SOCIAL = {
  // The firm is the founder — point LinkedIn at Jordan's profile (the credible one).
  linkedin: 'https://www.linkedin.com/in/jordantonani',
  // TODO(owner): confirm or replace the X handle.
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

/**
 * Founder identity — the E-E-A-T anchor (About `Person` schema + FounderCard).
 * Real bio, drawn from Jordan Tonani's track record (homepage-and-founder-copy §2).
 * Ship as-is; only the headshot is still owed.
 */
export const FOUNDER = {
  published: true,
  name: 'Jordan Tonani',
  jobTitle: 'Founder & Principal',
  location: 'Seattle, WA',
  linkedin: 'https://www.linkedin.com/in/jordantonani',
  // §2a — one-line credibility (teaser meta / hero use).
  oneLine:
    'Morgan Stanley to Index Coop to Lotus Labs. Eight years across traditional finance and onchain — both sides, fluent.',
  // §2b — homepage teaser (FounderCard teaser variant).
  teaser:
    "Northwest Onchain is led by Jordan Tonani, a Seattle-based operator with 8+ years across crypto, DeFi, and regulated finance. He has worked both sides of the table — from managing $150M in client assets at Morgan Stanley to leading partnerships at Index Coop, where onchain structured-product TVL grew 135% in a single year. The financial models a CFO trusts, and the onchain network that actually ships.",
  // §2c — full bio (FounderCard full variant), paragraph by paragraph.
  bio: [
    'Northwest Onchain was founded by Jordan Tonani, who has spent more than eight years working both sides of finance — traditional and onchain.',
    "He began at Morgan Stanley, where as Seattle's lead executive-compensation strategist he managed $150M in high-net-worth assets and guided pre-IPO executives through equity and 10b5-1 decisions — translating financial complexity into clear calls. He then moved fully onchain, leading partnerships and institutions at Index Coop, at the time the largest provider of onchain structured products, where he drove 135% year-over-year TVL growth and shipped integrations with Coinbase, Gemini, MetaMask, and 21Shares while serving on the executive committee.",
    'Today he is founding business-development lead at Lotus Labs, building an onchain credit platform anchored by firms like FalconX, Bitwise, and WisdomTree, with $30M+ in capital committed before launch. That path — wealth management to DeFi partnerships to onchain credit — is the entire premise of Northwest Onchain: most crypto specialists cannot defend a business case to a CFO, and most finance professionals have never shipped onchain. Jordan does both. He brings a deep network of protocol founders, asset issuers, exchanges, market makers, and institutional allocators to every engagement — and a bias toward telling clients the truth, including when the answer is "don\'t build this."',
  ],
  knowsAbout: [
    'DeFi partnerships',
    'Onchain structured products',
    'Tokenization',
    'Real-world asset tokenization',
    'Incentive and tokenomics design',
    'Financial modeling',
    'Crypto go-to-market',
    'Blockchain strategy',
  ],
  sameAs: ['https://www.linkedin.com/in/jordantonani'],
  // TODO(owner): supply a professional headshot, add it to /public, set the path here.
  image: '',
} as const;

/**
 * Proof / track record (WEBSITE-AUDIT §9, copy §2.5). HONEST FRAMING: these are
 * the founder's career results and partners, NOT Northwest Onchain client
 * engagements. Never label as "our clients" or "trusted by."
 */
export const PROOF = {
  heading: 'The track record behind the firm',
  note: "Jordan's career results, partners, and integrations — not Northwest Onchain client engagements.",
  stats: [
    { value: '8+ yrs', label: 'across crypto, DeFi & regulated finance' },
    { value: '$150M', label: 'client assets managed at Morgan Stanley' },
    { value: '135%', label: 'YoY onchain TVL growth led at Index Coop (2024)' },
    { value: '$30M+', label: 'committed pre-launch at Lotus Labs' },
  ],
  logosLabel: "Partnerships, integrations, and roles across Jordan's career include —",
  logos: [
    'Morgan Stanley',
    'Index Coop',
    'Lotus Labs',
    'Coinbase',
    'MetaMask',
    'Gemini',
    '21Shares',
    'FalconX',
    'Bitwise',
    'WisdomTree',
    'Arbitrum',
  ],
  pressLabel: 'As featured in',
  press: ['CoinDesk', 'Nasdaq', 'Decrypt', 'Blockworks', 'The Edge Podcast'],
} as const;

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
