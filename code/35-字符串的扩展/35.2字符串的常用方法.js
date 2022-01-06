// 1.大小写转化
const str='liuNameAge'

// 1.1转为大写str.toUpperCase
console.log(str.toUpperCase())

// 1.2转为小写str.toLowerCase
console.log(str.toLowerCase())

// 2.返回索引处的字符
console.log(str.charAt(1))

//3.返回索引处的字符码
console.log(str.charCodeAt(1)) 

// 4.split转化为数组
console.log(str.split(''))

// 5.replace方法,也可以接受一个正则表达式
console.log(str.replace('l','L'))

// 6.trim去除字符串两端的空格
console.log('   hello    '.trim())

// 7.字符串的提取slice
console.log(str.slice(0,1))
