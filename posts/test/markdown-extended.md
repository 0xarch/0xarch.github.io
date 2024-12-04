---
title: 扩展 Markdown 语法测试
date: 0000-0-0
tags: Markdown
category: 测试
---
使用 Fewu 1.2.5 添加的 markedExtras 功能支持更多 Markdown 语法。
<!--more-->

## Marked Extended Tables

Github Flavored 表格支持。包名：`marked-extended-tables`

```markdown
| H1      | H2      | H3      |
|---------|---------|---------|
| This cell spans 3 columns |||
```

| H1      | H2      | H3      |
|---------|---------|---------|
| This cell spans 3 columns |||

## Marked Footnotes

脚注支持。包名：`marked-footnotes`

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

## Admonition

Admonition 支持。包名：`marked-admonition-extension`

`marked-admonition-extension` 支持以下类型:
```
abstract、attention、bug、caution、danger、error、example、failure、hint、info、note、question、quote、success、tip、warning
```

格式：

```md
!!! note
Contents
!!!

!!! hint
Neo 主题有对基于 `marked-admonition-extension` 生成的 HTML 的样式支持.
!!!

!!! note 带标题的 NOTE
Contents, support `code`,
\`\`\`js
This.is.a.code.block();
\`\`\`
!!!
```

!!! note
Contents
!!!

!!! hint
Neo 主题有对基于 `marked-admonition-extension` 生成的 HTML 的样式支持.
!!!

!!! note 带标题的 NOTE
Contents, support `code`,
```js
This.is.a.code.block();
```
!!!

!!! abstract
这个块~~比较抽象~~是摘要
!!!

!!! attention
这个块让你注意
!!!

!!! bug
`marked-admonition-extension` 的导入有一些问题，但在结果上是没有问题的，这可能由于作者没有处理好 ESM 导入。
!!!

!!! caution USE WITH CAUTION
请小心使用！
!!!

!!! danger 
使用 markedExtras 前一定要先验证所选包是否安全
!!!

!!! error this is a `error` type admonition
马的，出错了！
!!!

!!! example
...
!!!

!!! failure
失败了！
!!!

!!! hint
建议用 tip
!!!

!!! info
我是一个无害的信息块
!!!

!!! note
万能的笔记！
!!!

!!! question
好像有点问题...
!!!

!!! quote
引用一下
!!!

!!! success
成功力！
!!!

!!! tip
一点点小建议
!!!

!!! warning
前方施工
!!!

[^1]: My reference.
[^2]: 别理这个, 两行不行.