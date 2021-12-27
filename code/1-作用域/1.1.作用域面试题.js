//第一题
var n = 100
function foo() {
  n = 200//这一步是去父级作用域中去找n,找到了在global object中把n=100改成n=200
}
foo()
console.log(n)//200 在全局执行上下文中执行去global object中找n，输出n=200

//第二题
function foo() {
  console.log(n)//undefined
  var n = 200
  console.log(n)//200
}
var n = 100
foo()

//第三题
var a = 100
function foo() {
  console.log(a)//undefined
  return//注意：尽管这里return 语句，但是js引擎在解析的时候只是解析，并不会执行这个return 
  //所以，在AO对象里仍然会有a=undefined这个变量，在执行到return的时候返回，所以不再执行a=200
  //所以a在AO里面还是a=undefined
  var a = 200
}
foo()

//第四题
function foo() {
  m = 100//这是一种特殊的语法，在严格模式下是错误的，但是在非严格模式下，js引擎认为这是一种特殊的
  //语法，会把m=100当做是全局变量
}
foo()
console.log(m)//100

//第五题
function foo() {
  var a = b = 10
  // => 转成下面的两行代码
  // var a = 10
  // b = 10
}
foo()
console.log(a)
console.log(b)


