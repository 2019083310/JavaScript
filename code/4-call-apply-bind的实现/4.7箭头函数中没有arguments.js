// 1.案例一:
// var foo = () => {
//   console.log(arguments)
// }

// foo()

// 2.案例二:
// function foo() {
//   var bar = () => {
//     console.log(arguments)//arguments在箭头函数中是没有的，但是arguments就相当于一个变量，会按照作用域查找，在
        //window这个全局对象终是没有arguments的，但是在node中是存在的
//   }
//   return bar
// }

// var fn = foo(123)
// fn()

// 3.案例三:
var foo = (num1, num2, ...args) => {
  console.log(args)//剩余参数的使用
}

foo(10, 20, 30, 40, 50)
