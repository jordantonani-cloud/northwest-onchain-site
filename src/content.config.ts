/**
 * Content collections (Astro 5 content layer).
 * The Insights blog: MDX files in src/content/insights with zod-validated
 * frontmatter. Structured `keyTakeaway`/`keyPoints`/`faqs` live in frontmatter
 * so the article template can render the answer-first block + FAQPage schema
 * without polluting the MDX body.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const CLUSTERS = ['enterprise-strategy', 'tokenization-rwa', 'crypto-tradfi'] as const;

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string().max(75),
    description: z.string().min(50).max(165),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Northwest Onchain'),
    tags: z.array(z.string()).default([]),
    cluster: z.enum(CLUSTERS),
    draft: z.boolean().default(false),
    /** Optional hero image path (under /public) + its alt text. */
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    /** Answer-first TL;DR (AEO) rendered above the body. */
    keyTakeaway: z.string().optional(),
    keyPoints: z.array(z.string()).default([]),
    /** On-page FAQ → also emitted as FAQPage JSON-LD. */
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = { insights };
