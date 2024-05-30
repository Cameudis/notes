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
      { text: 'Software-Analysis', link: '/Software-Analysis/Introduction' },
      { text: 'Fuzzing', link: '/Fuzzing/Fuzzing-Basic' },
    ],

    sidebar: {
      '/Algorithm/': {
        text: 'Algorithm',
        items: [
          {text: 'Analysis', link: '/Algorithm/Analysis.md'},
        ]
      },
      '/Software-Analysis/': {
        text: 'Software-Analysis',
        items: [
          {text: 'Introduction', link: '/Software-Analysis/Introduction.md'},
          {text: 'Data-Flow', link: '/Software-Analysis/Data-Flow.md'},
          {text: 'SSA', link: '/Software-Analysis/SSA.md'},
        ]
      },
      '/Fuzzing/': {
        text: 'Fuzzing',
        items: [
          {text: 'Fuzzing-Basic', link: '/Fuzzing/Fuzzing-Basic.md'},
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
