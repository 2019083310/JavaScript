//this指针
var name = 'windowName'

//1.没有调用者的情况下，this指向window
function a() {
  var name = 'cherry'
  console.log(this.name) //windowName
}
a()

//2.有调用者,this指向的是调用的那个对象
var b = {
  name: 'cherry',
  fn: function () {
    console.log(this.name)//cherry
  }
}
b.fn()

//3.this指向的是上下文对象，即使this被最外层的对象调用，但是this指向的还是离他最近的调用他的对象
var c = {
  // name: 'cherry',
  fn: function () {
    console.log(this.name)//undefined
  }
}
window.c.fn()

//4.this指向的是最后调用函数的那个对象
var name='liu'
var d = {
  name: 'cherry',
  fn: function () {
    console.log(this.name)//liu
  }
}
var f=d.fn
f()//这里把d.fn赋给了window.f,所以最后调用的时候，调用fn的对象是window

