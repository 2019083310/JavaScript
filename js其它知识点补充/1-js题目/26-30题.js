// 26. 自动提升为全局变量
// y变量泄露
(function() {
  var x = y = 1;
})();
console.log(y);//1
console.log(x);//x is not defined

// 27. 正则表达式实例
// 对于这种形式来说a,b都是正则表达式实例，都是对象，引用不同
var a = /123/;
var b = /123/;
a == b;//false
a === b;//false

// 28. 数组也爱比大小
// 对象判断是否相等的时候是比较的内存中的引用值是否相等
// 而做比较大小的时候会转换成字符串比较access码
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = [1, 2, 4];

a == b;//false
a === b;//false
a > c;//false-->'1,2,3'>'1,2,4'
a < c;//true

// 29. 原型把戏
// 对象是没有 prototype 属性的
var a = {};
var b = Object.prototype;

[a.prototype === b, Object.getPrototypeOf(a) == b]//[false,true]

// 30. 构造函数的函数
// 要记住Object.getPrototypeOf()是根据__proto__属性去查找原型的
function f() {}
var a = f.prototype;//f.prototype-->Object
var b = Object.getPrototypeOf(f);//Function.prototype
a === b;//false

