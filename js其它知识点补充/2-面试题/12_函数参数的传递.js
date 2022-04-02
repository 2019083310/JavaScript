// 看题：说输出
// 函数的参数的传递只是值传递，相当于形参x=100  x={x:'coder}
function foo(x){
  x=100
}

let num=100
foo(num)
console.log('num的值为:',num)

// 引用对象也是值传递
let obj={
  x:'coder'
}
foo(obj)
console.log('obj的值为:',obj)

// 但是下面这种情况会改变值
function bar(x){
  x.y='bbb'//这种相当于把对象的堆内存中有添加了一个新的值
}
bar(obj)
console.log(obj)
