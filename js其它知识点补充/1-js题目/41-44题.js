// 41. 警惕全局匹配
function captureOne(re, str) {
  var match = re.exec(str);
  return match && match[1];
}

var numRe = /num=(\d+)/ig,
  wordRe = /word=(\w+)/i,
  a1 = captureOne(numRe, "num=1"),
  a2 = captureOne(wordRe, "word=1"),
  a3 = captureOne(numRe, "NUM=1"),//null
  a4 = captureOne(wordRe, "WORD=1");
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
// [a1 === a2, a3 === a4]//false  

// 42. 最熟悉的陌生人
var a = new Date("2014-03-19");//3月  19日
var b = new Date(2014, 03, 19);//4月  19日
[a.getDay() == b.getDay(), a.getMonth() == b.getMonth()]//false  false
console.log(a,b)

// 43. 匹配隐式转换
// 如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj)
// 将其转换为正则表达式对象。
// 所以我们的字符串 ".gif" 会被转换成正则对象 /.gif/，会匹配到 "/gif"。
if("http://giftwrapped.com/picture.jpg".match(".gif")) {
  console.log("a gif file");
} else {
  console.log("not a gif file");
}

// 44. 重复声明变量
// 一个函数内如果已经声明了参数变量，移除变量，按时赋值正常
function foo(a) {
  var a;
  return a;
}

function bar(a) {
  var a = "bye";
  return a;
}

[foo("hello"), bar("hello")]//hello  bye