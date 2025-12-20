// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kiosk.doramed.ir',
  base: '/',
  
  integrations: [
    tailwind(),
    sitemap(),
  ],

  build: {
    inlineStylesheets: 'auto',
  },
});