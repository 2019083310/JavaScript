const date=new Date()

// 方法
// 1.getDate()--获取日期，1-31范围值
console.log(date.getDate())

// 2.getDay()--获取星期，0-6范围,0表示周日
console.log(date.getDay())

// 3.getFullYear()--获取年
console.log(date.getFullYear())

// 4.getHours()--获取小时
console.log(date.getHours())

// 5.getMinutes()--获取分钟
console.log(date.getMinutes())

// 6.getSeconds()--获取秒
console.log(date.getSeconds())

// 7.getMonth()--获取月,范围0-11,0为1月
console.log(date.getMonth())

// 8.getTime()--返回当前日期的时间戳
console.log(date.getTime())

// 9.返回相对于世界时间的差值
console.log(date.getTimezoneOffset())

// 10.还有获取世界时间的方法，只要加上UTC就可以了
console.log(date.getUTCDate())