// 36. 保留字 class
// 实际上真正的答案取决于浏览器。class 是保留字，但是在Chrome、Firefox和Opera中可以作为属性名称，在IE中是禁止的。另一方面，
// 其实所有浏览器基本接受大部分的关键字（如：int、private、throws等）作为变量名，而class是禁止的。
var a = {class: "Animal", name: "Fido"};
console.log(a.class)//取决于浏览器

// 37. 无效日期
// new Date()中的内容是一个数字，但是他是字符串，无效
var a = new Date("epoch");//Invalid Date

// 38. 神鬼莫测的函数长度
// Function 构造器本身也是个Function。他的 length 属性值为 1 。
// 属性 Writable: false, Enumerable: false, Configurable: true,value:1。
console.log(Object.getOwnPropertyDescriptor(Function,'length'))
var a = Function.length;//1
var b = new Function().length;//0
console.log(a === b)//false

// 39. Date的面具
var a = Date(0)//0转换为字符串‘0’,是一个字符串，当前时间的字符串
var b = new Date(0)//成生一个时间，是一个对象,是时间戳为0的日期时间对象
var c = new Date()//当前时间utc,是一个对象
[a === b, b === c, a === c]//[false,false,false]
console.log(Date(0))
console.log(new Date(0))

// 40. min与max共舞
// 对于Math.min()如果没有参数，结果为Infinity。
// 对于Math.max()如果没有参数，结果为-Infinity。
var min = Math.min();
var max = Math.max();
console.log(min < max);//false
