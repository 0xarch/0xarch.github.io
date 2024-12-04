---
title: JavaScript 基础
date: 2024-6-3/1
tags: Node.js JavaScript
category: 前端技术
highlight: true
---
本文写于2024年6月。旨在帮助新手进行简单快速的JavaScript 入门。  
转载并总结自 MDN。  
本篇包含：函数调用、变量声明的简易阐述。
<!--more-->

## 概览和导航

由于篇幅过长，JS基础将分篇上传。

[对象和原型链](baseJS2-obj_and_proto)  
[条件和分支](baseJS3-branch_statement)  
[循环和迭代](baseJS4-loop_and_iter)

JavaScript (简称JS/ES，或ECMA Script)， 一种脚本语言。

你需要一个解释器来运行一个 JS 脚本。

## 注释

通过双斜杠定义行注释。

通过斜杠+星号定义块注释。


```js
// Line Comment

/*
Block Comment
Block line 2
*/
```

### JSDoc

非标准拓展语法，以斜杠+双星号开头，用于标识对象。

```js
/**
 * This is JSDoc
 * @param {string} arg1
 * @param {number[]} args
 * @returns {string}
*/
function markedByJSDoc(arg1,...args){
  return '2';
}
```

## 作用域

作用域是当前的执行上下文，值和表达式在其中“可见”或可被访问。如果一个变量或表达式不在当前的作用域中，那么它是不可用的。作用域也可以堆叠成层次结构，子作用域可以访问父作用域，反过来则不行。

JavaScript 的作用域分以下三种：
  * 全局作用域：脚本模式运行所有代码的默认作用域
  * 模块作用域：模块模式中运行代码的作用域
  * 函数作用域：由函数创建的作用域

此外，用 let 或 const 声明的变量属于额外的作用域：

  * 块级作用域：用一对花括号（一个代码块）创建出来的作用域

由于函数会创建作用域，因而在函数中定义的变量无法从该函数外部访问，也无法从其他函数内部访问。

### 变量查找

JavaScript 会首先在当前作用域中查找变量，若当前作用域中没有查找到，则会进入上一个作用域并查找变量，直到到达全局作用域。

#### 暂时性死区

用 `let`、`const` 或 `class` 声明的变量(和类) 具有此特性。

暂时性死区的范围：从代码块开始到变量声明并初始化之前。

尝试访问在暂时性死区中的变量（此时未初始化）会抛出错误(`ReferenceError`)。当代码执行到变量被声明的位置时才会初始化变量。

注意：通过 `var` 声明的变量不具备此特性，若尝试在声明位置前访问，则会返回 `undefined` 而不是抛出错误。 

使用“暂时性”一词是因为这个区域取决于代码执行的时间点，而不是代码编写的顺序。例如，下面的代码能够运行，是因为虽然使用 let 变量的函数写在变量声明之前，但函数是在暂时性死区外面被调用的。

```js
{
  // 暂时性死区始于作用域开头
  const func = () => console.log(letVar); // 没问题

  // 在暂时性死区内访问 letVar 会抛出 `ReferenceError`

  let letVar = 3; // 暂时性死区结束（对 letVar 而言）
  func(); // 在暂时性死区外调用
}
```

在暂时性死区内对 `let` 声明的变量使用 `typeof` 运算符也会抛出 `ReferenceError`：

```js
typeof i; // ReferenceError: Cannot access 'i' before initialization
let i = 10;
```

这与对未声明的变量和存放 `undefined` 值的变量使用 `typeof` 运算符不同：

```js
console.log(typeof undeclaredVariable); // "undefined"
```

## 关键字

以下词语属于 JS 关键字。

* break
* case
* catch
* class
* const
* continue
* debugger
* default
* delete
* do
* else
* export
* extends
* finally
* for
* function
* if
* import
* in
* instanceof
* new
* return
* super
* switch
* this
* throw
* try
* typeof
* var
* void
* while
* with
* yield
* implements
* interface
* let
* package
* private
* protected
* public
* static
* await
* enum (预定)

以下字符为字面量，同样不能作为标识使用。

* null
* true
* false

## 变量

### 变量声明和更改

JS 中，可以使用 `var` `let` `const` 定义变量，其中使用 `const` 定义的变量不可变(对象可变)。

不推荐使用 `var` 定义变量。

实例：
```js
var someNumber = 0;
let foo = 'foo';
const bar = 'bar';
let arrayVar = ['1',2,foo];

foo = 'bar'; // 修改
someNumber = 1;
var someNumber = 2;
```

### 重复声明

`const` `let` 声明的变量不能被同一个作用域中的任何其他声明重复声明，包括 `let`、`const`、`class`、`function`、`var` 和 `import` 声明。

```js
let foo = 'foo';
let foo = 'bar'; // SyntaxError: Indentifier 'foo' has already been declared
```

在函数主体中用 `let` 声明的变量不能与参数同名，在 `catch` 块中用 `let` 声明的变量不能与被 `catch` 绑定的标识符同名。

