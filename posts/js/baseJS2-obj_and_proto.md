---
title: "JS基础II: 对象和原型"
date: 2024-6-3/2
tags: Node.js JavaScript
category: 前端技术
highlight: true
---
JavaScript 基础 第二篇：面向对象概述。
包含内容：对象和原型链。
转载总结自 MDN。
<!--more-->

## 对象

在 JavaScript 中，大多数事物都是对象，从作为核心功能的字符串和数组，到建立在 JavaScript 之上的浏览器 API 。你甚至可以自己创建对象，将相关的函数和变量高效地封装打包成便捷的数据容器。

简而言之，对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法）。

### 面向对象基础

**[此片段来自 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Basics)**

首先，将 [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) 文件复制到本地，文件的元素非常少——仅一个供我们编写源代码的 `<script>` 标签。我们将在此基础上研究对象基础语法。在使用此示例时，你应该打开**开发者工具 JavaScript 控制台**，并准备键入一些命令。

如同 JavaScript 中的很多东西一样，创建一个对象通常先定义并初始化变量。尝试在你的文件中输入以下 JavaScript 代码，保存并刷新页面：

```js
const person = {};
```

打开你的浏览器的 JavaScript 控制台输入 `person`，然后按下 Enter/Return，你可能会得到以下结果中的一种：

```js
[object Object]
Object { }
{ }
```

恭喜，你刚创建了你的第一个对象。干的漂亮！但这是一个空对象，所以我们做不了很多事情。让我们像这样更新文件中的 JavaScript 对象：

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} 现在 ${this.age} 岁了。`);
  },
  introduceSelf: function () {
    console.log(`你好！我是 ${this.name[0]}。`);
  },
};
```

保存并刷新后，尝试在你的浏览器开发者工具的 JavaScript 控制台输入以下内容：

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith 现在 32 岁了。"
person.introduceSelf();
// "你好！我是 Bob。"
```

现在，你的对象拥有了一些数据和功能，你现在可以通过简单的语法访问它们了！

所以发生了什么？一个对象由许多的成员组成，每一个成员都拥有一个名字（如 `name`、`age`）和一个值（如 [`'Bob'`, `'Smith'`]、`32`）。每一组名字/值必须由逗号分隔开，并且名字和值之间由冒号分隔，语法规则如下所示：
```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

对象成员的值可以是任意的，`person` 对象里包含了：一个数字、一个数组，以及两个函数。前两项是数据项，被称为对象的属性，后两项是允许对象对该数据进行某些操作的函数，称为对象的方法。

当对象的成员是函数时，语法会更简单。我们可以写 `bio()` 来代替 `bio: function()`。像这样：
```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} 现在 ${this.age} 岁了。`);
  },
  introduceSelf() {
    console.log(`你好！我是 ${this.name[0]}。`);
  },
};
```

一个如上所示的对象被称之为对象字面量（object literal）——手动的写出对象的内容来创建一个对象。不同于从类**实例化**一个对象，我们会在后面学习这种方式。

当你想要传输一系列结构化的相关的数据项（例如，服务器发起请求以存储一些数据到数据库）时，常见的方式是使用字面量来创建一个对象。发送一个对象要比分别发送这些数据更有效率，当你使用名字标识这些数据时，它比数组更容易使用。

#### 点表示法

在上面的例子中，你使用了点表示法（dot notation）来访问对象的属性和方法。对象的名字表现为一个**命名空间**（namespace）。当你想访问对象内部的属性或方法时，命名空间必须写在第一位。然后输入一个点，紧接着是你想要访问的目标——可以是简单属性的名字，或者是数组属性的一个子元素，又或者是对象的方法调用。如下所示：

```js
person.age;
person.bio();
```

#### 括号表示法

另外一种访问对象属性的方式是使用括号表示法（bracket notation）。

```js
person.age;
person.name.first;
```

可以使用如下所示的括号表示法替代：

```js
person["age"];
person["name"]["first"];
```

这看起来很像访问一个数组的元素，并且基本上是相同的——使用关联了值的名称，而不是索引来选择元素。因此对象有时被称为**关联数组**——对象将字符串映射到值，而数组将数字映射到值。

点表示法通常优于括号表示法，因为它更简洁且更易于阅读。然而，在某些情况下你必须使用括号。例如，如果对象属性名称保存在变量中，则不能使用点表示法访问该值，但可以使用括号表示法访问该值。

在下面的示例中，`logProperty()` 函数可以使用 `person[propertyName]` 来检索 `propertyName` 中指定的属性的值。

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
```

#### 子命名空间

可以用一个对象来做另一个对象成员的值。例如将 `name` 成员，从

```js
const person = {
  name: ["Bob", "Smith"],
};
```

