---
date: 2025-11-18T08:22:07.096Z
permalink: /article/PcbPaWMaSYUK3aLo/
title: WSL 2 配置 archlinux
tags:
    - Windows
    - Linux
category:
    - Code Snippets
---
命令行安装

<!-- more -->

必要准备：
*   Windows 功能 开启 Virtual Machine Platform（虚拟机平台）
*   WSL 版本至少为 2.6.0

安装：
```sh
wsl --install archlinux
```

设置用户：
```sh
wsl --manage archlinux --set-default-user %USER%
```
注意提前设置密码：
```sh
# in WSL
passwd root
passwd %USER%
```

设置为默认发行版：
```sh
wsl --set-default archlinux
```
