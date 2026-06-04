/**
 * RSS feed for the Insights blog (/rss.xml). Published (non-draft) entries,
 * newest first.
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const articles = (await getCollection('insights'))
    .filter((e) => !e.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${SITE.name} — Insights`,
    description:
      'Plain-English writing on enterprise blockchain strategy, RWA tokenization, and crypto diligence for traditional finance.',
    site: context.site,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/insights/${entry.id}/`,
      categories: entry.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
