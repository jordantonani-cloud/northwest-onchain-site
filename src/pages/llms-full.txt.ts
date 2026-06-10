/**
 * /llms-full.txt — a fuller LLM-readable digest: the positioning, the six
 * differentiators, the four tiers with detail, the process, and each published
 * article's TL;DR. Built from site data + content frontmatter.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { ENGAGEMENTS, PRICING_CONTEXT } from '../lib/services';
import { publishedOnly, clusterLabel } from '../lib/insights';

const DIFFERENTIATORS = [
  'Both sides of the ledger: market judgment plus native onchain engineering.',
  'Network, not headcount: a vetted bench of builders on demand, not a fixed team.',
  'Metrics-first: success criteria and cost defined before any code is written.',
  'Vendor-neutral: no chain, token, or product to sell, including saying "don\'t."',
  'PNW-grounded: long-term, relationship-driven, low-hype.',
  'Lean by design: answers in days, not quarters, at a fraction of big-firm cost.',
];

const PROCESS = [
  'Survey (meet and diagnose): learn the business and map the terrain honestly, including where blockchain is the wrong tool.',
  'Chart (find the path): define the opportunity, success metrics, costed roadmap, and the right team.',
  'Assemble (build the crew): stand up the right builders from the network, aligned on metrics, cost, and timeline.',
  'Summit (deliver and measure): run delivery to the agreed metrics, prove the value, and set up what comes next.',
];

export const GET: APIRoute = async () => {
  const base = SITE.url;

  const tiers = ENGAGEMENTS.map(
    (e) =>
      `### ${e.name}\n${e.blurb}${
        e.features.length ? '\n' + e.features.map((f) => `- ${f}`).join('\n') : ''
      }`
  ).join('\n\n');

  const articles = publishedOnly(await getCollection('insights'))
    .map((a) => {
      const tldr = a.data.keyTakeaway ? `\n${a.data.keyTakeaway}` : '';
      return `### ${a.data.title}\n${clusterLabel(a.data.cluster)} · ${base}/insights/${a.id}\n${a.data.description}${tldr}`;
    })
    .join('\n\n');

  const body = `# Northwest Onchain — full digest

> ${SITE.description} Tagline: "${SITE.tagline}"

## What Northwest Onchain is
Northwest Onchain is a Seattle-based blockchain strategy and execution firm that positions businesses for the onchain moment: better distribution, lower costs, better outcomes for stakeholders. The market has crypto-native builders who can ship but can't make the business case, and big-firm strategists who write the deck but have never deployed. Northwest Onchain is the third thing: a two-founder firm (Jordan Tonani from markets and finance: Morgan Stanley, Index Coop, Lotus Labs; Nathan Tonani from protocol engineering: $120B+ in onchain volume shipped at gTrade with zero exploits) that runs every engagement through one diligence: why build, what to build, who builds it.

- Serves: enterprises and TradFi, investors (VC / family office), and founders new to crypto.
- Region: ${SITE.region}. Contact: ${SITE.email}.
- Vendor-neutral and chain-agnostic. Primary action: book a free 30-minute conversation.

## The six differentiators
${DIFFERENTIATORS.map((d) => `- ${d}`).join('\n')}

## How the partnership works
${tiers}

${PRICING_CONTEXT}

## The process (a four-stage expedition)
${PROCESS.map((p) => `- ${p}`).join('\n')}

## Insights
${articles}

## Links
- Home: ${base}/
- Services: ${base}/services
- Process: ${base}/process
- About: ${base}/about
- Insights: ${base}/insights
- Contact: ${base}/contact
- RSS: ${base}/rss.xml
- Sitemap: ${base}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
