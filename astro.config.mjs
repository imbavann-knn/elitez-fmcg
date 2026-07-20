import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://fmcg.elitez.ai',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
