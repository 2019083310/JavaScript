// Array.of()主要是用来生成一个新的数组
// 可以弥补Array()和new Array()的缺陷
// 1.当new Array()中参数不同时，他的表现不同
// 1.1只有一个参数时--指定数组的长度
console.log(new Array(2))

// 1.2没有参数时--生成一个空数组
console.log(new Array())

// 1.3参数大于等于2时---参数是数组中的元素
console.log(new Array(1,3))
console.log(new Array(1,3,5))

// 2.Array.of()的同一性,参数都是数组的元素,没有参数是一个空数组
console.log(Array.of())
console.log(Array.of(1))
console.log(Array.of(undefined))