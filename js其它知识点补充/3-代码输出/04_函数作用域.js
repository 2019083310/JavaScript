// function foo() {
//   this.name = 'coder'
//   return {}
// }

// var a = new foo()
// console.log(a.name)

// function foo() {
//   this.name = 'xxx'
//   return 1
// }
// var a = new foo()
// console.log(a.name)

// 函数提升高于变量提升，但是函数提升不会被变量提升覆盖，所以变量名和函数名同名的时候，函数名不会被变量名所覆盖
showName() //1,所以会输出1
var showName = function () {
  console.log(2)
}

function showName() {
  console.log(1)
}


function foo() {
  for (var i = 0; i < 7; i++) {}
  console.log(i);
}
// console.log(i)
foo()


function foo() {
  var a = 1;
  let b = 2; {
    let b = 3
    var c = 4
    let d = 5
    console.log(a)
    console.log(b)
  }
  console.log(b)
  console.log(c)
  console.log(d)
}
foo()


function bar() {
  var myName = "极客世界"
  let test1 = 100
  if (1) {
    let myName = "Chrome浏览器"
    console.log(test)
  }
}

function foo() {
  var myName = "极客邦"
  let test = 2;
  {
    let test = 3
    bar()
  }
}
var myName = "极客时间"
let myAge = 10
let test = 1
foo()