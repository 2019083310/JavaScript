// 31. 禁止修改函数名
// 函数名是禁止修改的，规范写的很清楚，所以这里的修改无效。
function foo() {}
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name];//['foo','foo']

// 32. 替换陷阱
// 如果 replace 方法第二个参数是一个函数，则会在匹配的时候多次调用，
// 第一个参数是匹配的字符串，第二个参数是匹配字符串的下标。
// 所以变成了调用 parseInt(1, 0)、parseInt(2, 2)和parseInt(3, 4)
"1 2 3".replace(/\d/g, parseInt)//'1 NaN 3'

// 33. Function的名字
// 构造函数的原型Function.prototype的name属性为空
// eval()f.name会执行这个函数
function f() {}
var parent = Object.getPrototypeOf(f);
console.log(f.name);//'f'
console.log(parent.name);//''空值
console.log(typeof eval(f.name));//'function'
console.log(typeof eval(parent.name));//''空值

// 34. 正则测试陷阱
// test 方法的参数如果不是字符串，
// 会经过抽象 ToString操作强制转成字符串，因此实际上测试的是字符串 "null" 和 "undefined"。
var lowerCaseOnly = /^[a-z]+$/;
[lowerCaseOnly.test(null), lowerCaseOnly.test()]//[true,true]

// 35. 逗号定义数组
// 允许数组中有undefined未定义的值，join()方法会将其转换为空的字符串
// [,,,].join(", ")//', ,'
