---
title: Arch Linux 下 Git 配置
date: 2024-02-24
tag:
    - Git
category:
    - Linux
highlight: true
license: CC-BY-SA
icon: teenyicons:git-outline
---

Linux 下使用 Git 和 Github 连接的基本配置，包括账户、SSH等。
本文为 [Git 常用命令大全] 的子集。

<!-- more -->

# Linux 下 Git 配置

## 账户

```bash
git config --global user.name $USER_NAME
git config --global user.email $USER_EMAIL
```

## SSH

```bash
ssh-keygen -t ed25519 -C $USER_EMAIL
```

默认公钥位置： `$HOME/.ssh/id_ed25519.pub`