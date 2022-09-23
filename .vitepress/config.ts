import { defineConfig } from 'vitepress';
import nav from './config/nav';
import sidebar from './config/sidebar';
import icons from './config/icons';

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '个人博客',
  titleTemplate: 'Bking',
  description: 'Bking的主页',
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
    lineNumbers: true,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 80,
    },
    build: {
      target: 'es2015',
    },
  },
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'Bking',
    outlineTitle: '本页目录',
    nav: nav,
    sidebar: sidebar,
    editLink: {
      pattern: 'https://wj.qq.com/s2/10713059/078d',
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
