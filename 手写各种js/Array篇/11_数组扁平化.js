// 数组扁平化指的是实现一个方法能够使多维数组变成一维数组

function flatter(arr){
  if(!arr.length) return []
  return arr.reduce((pre,cur)=>{
    return Array.isArray(cur)?[...pre,...flatter(cur)]:[...pre,cur]
  },[])
}
console.log(flatter([1,2,[3,4]]))
console.log(flatter([1,2,[3,4],[5,[6,7,[8,9]]]]))

// 2.迭代
function flatter2(arr){
  if(!arr.length) return []
  while(arr.some((item)=>{
    return Array.isArray(item)
  })){
    arr=[].concat(...arr)
  }
  return arr
}
console.log(flatter2([1,2,[3,4],[5,[6,7,[8,9]]]]))