---
title: WebJS - 页面衔接实现
date: 2024-11-18
tags:
  - JavaScript
category:
  - Code Snippets
highlight: true
license: CC-BY-ND-SA
icon: grommet-icons:navigate
---
简单的JS无缝跳转的实现.

兼容性未测试!

<!-- more -->

## JS代码

```js
(function (window, undefined) {
    const usedLocation = [window.location.href];
    window.onpopstate = function(){
        if(usedLocation.includes(window.location.href)){
            window.Reload.goTo(window.location.href);
        }
    };
    const DOMParserI = new DOMParser();
    window.Reload = {
        goTo: async function (url) {
            let content = await (await fetch(url)).text();
            let newDocument = DOMParserI.parseFromString(content, 'text/html');
            // set url
            window.history.pushState('', '', url);
            !usedLocation.includes(url) && usedLocation.push(url);
            // process head.
            let newTitle = newDocument.head.querySelector('title').innerHTML;
            let scripts = [], styles = [], metas = [], links = [];
            let unusedNodes = [];
            for (let childNode of newDocument.head.childNodes) {
                if (childNode.nodeType !== 1) continue;
                switch (childNode.nodeName) {
                    case 'META':
                        if (!childNode.name || !childNode.content) break;
                        metas.push({
                            name: childNode.name,
                            content: childNode.content
                        });
                        break;
                    case 'STYLE':
                        styles.push(childNode.innerHTML);
                        break;
                    case 'SCRIPT':
                        if (childNode.src) {
                            scripts.push({
                                type: 'ref',
                                module: childNode.type,
                                content: childNode.getAttribute('src')
                            });
                        } else {
                            scripts.push({
                                type: 'inner',
                                module: childNode.type,
                                content: childNode.innerHTML
                            });
                        }
                        break;
                    case 'LINK':
                        links.push({
                            rel: childNode.rel,
                            href: childNode.getAttribute('href')
                        })
                        break;
                }
            }
            for (let childNode of document.head.childNodes) {
                if (childNode.nodeType !== 1) continue;
                outer: switch (childNode.nodeName) {
                    case 'TITLE':
                        childNode.textContent = newTitle;
                        break;
                    case 'STYLE':
                        for (let i = 0; i < styles.length; i++) {
                            if (childNode.innerHTML == styles[i]) {
                                styles.splice(i, 1);
                                break outer;
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                    case 'LINK':
                        for (let i = 0; i < links.length; i++) {
                            if (childNode.rel == links[i].rel && childNode.href == links[i].href) {
                                styles.splice(i, 1);
                                break outer;
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                    case 'SCRIPT':
                        if (!childNode.src) {
                            for (let i = 0; i < scripts.length; i++) {
                                if (scripts[i].type !== 'inner') continue;
                                if (childNode.type == scripts[i].module && childNode.innerHTML == scripts[i].content) {
                                    scripts.splice(i, 1);
                                    break outer;
                                }
                            }
                        } else {
                            for (let i = 0; i < scripts.length; i++) {
                                if (scripts[i].type !== 'ref') continue;
                                if (childNode.type == scripts[i].module && childNode.getAttribute('src') == scripts[i].content) {
                                    scripts.splice(i, 1);
                                    break outer;
                                }
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                    case 'META':
                        if (!childNode.name || !childNode.content) break;
                        for (let i = 0; i < metas.length; i++) {
                            if (childNode.name == metas[i].name && childNode.content == metas[i].content) {
                                metas.splice(i, 1);
                                break outer;
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                }
            }
            metas.forEach(v => {
                let el = document.createElement('meta');
                el.name = v.name;
                el.content = v.content;
                document.head.appendChild(el);
            });
            links.forEach(v => {
                let el = document.createElement('link');
                el.rel = v.rel;
                el.href = v.href;
                document.head.appendChild(el);
            });
            styles.forEach(v => {
                let el = document.createElement('style');
                el.innerHTML = v;
                document.head.appendChild(el);
            });
            scripts.forEach(v => {
                let el = document.createElement('script');
                if (v.type == 'ref') {
                    el.type = v.module;
                    el.src = v.content;
                } else {
                    el.type = v.module;
                    el.innerHTML = v.content;
                }
                document.head.appendChild(el);
            });
            unusedNodes.forEach(el => el.remove());
            // process body
            document.body = newDocument.body;
            // scroll pos
            setTimeout(()=>{
                window.scrollTo(0,0);
            },0);
            DoOthers();
        }
    };
})(window, void 0);
```

## 需要内容

### DoOthers

需要提供一个全局的 `DoOthers` 函数，将在页面替换完毕后调用。

## 提供内容

在 `window` 上挂了一个全局对象 `Reload`，具有一个函数 `Reload.goTo`，使用时传入一个 `string`，格式为 URL。