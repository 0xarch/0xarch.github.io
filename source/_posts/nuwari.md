---
date: 2026-07-18T14:39:57.609Z
permalink: /article/NXVSaEIptZ91E21A/
title: Nuwari 主题？
tags:
    - Nuwari
category:
    - 博客 
---

Nuwari 是什么？ Nuwari 要做什么？ Nuwari 怎么用？

<!--more-->

## Nuwari / NEXTario

Nuwari / NEXTario 是 Next 主题的非官方分支，在既有的 Next 主题几近停止维护， Fewu 本身也较不活跃的情况下，分支出来以便后续使用。Nuwari 由本站作者进行维护，且主要在 Codeberg 上进行更新。

> 其实 Next 主题也是作者做的但是 GitHub 上面堆了太多史于是直接到 Codeberg 另起炉灶了

Nuwari 在原有的基础上仿照 Firefly 的控件设计添加了构建信息、系统信息和目录三个独立组件，并对部分逻辑进行了修改。
并顺便修复了部分已知问题~~然后成功地将多语言支持破坏掉了~~。

> 多语言支持原先存在部分问题并在主题进行拓展时被揭露，Nuwari 已将其修复。

## 迁移？无感

Nuwari 对原有配置项目保持 100% 兼容性，至少目前还是。

Nuwari 仅新增了一个配置项： `setup_date`。本配置项告知主题该网站初次运行的日期，以便于主题计算运行天数。若没有填写 `setup_date` 则会自动禁用运行天数显示。需注意没有对错误的日期进行校验。

## 题外话： Ngwg

Fewu 从其原项目 Nexo 一路以来已经重构了 5 次，其目前的工作方式已经差不多达到近现代网站生成器的水准，不需要过多更改也可以凭借其~~完全不设防的~~扩展系统来由主题满足要求。

因此我决定将 Fewu 暂时搁置，从~~六~~零开始再写一个网站生成器。

Ngwg 将被设计为 Fewu 的继任者，通过 Shell 和 JavaScript（可能会添加其他编译型语言）来生成和管理，使用体验也许会与原 Fewu 类似，但杂糅了部分 Vuepress / Vitepress 的设计思想。

Ngwg 将不会考虑兼容 Windows ，所有代码都将以 (generic) Linux 为运行平台。

~~Ngwg目前还没新建文件夹~~
