const date=new Date()

// 方法
// 1.设置日期
date.setDate(8)
console.log(date.getDate())//8

// 2.设置年份
date.setFullYear(2023)
console.log(date.getFullYear())//2023

// 3.设置小时
date.setHours(11)
console.log(date.getHours())//11

// ...以此类推
// 4.返回日期的字符串形式
console.log(date.toJSON())