// flat主要是用来对数组进行将维处理
// 也就是数组扁平化

Array.prototype.LyFlat=function(){
  let newArr=this
  while(newArr.some((item)=>{return Array.isArray(item)})){
    newArr=[].concat(...newArr)
  }

  return newArr
}

// 测试
console.log([1,2,3,[1,2,3],[1,2,[1,2,3]]].LyFlat(2)) 
// console.log([1,2,3,[1,2,3],[1,2,[1,2,3]]].flat(2)) 