// includes这个方法主要是用来查找数组中的某一项
// 找到返回true，找不到返回false,可查找NaN

Array.prototype.LyIncludes=function(key,start=0){
  if(start<0){
    start=this.length+start
  }
  const isNaN=Number.isNaN(key)
  if(isNaN){
    return true
  }
  for(let i=start;i<this.length;i++){
    if(this[i]===key){
      return true
    }
  }
  return false
}

// 测试
console.log([1,2,3].LyIncludes(NaN))
console.log([1,2,3].LyIncludes(2))//true
console.log([1,2,3,NaN].LyIncludes(NaN))//true
console.log([1,2,3,NaN].LyIncludes(1,1))//false

Array.prototype.includes()