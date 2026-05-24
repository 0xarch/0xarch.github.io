---
date: 2026-04-12T04:46:46.385Z
permalink: /article/dIYMJBNNNHBakCWF/
title: 换到 Linux Mint 的第一天
tags: 
    - Linux
    - Linux Mint
category:
    - 操作系统
---

由于实在无法忍受 Windows 11 充斥的石山问题，以及我笔记本在 Windows 下存在的偶现死机，遂决定切换至 Linux Mint。

<!--more-->

不重新启用 Arch Linux 的一大原因是其在日用上有很多小问题需要用户翻找 Wiki、Forum 等地解决，尽管并不难但是十分繁琐，而我最近又刚做完手术十分不愿意动脑子，于是便打算试试这个常年受推荐的 Linux Mint。本文即是在 Linux Mint 上使用 Code 写作。

不得不说 Debian 系打包权重就是高，各种第三方软件基本都会为 Debian 打一个（几个）包，省去了 AUR 有时抽风以及本地编译耗费的较长时间，某些源代码托管在 GitHub,OpenCode 等平台的项目更是在没有安装好代理前寸步难行。这一点 Linux Mint 作为一个新手发行版是非常好的优点。

Cinnamon 桌面是 Linux Mint 一大吸引人的点，尽管已经 2026 年了 Mint 还在 X11 上（也许 Linux Mint 23 会改善这一点），但考虑到基于 Ubuntu 24.04 LTS 这么一个两年前的发版也就不足为奇了。至少目前 Wayland 还没有能主动吸引我的点。

曾经用惯了 KDE 我下意识认为 Cinnamon 像 Xfce4、LXQt 那样残缺且割裂，但事实上 Linux Mint 的 Cinnamon 做的相当不错，内置的主题看上去是打磨了很久的，但有些地方（比如注销菜单，输入密码）依然是GNOME40+的大圆角，这种小瑕疵暂且还属于可以接受的范围内。

Linux Mint 22.3 作为一个基于2年前软件源的版本，几乎不用想哪些新软件可以用。最好的方式是使用 [Flathub](//flathub.org) 安装 Flatpak 版，可以考虑用镜像加速 Flathub，系统本身的镜像支持很好，可以通过图形化配置（diss一下某吃豆人发行版），国内专门给 Linux Mint 做支持的镜像站也很多，不必担心如 TUXEDO OS 那样无源可用的尴尬（但 TUXEDO OS 的 KDE 桌面又弥补了这一点），日常使用影响不大，作为一个 LTS 发行版，通常几个周也不会有软件大版本更新，不天天更新也不用担心更新完挂掉（再diss一下某吃豆人发行版）。
