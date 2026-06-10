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
    'Northwest Onchain positions businesses for the onchain moment. We find the opportunities that improve distribution, cut costs, and serve stakeholders better, then prove them with a working pilot.',
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
 * Standardized call to action (STRATEGIC-REVISION-PROMPT directive 5).
 * ONE ask sitewide: a free first conversation. No packages, no prices in CTAs.
 * Pricing context lives only on /services as honest ranges.
 */
export const CTA = {
  primaryLabel: 'Start the conversation',
  primaryHref: '/contact',
  subtext: 'Free, 30 minutes, no pitch. A straight read on what onchain means for your business.',
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
    heading: 'Start',
    links: [{ label: 'Start the conversation', href: '/contact' }],
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
  jobTitle: 'Co-founder & Principal',
  location: 'Seattle, WA',
  linkedin: 'https://www.linkedin.com/in/jordantonani',
  // §2a — one-line credibility (teaser meta / hero use).
  oneLine:
    'Morgan Stanley to Index Coop to Lotus Labs. Eight years across traditional finance and onchain. Both sides, fluent.',
  // §2b — homepage teaser (FounderCard teaser variant).
  teaser:
    'Jordan Tonani is a Seattle operator with eight years across crypto, DeFi, and regulated finance. He managed $150M in client assets at Morgan Stanley, then led partnerships at Index Coop, where onchain structured products grew 135% in a year. He knows why something is worth building, what it should be, and who needs to be in the room.',
  // §2c — full bio (FounderCard full variant), paragraph by paragraph.
  bio: [
    'Northwest Onchain was founded by Jordan Tonani, who has spent more than eight years working both sides of finance: traditional and onchain.',
    "He began at Morgan Stanley as Seattle's lead executive-compensation strategist, managing $150M in high-net-worth assets and guiding pre-IPO executives through complex equity decisions. He then moved fully onchain to lead partnerships at Index Coop, at the time the largest provider of onchain structured products. There he drove 135% year-over-year growth and shipped integrations with Coinbase, Gemini, MetaMask, and 21Shares while serving on the executive committee.",
    'Today he is founding business-development lead at Lotus Labs, an onchain credit platform anchored by FalconX, Bitwise, and WisdomTree, with $30M+ committed before launch. That path is half of Northwest Onchain\'s premise: knowing why something should be built and what it should be, before anyone writes code. He brings a deep network of protocol founders, asset issuers, exchanges, and institutional allocators to every engagement, and a bias toward telling clients the truth, including when the answer is "don\'t build this."',
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
 * Co-founder identity — the technical side of the firm (About `Person` schema +
 * FounderCard). Real bio, drawn from Nathan Tonani's resume (2026-06). Scope is
 * institutional-only by Jordan's call: gTrade protocol record, trading systems,
 * Amazon/Cray, W3C standards. Consumer ventures intentionally omitted.
 */
export const COFOUNDER = {
  published: true,
  name: 'Nathan Tonani',
  jobTitle: 'Co-founder & CTO',
  location: 'Seattle, WA',
  linkedin: 'https://www.linkedin.com/in/nathantonani',
  github: 'https://github.com/thebuidler',
  // One-line credibility (teaser meta / hero use).
  oneLine:
    'Cray to Amazon to gTrade protocol lead. A decade of systems engineering. $120B+ in onchain volume shipped with zero exploits.',
  // Homepage teaser (FounderCard teaser variant).
  teaser:
    'Nathan Tonani is the engineering side of the firm. As founding engineer and protocol lead at gTrade, he shipped a fully onchain derivatives exchange that scaled to $120B+ in volume and 40K+ users with zero security exploits, leading a 15-person team along the way. Before crypto: machine learning at Amazon, supercomputing at Cray. He builds systems that survive production.',
  // Full bio (FounderCard full variant), paragraph by paragraph.
  bio: [
    "Nathan Tonani is Northwest Onchain's co-founder and CTO, the builder's side of the bridge. He has spent a decade engineering systems where failure is expensive: supercomputing at Cray, then machine-learning infrastructure at Amazon, processing inventory for a million products at 500 million updates a day.",
    'He moved fully onchain in 2020, co-authoring a W3C wallet standard alongside MIT and Transmute. As founding engineer and later protocol lead at gTrade, he designed and shipped a fully onchain derivatives exchange, scaling it to $120B+ in volume, 4M+ trades, and 40K+ users while leading a 15-person team. Zero security exploits across billions in volume. His risk systems held through three extreme market cycles while most competing protocols failed, and patterns he pioneered, like one-click trading, were adopted across DeFi.',
    'That arc is the other half of the premise: once the why and the what are clear, who builds it decides whether value gets created. Nathan has built and operated the systems being proposed, from smart contracts to market infrastructure to the product on top. When Northwest Onchain says a pilot will hold up in production, that judgment comes from someone who has shipped one at scale.',
  ],
  knowsAbout: [
    'Smart contract development',
    'Protocol design',
    'Systems architecture',
    'Derivatives market infrastructure',
    'Onchain risk frameworks',
    'Product engineering',
    'ML and data infrastructure',
    'W3C and ERC standards',
  ],
  sameAs: ['https://www.linkedin.com/in/nathantonani', 'https://github.com/thebuidler'],
  // TODO(owner): supply a professional headshot, add it to /public, set the path here.
  image: '',
} as const;

/** Both principals, in display order — drives team sections and schema. */
export const TEAM = [FOUNDER, COFOUNDER] as const;

/**
 * Proof / track record (WEBSITE-AUDIT §9, copy §2.5). HONEST FRAMING: these are
 * the founders' career results and partners, NOT Northwest Onchain client
 * engagements. Never label as "our clients" or "trusted by."
 */
export const PROOF = {
  heading: 'The track record behind the firm',
  note: "The founders' career results, partners, and integrations, not Northwest Onchain client engagements.",
  stats: [
    { value: '$120B+', label: 'protocol volume scaled at gTrade, zero exploits' },
    { value: '$150M', label: 'client assets managed at Morgan Stanley' },
    { value: '135%', label: 'YoY onchain TVL growth led at Index Coop (2024)' },
    { value: '$30M+', label: 'committed pre-launch at Lotus Labs' },
  ],
  logosLabel: "Partnerships, integrations, and roles across the founders' careers include",
  logos: [
    'Morgan Stanley',
    'Amazon',
    'gTrade',
    'Index Coop',
    'Lotus Labs',
    'Coinbase',
    'MetaMask',
    'Gemini',
    '21Shares',
    'FalconX',
    'Bitwise',
    'WisdomTree',
    'W3C',
  ],
  pressLabel: 'As featured in',
  press: ['CoinDesk', 'Nasdaq', 'Decrypt', 'Blockworks', 'The Edge Podcast'],
} as const;

/** Stable schema.org node @ids — referenced across pages to build one entity graph. */
export const SCHEMA_IDS = {
  org: `${SITE.url}/#org`,
  website: `${SITE.url}/#website`,
  founder: `${SITE.url}/about#founder`,
  cofounder: `${SITE.url}/about#cofounder`,
} as const;

/** Topic clusters for the Insights blog (pillar → supporting). */
export const CLUSTERS = {
  'enterprise-strategy': 'Enterprise blockchain strategy',
  'tokenization-rwa': 'Tokenization & RWA',
  'crypto-tradfi': 'Crypto for TradFi & investors',
} as const;

export type ClusterId = keyof typeof CLUSTERS;
