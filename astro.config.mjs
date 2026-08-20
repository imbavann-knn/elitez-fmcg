import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://fmcg.elitez.asia',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
