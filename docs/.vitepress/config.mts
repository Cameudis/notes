import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cameudis's Notes",
  description: "A Notebook Blog site based on VitePress.",
  base: '/notes/',
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Algorithm', link: '/Algorithm/Analysis' },
    ],

    sidebar: {
      '/Algorithm/': {
        text: 'Algorithm',
        items: [
          {text: 'Analysis', link: '/Algorithm/Analysis.md'},
        ]
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cameudis' }
    ],

    search: {
      provider: 'local'
    }
  }
})
