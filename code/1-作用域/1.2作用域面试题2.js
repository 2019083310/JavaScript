//自执行函数
(function () {
  var a = b = 3//相当于b=3   var a=b,此时的b成为了全部变量，但是a 是函数作用域变量，外部访问不到
})()
console.log(b)
console.log(a)

//考的是函数作用域与自执行函数

function fun(n){
  console.log(n)//10  这里var n=undefined 但是函数的参数会影响，会进行var n=n把函数的参数赋给n
  var n=3
  console.log(n)//3
}
var n=10
fun(n)
//考察变量提升，作用域，参数

var m=123
function f1(){
  console.log(m)
}
function f2(){
  var m=456
  f1()//123  之所以是123,是因为f1是在f2里面执行的，
  // 但是f1没有调用者，f1的函数作用域就是window里面找m
}
f2()
console.log(m)//123
//考察作用域、预解析

var length=100
function f3(){
  console.log(this.length)
}
var obj={
  x:10,
  f4:function(f3){
    f3()//100  无调用者，作用域就是window
    arguments[0]()//100  无调用者，但是作用是arguments对象
  }
}
obj.f4(f3,1)
//考察作用域，预解析，arguments,this指向

function f(s,q){
  console.log(this.a,s,q)//2 [3]
  return this.a+s
}
var obj2={
  a:2
}
var f5=function(){
  console.log(arguments)
  return f.apply(obj2,arguments)
}
var p=f5(3,5)
console.log(p)
//考察，作用域，apply,arguments

var d=10
function t(){
  //作用域变量提升 var d=undefined
  d=100
  console.log(d)//100
  console.log(this.d)//10
  var d
  console.log(d)//100
}
t()