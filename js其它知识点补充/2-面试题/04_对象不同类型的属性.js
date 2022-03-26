/**
 * 涉及知识点:
 *  普通对象的属性值只能是字符串和Symbol类型
 * 如果不是，会做隐士的类型转换
 */

// 代码段1
var a={},b='123',c=123
a[b]='b'
a[c]='c'
console.log(a[b])
// 相当于a.123='b'   a.123='c'
//'c'

// 代码段2
var a={},b=Symbol('123'),c=Symbol('123')
a[b]='b'
a[c]='c'
console.log(a[b])//'b'

// 代码段3
var a={},b={key:'123'},c={key:'456'}
a[b]='b'
a[c]='c'
console.log(a[b])//'c'
// 对象类型做转换为字符串 '[Object Object]'  也会覆盖