import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdown from '@astrojs/markdown-remark';

export default defineConfig({
  site: 'https://ramixter.github.io',
  base: '/test-astro-docs/',
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
    markdown(),
  ],
  markdown: {
    remarkPlugins: [
      require('remark-base-url'),
      {
        options: {
          baseUrl: '/test-astro-docs/',
        },
      },
    ],
  },
});
