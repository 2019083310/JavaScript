//ES5不支持四个字节的utf-16编码，ES6的u修饰符用来处理四个字节的utf-16编码
// 四个字节的编码大于\uFFFF的unicode字符

// \uD83D\uDC2A是一个四个字节的 UTF-16 编码，代表一个字符。但是，ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。
// 加了u修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为false。
console.log(/^\uD83D/.test('\uD83D\uDC2A'))//true
console.log(/^\uD83D/u.test('\uD83D\uDC2A'))//false

// 1.点字符(.)表示除了换行符以外的任意单个字符，对于码点大于oxFFFF的字符必须加上u修饰符
const s='𠮷'

console.log(/^.$/.test(s))
console.log(/^.$/u.test(s))

// 2.unicode表示法
// ES6新增了大括号法表示unicode字符，必须加上u修饰符才能识别
console.log(/\u{61}/.test('a'))//FALSE
console.log(/\u{61}/u.test('a'))//true

// 3.量词
// 使用u修饰符，所有量词都会识别码点大于0xFFFF的unicode字符
console.log(/a{2}/.test('aa'))//true
console.log(/a{2}/u.test('aa'))//true

console.log(/𠮷{2}/.test('𠮷𠮷'))//false
console.log(/𠮷{2}/u.test('𠮷𠮷'))//true

// 4.预定义模式
// \S表示除了空格,只有加了u修饰符才能识别码点大于0xFFFF的Unicode字符
console.log(/^\S$/.test('𠮷'))//false
console.log(/^\S$/u.test('𠮷'))//true

// 5.i修饰符
// 有些unicode字符的编码不同，只有加了u修饰符才能识别非规范的字符
console.log(/[a-z]/i.test('\u212A'))//false
console.log(/[a-z]/iu.test('\u212A'))//true

// 6.转义
// 没有u修饰符的情况下，正则中没有定义的转义（如逗号的转义\,）无效，而在u模式会报错。
console.log(/\,/)
// console.log(/\,/u)
