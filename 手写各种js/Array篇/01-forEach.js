// forEach方法是数组自带的方法，只有数组可以使用forEach遍历
// 参数：1.value  2.index   3.arr原数组本身
console.log(Array.prototype)

Array.prototype.LyForEach=function(callback){
  for(let i=0;i<this.length;i++){
    callback(this[i],i,this)
  }
}

// 测试
players.LyForEach((value,index)=>{
  console.log(value,index)
})