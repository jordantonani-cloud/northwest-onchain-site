/**
 * Helpers for the Insights collection — cluster labels, sorting, reading time.
 */
import type { CollectionEntry } from 'astro:content';
import { CLUSTERS, type ClusterId } from '../consts';

export type Insight = CollectionEntry<'insights'>;

export const clusterLabel = (id: ClusterId): string => CLUSTERS[id];

export const CLUSTER_LIST: { id: ClusterId; label: string }[] = (
  Object.keys(CLUSTERS) as ClusterId[]
).map((id) => ({ id, label: CLUSTERS[id] }));

/** Newest first. */
export function byNewest(a: Insight, b: Insight): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/** Published (non-draft) entries; drafts are also dropped in production builds. */
export function publishedOnly(entries: Insight[]): Insight[] {
  return entries.filter((e) => !e.data.draft).sort(byNewest);
}

/** Rough reading time in minutes from raw body text (~200 wpm). */
export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Human date, e.g. "June 3, 2026". */
export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** ISO date (for datetime attrs + schema). */
export function isoDate(d: Date): string {
  return d.toISOString().split('T')[0];
}
