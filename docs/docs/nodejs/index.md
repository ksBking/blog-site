# Node.js 配置

## 下载安装

Node.js 下载：[官网下载](https://nodejs.org/zh-cn/)

## 配置 npm

:::tip 提示
修改配置需要设置 Node.js 文件夹安全权限（属性-安全-编辑-选择自己的账户-勾选完全控制）
:::

- 设置淘宝镜像地址
  ```shell
  npm config set registry https://registry.npmmirror.com/
  ```
- 修改默认缓存位置
  ```shell
  npm config set cache E:\nodejs\node_cache\
  ```
- 修改默认全局包位置
  ```shell
  npm config set prefix E:\nodejs\
  ```
- 设置 Electron 镜像
  ```shell
  npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
  ```
- 设置 electron-builder-binaries 镜像
  ```shell
  npm config set electron_builder_binaries_mirror https://npm.taobao.org/mirrors/electron-builder-binaries/
  ```
- 修改 pnpm store-dir
  ```shell
  npm config set store-dir E:\.pnpm-store\v3
  ```
- 修改 pnpm auto-install-peers
  ```shell
  npm config set auto-install-peers true
  ```
- 修改 pnpm node-linker
  ```shell
  npm config set node-linker hoisted
  ```
- 修改 pnpm public-hoist-pattern
  ```shell
  npm config set public-hoist-pattern *
  ```
- 修改 pnpm shamefully-hoist
  ```shell
  npm config set shamefully-hoist true
  ```

## pnpm 安装

- 使用 npm 全局安装
  ```shell
  npm install -g pnpm
  ```

:::info 一键配置上述所有（复制运行）

```
npm config set registry https://registry.npmmirror.com/;
npm config set cache E:\nodejs\node_cache\;
npm config set prefix E:\nodejs\;
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/;
npm config set electron_builder_binaries_mirror https://npm.taobao.org/mirrors/;
npm config set store-dir E:\.pnpm-store\v3;
npm config set auto-install-peers true;
npm config set node-linker hoisted;
npm config set public-hoist-pattern \*;
npm config set shamefully-hoist true;
npm install -g pnpm;
```

:::
