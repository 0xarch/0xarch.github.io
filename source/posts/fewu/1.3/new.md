---
title: New in new Fewu
date: 2024-11-23
tags: Fewu
category: Node.js
---
关于我计划在 Fewu 1.3 中使用新的 fewu --new 使用方式。

<!--more-->

# New in new Fewu

## 旧格式

旧格式是基于 argv 的：
```bash
fewu --new --title Title --tag A+B --category C
```

## 新格式：

由于 fewu --new 与 fewu 本体几乎是完全分离开的，因此决定使用逐参数解析方式：

```bash
fewu --new file_location? Title? --tag A B C D --category E F
```

!!! hint
其中 `--tag` 可写为 `-t`， `--category` 可写为 `-c`，可互换位置。
!!!

当 `file_location` 未给出时，默认为将 `Title` 转为小写并替换空格为烧烤线(短杠，`-`)，再加上日期前缀：

!!! caution
由于我们认为指定标题用处更大，只有一个参数时将认为它是标题而不是路径。
!!!

```bash
fewu --new New in new fewu -t Fewu -c Node.js
# Will create new-in-new-fewu.$(date +%m-%d).md
```

`file_location` 支持文件夹。此实例中 `fewu.d` 是一个文件夹。

```bash
fewu --new New in new fewu -p fewu.d
# Will create fewu.d/new-in-new-fewu.$(date +%m-%d).md
```

### 解析方式

此小节中所指的参数数量是 `--new` 之后的参数数量，锚点参数(`AnchorArguments`)指的是 `--tag` `--category` `-t` `-c`。

参数解析前会进行 `filter((v,i,a) => !AnchorArguments.includes(v) || (AnchorArguments.includes(v) && !AnchorArguments.includes(a[i+1])))`

自锚点参数后一个一直到下一个锚点参数间的参数列表被认为是该锚点参数的参数。
若锚点参数后紧跟另一个锚点参数，则这个锚点参数会被丢弃。

当参数只有一个时：

该参数将被解析为文章标题。

当参数有两个时：

若第一个参数为锚点参数中的一个，则下一个被认为是标签或分类。

否则，认为第一个是文件路径，第二个是标题。

其他：

首先寻找锚点参数并以锚点参数为分界点分离数组。

将锚点参数后的数组解析为对应的组（标签或分类）。

对于第一个分组，按参数为一个和参数为两个的否则情况进行解析。

这个解析方式可能会在未来变成 Fewu Util 库的一部分。