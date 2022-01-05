var x = 0

// 当函数的参数有默认值时, 会形成一个新的作用域, 这个作用域用于保存参数的值
function foo(x, y = function() { x = 3; console.log(x) }) {
  console.log(x)
  var x = 2
  console.log(x)
  y()
  console.log(x)
}

foo()
console.log(x)

//1-->2-->3-->2-->0

// undefined-->2-->3-->2-->0


// let x=1
// function foo(){
//   x=2
//   console.log(x)
// }
// foo()
// console.log(x)

function bar(x){
  console.log(x)
  var x=3
  console.log(x)
}
bar()
console.log(x)//error not defined
