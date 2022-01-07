// Date是一个类，是一个构造函数
const date=new Date()//返回的当前日期时间
console.log(date)
// 注意：返回的日期时间是一个对象
console.log(typeof date)

// 常用方法
// 1.Date.now()--当前日期的时间戳，毫秒,相对于1970年1月1日
console.log(Date.now())

// 2.Date.parse()--解析一个时间字符串，并返回时间戳，如果字符串日期不合法，返回NaN
console.log(Date.parse('1970 09:39:00'))
console.log(Date.parse('2022-1-7'))
