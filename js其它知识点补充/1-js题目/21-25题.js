// 21. 反转世界
// reverse()方法用于反转数组，并返回数组的引用,可以改变原数组
// 例如：
const arr=[1,2,3]
console.log(arr.reverse())//[3,2,1]
// 而下面的没有数组的引用会返回window
var x = [].reverse;
// x();//window

// 22. 最小的正值
// MIN_VALUE属性是 JavaScript 里最接近 0 的正值，而不是最小的负值。
Number.MIN_VALUE > 0//true

// 23. 谨记优先级
// <和>的优先级都是从左到右
[1 < 2 < 3, 3 < 2 < 1]//[true,true]

// 24. 坑爹中的战斗机
// 根据ES5规范，如果比较的两个值中有一个是数字类型，就会尝试将另外一个值强制转换成数字，再进行比较。
// 而数组强制转换成数字的过程会先调用它的 toString方法转成字符串，然后再转成数字。
// 所以 [2]会被转成 "2"，然后递归调用，最终 [[[2]]] 会被转成数字 2
2 == [[[2]]]//true

// 25. 小数点魔术
// 点运算符会被优先识别为数字常量的一部分，然后才是对象属性访问符。
// 所以 3.toString() 实际上被JS引擎解析成 (3.)toString()，显然会出现语法错误。
// 但是如果你这么写 (3).toString()，人为加上括号，这就是合法的。
// 3.toString();//error
console.log((3).toString())//'3'
console.log(3..toString())//(3.).toString()
// 3...toString();//error