---
title: 版本控制(nvm)
---

# 适用于 Windows 的 NVM

nvm 全英文也叫 Node.js Version Management，是一个 Node.js 的版本管理工具。nvm 和 n 都是 Node.js 版本管理工具，为了解决 Node.js 各种版本存在不兼容现象可以通过它可以安装和切换不同版本的 Node.js。

:::warning 注意

- 如果执行命令报错请以管理员身份执行

- 您可能已安装的任何全局 npm 模块不会在已安装的 Node.js 的各个版本之间共享。  
  此外，您正在使用的 Node.js 版本可能不支持某些 npm 模块，因此请在工作时注意您的环境。

:::

## 下载 nvm

- [从 官方网站 下载](https://nvm.uihtm.com/)
- [从 Github 下载](https://github.com/coreybutler/nvm-windows/releases)

## 安装 nvm

:::danger 警告

1. 安装 nvm 前需要卸载之前安装的 Node.js
2. 安装路径不能有中文和空格

:::

1. 卸载之前的 Node.js 后再运行 nvm-setup.exe 进行安装
   ![](https://nvm.uihtm.com/images/step1.png)

2. 选择 nvm 安装路径
   ![](https://nvm.uihtm.com/images/step2.png)

3. 选择 Node.js 路径
   ![](https://nvm.uihtm.com/images/step3.png)

4. 确认安装即可
   ![](https://nvm.uihtm.com/images/step4.png)

5. 安装完确认
   打开终端，输入命令`nvm`，安装成功则如下显示
   ![](https://nvm.uihtm.com/images/step5.png)

## 配置 nvm

- 设置淘宝 Node.js 镜像，默认为`https://nodejs.org/dist/`

  ```
  nvm node_mirror https://npmmirror.com/mirrors/node/
  ```

- 设置淘宝 npm 镜像，默认为`https://github.com/npm/cli/archive/`

  ```
  nvm npm_mirror https://npmmirror.com/mirrors/npm/
  ```

## 安装 Node.js

使用`nvm list available`显示可下载版本的部分列表
![](https://nvm.uihtm.com/images/nvm-list-available.png)

- 使用`nvm install latest`安装最新版本的 Node.js。
- 使用`nvm install lts`安装稳定版本的 Node.js。
- 使用`nvm install <version>`安装指定版本的 Node.js，`<version>`为指定的 Node.js 版本号
  ![](https://nvm.uihtm.com/images/nvm-install-node.png)

## 查看已安装版本

使用`nvm list`或`nvm ls`查看目前已经安装的版本
![](https://nvm.uihtm.com/images/nvm-list1.png)

如果所有版本号前都没有`*`，说明此时还没有选择任何一个 Node.js 版本，这时执行 Node.js 命令会报错
![](https://nvm.uihtm.com/images/nvm-list2.png)

## 切换 node 版本

使用`nvm use <version>` 使用指定版本的 Node.js，`<version>`为指定的 Node.js 版本号  
选择完后执行`nvm ls`查看已安装的版本，会发现在启用的 Node.js 版本前面有`*`标记，这时就可以使用 Node.js 了
![](https://nvm.uihtm.com/images/nvm-use.png)

## nvm 命令

- `nvm version`：显示 nvm 版本。`version`可简化为`v`。

- `nvm arch [32|64]`：显示 Node.js 是在 32 位还是 64 位下运行。指定`32`或`64`以覆盖默认系统架构。

- `nvm on`：启用 Node.js 版本管理。

- `nvm off`：禁用 Node.js 版本管理（不卸载任何内容）。

- `nvm current`：显示当前使用的 Node.js 版本。

- `nvm list [available]`：显示已安装的 Node.js 列表。可选参数`[available]`，显示可下载所有的 Node.js 版本。`list`可简化为`ls`。

- `nvm install <version> [arch]`：安装 Node.js，`<version>`可以为特定版本或 `latest`(最新版本)，`lts`(稳定版本)。
  可选参数系统架构`[arch]`可以为`64-bit`(64 位), `32-bit`(32 位)或`all`(32 位和 34 位同时安装)，默认为当前系统架构。

- `nvm use <version> [arch]`：切换到指定的 Node.js 版本。`[available]`可以为特定版本或`latest`(最新版本)，`lts`(稳定版本)或`newest`(新版本)。 `[arch]`可指定 `32-bit`(32 位)或`64-bit`(64 位)。

- `nvm use <arch>`：将继续使用当前版本，但切换到`32`(32 位)或`64`(64 位)系统架构。

- `nvm uninstall <version>`：卸载特定版本 Node.js。`<version>`为指定的 Node.js 版本号。
  可以添加`--insecure`绕过远程服务器的 SSL。

- `nvm proxy [url]`：设置下载代理。如果未设置`[url]`，将显示当前代理。若`[url]`设置为`none`则移除代理。

- `nvm node_mirror <url>`：设置 Node.js 镜像。默认是`https://nodejs.org/dist/`。如果不写`<url>`，则设置为默认镜像。设置后可至安装目录`settings.txt`文件查看，也可直接在该文件操作。

- `nvm npm_mirror <url>`：设置 npm 镜像。默认是`https://github.com/npm/cli/archive/`。如果不写`<url>`，则设置为默认镜像。设置后可至安装目录`settings.txt`文件查看，也可直接在该文件操作。

- `nvm root [path]`：设置 nvm 存储不同版本 Node.js 的目录。如果未设置`[path]`，将显示当前根目录。
