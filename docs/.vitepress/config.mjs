import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "leybme",
  description: " A site by Nguyen Le Y for sharing knowledge and experiences in engineering, focusing on embedded programming, hardware design, and biomedical instrumentation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Highlights', link: '/rocker' },
      { text: 'Blogs', link: '/blogs' },
    ],

    sidebar: [
      {
        text: 'Highlights',
        items: [
          { text: 'Rocker Machine', link: '/rocker' },
          { text: 'Uroflowmeter', link: '/uroflowmeter' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leybme' },
      { icon: 'facebook', link: 'https://facebook.com/ley995' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nguyenley' },
    ]
  },
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]]
})
