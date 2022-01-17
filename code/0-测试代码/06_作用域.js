let obj = {
    num1: 117
}
let res = obj
obj.child = obj = { num2: 935 }
var x = y = res.child.num2
console.log(obj.child)
console.log(res.num1)
console.log(y)

// 这道题考察的是js的连等赋值
// js在解析的时候是从左向右解析，赋值的时候从右向左赋值
// 所以，obj.child会被复制为{num2:935},res和obj相同指向

function foo() {
    var a = b = 1
    console.log(a) //1
        // a为局部变量
}
foo()
console.log(b) //1，b为全局变量
    // console.log(a) //报错