---
title: Arch Linux 特殊平台安装笔记
category:
  - Code Snippets
tags:
  - archlinux
  - Linux
date: 2026/05/12 12:10:14
permalink: /article/oq3lwh1nd/
---
在特殊平台上安装 Arch Linux 的额外注意事项

<!-- more -->

## 便携式安装

以便携方式安装（如USB），需为 GRUB 添加 `--removable` 选项以正确生成引导。

```sh
grub-install --removable --efi-directory=/boot/efi --target=x86_64-efi /dev/sda
```

## 虚拟机

通常无需额外操作。

## WSL

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

其余操作基本无不同，注意提前设置密码：
```sh
# in WSL
passwd root
passwd %USER%
```

设置为默认发行版：
```sh
wsl --set-default archlinux
```

需注意，通常需要从 WSL 启用 systemd ，在此作备忘。
