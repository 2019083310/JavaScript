// some这个方法主要用来判断数组中是否有某个值
// 如果数组中有一项符合条件就返回true

Array.prototype.LyEvery=function(callback){
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
      return true
    }
  }
  return false
}

// 测试
const flag=players.LyEvery((value)=>{
  return value.age>21
})
const flag2=players.LyEvery((value)=>{
  return value.age>50
})
console.log(flag)
console.log(flag2)
