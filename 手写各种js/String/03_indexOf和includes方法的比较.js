// 1-indexOf和includes都是用来判断数组或者字符串中是否有某个元素
// includes方法是es6新增的弥补了indexOf判断是否含有NaN的缺陷
const arr=[NaN,1,2,3]
console.log(arr.indexOf(NaN)) //-1
console.log(arr.includes(NaN)) //true

// 2.二者返回值也不同
// indexOf找到返回该值得索引，找不到返回-1
// includes找到返回true，找不到返回false

// 3.二者都有第二个参数，表示从索引为该值处开始查找，也可以是负值

// 4.如果数组是一个空数组,对undefined判断的区别
const arr2=[,,]
console.log(arr2.indexOf(undefined))//-1
console.log(arr2.includes(undefined))//true

// 5.字符串和数组中的indexOf和includes的区别
// 数组的indexOf和includes判断的方法是严格匹配===
// 字符串中的indexOf和includes判断的方法是相等==会做类型转化
console.log('1234'.indexOf(2))//1
console.log(['1','2'].indexOf(2))//-1
