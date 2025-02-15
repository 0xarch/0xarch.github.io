---
title: "JS基础IV: 循环和迭代"
date: 2024-06-05
tag:
  - Node.js
  - JavaScript
category:
  - 前端技术
highlight: true
icon: material-symbols:repeat
---
JavaScript 基础 第四篇：循环和迭代。  
包含内容：循环控制与迭代器。
转载总结自 MDN。
<!-- more -->

参见 [MDN: 循环与迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)

你可以把循环想成一种计算机化的游戏，告诉某人在一个方向上走 X 步，然后在另一个方向上走 Y 步；例如，“向东走 5 步”可以用一个循环来这样表达：

```js
var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为 0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其他的循环用起来更简单。

## for

一个 for 循环会一直重复执行，直到指定的循环条件为 false。JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。一个 for 语句是这个样子的：

```js
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

当一个 `for` 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 `initialExpression`，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
2. 计算 `condition` 表达式的值。如果 `condition` 的值是 `true`，循环中的语句会被执行。如果 `condition` 的值是 `false`，`for` 循环终止。如果 `condition` 表达式整个都被省略掉了，`condition` 的值会被认为是 `true`。
3. 循环中的 `statement` 被执行。如果需要执行多条语句，可以使用块（`{ ... }`）来包裹这些语句。
4. 如果有更新表达式 `incrementExpression`，执行更新表达式。
5. 回到步骤 2。

## do...while

`do...while` 语句一直重复直到指定的条件求值得到假值（`false`）。一个 `do...while` 语句看起来像这样：
```js
do
  statement
while (condition);
```
`statement` 在检查条件之前会执行一次。要执行多条语句（语句块），要使用块语句（`{ ... }`）包括起来。如果 `condition` 为真（`true`），`statement` 将再次执行。在每个执行的结尾会进行条件的检查。当 `condition` 为假（`false`），执行会停止并且把控制权交回给 `do...while` 后面的语句。

## while

一个 `while` 语句只要指定的条件求值为真（`true`）就会一直执行它的语句块。一个 `while` 语句看起来像这样：
```js
while (condition)
  statement
```
如果这个条件变为假，循环里的 `statement` 将会停止执行并把控制权交回给 `while` 语句后面的代码。

条件检测会在每次 `statement` 执行之前发生。如果条件返回为真， statement 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 `while` 后面的语句。

要执行多条语句（语句块），要使用语句块 (`{ ... }`) 包括起来。

### EXAMPLE 1

只要 `n` 小于 3，下面的 `while` 循环就会一直执行：

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
```
在每次循环里， `n` 会增加 1，并被加到 `x` 上。所以，`x` 和 `n` 的变化是：

* 第一次完成后：`n` = 1，`x` = 1
* 第二次完成后：`n` = 2，`x` = 3
* 第三次完成后：`n` = 3，`x` = 6

在三次完成后，条件 `n < 3` 的结果不再为真，所以循环终止了。

### EXAMPLE 2

避免无穷循环（无限循环）。保证循环的条件结果最终会变成假；否则，循环永远不会停止。因为条件永远不会变成假值，下面这个 `while` 循环将会永远执行：

```js
while (true) {
  console.log("Hello, world");
}
```

## label 语句

一个 `label` 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 `label` 标识一个循环，然后使用 `break` 或者 `continue` 来指出程序是否该停止循环还是继续循环。

`label` 语句的语法看起来像这样：
```js
label :
   statement
```
`label` 的值可以是任何的非保留字的 JavaScript 标识符， `statement` 可以是任意你想要标识的语句（块）。

!!! tip
label 常常被用来终止嵌套循环.
!!!
