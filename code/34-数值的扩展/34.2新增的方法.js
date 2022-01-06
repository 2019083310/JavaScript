// 1.Number.isFinite和Number.isNan
// 他们和全局的isFinite和isNaN不一样
// 区别：全局的isFinite和isNaN会将不是数值的类型转化为数值，在判断
// 但是Number.isNaN和Number.isFinite()不会转化，而是直接判断

// Number.isFinite()遇到非数值直接返回false
// Number.isNaN遇到非NaN，直接返回false
console.log(isFinite('15'))//true
console.log(Number.isFinite('15'))//false

console.log(isNaN('15a'))//true
console.log(Number.isNaN('15a'))//false

// 2. Number.isInteger用来判断是否是整数
console.log(Number.isInteger(25))//true
console.log(Number.isInteger(25.0))//true

// 如果不是数值,Number.isInteger直接返回false
console.log(Number.isInteger('5'))//false

// 但是由于javaScript的设计，对于一些数字的精度问题可能会有误差
console.log(Number.isInteger(2.0000000000000002))//true
console.log(Number.isInteger(2.0300))//false
// 如果对数据精度的要求较高，不建议使用`Number.isInteger()`判断一个数值是否为整数
// 上面这种情况依然返回true
