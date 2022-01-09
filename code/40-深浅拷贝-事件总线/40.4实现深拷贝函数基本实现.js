// 判断是不是对象的函数
function isObject(value){
  const typeValue=typeof value
  return (value!==null)&&(typeValue==='object'||typeValue==='function')
}

// 实现深拷贝
function deepClone(originValue){
  const newObject={}

  if(!isObject(originValue)){
    return originValue
  }

  for(let key in originValue){
    newObject[key]=deepClone(originValue[key])
  }
  return newObject
}

// 测试
const obj={
  name:'liu',
  age:21,
  friends:{
    name:'kobe',
    address:['北京','上海']
  }
}

const newObj=deepClone(obj)
console.log(newObj === obj)//false

obj.friends.name = "james"
console.log(newObj)