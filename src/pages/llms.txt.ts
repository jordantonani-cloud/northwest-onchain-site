/**
 * /llms.txt — a concise, LLM-readable map of the site (emerging standard).
 * Built from the same data the pages use, so it can't drift. Served as
 * text/plain Markdown.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { AUDIT, TIERS } from '../lib/services';
import { publishedOnly } from '../lib/insights';

export const GET: APIRoute = async () => {
  const base = SITE.url;
  const services = [AUDIT, ...TIERS]
    .map((t) => `- [${t.name}](${base}/services#${t.id}): ${t.priceDisplay} — ${t.unit}`)
    .join('\n');

  const articles = publishedOnly(await getCollection('insights'))
    .map((a) => `- [${a.data.title}](${base}/insights/${a.id}): ${a.data.description}`)
    .join('\n');

  const body = `# Northwest Onchain

> ${SITE.description} Tagline: "${SITE.tagline}"

Northwest Onchain is a boutique blockchain strategy and execution consultancy that bridges traditional finance and onchain technology. It is vendor-neutral and chain-agnostic, grounded in the Pacific Northwest, and serves enterprises and TradFi, investors (VC / family office), and founders new to crypto. The firm diagnoses where blockchain creates real value, assembles the right builders from a vetted network, and delivers a working proof of concept against defined metrics, cost, and ROI — including telling clients when the answer is "don't."

- Contact: ${SITE.email}
- Region: ${SITE.region}
- Primary actions: book an intro call ("the Meet") or buy the $1,500 Opportunity Audit.

## Services and pricing
${services}

Note: enterprise PoC build budgets typically run $15k–$75k+; each fee credits toward the next step if the client proceeds.

## Key pages
- [Home](${base}/): positioning and overview.
- [Services & pricing](${base}/services): the four-tier model, value areas, and FAQ.
- [Process](${base}/process): the four-stage expedition — Survey, Chart, Assemble, Summit.
- [About](${base}/about): the both-sides bridge and what the firm believes.
- [Insights](${base}/insights): articles on strategy, tokenization, and crypto diligence.
- [Contact](${base}/contact): book the Meet or send a note.

## Insights
${articles}

## More
- Full version: ${base}/llms-full.txt
- RSS: ${base}/rss.xml
- Sitemap: ${base}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
