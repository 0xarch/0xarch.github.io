---
title: uBlock Origin 注意事项
date: 2025-01-06
tags: 插件 开源软件
category: 前端技术
image: ublock-origin/icon.svg
---
在安装 uBlock Origin 之后，我遇到了许多问题。其中大部分是 uBlock Origin 的规则太奇怪导致的。
<!--more-->

uBlock Origin 通过直接阻断请求的方式来阻止广告。这种做法十分高效，但由于他们维护的十分庞大的匹配列表，许多原本正常的东西也被阻断在外。

## CDN

已知 BootCDN 与 staticfile 都被 uBlock Origin 阻断。除此以外还有其他 CDN 服务提供者因为部分被举报的链接而被整个屏蔽掉。

## Bilibili

Bilibili 首页的嵌入式广告也会受到 uBlock Origin 影响。尽管删除这些广告会使页面看上去非常不协调，他们还是这么做了。

## uBlock

uBlock Origin 把 uBlock 的网站也屏蔽了。需要指出这是两个独立的项目。我不知道他们阻断 uBlock 项目有什么意图。