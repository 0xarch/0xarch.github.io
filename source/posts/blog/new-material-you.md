---
title: 全新的 Material Design 风格博客
date: 2025/01/20 12:23
tags: MaterialYou
category: Uncategorized
image: https://lh3.googleusercontent.com/lwWJ1I9mCa12dXPKjFO-L63HNTKf2dj7LX9oPRN_zwiKVa63rv9NoG6Chhs3t227euFj735AbW7uwMglCNnRjx3PXWKQ4mXhMdere9CWTvXB3tPUNY4
---
<!--more-->
博客主题正在逐步迁移至 Material Design，部分界面仿照 <m3.material.io/blog>。

基本切换至 Material Design 的组件：顶栏，搜索界面，Upnext，页面导航，文章卡，页面布局，文章目录

部分切换至 Material Design 的组件：作者简介，文章信息卡

未切换：Giscus

删除的分类卡和标签卡被替换为分类总览和标签总览，通过导航栏进入。

字体全部使用 Google Sans 和 `Google Sans Mono`，当不可用时回退至系统字体。

颜色使用 `material-color-utilities` 生成。取消动态调整功能（高占用，依赖库庞大），需要在 `config.yaml` 中手动指定颜色`_custom_color`。