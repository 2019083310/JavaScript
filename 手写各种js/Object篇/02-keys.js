// keys这个方法主要是用来返回一个新的数组
// 新的数组中包含的是对象中的所有key

// values这个方法是用来返回对象中的所有value

Object.LyKeys=function(obj){
  const res=[]
  for(let key in obj){
    res.push(key)
  }
  return res
}

Object.LyValues=function(obj){
  const res=[]
  for(let key in obj){
    res.push(obj[key])
  }
  return res
}

// 测试
console.log(Object.LyKeys(obj))
console.log(Object.LyValues(obj))