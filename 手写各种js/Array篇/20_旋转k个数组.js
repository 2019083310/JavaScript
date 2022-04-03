// 方法1:利用pop()和unshift()方法
function rotate(arr,k){
  const step=k%arr.length

  for(let i=0;i<step;i++){
    arr.unshift(arr.pop())
  }

  return arr
}
const arr=[1,2,3,4,5,6,7]
// console.log(rotate(arr,3))
// console.log(rotate(arr,7))

// 方法2:利用slice方法
function rotate2(arr,k){
  const step=k%arr.length

  return arr.slice(-step).concat(arr.slice(0,arr.length-step))
}
// console.log(rotate2(arr,3))

// 方法3:利用splice()方法
function rotate3(arr,k){
  const step=k%arr.length

  return arr.splice(-step).concat(arr)
}
console.log(rotate3(arr,3))