// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tallygoldpartner.in',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: {
    responsiveStyles: true,
    breakpoints: [480, 640, 828, 1080, 1280, 1600, 2000],
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
