---
group: code
title: Git
---

# Git

Git 是一个[免费和开源](https://git-scm.com/about/free-and-open-source)的分布式版本控制系统，旨在以速度和效率处理从小型到大型项目的所有内容。

Git [易于学习](https://git-scm.com/doc)，[占用空间小，性能快如闪电](https://git-scm.com/about/small-and-fast)。它优于 SCM 工具，如 Subversion, CVS, Perforce, 和 ClearCase，具有[廉价的本地分支](https://git-scm.com/about/branching-and-merging)，[方便的暂存区域](https://git-scm.com/about/staging-area)，和[多个工作流](https://git-scm.com/about/distributed)等功能。

## 快捷链接

- [官方网站](https://git-scm.com/)
- [官方文档](https://git-scm.com/book/zh/v2)
- [下载地址](https://git-scm.com/downloads)

### 全局配置

配置个人的用户名和电子邮箱

```
git config --global user.name ksBking
git config --global user.email user@example.com
```

### 同时推送到多个仓库

1. 查看当前的远程库

```bash
git remote -v
```

```
origin  https://github.com/ksBking/ksbking.github.io.git (fetch)
origin  https://github.com/ksBking/ksbking.github.io.git (push)
```

2. 添加远程仓库

```bash
git remote set-url --add origin
```

3. 再次查看当前的远程库(`git remote -v`)

```
origin  https://github.com/ksBking/ksbking.github.io.git (fetch)
origin  https://github.com/ksBking/ksbking.github.io.git (push)
origin  https://gitee.com/ksbking/ksbking.git (push)
```
