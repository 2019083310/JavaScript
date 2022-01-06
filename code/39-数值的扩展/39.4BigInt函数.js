// 1.JavaScript 原生提供`BigInt`函数，可以用它生成 BigInt 类型的数值。
// 转换规则基本与`Number()`一致，将其他类型的值转为 BigInt。

console.log(BigInt(123))//123n
console.log(BigInt('123'))//123n
console.log(BigInt(false))//0n
console.log(BigInt(true))//1n

// 2.`BigInt()`函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错
// console.log(new BigInt())
// console.log(BigInt(null))
// console.log(BigInt(undefined))
// console.log(BigInt('123n'))
// 尤其值得注意字符串`123n`无法解析成 Number 类型，所以会报错

// 3.参数不能是小数

// 4.转换规则
console.log(Number(123n))//123
console.log(Boolean(123n))//true
console.log(String(123n))//123

// 5.运算的时候必须带n运算，+ - * /都可以运算，但是BigInt做除法运算，不会有小数，返回整数
// 而普通的Number类型，会有小数
console.log(9n/5n)//1n
console.log(9/5)//1.8