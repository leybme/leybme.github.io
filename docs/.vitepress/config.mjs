import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "leybme",
  description: " A site by Nguyen Le Y for sharing knowledge and experiences in engineering, focusing on embedded programming, hardware design, and biomedical instrumentation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hardware and Firmware', link: '/hardwaredevelopment' },
      { text: '3D Design and Manufacturing', link: '/3ddesign' },
      { text: 'Projects', link: '/rocker' },
      { text: 'Blogs', link: '/blogs' },
      { text: "Khóa học STM32", link: '/stm32-vi' },
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Research Publication', link: '/publication' },
          { text: 'Rocker Machine', link: '/rocker' },
          { text: 'Biomimpedance measurement', link: '/bioimpedance_measurement' },
          { text: 'Uroflowmeter/Medical Device', link: '/uroflowmeter' },
          { text: 'AI Breast Cancer Classification', link: '/ai-breast-cancer-classification' },
          { text: 'Automation trading system', link: '/autotradingsystem' },
        ],
      },
      {
        text: 'Blogs',
        items: [
          { text: 'BME Conf Vuejs App for display abtract book of conference', link: '/blogs/bmeconf' },
          { text: '3D print', link: '/blogs/3dprintersettings' },
          { text: 'ESP32 Built-in JTAG for Advanced Debugging', link: '/esp32jtagdebug' },

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
