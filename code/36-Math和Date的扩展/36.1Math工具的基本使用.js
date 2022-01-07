console.log(Math instanceof Function)//false
// 注意:Math不是一个构造函数/类，只是一个工具类，不能使用new关键字调用
console.log(Date instanceof Function)//true

// 注意:Math不支持BigInt,只支持Number
// 属性
console.log(Math.PI)//3.1415926535....

// 常见的Math方法
// 1.Math.abs()--返回一个数的绝对值
console.log(Math.abs(-1))//1

// 2.生成一个0-1之间的随机数,不包括1
console.log(Math.random())

// 3.取整
// 3.1向上取整
console.log(Math.ceil(3.2))//4

// 3.2向下取整
console.log(Math.floor(3.2))//3

// 3.3四舍五入
console.log(Math.round(3.2))//3

// 4.Math.sqrt()--返回一个数的平方根
console.log(Math.sqrt(4))//2

// 5.Math.pow(n,m)--n的m次方
console.log(Math.pow(2,4))

// 6.Math.cbrt()--返回数字的开立方根
console.log(Math.cbrt(2))

// 7.Math.cos()/Math.sin()/Math.tan()
console.log(Math.cos(2))
console.log(Math.sin(2))
console.log(Math.tan(2))

// 8.Math.max()/Math.min()
// 8.1找出最大值，是...values的数组的解构赋值，不可以是数组，但是只能是Number类型
console.log(Math.max(1,2,3,4,5))//5
console.log(Math.max(...[1,2,3.4,5]))//5

// 8.2找出最小值
console.log(Math.min(...[1,2,3,4,5]))//1
