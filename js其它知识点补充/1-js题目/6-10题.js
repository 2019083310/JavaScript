// 第六题  死循环陷阱
// 在JavaScript中，2^53 是最大的值，没有比这更大的值了。
// 所以 2^53 + 1 == 2^53，所以这个循环无法终止。
// var END = Math.pow(2, 53);
// var START = END - 100;
// var count = 0;
// for (var i = START; i <= END; i++) { 
//   count++;
// }
// console.log(count);

// 第七题  过滤器魔法
// filter,reduce,some,every,forEach等函数会把数组中的[,,]的值跳过，忽略
// map会保留这个值
// join,toString()会把它变为undefined
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) {
  return x === undefined;
});//[]

// 第八题  警惕IEEE 754标准
// JavaScript中采用双精度浮点数格式，即IEEE 754标准。
// 在该格式下，有些数字无法表示出来，比如：0.1 + 0.2 = 0.30000000000000004 ，
// 这不是JavaScript的锅，所有采用该标准的语言都有这个问题，比如：Java、Python等。
var two = 0.2;
var one = 0.1;
var eight = 0.8;
var six = 0.6;
console.log([two - one == one, eight - six == two])//[true,false]

// 第九题 字符串的陷阱
// switch内部采用严格的===全等运算符判断，并且new String()返回的是一个对象
// new String()/Number()都会返回一个对象，和构造函数一样,也会有原型的方法
// 如果使用相等运算符==会返回true
// 之所以会返回true是因为==做了隐士类型转换，而{'a'}会转换为'a',这种只有一个值得会转为字符串
// 如果对象中有key :value会转换为'Object Object'
console.log(new String('a'))//{'a'}
console.log('a'==new String('a'))//true
console.log(new String('a').valueOf())
console.log(new String('a').toString())
function showCase(value) {
  switch(value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(new String('A'));//Do not Know!

// 第十题 再一次的字符串陷阱
function showCase(value) {
  switch(value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(String('A'));//Case A