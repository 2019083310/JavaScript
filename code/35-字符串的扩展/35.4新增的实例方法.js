// 1.1includes
// 返回布尔值，表示是否找到了字符
const str='liuNameAge'
console.log(str.includes('i'))

// 1.2startsWith表示字符是否在str的头部
console.log(str.startsWith('l'))//true

// 1.3endsWith字符是否在尾部
console.log(str.endsWith('e'))//true

// 以上三个方法都支持第三个参数,表示开始查找的位置

// 2.padStart/padEnd字符串的填充
console.log(str.padStart(str.length+1,'*'))
console.log(str.padEnd(str.length+1,'*'))

// 3.去除字符串两端的空格
console.log('   ---hello----     '.trimStart())
console.log('   ---hello----     '.trimEnd())

// 4.repeat生成一个新的字符串,表示将原来的字符串复制所少次
// 4.1参数是一个整数，但是负数和infinity会报错
console.log(str.repeat(2))
// console.log(str.repeat(-1))

// 4.2参数是一个小数，整数会向下取整，0~-1之间的小数会被取0
console.log(str.repeat(0.1))
console.log(str.repeat(-0.1))

// 4.3参数是其他类型，会做隐士类型转换为数字
console.log(str.repeat('aaaa'))

// 4.4参数是NaN.会被当做是0

// 5.replaceAllES12中提出
// replace要替换所有必须在正则表达式中用g/y修饰符
// replaceAll可以弥补这一点
console.log('aaaa__bb__cc_a'.replace('a','d'))
console.log('aaaa__bb__cc_a'.replaceAll('a','d'))

// 如果是正则表达式
const reg=/a/
const reg2=/a/g
console.log('aaaa__bb__cc_a'.replace(reg,'d'))
console.log('aaaa__bb__cc_a'.replace(reg2,'d'))
// 用正则表达式的replaceAll，正则表达式中必须有g/y，否则或报错，但是replace不会报错
// console.log('aaaa__bb__cc_a'.replaceAll(reg,'d'))

// 5.2replaceAll的第二个参数除了为一个字符串，还可以是一个函数,该函数的返回值会替换所有匹配的内容
console.log('aaaa__bb__cc_a'.replaceAll('a',(match,offset,str)=>{
  console.log(match)
  console.log(offset)
  console.log(str)
  return 'd'
}))

// 该函数可以接受多个参数,第一个参数是捕捉到的内容,倒数第一个参数是源字符串
// 倒数第二个参数是捕捉到的内容的位置
// 此外，在第一个参数后面还可以有多个参数，表示正则表达式的组匹配
// 有多少组组匹配就有多少个参数

// 6.at方法
console.log(str.at(-1))
