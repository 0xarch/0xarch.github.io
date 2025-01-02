---
title: "Fewu 3.0.0"
date: 2025-01-02 18:06
tags: 日志
category: SSG
---
Fewu 3.0.0 于 2025-01-02 正式发布，带来与 Fewu 2.0 完全不同的新体验。
<!--more-->

## 安装

通过 `npm i -g fewu` 来安装 fewu。默认安装最新版。

## 配置

Fewu 3.0.0 使用 `${pwd}/config.yaml` 作为配置文件，配置项与 Hexo 基本相同。

## 主题

Fewu 3.0.0 将主题文件夹更名为 `themes`， 更人性化。

Fewu 3.0.0 使用 Hexo 风格的主题结构，但 API 与 Hexo 有些许不同。

Fewu 3.0.0 使用 Helpers 来方便主题开发和逻辑插入。

## 使用

Fewu 在检测到 `config.yaml` 时会使用 3.0.0 的逻辑，在检测到 `config.json` 时将读取文件，若包含 `EXPERIMENTAL-V3` 或 `V3` 配置项将使用 3.0.0 逻辑，否则使用 2.0.0 逻辑。若 `config.yaml` 和 `config.json` 都不存在，则抛出错误。

::: caution
由于软兼容层，目前尚不可指定配置文件来构建
:::

