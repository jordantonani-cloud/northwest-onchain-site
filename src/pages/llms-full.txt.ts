/**
 * /llms-full.txt — a fuller LLM-readable digest: the positioning, the six
 * differentiators, the four tiers with detail, the process, and each published
 * article's TL;DR. Built from site data + content frontmatter.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { AUDIT, TIERS } from '../lib/services';
import { publishedOnly, clusterLabel } from '../lib/insights';

const DIFFERENTIATORS = [
  'Both sides of the ledger — TradFi financial rigor plus native onchain fluency.',
  'Network, not headcount — a vetted bench of builders on demand, not a fixed team.',
  'Metrics-first — success criteria, cost, and ROI defined before any code is written.',
  'Vendor-neutral — no chain, token, or product to sell, including saying "don\'t."',
  'PNW-grounded — long-term, relationship-driven, low-hype.',
  'Lean by design — answers in days, not quarters, at a fraction of big-firm cost.',
];

const PROCESS = [
  'Survey — meet & diagnose: learn the business and map the terrain honestly, including where blockchain is the wrong tool.',
  'Chart — find the path: define the opportunity, success metrics, costed roadmap, and the right team (the Diagnostic Sprint deliverable).',
  'Assemble — build the crew: stand up the right builders from the network, aligned on metrics, cost, and timeline.',
  'Summit — deliver & measure: run delivery to the agreed metrics, prove the value, and set up what comes next.',
];

export const GET: APIRoute = async () => {
  const base = SITE.url;

  const tiers = [AUDIT, ...TIERS]
    .map(
      (t) =>
        `### ${t.name} (${t.priceDisplay})\n${t.unit}\n${t.blurb}${
          t.features.length ? '\n' + t.features.map((f) => `- ${f}`).join('\n') : ''
        }`
    )
    .join('\n\n');

  const articles = publishedOnly(await getCollection('insights'))
    .map((a) => {
      const tldr = a.data.keyTakeaway ? `\n${a.data.keyTakeaway}` : '';
      return `### ${a.data.title}\n${clusterLabel(a.data.cluster)} · ${base}/insights/${a.id}\n${a.data.description}${tldr}`;
    })
    .join('\n\n');

  const body = `# Northwest Onchain — full digest

> ${SITE.description} Tagline: "${SITE.tagline}"

## What Northwest Onchain is
Northwest Onchain is a boutique blockchain strategy and execution consultancy that bridges traditional finance and onchain technology. The market has crypto-native builders who can ship but can't model a business case, and big-firm strategists who write the deck but have never deployed. Northwest Onchain is the third thing: an advisor who has operated in crypto, holds a vetted builder network, and understands financial models well enough to defend an engagement to a CFO.

- Serves: enterprises and TradFi, investors (VC / family office), and founders new to crypto.
- Region: ${SITE.region}. Contact: ${SITE.email}.
- Vendor-neutral and chain-agnostic. Primary actions: book the Meet, or buy the $1,500 Opportunity Audit.

## The six differentiators
${DIFFERENTIATORS.map((d) => `- ${d}`).join('\n')}

## Services and pricing
${tiers}

Enterprise PoC build budgets typically run $15k–$75k+; Northwest Onchain earns the delivery-management fee, and each fee credits toward the next step if the client proceeds.

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
