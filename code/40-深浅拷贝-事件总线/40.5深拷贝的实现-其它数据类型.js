// 判断是不是对象的函数
function isObject(value){
  const typeValue=typeof value
  return (value!==null)&&(typeValue==='object'||typeValue==='function')
}

// 实现深拷贝
function deepClone(originValue){
  // set类型数据处理
  if(originValue instanceof Set){
    return new Set([...originValue])
  }

   // map类型数据处理
   if(originValue instanceof Map){
    return new Map([...originValue])
  }

  // Symbol类型的处理
  if( typeof originValue==='symbol'){
    return Symbol(originValue.description)
  }

  // 函数类型的处理，直接返回函数本身即可
  if(typeof originValue==='function'){
    return originValue
  }

  // 数组数据类型的判断处理
  const newObject=Array.isArray(originValue)?[]:{}

  // 基本数据类型的判断
  if(!isObject(originValue)){
    return originValue
  }

  // 对象数据类型的处理
  for(let key in originValue){
    newObject[key]=deepClone(originValue[key])
  }

  // Symbol数据类型的处理
  const sKeys=Object.getOwnPropertySymbols(originValue)
  for(let key of sKeys){
    newObject[key]=deepClone(originValue[key])
  }
  return newObject
}

// 测试
const s1=Symbol('aaa')
const s2=Symbol('bbb')
const obj={
  name:'liu',
  age:21,
  friends:{
    name:'kobe',
    address:['北京','上海']
  },
  // 数组类型
  hobbies:['abc','cba','nba'],
  // 函数类型
  add:function(m,n){
    console.log('abc')
  },
  // Symbol数据类型
  [s1]:'aaa',
  s2:s2,
  // set数据类型
  set:new Set(['aaa','bbb','ccc']),
  // map数据类型
  map:new Map([['aaa','a'],['bbb','b']])

}

const newObj=deepClone(obj)
console.log(newObj === obj)//false

obj.friends.name = "james"
console.log(newObj)
console.log(newObj.s2===obj.s2)//false