// 隐士类型转化
// 1.对于Number类型，数字返回原数字
// 字符串不含字符则转化为数值，含有字符转化为NaN
// 布尔类型false---0/true---1
// null----0  undefined---NaN
// 数组-->如果数组中是单个值，则转化为数值类型   -->如果有多个值转化为NaN -->如果空数组转化为0
// 对象-->转化为NaN。先调用obj.valueOf方法, 结果返回对象本身
// 于是，继续调用obj.toString方法，这时返回字符串[object Object]，对这个字符串使用Number函数，得到NaN。
console.log(Number(null)) //0
console.log(Number(undefined)) //NaN
console.log(Number([1])) //1
console.log(Number(['1'])) //1
console.log(Number([])) //0
console.log(Number({
  name: 'liu'
})) //NaN
console.log(Number({})) //NaN
console.log([].valueOf()) //[]
console.log(['1'].valueOf()) //['1']
console.log(['1'].toString()) //1
console.log(typeof ['1'].toString()) //string
console.log(['1', '2'].toString()) //1,2
console.log([1, 2, 3].valueOf()) //[1,2,3]
console.log({}.valueOf()) //{}
console.log({
  a: 'a'
}.valueOf()) //{a:'a'}
console.log(typeof [].toString()) //string
console.log({}.toString()) //[Object Object]
console.log({
  'a': 'b'
}.toString()) //[Object Object]

// 2.字符串
// 数值字符串、布尔，Null、undefined都会转化为字符串，加上双引号内容不变
// 数组-->直接转化为字符串
// 对象-->转化为[Object Object]
// String方法的参数如果是对象，返回一个类型字符串；
// 如果是数组，返回该数组的字符串形式，相当于调用数组的Array.prototype.join()方法。
// String方法背后的转换规则，与Number方法基本相同，
// 只是互换了valueOf方法和toString方法的执行顺序。
console.log(String(null))
console.log(String(5))
console.log(String([1, 2, 3]))
console.log(String({}))

// 3.布尔
// 数值除了NaN和0其余转化为true
// 字符串除了空串其余转化为true
// null  undefined -->false
// 对于数组和对象会按照调用toString方法转化
console.log(Boolean(null))
console.log(Boolean('a')) //true
console.log(Boolean('')) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(['1'])) //true
console.log(Boolean([])) //true
console.log(Boolean({})) //true
console.log(Boolean({
  a: 'a'
})) //true

// 4.null和undefined各自只有一个值就是他们本身，他们没有包装类
console.log(undefined)
console.log(null)

// 5.Object
// 对于基本数据类型，Object会把值转化为对应的类型对象
console.log(Object(1)) //Number类的对象
console.log(Object('1')) //String类的对象
console.log(Object(false)) //Boolean类的对象
console.log(Object(null)) //空对象
console.log(Object(undefined)) //空对象
console.log(Object(['1'])) //转化为数组，数组也是个对象，就会返回它本身
// 对象类型包括数组相当于调用valueOf()方法
console.log(Object({})) //本身
console.log(Object({
  a: "a"
})) //对象本身

// 6.布尔类型和任何类型的值做比较都会转化为数值类型
//null和undefined在关系运算符中会转化为数值，在相等运算符中会转化为false

// 7.还有隐士类型转化