---
title: Arch Linux 特殊平台处理一览
category:
  - Code Snippets
tags:
  - Linux
date: 2026/05/12 12:10:14
permalink: /article/oq3lwh1nd/
---
在特殊平台上安装 Arch Linux 的额外注意事项

<!-- more -->

# USB 额外操作

```sh
grub-install --removable --efi-directory=/boot/efi --target=x86_64-efi /dev/sda
```

# WSL 额外操作

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
```
