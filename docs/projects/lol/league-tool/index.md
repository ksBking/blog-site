# LeagueTool

LeagueTool ——《联盟助手》，为《英雄联盟》而生的绿色助手。

:::tip 提示
由于国服 WeGame 助手近期会更新全新版本，提供国服英雄数据，所以在此不再提供国服英雄数据及相关功能。

但是，我们依旧会提供其他平台的英雄数据及相关功能。
:::

## 我们是如何实现的？

LeagueTool 使用 [ELECTRON](https://www.electronjs.org/languages/zh-CN) +
[Vue 3](https://cn.vuejs.org/) +
[TypeScript](https://www.typescriptlang.org/zh/) +
[Vite](https://cn.vitejs.dev/)
等技术开发。

通过调用 [League Client API](#什么是-league-client-api-？) 实现与客户端交互。

## 什么是 League Client API ？

> Riot Games 技术 - [英雄联盟客户端架构更新](https://technology.riotgames.com/news/architecture-league-client-update)

![](https://technology.riotgames.com/sites/default/files/articles/40/lcuheader3.png)
在 2016 年英雄联盟客户端使用新的架构，称之为 League Client Update（简称 LCU） 。

新版架构可以分为底层和上层。

- 上层（LeagueClientUx.exe，LeagueClientUxRender.exe） 主要用于显示界面并与底层进行通信。

- 底层（LeagueClient.exe） 与上层和服务器进行通信，同时会启动一个服务以供第三方程序来与之通信。

![](https://static.developer.riotgames.com/img/docs/lol/lcu_architecture.png)

LeagueTool 与客户端连接监听其消息并向其发送请求，以实现相关功能。
