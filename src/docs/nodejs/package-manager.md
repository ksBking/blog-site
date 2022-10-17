---
title: 包管理器
---

# Node.js 包管理器

安装 Node.js 后会带有默认的 Node.js 包管理工具 npm

## NPM

npm 是随同 Node.js 一起安装的包管理工具，是常用的前端包管理工作。

### 配置 NPM

:::tip 提示

- 修改配置后无法使用

  如果默认位置修改在某些目录下无法使用，很大可能是对该目录的权限不够，可尝试用管理员身份执行命令或修改配置的文件夹安全权限（属性-安全-编辑-选择自己的账户-勾选完全控制）

- 如果路径有空格，执行命令设置时需要使用引号将路径包起来
  :::

- 淘宝镜像

  ```
  npm config set registry https://registry.npmmirror.com/
  ```

  :::details 其他包镜像

  - Electron 镜像

  ```
  npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
  ```

  - electron-builder-binaries 镜像

  ```
  npm config set electron_builder_binaries_mirror https://npm.taobao.org/mirrors/electron-builder-binaries/
  ```

  :::

- 默认位置

  - 缓存位置（`E:\nodejs\node_cache\`为使用 npm 安装包时缓存的位置）

  ```
  npm config set cache E:\nodejs\node_cache\
  ```

  - 全局包位置（`E:\nodejs\node_cache\`为使用 npm 安装的全局包的位置）

  ```
  npm config set prefix E:\nodejs\
  ```

## PNPM

pnpm 是速度快、节省磁盘空间的软件包管理器。

### 安装 PNPM

使用 npm 安装

```
npm install -g pnpm
```

### 配置 PNPM

pnpm 与 npm 共用一个配置文件(.npmrc)

- 默认位置

  - 缓存位置(`E:\.pnpm-store\`为使用 pnpm 使用包时缓存的位置)

  ```
  pnpm config set store-dir E:\.pnpm-store\
  ```

- 对等依赖项自动安装

  ```
  pnpm config set auto-install-peers true
  ```
