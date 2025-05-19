---
title: 快速入门
date: 2025-05-19 21:42:48 
tags:
    - Fewu
    - Guide
category: Guides
language: zh-CN
---
关于 Fewu 的各项操作。
<!--more-->

## 快速入门：新建一篇文章

```shell
npx fewu new "First post" source/posts/my-first-post.md -c MyArticles -t First
```

参数解释：

### new

指定操作为**新建文章**。

### `-c`

指定新建文章的分类，后接 n 个参数。

### `-t`

指定新建文章的标签，后接 n 个参数。

## 操作一览

* `new`: 创建文章。见 [快速入门：新建一篇文章](快速入门：新建一篇文章)

* `init`：初始化生成器所需资源。

* `help`：显示帮助选项。

* `*`(空操作或其他操作符)：运行生成器。

## 生成器参数

以下参数在运行生成器时有效：

* `--server`：将运行结果保存在缓存中并开启临时服务器(`localhost:3000`)。
