/**
 * schema.org JSON-LD builders — one coherent entity graph across the site.
 *
 * Strategy: every page emits a single `<script type="application/ld+json">`
 * containing a `@graph` array. Site-wide nodes (Organization / ProfessionalService,
 * WebSite) are injected on every page via BaseLayout; page-specific nodes
 * (Offers, FAQPage, Person, BlogPosting, BreadcrumbList) are appended per page.
 *
 * Stable @ids (see SCHEMA_IDS) let nodes reference each other instead of
 * duplicating data — this is what answer engines parse to understand the entity.
 */
import { SITE, SOCIAL, SCHEMA_IDS } from '../consts';

/** A schema.org node. Loosely typed on purpose — schema.org is open-world. */
export type SchemaNode = Record<string, unknown>;

const abs = (path = '/'): string => new URL(path, SITE.url).href;

/**
 * Organization + ProfessionalService describing Northwest Onchain.
 * Site-wide; referenced by @id elsewhere (founder, offers, articles).
 */
export function organizationNode(): SchemaNode {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': SCHEMA_IDS.org,
    name: SITE.name,
    legalName: SITE.legalName,
    url: abs('/'),
    email: `mailto:${SITE.email}`,
    description: SITE.description,
    slogan: SITE.tagline,
    logo: {
      '@type': 'ImageObject',
      url: abs('/og/logo.png'),
    },
    image: abs('/og/default.png'),
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    knowsAbout: [
      'Blockchain strategy',
      'Enterprise blockchain proof of concept',
      'Tokenization',
      'Real-world asset tokenization',
      'Crypto advisory',
      'Financial modeling',
      'Vendor-neutral blockchain consulting',
    ],
    serviceType: [
      'Blockchain Strategy Consulting',
      'Proof of Concept Delivery',
      'Fractional Onchain Advisory',
    ],
    sameAs: [SOCIAL.linkedin, SOCIAL.x],
    founder: { '@id': SCHEMA_IDS.founder },
  };
}

/** WebSite node with a (no-op-friendly) SearchAction. */
export function websiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': SCHEMA_IDS.website,
    url: abs('/'),
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': SCHEMA_IDS.org },
    inLanguage: SITE.lang,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${abs('/insights')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** BreadcrumbList for a page. Pass the trail including the current page. */
export function breadcrumbNode(crumbs: Crumb[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export interface OfferInput {
  name: string;
  description: string;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  url?: string;
}

/** OfferCatalog of the four service tiers, linked to the Organization. */
export function offerCatalogNode(offers: OfferInput[]): SchemaNode {
  return {
    '@type': 'OfferCatalog',
    name: `${SITE.name} Services`,
    provider: { '@id': SCHEMA_IDS.org },
    itemListElement: offers.map((o) => {
      const offer: SchemaNode = {
        '@type': 'Offer',
        name: o.name,
        description: o.description,
        priceCurrency: 'USD',
        ...(o.url ? { url: abs(o.url) } : {}),
      };
      if (typeof o.price === 'number') {
        offer.price = o.price;
      } else if (typeof o.minPrice === 'number') {
        offer.priceSpecification = {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: o.minPrice,
          ...(typeof o.maxPrice === 'number' ? { maxPrice: o.maxPrice } : {}),
        };
      }
      return offer;
    }),
  };
}

export interface QA {
  question: string;
  answer: string;
}

/** FAQPage mirroring an on-page FAQ block. */
export function faqNode(items: QA[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: { '@type': 'Answer', text: qa.answer },
    })),
  };
}

export interface PersonInput {
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
  sameAs?: string[];
  alumniOf?: string[];
  image?: string;
  /** City/region, e.g. "Seattle, WA". */
  location?: string;
}

/** Person node for the founder — the E-E-A-T anchor, founder of the Organization. */
export function personNode(p: PersonInput): SchemaNode {
  return {
    '@type': 'Person',
    '@id': SCHEMA_IDS.founder,
    name: p.name,
    jobTitle: p.jobTitle,
    description: p.description,
    knowsAbout: p.knowsAbout,
    worksFor: { '@id': SCHEMA_IDS.org },
    ...(p.location ? { homeLocation: { '@type': 'Place', name: p.location } } : {}),
    ...(p.sameAs && p.sameAs.length ? { sameAs: p.sameAs } : {}),
    ...(p.alumniOf && p.alumniOf.length
      ? { alumniOf: p.alumniOf.map((name) => ({ '@type': 'Organization', name })) }
      : {}),
    ...(p.image ? { image: abs(p.image) } : {}),
  };
}

export interface ArticleInput {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  keywords?: string[];
}

/** BlogPosting node for an Insights article, authored by the founder Person. */
export function articleNode(a: ArticleInput): SchemaNode {
  return {
    '@type': 'BlogPosting',
    headline: a.headline,
    description: a.description,
    url: abs(a.url),
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(a.url) },
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    image: abs(a.image),
    author: { '@id': SCHEMA_IDS.founder },
    publisher: { '@id': SCHEMA_IDS.org },
    ...(a.keywords && a.keywords.length ? { keywords: a.keywords.join(', ') } : {}),
  };
}

/** Wrap nodes into a single @graph document. */
export function graph(nodes: SchemaNode[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });
}
