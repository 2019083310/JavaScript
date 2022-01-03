const obj={
  name:'liu',
  age:21,
  friends:{
    name:'liu'
  },
  hobbies:['篮球','羽毛球']
}

localStorage.setItem('obj',obj)

console.log(localStorage.getItem('obj'))

// JSON序列化转成JSON字符串
const jsonString=JSON.stringify(obj)
console.log(jsonString)

// 把JSON字符串解析为原来的JavaSCript数据格式
const obj2=JSON.parse(jsonString)
console.log(obj2)