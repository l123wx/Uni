import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Uni Component',
  description: '区块链研究院前端团队公共组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        link: '/guide/installation',
      },
      {
        text: 'Component',
        link: '/component/overview',
      },
    ],

    sidebar: {
      '/guide/': [],
      '/component/': [
        {
          text: 'Overview 组件总览',
          items: [
            { text: 'Overview 组件总览', link: '/component/overview' },
          ],
        },
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/component/button' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
