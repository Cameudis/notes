import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cameudis's Notes",
  description: "A Notebook Blog site based on VitePress.",
  base: '/notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cameudis' }
    ],

    search: {
      provider: 'local'
    }
  }
})
