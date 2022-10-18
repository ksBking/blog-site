---
group: code
title: Node.js
---

# Node.js

Node.js 是一个免费、开放、跨平台的 JavaScript 运行环境，允许开发者在浏览器之外编写命令行工具和服务器端脚本。

## 快捷链接

- [官方网站](https://nodejs.org/zh-cn/)
- [官方网站（新）](https://nodejs.dev/en/)
- [官方文档](https://nodejs.org/zh-cn/docs/)
- [官方文档（新）](https://nodejs.dev/en/download/)
- [官网下载](https://nodejs.org/zh-cn/download/)
- [官网下载（新）](https://nodejs.dev/en/api/)

## 什么是 Node.js？

Node.js（简称 Node）是开源服务器端 JavaScript 运行时环境。可以使用 Node.js 在浏览器以外的多个位置（例如服务器上）运行 JavaScript 应用程序和代码。

Node.js 是名为 [V8](https://nodejs.dev/en/learn/the-v8-javascript-engine/) 的 JavaScript 引擎的包装器，它支持许多浏览器，包括 Google Chrome、Opera 和 Microsoft Edge。通过在浏览器外使用 V8 引擎，可以使用 Node.js 来运行 JavaScript。Node.js 还包含在服务器上运行的应用程序可能需要的许多 V8 优化。例如，Node.js 添加了“缓冲区”类，使 V8 可以处理文件。这使 Node.js 成为了构建 Web 服务器等的不错选择。

即使你从未使用过 JavaScript 作为主要编程语言，也可选择它来编写功能强大的模块化应用程序。JavaScript 还具有一些独特的优势。例如，由于浏览器使用 JavaScript，因此你可以使用 Node.js 在浏览器和服务器之间共享窗体验证规则等逻辑。

随着单页应用程序的兴起，JavaScript 变得越来越重要，并支持广泛使用的 JavaScript 对象表示法（JSON）数据交换格式。许多 NoSQL 数据库技术（例如 CouchDB 和 MongoDB）也将 JavaScript 和 JSON 用作查询和架构格式。Node.js 使用许多新式服务和框架所使用的语言和技术。

可以使用 Node.js 生成以下类型的应用程序：

- HTTP Web 服务器
- 微服务或无服务器 API 后端
- 用于数据库访问和查询的驱动程序
- 交互式命令行接口
- 桌面应用程序
- 实时物联网（IoT）客户端和服务器库
- 适用于桌面应用程序的插件
- 用于文件处理或网络访问的 Shell 脚本
- 机器学习库和模型

Node.js 环境还提供了一个 npm 注册表，可用于共享你自己的 Node.js 库。

## Node.js 的工作原理

Node.js 基于单线程事件循环。此体系结构模型可高效地处理并发操作。并发是指事件循环在完成其他工作之后执行 JavaScript 回叫函数的能力。

在此体系结构模型中：

- 单线程是指 JavaScript 只有一个调用堆栈，一次只能执行一项任务。
- 事件循环运行代码，收集和处理事件，并在事件队列中运行下一个子任务。

此上下文中的线程是操作系统可以独立管理的单个编程指令序列。

在 Node.js 中，I/O 操作（例如，读取磁盘文件或对其写入，或者对远程服务器进行网络调用）被视为阻止操作。阻止操作会阻止所有后续任务，直到该操作完成，然后才能继续下一个操作。在非阻止模型中，事件循环可以同时运行多个 I/O 操作。

名称“事件循环”描述“忙碌-等待”机制的使用方式，该机制以同步方式等待消息到达，然后再处理消息。下面显示了一个事件循环实现：

```JavaScript
while (queue.wait()) {
  queue.process();
}
```

### Node.js 体系结构

Node.js 使用事件驱动的体系结构，其中的事件循环处理编排，辅助角色池阻止任务。事件循环使 Node.js 能够处理并发操作。下图大致说明了事件循环的工作原理：

![显示 Node.js 如何使用事件驱动的体系结构的关系图，其中的事件循环处理业务流程，辅助角色池阻止任务。](https://learn.microsoft.com/zh-cn/training/advocates/intro-to-nodejs/media/event-loop.svg)

事件循环的主要阶段包括：

- 计时器处理由 setTimeout() 和 setInterval() 计划的回叫。
- 回叫运行挂起的回叫。
- 轮询检索传入的 I/O 事件并运行与 I/O 相关的回叫。
- 检查允许完成轮询阶段后立即运行回叫。
- 关闭回叫关闭事件（例如 socket.destroy()）和回叫（例如 socket.on('close', ...)）。

Node.js 使用工作线程池来处理阻止任务，例如阻止 I/O 操作以及占用大量 CPU 的任务。

总而言之，事件循环运行为事件注册的 JavaScript 回叫，还负责实现非阻止异步请求（如网络 I/O）。

#### 性能

JavaScript 可以产生与低级语言（例如 C）相同的性能结果，因为 V8 引擎可以提高性能。Node.js 还利用了 JavaScript 独特的事件驱动特性，可以快速高效地编写服务器任务。

#### 异步编程

为支持功能强大的基于事件的编程模型，Node.js 提供了一组内置的非阻止 I/O API 来处理文件系统和数据库操作等常见任务。这些 API 由 libuv 库提供。当你请求 Node.js 读取磁盘中的文件内容时，Node.js 不会阻止等待磁盘和文件描述符准备就绪。当文件准备就绪时，非阻止 I/O 接口将通知 Node.js。当触发鼠标或键盘事件，或者从远程终结点接收到 XMLHttpRequest（XHR）响应时，该非阻止 I/O 的工作方式与浏览器通知代码时的方式相同。

![显示 Node.js 用于处理常见任务的一组内置的非阻止 I/O API 的图表。](https://learn.microsoft.com/zh-cn/training/advocates/intro-to-nodejs/media/architecture.svg)

### 安装和使用 Node.js

可以通过多种方式来安装 Node.js。以下介绍了一些最常见的方式：

- 通过可执行文件进行安装：Node.js 下载页 <https://nodejs.org/zh-cn/download/> 提供不同操作系统的安装包。

- 通过 Brew 安装：[Homebrew](https://brew.sh/)（简称 Brew）是适用于 Linux 和 macOS 的常用包管理器。

- 通过 nvm 安装：[节点版本管理器（nvm）](https://nodejs.org/en/download/package-manager/#nvm)不仅有助于安装所需的 Node.js 版本，还有助于管理安装。本部分不会介绍 nvm 选项。

#### 通过可执行文件进行安装

以下页面摘录自`https://nodejs.org/zh-cn/download/`下载位置中的“安装”页：

![Node.js 安装页的屏幕截图，显示可用安装程序和源代码。](https://learn.microsoft.com/zh-cn/training/advocates/intro-to-nodejs/media/install-page.png)

请注意不同操作系统（如 Windows、macOS 和 Linux）可使用的各种安装程序。 你还可以下载两个不同的源代码版本：

- LTS 是长期支持的缩写，被描述为“推荐给大多数用户”。LTS 适用于可能无法进行频繁更新或不需要频繁更新的企业。

- 当前表示源代码处于积极开发阶段。 可能会添加功能以及出现中断性变更。 代码应遵循语义版本控制。

根据你的公司的要求选择版本。 例如，如果需要经常更新，则当前版本可能适合你。

若要详细了解各种版本类型，请参阅[版本类型](https://github.com/nodejs/node#release-types)。

#### 验证安装

安装 Node.js 后，请在终端中运行以下命令以验证安装是否成功：

```bash
node --version
```

该命令应以以下格式显示当前版本：

```
v[major version].[minor version].[patch version]
```

此示例中的括号 `[]` 指示结果可能会有所不同，具体取决于系统上安装的版本。

## 为什么需要 Node.js？

Node.js 是许多公司、初创公司和政府组织使用最广泛的技术之一。 其中包括 Netflix、Trello、Walmart、Uber、eBay 和 NASA 等大型企业。

Node.js 是 JavaScript 运行时，特殊情况下可以在服务器上（通常是在非浏览器位置上）运行 JavaScript 应用程序和代码。 Node.js 是基于事件驱动的 I/O 范例的单线程、非阻止的运行时。 非阻止特性具有重要意义，例如，当远程客户端发出请求时，使用 JavaScript 编写并在 Node.js 上运行的服务器将处理该请求，然后构造并返回响应，接着继续处理下一个请求，不会进行阻止且无需等待其他任务完成。

### 多用途技术

Node.js 可用于构建各种可直接用于生产的应用程序。 这些应用的范围从传统的轻量级大流量聊天程序到命令行工具和 Web 服务器。 Node.js 经过重新设计，可以处理大量并发请求。

### JavaScript

“所有可以使用 JavaScript 编写的应用程序最终都将使用 JavaScript 编写。” – Jeff Atwood，作者、企业家、StackOverflow 的联合创始人。

如今，许多非浏览器位置上的应用程序都是使用 JavaScript 编写的，或者支持 JavaScript 作为优先语言，包括：

- Visual Studio Code 和 Atom 等代码编辑器，是使用 JavaScript 或 TypeScript（具有静态类型的 JavaScript 的超集）编写的。 这些编辑器可以运行嵌入式版本的 Node.js 运行时。
- 许多物联网 (IoT) 和实时应用程序，是使用 JavaScript 编写的，并且基于 Node.js 在服务器或者通过微控制器和芯片上系统 (SoC) 平台（例如 Puck.js 或 Tessel）运行。
- NativeScript 等技术，可以使用 JavaScript 或 TypeScript 构建高性能的本机移动应用程序。
- 许多应用程序，在其插件系统（例如 Sketch、Adobe XD 和 Google Apps Script）中使用 JavaScript。

### 社区

社区已为 Node.js 构建了逾一百万个模块和库，并将这些模块和库发布到了节点包管理器 (npm)。 开发人员可以轻松下载这些模块并将其集成到他们的现有项目中。 可在 Node.js 上运行的应用程序包括命令行工具、框架、Web 服务器等。

### 开源

Node.js 是受 OpenJS Foundation 支持的开源技术。 一个活跃的大型开源社区和其中的贡献者正在不断努力改进和优化该技术。 顶级社区委员会在社区发展工作方面具有权威。

## 关于 Node.js

作为一个异步事件驱动的 JavaScript 运行时，Node.js 被设计用来构建可扩展的网络应用。在下面的“Hello World”示例中，可以并发处理许多连接，每一个连接都会触发一个回调，而当没有可做的事情时，Node.js 就会进入休眠状态。

```JavaScript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

这与当今比较常见的采用操作系统线程的并发模型形成了鲜明对比。基于线程的网络效率相对较低且更难以使用。此外，由于没有锁，Node.js 的用户不用担心进程死锁的问题。Node.js 中几乎没有函数直接执行 I/O 操作（除非你使用 Node.js 标准库中的同步函数版本），其进程从不会被阻塞，因此用 Node.js 来开发可扩展系统是非常合理的。

如果你对上面的描述有一些不理解地方，这里有一篇专门关于[阻塞对比非阻塞](https://nodejs.org/zh-cn/docs/guides/blocking-vs-non-blocking/)的文章供你参考。

---

Node.js 在设计上类似于 Ruby 的 [Event Machine](https://github.com/eventmachine/eventmachine) 或 Python 的 [Twisted](https://twistedmatrix.com/trac/) 之类的系统。但 Node.js 更深入地考虑了事件模型，它将[事件循环](https://twistedmatrix.com/trac/)作为一个运行时结构而不是作为一个库来呈现。在其他系统中，总是有一个阻塞调用来启动事件循环。通常情况下，要执行的行为是通过脚本开始时的回调来定义的，然后通过`EventMachine::run()`这样的阻塞调用来启动服务器。而在 Node.js 中，没有这种启动事件循环的调用。Node.js 在执行输入脚本后直接进入事件循环，当没有更多的回调要执行时，Node.js 就会退出事件循环。这种行为就像浏览器的 JavaScript 一样——事件循环对用户是隐藏的。

HTTP 是 Node.js 中的一等公民，设计时考虑到了流式和低延迟，这使得 Node.js 非常适合作为网络库或框架的基础。

Node.js 被设计成单线程运行，但这并不意味着你无法利用到 CPU 的多个核心。你可以通过 [child_process.fork()](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options) API 来生成子进程，并且它被设计成非常易于通信。而建立在同一个接口之上的 [cluster](https://nodejs.org/api/cluster.html) 模块允许你在进程之间共享套接字（sockets），以实现核心的负载均衡。
