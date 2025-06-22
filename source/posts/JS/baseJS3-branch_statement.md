---
title: "JS基础(3)：条件分支"
date: 2024-06-03
tags:
  - Node.js
  - JavaScript
category:
  - 前端技术
order: 97
highlight: true
icon: icon-park-solid:branch
---
JavaScript 基础 第三篇：条件和分支。  
包含内容：条件和分支。  
转载总结自 MDN。

<!-- more -->

## if...[else...]

当指定条件为真，if 语句会执行一段语句。如果条件为假，则执行另一段语句。

多层 `if...else` 语句可使用 `else if` 从句。注意：在 JavaScript 中没有 `elseif` （一个单词）关键字。

要在一个从句中执行多条语句，可使用语句块（{ ... }）。

### 语法
```js
if (condition)
   statement1
[else
   statement2]
```
```js
if (condition1)
   statement1
else if (condition2) {
   statements2
} else if (condition3) {
   statements3
} ...
else
   statementN
```

### 示例
```js
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

### 注意

不要将原始布尔值的`true`和`false`与`Boolean`对象的真或假混淆，也不要将`Boolean`与`Boolean`对象的构造函数混淆。任何一个值，只要它不是 `undefined`、`null`、 `0`、`NaN`或空字符串（`""`），那么无论是任何对象，即使是值为假的 `Boolean` 对象，在条件语句中都为真。

```js
var b = new Boolean(false); // 真

var f = Boolean(false); // 假
```

建议不要在条件表达式中单纯的使用赋值运算，因为粗看下赋值运算的代码很容易让人误认为是等性比较。  
如果你需要在条件表达式中使用赋值运算，用圆括号包裹赋值运算。

```js
if ((x = y)) {
  /* do the right thing */
}
```

## switch

`switch` 语句会对一个表达式求值，并将表达式的值与一系列 `case` 子句进行匹配，一旦遇到与表达式值相匹配的第一个 `case` 子句后，将执行该子句后面的语句，直到遇到 `break` 语句为止。若没有 `case` 子句与表达式的值匹配，如果没有任何 `case` 子句与表达式的值匹配，则会跳转至 `switch` 语句的 `default` 子句执行。

### 语法

```js
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default: // Optional
    statements
}
```

### 示例

```js
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

### switch 跳出和穿透

你可以在 `switch` 语句体内部使用 `break` 语句提前跳出，通常是在执行完两个 `case` 子句之间的所有语句后。执行会从 `switch` 语句后的第一条语句继续进行。

如果省略了 `break` 语句，程序执行将会继续流向下一个 `case` 子句，甚至到达 `default` 子句，而不论该子句中的表达式值是否匹配。这种行为被称为穿透。

```js
// 示例来自 MDN
const foo = 0;
switch (foo) {
  case -1:
    console.log("负 1");
    break;
  case 0: // foo 的值匹配这个条件；执行从这里开始
    console.log(0);
  // 忘记了 break！执行穿透
  case 1: // 'case 0:' 中没有 break 语句，所以这个 case 也会执行
    console.log(1);
    break; // 遇到 break，不会继续到 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// 输出 0 和 1
```

在合适的上下文中，其他控制流语句同样具有跳出 `switch` 语句的效果。例如，如果 `switch` 语句嵌套在一个函数内部，那么 `return` 语句将结束函数体的执行，因此也会结束 `switch` 语句的执行。如果 `switch` 语句位于循环体内，那么 `continue` 语句会停止 `switch` 语句的执行，并跳转到循环体的下一次迭代。

#### 利用跳出和穿透

如果在某个 `case` 子句下方没有 `break` 语句，那么无论该 `case` 子句是否满足条件，程序都会继续执行下一个 `case` 子句。

```js
const Animal = "长颈鹿";
switch (Animal) {
  case "奶牛":
  case "长颈鹿":
  case "狗":
  case "猪":
    console.log("这类动物没有灭绝。");
    break;
  case "恐龙":
  default:
    console.log("这类动物已经灭绝。");
}
const Animal = "长颈鹿";
switch (Animal) {
  case "奶牛":
  case "长颈鹿":
  case "狗":
  case "猪":
    console.log("这类动物没有灭绝。");
    break;
  case "恐龙":
  default:
    console.log("这类动物已经灭绝。");
}
```

### switch 作用域

`case` 和 `default` 子句指示了控制流可能跳转到的位置。然而，它们本身并不创建词法作用域（也不会自动跳出——如上所述所示）。
简单来说，`switch`内部仅有一个作用域。例如，下面的代码会抛出错误：

```js
const action = "说你好";
switch (action) {
  case "说你好":
    const message = "你好";
    console.log(message);
    break;
  case "说嘿":
    const message = "嘿"; // Uncaught SyntaxError: Identifier 'message' has already been declared
    console.log(message);
    break;
  default:
    console.log("action 的声明为空。");
}
```

要修复这个问题，当你需要在 case 子句中使用 let 或 const 声明时，请将其包裹在一个代码块中。

### switch default

如果没有找到匹配项，将从 `default` 字句开始执行，并执行该子句之后的所有语句。因此，你可以将 `default` 置于两个 `case` 之间。

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // 由于遇到了 break，因此不会继续执行 'default:'
  default:
    console.log("default");
  // 穿透
  case 1:
    console.log("1");
}
```

即使将 `default` 子句放在所有其他 `case` 子句之前也可以实现相同的效果。

### 利用：替代 if else 链

你可能经常会遇到需要使用一系列 `if...else` 条件判断的情况。

```js
if ("fetch" in globalThis) {
  // 使用 fetch 获取资源。
} else if ("XMLHttpRequest" in globalThis) {
  // 使用 XMLHttpRequest 获取资源。
} else {
  // 使用自定义 AJAX 逻辑获取资源
}

// 这种模式并非在执行一系列 === 等值比较操作，但仍然可以将其转换为 switch 结构来实现。

switch (true) {
  case "fetch" in globalThis:
    // 使用 fetch 获取资源。
    break;
  case "XMLHttpRequest" in globalThis:
    // 使用 XMLHttpRequest 获取资源。
    break;
  default:
    // 使用自定义 AJAX 逻辑获取资源
    break;
}
```

可以通过这种转换来合理利用 `switch` 的穿透特性。

```js
switch (true) {
  case isSquare(shape):
    console.log("该形状是一个正方形。");
  // 失败，因为正方形也是矩形的一种！
  case isRectangle(shape):
    console.log("该形状是一个矩形。");
  case isQuadrilateral(shape):
    console.log("该形状是一个四边形。");
    break;
  case isCircle(shape):
    console.log("该形状是一个圆形。");
    break;
}
```

## 三元运算符

条件运算是一种特殊的逻辑运算。其使用三元运算符(`?`和`:`)。条件运算是唯一一个使用三个操作数的运算符。

语法：

```js
condition ? exprIfTrue : exprIfFalse
```
若 `condition` 计算后为真，则该表达式的值为 `exprIfTrue` ，否则位 `exprIfFalse`。

### 三元运算符链接

三元运算符是右结合的，因此可以将多个三元运算链接起来，形成多元运算链，类似于 `if ... else if ... else`：

```js
function example() {
  return condition1
    ? value1
    : condition2
      ? value2
      : condition3
        ? value3
        : value4;
}
```
