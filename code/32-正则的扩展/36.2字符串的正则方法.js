console.log(String.prototype)
console.log(RegExp.prototype)

const str='liuAgeName21liu'
const str2='liu Name Age'

const reg=/liu/ig
// 1.match方法,返回一个数组，数组中包含正则表达式要查找的内容
console.log(str.match(reg))
console.log(reg[Symbol.match](str))

// 2.search方法，找到返回第一次出现的索引，找不到返回-1
// 该方法无论设置不设置全局匹配模式，都只会返回第一次查找到的索引位置
const reg2=/u/ig
console.log(str.search(reg2))
console.log(reg2[Symbol.search](str))

// 3.replace方法,该方法也支持全局匹配模式，不设置全局匹配也会修改找到的第一个
console.log(str.replace(reg,'coder'))
console.log(reg[Symbol.replace](str,'coder'))

// 4.split方法
const reg3=/ /ig
console.log(str2.split(reg3))
console.log(reg3[Symbol.split](str2))
