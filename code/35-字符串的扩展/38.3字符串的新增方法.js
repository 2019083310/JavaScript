// 1.String.fromCodePoint可以识别大于0xFFFF的码点
// ES5以前的fromCharCode不能识别utf-16的编码

console.log(String.fromCharCode(0x20BB7))
console.log(String.fromCodePoint(0x20BB7))//𠮷

// 2.String.raw()主要用来处理模板字符串
// 主要是模板字符串中如果有\，则返回\\进行转义
console.log(String.raw`hi\n${2+3}`)

