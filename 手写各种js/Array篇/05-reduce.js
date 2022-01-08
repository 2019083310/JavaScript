// reduce这个方法是用来对数组中的内容进行和运算
// callback中的参数：pre前一项   currentValue:当前项   index：索引

Array.prototype.LyReduce=function(callback,...args){
  let pre
  let start=0
  if(args.length){
    pre=args[0]
  }else{
    pre=this[0]
    start=1
  }
  for(let i=start;i<this.length;i++){
    pre=callback(pre,this[i],i,this)
  }
  return pre
}

// 测试
console.log(players.LyReduce((pre,curValue)=>{
  return pre+curValue.age
},0))