const random=(n)=>{
  // 对于Number类型的值调用toString()方法转为字符串的时候，string()可以有参数
  // 和parseInt一样,2-36之间的整数，默认为10，表示将数字转化为十进制数字字符串
  // 大于36或小于2报错
  // 十进制10--->36进制的值为c
  return Math.random().toString(36).slice(2,2+n)
}

console.log(random(6))
console.log(random(4))