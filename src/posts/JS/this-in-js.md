---
title: JavaScript 中的 This
date: 2024-12-04
tag:
  - JavaScript
category:
  - 前端技术
star: true
icon: file-icons:self
---
关于 JavaScript 中不同地方的 this 指向。
<!-- more -->

本文中所有 Demo 均在 [RunJS](https://runjs.app/play) 中运行。

## 函数对象本身

当函数作为构造器被调用时，`this` 指向自身。

```js
function constructor(){
  console.log(this);
}

new constructor();
```

!!! caution 箭头函数不能作为构造器
```js
const arrowCanNotBeConstructor = () => {
  console.log(this);
}

new arrowCanNotBeConstructor();
// TypeError: arrowCanNotBeConstructor is not a constructor
```
!!!

## 对象本身

当函数作为对象的方法被调用时，`this` 指向该对象。

```js
const object = {
  value: 1,
  logThis: function(){
    console.log(this);
  }
}

object.logThis();
```

当通过 `f.call` 调用函数时， `this` 指向 `call` 的第一个参数。

```js
const object = {
  value: 1,
  arrowLog: ()=>{
    console.log(this);
  },
  logThis: function(){
    console.log(this);
  }
}

const obj2 = {
  value: 2
}

object.logThis.call(Array.prototype);
object.logThis.call(obj2);
```

!!! note
箭头函数作为方法时，尽管通过 `call` 调用，其 `this` 依旧指向 `globalThis`。
!!!

类(`ES6`)的静态方法指向类本身，实例方法指向实例本身。

```js
class someClass {
  logThis(){
    console.log(this);
  }
  
  static staticLogThis(){
    console.log(this);
  }
}

someClass.staticLogThis();
new someClass().logThis();
```

## `globalThis`

定义于全局的函数和箭头函数，在作为函数调用时 `this` 都指向 `globalThis`。

```js
function globalFunction(){
  console.log(this === globalThis); // true
}

const globalArrowFunction = () => {
  console.log(this === globalThis); // true
}
```

定义于对象上的箭头函数，在作为函数调用时 `this` 指向 `globalThis`。

```js
const object = {
  value: 1,
  arrowLog: ()=>{
    console.log(this === globalThis);
  }
}

object.arrowLog();
```