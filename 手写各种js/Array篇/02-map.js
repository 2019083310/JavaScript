// map这个方法并不会改变原数组，而是返回一个新的数组
// 参数：1.value 2.index 3.arr

Array.prototype.LyMap=function(callback){
  const arr=[]
  for(let i=0;i<this.length;i++){
    arr.push(callback(this[i],i,this))
  }
  return arr
}

// 测试
console.log(players.map((item,index)=>{
  return `${item.name}--${item.age}--${index}`
}))