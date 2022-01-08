// findIndex这个方法主要是用来返回查找到的索引值
// 找到返回索引值，找不到返回-1

Array.prototype.LyFindIndex=function(callback){
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
      return i
    }
  }
  return -1
}

Array.prototype.LyFind=function(callback){
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
      return this[i]
    }
  }
  return undefined
}

// 测试
console.log(players.LyFindIndex((item,index)=>{
  return item.age===21
}))

console.log(players.LyFindIndex((item)=>{
  return item.age===10
}))

console.log(players.LyFind((item,index)=>{
  return item.age===21
}))