import { defineConfig } from 'vitepress';
import { icons, nav, sidebar } from './config/index';

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '个人主页',
  titleTemplate: 'Bking',
  description: 'Bking 的个人主页',
  head: [['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]],
  appearance: true,
  lastUpdated: true,
  outDir: './dist',
  srcDir: 'src',
  ignoreDeadLinks: false,
  cleanUrls: 'without-subfolders',
  vue: {
    reactivityTransform: true,
  },
  markdown: {
    lineNumbers: false,
  },
  vite: {
    server: {
      host: true,
    },
    build: {
      target: 'esnext',
    },
  },
  themeConfig: {
    logo: { src: '/favicon.ico', alt: 'Bking' },
    siteTitle: 'Bking',
    outline: 'deep',
    outlineTitle: '本页目录',
    nav: [...nav, { text: '赞赏', link: '/sponsor/' }, { text: '生物学', link: '/biology/' }],
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/ksBking/ksbking.github.io/edit/main/src/:path',
      text: '问题反馈',
    },
    lastUpdatedText: '上次修改时间',
    docFooter: {
      prev: '前一篇',
      next: '下一篇',
    },
    socialLinks: [
      {
        icon: { svg: icons['tiktok'] },
        link: 'https://www.douyin.com/user/MS4wLjABAAAACfoqCUSC9835wHc2RusDqCKxRNxqlez10oXBqpfjpS0',
      },
      {
        icon: { svg: icons['kuaishou'] },
        link: 'https://www.kuaishou.com/profile/3xbw3s3mwysg78c',
      },
      {
        icon: { svg: icons['bilibili'] },
        link: 'https://space.bilibili.com/397719567',
      },
      { icon: { svg: icons['gitee'] }, link: 'https://gitee.com/ksbking' },
      { icon: 'github', link: 'https://github.com/ksBking' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Bking',
    },
  },
});
