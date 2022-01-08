// entries这个方法用于将对象中的每个键值对转化为数组形式的键值对
Object.LyEntries=function(obj){
  const res=[]
  for(let key in obj){
    res.push([key,obj[key]])
  }

  return res
}

console.log(Object.LyEntries(obj))