```js
function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}
```

尤其当你使用 `switch` 语句时需要注意此特性，参见 [switch 作用域](../../../../2024/6/3/js:baseJS3-branch_statement.md/#switch-作用域)

### 声明变量、JavaScript 字面量

通过 JS 内置语法定义基本类型变量。

1. 字符串

通过单引号或双引号定义。

2. 数组

通过中括号定义。

3. 正则表达式

通过斜杠定义。

4. 对象

通过花括号定义。

5. 类

通过 `new` 定义。

6. 布尔值

通过 `true` 和 `false` 定义。

#### 实例
```js
let str = 'String';
let arr = ['A','r','r','a','y',1]; // 注意：数组内元素类型可以不一致
let regex = /^(Minecraft\*? .*?)/g;
let obj = {
    a: 1,
    b: 'fooBar'
};
let cls = new IntersectionObserver(); // 这个类是 Web API 的一部分，仅在 Web 环境可用。
let boolTrue = true;
```

## 函数

一般来说，一个函数是可以通过外部代码调用的一个"子程序"（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。在 JavaScript 中，函数是头等对象，因为它们可以像任何其他对象一样具有属性和方法。它们与其他对象的区别在于函数可以被调用。简而言之，它们是 `Function` 对象。

### 定义函数

#### function

标准的函数定义方式。通过此方式定义的函数具有面向对象的特性。

```js
function someFunction(){
    doSomething();
}
var someFunction2 = function(){
    doSomething();
}
var someFunction3 = function functionName(){
    doSomething();
}
```

#### 箭头函数

标准的函数定义方式。通过此方式定义的函数不具有部分面向对象的特性和部分过时的API;
> 此定义的函数没有 this , arguments , super 绑定。
> 不能用作构造函数。
> 不能作为生成器函数。

```js
const someFunction = () => { 
    doSomething();
}
const someFunction2 = param => { // param: 零参数需要用 () 表示。只有一个参数时不需要括号。参数部分支持剩余参数、默认参数和解构赋值。
    doSomething(param);
}
```

#### new Function

```js
const fun = new Function('doSomething()');
```

不推荐此方式。

### 更改函数

通过 `function` 定义的函数或者非 `const` 关键字定义的箭头函数可以被更改，就如同变量一样。

### 参数

#### 参数声明和使用

在声明函数时可以定义参数的名字，并在函数中直接使用。

```js
function someFunction(arg1,...arg2){
    console.log(arg1,arg2);
}
```

##### 默认参数

函数默认参数允许在没有值或 `undefined` 被传入时使用默认形参。

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```

##### 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。此方法可以将函数调用时参数列表末尾所有未被捕捉的参数统合成一个数组，并可以在函数内访问。

```js
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```

##### 解构赋值

解构赋值语法是一种 JS 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
```

#### 使用未声明的参数

通过 `arguments` 对象可以访问传入的所有参数。 `arguments` 是一个类数组，所以你可以直接用下标来访问。

**注意** 由于剩余参数的引入，已经不建议使用此特性。

**注意** 此特性在箭头函数中不可用。

#### 参数引用

调用函数时，传递给函数的值被称为函数的实参（值传递），对应位置的函数参数名叫作形参。如果实参是一个包含原始值 (数字，字符串，布尔值) 的变量，则就算函数在内部改变了对应形参的值，返回后，该实参变量的值也不会改变。如果实参是一个对象引用，则对应形参会和该实参指向同一个对象。假如函数在内部改变了对应形参的值，返回后，实参指向的对象的值也会改变。

```js
// 示例来自 MDN
/* 定义函数 myFunc */
function myFunc(theObject) {
  //实参 mycar 和形参 theObject 指向同一个对象。
  theObject.brand = "Toyota";
}

/*
 * 定义变量 mycar;
 * 创建并初始化一个对象;
 * 将对象的引用赋值给变量 mycar
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

/* 弹出 'Honda' */
window.alert(mycar.brand);

/* 将对象引用传给函数 */
myFunc(mycar);

/*
 * 弹出 'Toyota',对象的属性已被修改。
 */
console.log(mycar.brand);
```

#### 回调函数作为参数

回调函数可以作为参数的一部分传入函数，并在适当时机被执行。
> 回调可以通过两种方式进行调用：同步和异步。同步回调在外部函数调用后立即调用，没有中间的异步任务；异步回调在某个稍后的时间点调用，通常是在一个异步操作完成后。

回调函数可以直接在参数列表中定义，箭头函数同样可以作为回调函数。

JS 执行器并不关心调用回调函数时传入变量的名字。

```js
function foo(arg1){
    arg1('the argument');
}
function bar(arg1){
    console.log('调用了预先定义的回调函数，传入参数:',arg1);
}

foo(bar);
foo(param => {
    console.log('调用了直接定义的回调函数，传入参数:',param)
})
```

### 返回值

使用 `return` 关键字可以中断函数执行并返回一个值，此值作为函数的值，因此可以直接使用 `a=b()` 这类语法。
