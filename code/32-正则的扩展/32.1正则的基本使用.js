// 1.构造函数法创建正则表达式

// 1.1参数是字符串
const reg=new RegExp('abc','ig')
console.log(reg)

// 1.2参数是一个正则表达式,会返回一个原有正则表达式的拷贝
const regexp=new RegExp(/abc/ig)
console.log(regexp)

// 1.3ES5中不允许在参数是一个正则表达式的情况下，使用第二个参数添加修饰符
// ES6允许，第二个参数的修饰符会替换原有的修饰符
const regexp2=new RegExp(/abc/gi,'i')
console.log(regexp2)

// 2.字面量的方法创建正则表达式
const regexp3=/abc/g
console.log(regexp3)

