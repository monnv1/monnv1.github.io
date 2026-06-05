// Replace these values after you create the GitHub repository.
// For https://username.github.io/repo-name/, use:
// site: 'https://username.github.io'
// base: '/repo-name'
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://monnv1.github.io',
  base: '/',
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
});
