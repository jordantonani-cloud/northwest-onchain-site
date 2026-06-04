// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import { SITE } from './src/consts';

// https://astro.build/config
export default defineConfig({
  // Canonical production origin — all absolute URLs (canonical, OG, sitemap) derive from this.
  // TODO(owner): change if the final domain is not northwestonchain.com.
  site: SITE.url,
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Emit /services.html style routes as /services/index.html for clean, trailing-slashless URLs.
    format: 'directory',
  },
  integrations: [
    // We manage base styles ourselves in src/styles/global.css (design tokens + ported system).
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    icon(),
  ],
  image: {
    // Sharp powers the AVIF/WebP pipeline via <Image />/<Picture />.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
