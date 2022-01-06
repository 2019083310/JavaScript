// 属性不多有一个name

// 方法
// 1.isNaN用来判断是否是NaN类型的值
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(1))//false

// 2.parseInt和parseFloat
// 2.1parseInt提取整数
console.log(Number.parseInt('12.056'))
console.log(Number.parseInt(12.056))
console.log(Number.parseInt('1.b56'))

// 2.2parseFloat提取小数
console.log(Number.parseFloat(12.056))
console.log(Number.parseFloat('12.056'))
console.log(Number.parseFloat('12.056%'))

// 3.最大数值/最小数值
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// 4.最大安全整数、最小安全整数
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)