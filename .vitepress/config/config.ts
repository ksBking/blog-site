interface navConfig {
  name: string;
  title: string;
  groups: navGroup[];
}

interface navGroup {
  name: string;
  title: string;
  menus?: string[];
}

interface sideGroup {
  name: string;
  title: string;
  menus?: string[];
}

export const navConfig: navConfig[] = [
  {
    name: 'docs',
    title: '文档',
    groups: [
      {
        name: 'lol',
        title: '英雄联盟',
      },
      {
        name: 'system',
        title: '操作系统',
      },
      {
        name: 'code',
        title: '编程',
      },
    ],
  },
  {
    name: 'tools',
    title: '工具',
    groups: [
      {
        name: 'devtool',
        title: '开发工具',
      },
    ],
  },
  {
    name: 'projects',
    title: '项目',
    groups: [],
  },
];

export const sideConfig: { [path: string]: sideGroup[] } = {
  '/docs/windows/': [
    {
      name: 'setup',
      title: '开始',
      menus: ['activation'],
    },
    {
      name: 'optimize',
      title: '优化',
      menus: ['setting'],
    },
  ],
  '/tools/vscode/': [{ name: 'config', title: '配置', menus: ['setting'] }],
};
