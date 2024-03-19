---
title: Linux下Git配置
date: 2024-02-24
category: Git
tags: Linux Git
top: false
imageUrl: https://static.wixstatic.com/media/84da5a_9b561eb52739462e98be571a138b2ebe~mv2.png/v1/fill/w_1000,h_293,al_c,usm_0.66_1.00_0.01/84da5a_9b561eb52739462e98be571a138b2ebe~mv2.png
highlight: true
---

Linux 下使用 Git 和 Github 连接的基本配置，包括账户、SSH等

<!--more-->

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