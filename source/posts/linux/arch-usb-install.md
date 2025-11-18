---
title: 在 USB Disk 上安装 ArchLinux 需要的 GRUB 命令
category:
  - Code Snippets
tags:
  - Linux
createTime: 2025/08/02 12:10:14
permalink: /article/q3lwh1nd/
---
You do know that, right?

<!-- more -->

```sh
grub-install --removable --efi-directory=/boot/efi --target=x86_64-efi /dev/sda
```