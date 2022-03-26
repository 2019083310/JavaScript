// 在原数组的基础上移除数组为0的元素
// 输入：[0,1,2,3,0]
// 输出:[1,2,3,0,0]

const arr=[0,1,2,3,0]

// 1.双指针
// function removeZero(arr){
//   let l=0
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//       arr[l++]=arr[i]
//     }
//   }
//   arr.fill(0,l,arr.length) 
//   return arr
// }
// console.log(removeZero(arr))

// 2.遍历
function removeZero(arr){
  let len=0

  for(let i=0;i<arr.length-len;i++){
    if(arr[i]===0){
      arr.splice(i,1)
      arr.push(0)
      len++
      i--
    }
  }
  
  return arr
}
console.log(removeZero(arr))

// 方法3：filter
// function removeZero(arr){
//   const newArr=arr.filter(i=>i)
//   const len=arr.length-newArr.length
//   return newArr.concat(...new Array(len).fill(0))
// }
// console.log(removeZero(arr))