---
title: simplus主题源码概述
date: 2024-4-9
tags: Fewu
category: Pug
license: byncnd
---
Fewu 主题 simplus(PUG) 的组成以及特性解析。

篇幅较短，大部分具体实现请查看源码。
<!--more-->

## Standalone Component

simplus 的特征之一。  
simplus 的样式和脚本由 KCEFL 生成链接，通过预先声明来避免不必要的资源引用。

### KCEFL

K-Component External File Loader，简称 KCEFL。KCEFL 的本质为一个 `COMPONENTS` 对象和一个 `use` 混入函数。

Component 预先在脚本中声明，并向 `COMPONENTS` 中添加一个对，键名为引用名称，值为一个字符串数组，数组中的值需满足要求：以 'C' 或 'J' 开头来标识此值指向 CSS('C') 或 ECMAScript('J')，紧随的是相对于发布目录的路径。当 `use` 被调用并传入一个 `COMPONENTS` 中存在的键名时，将会遍历数组，并将链接以`link`或`script`返回。

### Component 文件

所有 Component 都应位于 /components/${COMPONENT_NAME}.pug。

注册 Component ：于 /mixin/script.pug 中包含该 Component ，此 script.pug 应在每个页面中都被加载。

### Component 规范

Component 规范，即 simplus Component Standard，简称 SC-STD

Component 的第一行有效代码应该在 `COMPONENTS` 中创建该 Component 的资源组。

所有 Component 都应只提供一个混入，函数名为 Component 的名字。

对于单次使用的 Component，尽量在 Component 文件中添加保险措施。

### 使用一个 Component

确保该 Component 已经注册，然后通过 use 混入链接(这一步是可选的，如果你知道该 Component 没有附加资源)，最后在页面中混入该 Component(通过引用和 Component 名对应的函数)

有时 Component 可能仅允许单次使用，请注意阅读 Component 的代码。

### Component Macro

可以通过 Component 的方式注册一个宏混入来缩减代码量，宏 Component 不需要(也不应该)创建资源引用。

## Komponents

一组符合 SC-STD 的 Component ，风格来源于 KDE 。

## Based on Fewu

通过 Fewu 的配置管道，用户可以方便地在配置文件中直接修改 simplus 的配置项~~，只需要阅读源代码中的 variables.json 即可~~。