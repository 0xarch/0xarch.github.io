---
date: 2026-05-24T13:04:17.835Z
permalink: /article/QDDGOWMYIFOTImcT/
title: 日用： Windows 11 与 Linux 共存
tags: 
  - Windows
  - Linux
  - Linux 日用
category:
  - 操作系统
---
关于在使用 Linux 作为日用时，如何恰当的让 Windows 和 Linux 双系统各司其职。

<!-- more -->

## 总览

!!! note 简单总结 Windows 和 Linux 的区别
*   Windows 的图形界面问题更多，但使用简单。Linux 的图形界面体验统一优秀，但需要花点功夫配置。
*   Windows 的适配软件数量是压倒性的优势，但 Linux 的软件适配也正在逐步提升，且具有 Wine (包括 Proton) 可以运行大部分未适配的软件。
*   部分软件即使未适配 Linux, 其在 Linux 上通过兼容层运行反而比 Windows 上的性能/体验更好 (如 GTAV)。
*   Windows 通常具有更多的底层问题（如在作者的笔记本上会不定时自动重启），Linux 虽然开源活跃，但同样具有漏洞（如近期的Dirty Frag, Copy Fail, Fragensia) 但比 Windows 少，且修补及时。
*   NVIDIA 系在 Windows 上有更好的表现，在 Linux 上表现极差。 _So, NVIDIA, *uck you —— Linus Torvalds_
!!!

就 Windows 与 Linux 的优缺点对比来看，作者更倾向于将 Linux 作为主要系统，而 Windows 仅在部分场景（如游戏等）使用。
以下是作者推荐（同时正在使用）的系统环境：

* Windows: 使用 Windows 11 专业版，保持系统更新

* Linux: 使用 Arch Linux, 并使用 Hyprland 搭配 end_4 的 [Hyprland配置](https://github.com/end-4/dots-hyprland) 作为桌面环境

### 微调

若想合理分配资源，推荐应用以下调整：


#### Windows

* 使用更轻量且精准的火绒替代 Windows Defender，移除大部分系统预装软件

* 基于最佳性能配置，启用字体平滑和UI元素改进

* 使用纯色壁纸，始终使用亮/暗色模式，关闭动态计算主题色（推荐使用森绿色）

* 关闭小组件、屏幕键盘等（如果不需要的话）

#### Linux

* 使用 linux-zen 内核，其通常具有更好的性能，或使用 linux-git 获得更快的修复和更新的功能

* 基于性能考量决定是否启用视觉效果提升（如半透明、背景模糊等）

* 照常进行外观自定义和快捷键自定义

* 考虑安装 Wine 来尽量减少切换系统的次数以提升效率

### 软件

作者使用的以下软件都已适配 Linux, 可从软件源或 Flathub 下载:

* QQ: 官网(.deb, .rpm), AUR, Flathub
* 微信: 官网(.deb, .rpm), AUR, Flathub
* Steam: 几乎所有渠道
* Ubuntu: 官网(ISO)。尽管 ubuntu 是发行版，但基于其设计理念和Canonical的怪异操作，应当作为软件考量
* 部分 Steam 游戏: 相当多的游戏都已经适配了 Linux

以下软件被证实可以使用 Wine(及Proton) 运行，且体验较好：

* 部分 Steam 游戏: 如 GTAV, 戴森球计划 等
* 部分老软件： CnC Tools, XCC Mixer, DTA Client 等
* MagicaVoxel: 可通过 AUR 下载
* 心灵终结: 取决于是否为环境安装了 dxvk 支持，按需使用 OpenGL 客户端或 DirectX 客户端
* FA2SP: 可能在保存文件时出现假失败，但实际上数据被保存了

部分作者游玩的游戏尚未支持 Linux:

* 原神（国服）
* 崩坏：星穹铁道（国服）

### 特调

由于作者游玩的游戏中有这么一组：原神，崩铁，都市天际线，前两者在更新时需要下载较大的安装包，而后者需要配置一些虚拟内存才能流畅游玩，综合考虑后将都市天际线安装在 Windows 上（即使其有 Linux 版本），如此可以节约部分磁盘空间。
