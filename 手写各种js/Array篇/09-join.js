// join这个方法主要适用于将数组转为字符串
// 分隔符默认为,

Array.prototype.LyJoin=function(s=','){
  let str=''
  for(let i=0;i<this.length;i++){
    str=i===0?`${str}${this[i]}`:`${str}${s}${this[i]}`
  }
  return str
}

// Array.prototype.LyJoin=function(s=','){
//  return this.toString()
// }

// 测试
console.log(players.LyJoin(''))
console.log([1,2,3].LyJoin())