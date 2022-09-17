import { defineConfig } from 'vitepress';
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: '个人博客',
  titleTemplate: 'Bking',
  description: 'Bking的主页',
  head: [['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]],
  appearance: true,
  lastUpdated: true,
  outDir: '../dist',
  ignoreDeadLinks: false,
  cleanUrls: 'disabled',
  themeConfig: {
    logo: '/img/logo.png',
    siteTitle: 'Bking',
    outlineTitle: '本页目录',
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://wj.qq.com/s2/10713059/078d',
      text: '问题反馈',
    },
    lastUpdatedText: '上次修改时间',
    docFooter: {
      prev: '前一篇',
      next: '下一篇',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ksBking/LeagueTool' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Bking',
    },
  },
});

function nav() {
  return [
    {
      text: '文档',
      activeMatch: '/docs/',
      items: [
        {
          text: '英雄联盟',
          items: [
            {
              text: 'LeagueTool',
              link: '/docs/lol/league-tool/what-is-league-tool',
              activeMatch: '/docs/lol/league-tool/',
            },
            {
              text: '官网资源',
              link: '/docs/lol/web-resources/',
              activeMatch: '/docs/lol/web-resources/',
            },
          ],
        },
        {
          text: 'Node.js',
          link: '/docs/nodejs/',
        },
      ],
    },
    { text: '赞赏', link: '/sponsor/' },
  ];
}

function sidebar() {
  return {
    '/docs/lol/league-tool': [
      {
        text: '介绍',
        items: [
          { text: '前言', link: '/docs/lol/league-tool/what-is-league-tool' },
          { text: '功能', link: '/docs/lol/league-tool/features' },
          { text: '关于', link: '/docs/lol/league-tool/about' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: '下载', link: '/docs/lol/league-tool/download' },
          { text: '更新日志', link: '/docs/lol/league-tool/changelog' },
        ],
      },
    ],
    '/docs/lol/web-resources': [
      {
        text: '官网资源',
        items: [{ text: '介绍', link: '/docs/lol/web-resources/' }],
      },
    ],
  };
}
