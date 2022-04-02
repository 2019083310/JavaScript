// 看代码：说输出
// js代码解析从左向右，赋值从右向左
let a={n:1}
let b=a//b执行a

a.x=a={n:2}//a指向新的对象

console.log(a.x)//undefined
console.log(b.x)//{n:2}