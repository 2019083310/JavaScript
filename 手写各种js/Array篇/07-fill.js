// fill这个方法主要是用来填充数组
console.log(Array.prototype)

Array.prototype.LyFill=function(value,start=0,end){
  end=end||this.length
  for(let i=start;i<end;i++){
    this[i]=value
  }
  return this
}

// 测试
console.log(players.LyFill({name:'jwt',age:20},1,3))
