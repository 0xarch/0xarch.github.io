---
title: WebJS - 滚动目录实现
date: 2024-03-04T00:00:00.000Z
tags:
  - JavaScript
category:
  - Code Snippets
highlight: true
license: CC-BY-ND-SA
icon: ic:baseline-toc
createTime: 2025/08/02 12:10:14
permalink: /note.js/8uid1g18/
---
简单的JS滚动目录(动态高亮)的实现.

兼容性未测试!

<!-- more -->

## JavaScript

### 参数
markdown_content: 文章容器(Node)

### 需要更改的地方
`#toc`: 挂载目录的容器

### Code

```js
function TOC(markdown_content) {
    let toc = document.querySelector("#toc");
    if(!toc) return;
    let tocList = markdown_content.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let liList = [];
    tocList.forEach((v) => {
        let pid = '_' + Date.now().toString(36) + Math.random().toString(36).replace(/[\s\S]{3}/, '');
        v.id = pid;
        const H = v.nodeName[1];
        let li = document.createElement('li');
        li.classList.add(`li-${H}`);
        li.setAttribute('pid', pid);
        li.textContent = v.textContent;
        li.addEventListener("click", () => {
            window.scrollBy({ top: v.getBoundingClientRect().y, behavior: "smooth" });
        });
        toc.appendChild(li);
        liList.push(li);
    })
    let tocArr = Array.from(tocList);
    const removeClass = () => {
        liList.forEach(v => v.classList.remove("active"));
    }
    const update = () => {
        for (let i = 0; i < tocArr.length; i++) {
            let v = tocArr[i];
            let rect = v.getBoundingClientRect();
            let top = rect.top + rect.height;
            if (top > 0) {
                removeClass();
                let li = liList[i];
                li.classList.add('active');
                /*
                这两句代码用来实现目录左侧的进度条，需要搭配CSS实现，删除没有影响。
                CSS见下文
                toc.style.setProperty('--g-start',li.offsetTop+li.getBoundingClientRect().height-5+'px');
                toc.style.setProperty('--g-end',li.offsetTop+li.getBoundingClientRect().height+5+'px');
                */
                break;
            }
        }
    }
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                update();
                ticking = false;
            })
        }
        ticking = true;
    });
    update();
}
```

## CSS

### 需要更改的地方
`--brand-color`: 高亮颜色
`--radius`: 圆角

### Code

```css
#toc{
    margin: 0;
    list-style: none;
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid transparent;
}
#toc::before{
    position: absolute;
    top: 0;
    left: 0;
    width: .1rem;
    height: 100%;
    content: '';
    background: linear-gradient(var(--brand-color) var(--g-start),transparent var(--g-end));
}
#toc>li{
    cursor: pointer;
    padding: 0.125rem 0.25rem;
    border-radius: var(--radius);
    transition: color .2s ease-in-out,background .2s ease-in-out;
}
#toc>.li-1{
    font-size: larger;
}
#toc>.li-2{
    font-size: large;
    padding-left: 0.65rem;
}
#toc>.li-3{
    padding-left: 1.25rem;
}
#toc>li:hover{
    background: var(--brand-color-75);
    color: #fff;
}
#toc>li.active{
    color: var(--brand-color);
}
#toc>li.active:hover{
    background-color: var(--brand-color-25);
}
```