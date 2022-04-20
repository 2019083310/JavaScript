const obj = {
  name: "liu",
  age: 18,
  friends: {
    name: "kobe"
  },
  hobbies: ["篮球", "足球"],
  foo: function () {
    console.log("foo function")
  }
}

// 将obj对象的内容放到info变量中
// 1.引用赋值
const info = obj
obj.age = 100
console.log(info.age)

// 2.浅拷贝
const info2 = {
  ...obj
}
obj.age = 1000
console.log(info2.age)

obj.friends.name = "james"
console.log(info2.friends.name)

// 3.stringify和parse来实现
const jsonString = JSON.stringify(obj)
console.log(jsonString)
const info3 = JSON.parse(jsonString)
obj.friends.name = "curry"
console.log(info3.friends.name)
console.log(info3)


// 注意:
// 1.JSON.stringify不能处理值为undefined和NaN
// 2.不能处理对象不可枚举的属性
// 3.不能实现循环引用
// 4.不能处理函数和正则表达式