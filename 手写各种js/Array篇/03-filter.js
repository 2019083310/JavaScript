// filter这是个高阶函数，它也不会改变原数组。而是返回一个新的数组
// 参数：1.value 2.index 3.arr
// 这个方法的返回值必须是一个布尔值

Array.prototype.LyFilter=function(callback){
  const arr=[]
  for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
      arr.push(this[i])
    }
  }
  return arr
}

// 测试
const newArr=players.LyFilter((item)=>{
  return item.age>21
})
console.log(newArr)