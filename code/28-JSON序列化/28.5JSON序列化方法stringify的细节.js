const obj = {
  name: "liu",
  age: 18,
  friends: {
    name: "kobe"
  },
  hobbies: ["篮球", "足球"],
  // toJSON: function() {
  //   return "123456"
  // }
}

// 需求: 将上面的对象转成JSON字符串
// 1.直接转化
const jsonString=JSON.stringify(obj)
console.log(jsonString)

// 2.JSON.stringify()第二个参数replacer
// 2.1replacer是一个数组的时候表示只将数组中的key转化为JSON格式并返回
const jsonString2=JSON.stringify(obj,["name","friends"])
console.log(jsonString2)

// 2.2replacer是一个函数的时候表示对转化的内容做一个拦截
const jsonString3=JSON.stringify(obj,(key,value)=>{
  if(key==='name'){
    return "coder"
  }
  return value
})
console.log(jsonString3)

// 3.stringify的第三个参数space，可以是一个Number||String，表示将JSON已什么字符隔开
// 如果为数字代表几个空格，为字符串则为字符串中的字符
const jsonString4=JSON.stringify(obj,null,2)
console.log(jsonString4)

// 4.如果obj对象中有toJSON方法，则返回的就是toJSON中返回的内容