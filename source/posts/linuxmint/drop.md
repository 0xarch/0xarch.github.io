---
date: 2026-05-12T04:19:00.000Z
permalink: /article/dIYMJBBNNHBakCWF/
title: 第30天 Linux Mint ：跑路
tags: 
    - Linux
category:
    - Linux 日用
---

由于实在无法忍受 Windows 11 充斥的石山问题，以及我笔记本在 Windows 下存在的偶现死机，遂决定切换至 Linux Mint ... 吗？

<!--more-->

我又一次抛弃了 Debian* 发行版回归了 Arch Linux 的怀抱。

主要是因为 Mint 作为一个小团队的发行版，其维护工作还是太紧张了。尤其是最近连续出现
的两个高危提权漏洞，在 Arch Linux 下我可以通过万能的 archlinuxcn 源直接安装从主线
源代码编译的内核，而 Debian* 要么自己编译，要么等上游。

不得不说的是，我上一篇文章中关于 Arch Linux 配置繁琐的结论并非正确，实际上现在
Arch Linux 已经提供了 `archinstall` 这个工具以支持用户便捷地安装系统（虽然我一次
也没用过），各类桌面环境现在对于开箱即用的支持也非常好（虽然我用 Hyprland），使用
终端进行系统管理的维护的次数大大减少。

本文在 Arch Linux 上使用 Neovim + Neovide + LazyVim 进行写作。

不得不说 Debian 系打包权重就是高，各种第三方软件基本都会为 Debian 打一个（几个）包，省去了 AUR 有时抽风以及本地编译耗费的较长时间，某些源代码托管在 GitHub,OpenCode 等平台的项目更是在没有安装好代理前寸步难行。这一点 Linux Mint 作为一个新手发行版是非常好的优点。

> Cinnamon 桌面是 Linux Mint 一大吸引人的点，尽管已经 2026 年了 Mint 还在 X11 
> 上（也许 Linux Mint 23 会改善这一点），但考虑到基于 Ubuntu 24.04 LTS
> 这么一个两年前的发版也就不足为奇了。至少目前 Wayland 还没有能主动吸引我的点。

> 曾经用惯了 KDE 我下意识认为 Cinnamon 像 Xfce4、LXQt 那样残缺且割裂，但事实上
> Linux Mint 的 Cinnamon 做的相当不错，内置的主题看上去是打磨了很久的，但有些地
> 方（ 比如注销菜单，输入密码）依然是GNOME40+的大圆角，这种小瑕疵暂且还属于可以接
> 受的范围内。
至少在日常体验上， Cinnamon 已经是一个相当成熟的桌面。但若要与 KDE 或
GNOME 这样的桌面相比还是略显贫瘠。

> Linux Mint 22.3 作为一个基于2年前软件源的版本，几乎不用想哪些新软件可以用。
> 最好的方式是使用 [Flathub](//flathub.org) 安装 Flatpak 版，可以考虑用镜像加速 
> Flathub，系统本身的镜像支持很好，可以通过图形化配置（diss一下某吃豆人发行版），
> 国内专门给 Linux Mint 做支持的镜像站也很多，不必担心如 TUXEDO OS  那样无源可用
> 的尴尬（但 TUXEDO OS 的 KDE 桌面又弥补了这一点），日常使用影响不大，作为一个 LTS 
> 发行版，通常几个周也不会有软件大版本更新，不天天更新也不用担心更新完挂掉
> （再diss一下某吃豆人发行版）。
如文初所写，LTS 固然不用操心稳定性问题，但一旦遇到突发情况也较为棘手，暂时收回对某
吃豆人发行版的 diss 。
