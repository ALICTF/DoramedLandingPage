import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  plugins: [tailwind()],
  site: 'https://ALICTF.github.io',
  base: '/DoramedLandingPage',
});