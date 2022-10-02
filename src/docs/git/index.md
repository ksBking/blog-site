---
group: code
title: Git
---

# Git

## 将一个项目同时推送到多个 git 仓库

显示所有远程仓库：

1. 查看当前的远程库

```bash
git remote -v
```

```
origin  https://github.com/ksBking/ksbking.github.io.git (fetch)
origin  https://github.com/ksBking/ksbking.github.io.git (push)
origin  https://gitee.com/ksbking/ksbking.git (push)
```

2. 添加远程仓库

```bash
git remote set-url --add origin
```

再次查看当前的远程库(`git remote -v`)

```
origin  https://github.com/ksBking/ksbking.github.io.git (fetch)
origin  https://github.com/ksBking/ksbking.github.io.git (push)
origin  https://gitee.com/ksbking/ksbking.git (push)
```

完成
