---
title: "入门JS教程：WebAPI 与 DOM"
date: 2024-11-18
tag:
  - JavaScript
category:
  - 前端技术
icon: fe:document
---
这篇文章简单讲述了 WebAPI 的组成以及 DOM 节点的实用用法
<!-- more -->

首先随附一张来自于 MDN 的图：  
![WebAPI Section](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/document-window-navigator.png)

* 解释：
    * `Navigator`: 与浏览器相关的 API, 如 `userAgent`.  
    * `Window`: 与网页有关的 API, 如 `scroll`. `Window` 同时作为 `globalThis`.  
    * `Document`: 与页面有关的 API, 如 `querySelector`.

::: note
对于页面的`<html>` `<head>` `<body>` 等重要元素，有如下映射：  
`<html>`: `document.documentElement`.  
`<head>`: `document.head`，此属性为常量.  
`<body>`: `document.body`.  
:::

## DOM (文档对象模型)

DOM 是一个用树状结构表示文档的方式。DOM 使 JavaScript 可以轻松访问文档内的元素。

DOM 树上的叶子被称为**节点**(Node)，一个节点可以包含多个子节点。可以通过引用指代的方式访问其他节点。例如：  

```js
node.parentNode // 父节点
node.childNodes // 子节点
node.querySelector(selector) // 节点选择器 (类似于 CSS)
document.documentElement // 根节点 (:root，即<html>)
```

::: tip
[MDN 上的基本 DOM 操作学习](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#%E5%8A%A8%E6%89%8B%E7%BB%83%E4%B9%A0%EF%BC%9A%E5%9F%BA%E6%9C%AC%E7%9A%84_dom_%E6%93%8D%E4%BD%9C)
:::

### 节点对象的实用成员

```js
node.parentNode // 父节点
node.childNodes // 子节点
node.childElementCount // 子节点数量
node.nodeName // 节点标签名(大写)
node.nodeType // 节点类型(数字)
node.querySelector(selector) // 节点选择器 (类似于 CSS) (获取选择到的第一个)
node.querySelectorAll(selector) // 节点选择器 (类似于 CSS)
node.innerHTML // 内部HTML，可读写
node.textContent // 内部所有文字，可读写
node.getAttribute(key) // 获取属性
node.setAttribute(key,value) // 设置属性
node.style[propertyInCamelCase] // 获取 CSS 属性值
node.style.getProperty(propertyNameInKekabCase) // 获取 CSS 属性值
node.style.setProperty(propertyNameInKekabCase,value) // 设置 CSS 属性值
node.addEventListener(eventId, (event) => {
    // do something...
}) // 监听事件
node.appendChild(anotherNode) // 添加子节点
// 可用 document.createElement(nodeName) 创建节点
// document.createTextNode() 创建文字节点
node.remove() // 删除该节点
node.removeChild(childNode) // 删除该子节点
```
