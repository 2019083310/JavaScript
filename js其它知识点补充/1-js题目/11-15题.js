// 11   并非都是奇偶
// -9 % 2 = -1 以及 Infinity % 2 = NaN，求余运算符会保留符号
function isOdd(num) {
  return num % 2 == 1;
}

function isEven(num) {
  return num % 2 == 0;
}

function isSane(num) {
  return isEven(num) || isOdd(num);
}

var values = [7, 4, "13", -9, Infinity];
values.map(isSane);//[true,true,true,false,false]

// 12  parseInt小贼
parseInt(3, 8);//3
parseInt(3, 2);//NaN
parseInt(3, 0);//3

// 13  数组原型是数组
// 一个鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray( Array.prototype )//true

// 14  一言难尽的强制转换
var a = [0];
if ([0]) {
  console.log(a == true);//false
} else {
  console.log("wut");
}

// 15. 撒旦之子“==”
// 两个数组的内存的引用不同
[]==[]//false
