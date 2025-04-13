---
title: JS 微函数
---
```js
function all<T>(iterable: Iterator<T>){
    for(let i of iterable){
        if(!i) return false;
    }
    return true;
}

function any<T>(iterable: Iterator<T>){
    for(let i of iterable){
        if(i) return true;
    }
    return false;
}

function iterated<T>(iterable: Iterator<T>){
    const result = [];
    for(let i of iterable){
        result.push(i);
    }
    return result;
}

function iteratorDo<T, K>(iterable: Iterator<T>,callback: (v: T, i: number, a: Iterator<T>) => K){
    const result = [];
    let index = 0;
    for(let i of iterable){
        result.push(callback(i,index,callback));
        index++;
    }
    return result;
}