改成

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```
需要访问这些属性，只需要链式的再使用一次点/括号表示法，像这样：

```js
person.name.first;
person['name']['last'];
person.name['last']; // same as above
```

#### 设置对象成员

目前我们仅仅看到了如何查询（或获取）对象成员，而你也可以通过声明设置（更新）对象成员的值（使用点表示法或括号表示法），像这样：

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

尝试输入以上代码，然后再查看这些成员是否已经被改变了。


设置成员并不意味着你只能更新已经存在的属性的值和方法，你也可以创建新的成员。在 JS 控制台中尝试以下代码：
```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("再见！");
};
```
现在你可以测试你新创建的成员

```js
person["eyes"];
person.farewell();
// "再见！"
```

括号表示法一个有用的地方是它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字。
假设我们想让用户能够通过在两个文本输入框中键入成员名称和值，在他们的人员数据中存储自定义的值类型。
我们可以像这样获取这些值：

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

我们可以像这样把这个新的成员的名字和值加到 person 对象中：

```js
person[myDataName] = myDataValue;
```

为了测试它，尝试在你的代码里添加以下几行，就在 `person` 对象的右花括号的下面：

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

现在，保存并刷新页面，在输入框里输入以下代码：

```js
person.height;
```

这是使用点表示法无法做到的，点表示法只能接受字面量的成员的名字，不接受表示名称的变量。

### this

关键字 `this` 指向了当前代码运行时的对象。

当你只需要创建一个对象字面量时，`this` 就不是那么有用。但是如果你创建多个对象时，`this` 可以让你对每一个创建的对象都使用相同的方法定义。

让我们用两个简单的 person 对象来说明：

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`你好！我是 ${this.name}。`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`你好！我是 ${this.name}。`);
  },
};
```

在本例中，尽管两个实例的方法代码完全相同，但 `person1.introduceSelf()` 输出“你好！我是 Chris。”，而 `person2.introduceSelf()` 输出“你好！我是 Deepti”。当你手工编写对象字面量时，这并不是很有用，但是当我们开始使用[构造函数](#构造函数)从单个对象定义创建多个对象时，这将是必不可少的。

## 原型链

!!! caution
原型链是 JavaScript 中非常重要的机制，掌握了原型链踏入了 JavaScript 的大门。
!!!

原型是 JavaScript 对象相互继承特性的机制。

JavaScript 对象都有一个私有属性指向另一个名为原型（prototype）的对象。
原型对象也有一个自己的原型，层层向上直到一个对象的原型为 null。
根据定义，null 没有原型，并作为这个原型链中的最后一个环节。
可以改变原型链中的任何成员，甚至可以在运行时换出原型。

### 属性继承

JavaScript 对象是动态的属性（指其自有属性）**包**。JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

### 属性遮蔽

如果你在一个对象中定义了一个属性，而在该对象的原型中定义了一个同名的属性，会发生什么？

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("别的东西！");
};

myDate.getYear(); // '别的东西！'
```
鉴于对原型链的描述，这应该是可以预测的。当我们调用 `getYear()` 时，浏览器首先在 `myDate` 中寻找具有该名称的属性，如果 `myDate` 没有定义该属性，才检查原型。因此，当我们给 `myDate` 添加 `getYear()` 时，就会调用 `myDate` 中的版本。

这叫做属性的“遮蔽”。

### 构造函数

使用对象字面量在只需要创建一个对象时是可以的，但如果你需要创建多个对象，如前面章节所示，它们就不够用了。
我们必须为每个创建的对象编写相同的代码，如果我们想要更改对象的某些属性，比如添加一个 height 属性，那么我们必须手动更新每个对象。

如果一组属性应该出现在每一个实例上，那我们就可以重用它们——尤其是对于方法。

```js
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

我们可以将 `getValue` 移动到所有盒子的 `[[Prototype]]` 上：

```js
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
```

>指向对象原型的属性并不是 prototype。它的名字不是标准的，但实际上所有浏览器都使用 __proto__。访问对象原型的标准方法是 Object.getPrototypeOf()。

使用构造函数简化代码：

```js
// 一个构造函数
function Box(value) {
  this.value = value;
}

// 使用 Box() 构造函数创建的所有盒子都将具有的属性
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

重写为类：

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // 在 Box.prototype 上创建方法
  getValue() {
    return this.value;
  }
}
```

类是构造函数的语法糖，这意味着你仍然可以修改 Box.prototype 来改变所有实例的行为。

#### 字面量的隐式构造函数

```js
// 对象字面量（没有 `__proto__` 键）自动将
// `Object.prototype` 作为它们的 `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// 数组字面量自动将 `Array.prototype` 作为它们的 `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// 正则表达式字面量自动将 `RegExp.prototype` 作为它们的 `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
```

我们可以将它们“解糖（de-sugar）”为构造函数形式。

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```
