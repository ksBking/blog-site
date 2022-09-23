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
    socialLinks: [
      {
        icon: { svg: icon('tiktok') },
        link: 'https://www.douyin.com/user/MS4wLjABAAAACfoqCUSC9835wHc2RusDqCKxRNxqlez10oXBqpfjpS0',
      },
      { icon: { svg: icon('kuaishou') }, link: 'https://www.kuaishou.com/profile/3xbw3s3mwysg78c' },
      { icon: { svg: icon('bilibili') }, link: 'https://space.bilibili.com/397719567' },
      { icon: { svg: icon('gitee') }, link: 'https://gitee.com/ksbking' },
      { icon: 'github', link: 'https://github.com/ksBking' },
    ],
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
              text: '官网资源',
              link: '/docs/lol/web-resources/',
            },
          ],
        },
        {
          text: 'Node.js',
          link: '/docs/nodejs/',
        },
      ],
    },
    {
      text: '工具',
      activeMatch: '/tools/',
      items: [
        {
          text: '开发工具',
          items: [
            {
              text: 'VSCode',
              link: '/tools/devtool/vscode/',
            },
          ],
        },
      ],
    },
    {
      text: '项目',
      activeMatch: '/projects/',
      items: [
        {
          text: '英雄联盟',
          items: [
            {
              text: 'LeagueTool',
              link: '/projects/lol/league-tool/',
            },
          ],
        },
      ],
    },
    { text: '赞赏', link: '/sponsor/' },
  ];
}

function sidebar() {
  return {
    '/docs/lol/web-resources/': [
      {
        text: '官网资源',
        items: [{ text: '介绍', link: '/docs/lol/web-resources/' }],
      },
    ],
    '/tools/devtool/vscode/': [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/tools/devtool/vscode/' },
          { text: '下载', link: '/tools/devtool/vscode/setup/download' },
        ],
      },
      {
        text: '配置',
        items: [{ text: '设置', link: '/tools/devtool/vscode/config/setting' }],
      },
    ],
    '/projects/lol/league-tool/': [
      {
        text: '开始',
        items: [{ text: '简介', link: '/projects/lol/league-tool/' }],
      },
      {
        text: '使用',
        items: [
          { text: '功能', link: '/projects/lol/league-tool/use/features' },
          { text: '关于', link: '/projects/lol/league-tool/use/about' },
          { text: '下载', link: '/projects/lol/league-tool/use/download' },
          { text: '更新日志', link: '/projects/lol/league-tool/use/changelog' },
        ],
      },
    ],
  };
}

function icon(icon) {
  const icons = {
    tiktok:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    gitee:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>',
    bilibili:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>',
    kuaishou:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kuaishou</title><path d="M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.218 4.218 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903 2.015 2.015 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024 2.044 2.044 0 0 1 .919.218l3.673 1.85a4.218 4.218 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004 3.463-1.756V17.51l-3.467-1.73a.557.557 0 0 0-.249-.06zM9.28 0a5.667 5.667 0 0 1 4.98 2.965 4.921 4.921 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863 0 2.686-2.2 4.863-4.912 4.863a4.921 4.921 0 0 1-3.996-2.034 5.651 5.651 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687C3.61 2.546 6.149 0 9.28 0Zm8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4z"/></svg>',
  };
  return icons[icon];
}
