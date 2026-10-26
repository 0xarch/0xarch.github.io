---
title: 关于
date: 2025-11-05T07:40:02.837Z
hidden: true
disable_adjacent: true
---

这是 0xarch / Soloev 的个人博客。

<!--more-->

## 近况

本账号于 2026-07-15 将新增代码托管于 Codeberg。 Ngwg 仍托管于 GitHub。

本人于近期将主力机器更换为了 Arch Linux, 使用 GNOME 作为图形界面。尽管 GNOME 曾经不尽人意，但目前仍然是一个较好的选择。
正在尝试使用 Neovide 与 ZCode 代替 VSCode。
> 使用 Arch Linux 是因为其良好的社区氛围与简单的包管理。但与此同时也许注意 AUR 参差不齐甚至可能含有病毒的现况。对此，大部分不在软件源中的软件包都被使用 Flatpak 安装。Flatpak 与 GNOME 合作的很好。  
>先前我曾使用 Hyprland + Hyperway 作为图形界面，但由于最近赞助 Hyprland 的 Omacom 基金会的大总统 DHH 的一系列争议较大的行为，其社区波动可能极大，需要考虑避免。  
> 就目前而言，其实使用 Arch Linux 还是 Fedora 或 Debian 并无多大区别。但需要区别开的是 Ubuntu，只有其主动为用户提供了可以完全移除 Snap 的选项后才能考虑。

## 游戏

目前尚无较为活跃的游戏。以下游戏在版本更新时较频繁游玩：

[![](//img.shields.io/badge/崩坏：星穹铁道-星穹列车-e1b066)](https://sr.mihoyo.com)
[![](//img.shields.io/badge/原神-天空岛-45b6ab)](https://ys.mihoyo.com)

以下游戏在闲适时会选择游玩：

<p style="display: flex; justify-content: start">
    <img style="margin: .5rem" src="//img.shields.io/badge/命令与征服-心灵终结-FF0088">
    <img style="margin: .5rem" src="//img.shields.io/badge/都市：天际线-Steam-134F82">
    <img style="margin: .5rem" src="//img.shields.io/badge/Minecraft-Java-EE303C">
</p>

以下游戏较少游玩：

<p style="display: flex; justify-content: start">
    <img style="margin: .5rem" src="//img.shields.io/badge/戴森球计划-Steam-134F82">
    <img style="margin: .5rem" src="//img.shields.io/badge/GTA%20V%20Enchanced-Steam-134F82">
    <img style="margin: .5rem" src="//img.shields.io/badge/围攻-Steam-134F82">
</p>

## 代码偏好

JavaScript 重度依赖，Fish 重度依赖，C略有涉足，爱好高尔夫。

## 写过的一些小项目

### Ngwg

[![Ngwg](//img.shields.io/badge/Ngwg-0.3.0-3273d2)](//github.com/Ngwgers/Ngwg-core)

[Ngwg](//github.com/Ngwgers/Ngwg-cli) 是一款基于 Fish 和 TypeScript 的静态博客生成器，也是 Fewu 的后继者。

Ngwg 本质上是 Fewu 的第 6 次重构。与之前5次不同的是，本次重构首次在代码中引入了 AI 生成的代码，这显著提高了 Ngwg 的开发速度。

Ngwg 将不会在 npm 上发布，而是托管于 GitHub （未来可能在其他社区设立镜像）。
考虑到 Codeberg 对 AI 生成的内容具有风险考虑，适用于 Codeberg 的 Ngwg 可能在由人工按文档重构后才能提供。

只需克隆 [Ngwg](//github.com/Ngwgers/Ngwg-cli) 的入口即可。

Ngwg 仅强依赖以下软件包：
- Fish, 用于执行主脚本
- Bun, 用于执行业务脚本
- Git, 用于插件、核心、主题等必需文件的管理

### Fewu

[![Fewu](//img.shields.io/badge/Fewu-UNMAINTAINED-aa0000)](//github.com/fewu-swg/fewu)

[Fewu](//github.com/fewu-swg/fewu) 是一个静态博客生成器，类似于 Hexo，但更加小巧。
Fewu 完全开源！但已停止更新。

Fewu 可以在 npm 上下载。包名为 `fewu-cli`，可执行文件名为 `fewu`。

同时，Fewu 有一个配套主题：
* `Next`，类 Fuwari。此主题具有与最新版 Fewu 最好的兼容性。
* `NEXTario`，类 Fuwari / Firefly 。是Next主题的分支。
