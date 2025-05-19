---
title: 在 USB Disk 上安装 ArchLinux 需要的 GRUB 命令
date: 2024-11-17
category:
    - Linux
    - Code Snippets
---
You do know that, right?

<!-- more -->

```sh
grub-install --removable --efi-directory=/boot/efi --target=x86_64-efi /dev/sda
```