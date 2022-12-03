---
title: Hello Aexo!
date: 2022-11-24
tag: 
category: 
extension: basic chemistry
---
114514

Aexo是一个轻量博客框架，提供高度自定义和多个数据集合，通过模板生成，简单可靠。
<!--more-->
## 使用

全部生成：

```sh
node aexo.js g
```

清除生成：

```sh
node aexo.js i
```

新文章：

```sh
node aexo.js n <passage_name>
```

## Markarch

Markarch 是 Aexo 的拓展插件

（仍在更新）

拓展：化学方程式

语法：

使用\\$······\\$来定义一个化学方程式

使用\_\[number\|plus\(+\)/minus\(-\)\]定义下标

使用\^\[number\|plus\(+\)/minus\(-\)\]定义上标

使用\\{{condition\|type\|condition\\}}定义一个变换

使用\\\:代表一个普通的半角冒号

使用\\\$代表一个普通的半角美元符号

注意：请在物质和+中间写明空格

示例:
```plain
\$CH\_4 + 2O\_2\{{点燃\|=\}}CO\_2 + 2H\_2O\$
```
$CH_4 + 2O_2{{点燃|=}}CO_2 + 2H_2O$

转义字符：
|简写|代指|
|---|---|
|\\:up|↑|
|\\:down|↓|
|\\:heat|△|
|\\:to|→|
|\\:dot|•|
|\\:reverse|⇋|