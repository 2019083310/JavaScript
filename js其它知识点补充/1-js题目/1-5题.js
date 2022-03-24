// 第一题 parseInt
// map函数的参数是一个函数有三参数:value,index,array
// parseInt函数只有两个参数:string,radix
// 表示将第一个字符串转换为十进制整数，第一个参数如果不是字符串，会先转换为字符串,会提取出字符串中连续的整数
console.log(parseInt('5a'))//5

// 第二个参数为2-36之间的整数,小于2或者大于36返回NaN,默认为0，表示将第一个参数为十进制转化为十进制
// (1,0)-->1
// (2,1)-->NaN
// (3.2)-->3不是一个二进制数，返回NaN
console.log(["1", "2", "3"].map(parseInt))//[1,NaN,NaN]

// 第二题  神奇的null
console.log([typeof null, null instanceof Object])//['object',false]

// 第三题  愤怒的reduce
// 数组调用reduce方法，如果数组为空会报错
console.log([3,2,1].reduce(Math.pow))//9
// console.log([ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ])//an error

// 第四题 该死的优先级
// +号的优先级大于三元运算符
var val = 'smtg';
console.log('Value is ' + (val === 'smtg'));//Value is true
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');//Something

// 第五题 神鬼莫测之变量提升
// 变量提升  val不存在块级作用域，会提升至函数顶部
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
      var name = 'Jack';
      console.log('Goodbye ' + name);
    } else {
      console.log('Hello ' + name);
    }
})();//Goodbye Jack

// 等同于下面的代码
// var name = 'World!';
// (function () {
//     var name;
//     if (typeof name === 'undefined') {
//       name = 'Jack';
//       console.log('Goodbye ' + name);
//     } else {
//       console.log('Hello ' + name);
//     }
// })();