/**
 * /llms.txt — a concise, LLM-readable map of the site (emerging standard).
 * Built from the same data the pages use, so it can't drift. Served as
 * text/plain Markdown.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { ENGAGEMENTS, PRICING_CONTEXT } from '../lib/services';
import { publishedOnly } from '../lib/insights';

export const GET: APIRoute = async () => {
  const base = SITE.url;
  const services = ENGAGEMENTS.map(
    (e) => `- [${e.name}](${base}/services#${e.id}): ${e.blurb}`
  ).join('\n');

  const articles = publishedOnly(await getCollection('insights'))
    .map((a) => `- [${a.data.title}](${base}/insights/${a.id}): ${a.data.description}`)
    .join('\n');

  const body = `# Northwest Onchain

> ${SITE.description} Tagline: "${SITE.tagline}"

Northwest Onchain is a Seattle-based blockchain strategy and execution firm that positions businesses for the onchain moment: better distribution, lower costs, better outcomes for stakeholders. Two founders, one from markets and finance, one from protocol engineering, run every engagement through one diligence: why build, what to build, who builds it. Vendor-neutral and chain-agnostic, including telling clients when the answer is "don't."

- Contact: ${SITE.email}
- Region: ${SITE.region}
- Primary action: book a free 30-minute conversation.

## How the partnership works
${services}

${PRICING_CONTEXT}

## Key pages
- [Home](${base}/): positioning and overview.
- [Services](${base}/services): how the partnership works, value areas, and FAQ.
- [Process](${base}/process): the four-stage expedition: Survey, Chart, Assemble, Summit.
- [About](${base}/about): the two founders and what the firm believes.
- [Insights](${base}/insights): articles on strategy, tokenization, and crypto diligence.
- [Contact](${base}/contact): start the free conversation or send a note.

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
