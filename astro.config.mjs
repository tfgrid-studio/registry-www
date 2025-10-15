import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://registry.tfgrid.studio',
  integrations: [tailwind()],
  output: 'static',
});
