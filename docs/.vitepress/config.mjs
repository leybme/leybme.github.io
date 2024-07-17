import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "leybme",
  description: " A site by Nguyen Le Y for sharing knowledge and experiences in engineering, focusing on embedded programming, hardware design, and biomedical instrumentation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/rocker' },
      { text: 'Blogs', link: '/blogs' },
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Rocker Machine', link: '/rocker' },
          { text: 'Uroflowmeter/Medical Device', link: '/uroflowmeter' },
          { text: 'AI Breast Cancer Classification', link: '/ai-breast-cancer-classification' },
          { text: 'Automation trading system', link: '/autotradingsystem' },
        ],
      },
      {
        text: 'Blogs',
        items: [
          { text: '3D print', link: '/blogs/3dprintersettings' },

        ],
      },
    ],
    footer: {
      message: 'Open to remote works.',
      copyright: 'Copyright © 2024-Nguyen Le Y'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leybme' },
      { icon: 'facebook', link: 'https://facebook.com/ley995' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nguyenley' },
    ],
    search: {
      provider: 'local'
    }

  },
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  lastUpdated: true,


})
