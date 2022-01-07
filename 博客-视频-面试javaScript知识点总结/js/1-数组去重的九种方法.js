var obj = {
  name: 'liu'
}

const arr = [1, 1, 1, 2, 3, 5, 6, 6, 7, {}, {}, obj, obj]

//方法一：ES6Set数据结构
// const set=new Set(arr)
// const newArr=Array.from(set)
// console.log(newArr)

//方法二:利用for嵌套for，然后splice去重（ES5中最常用）
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       arr.splice(j,1)
//       j--
//     }
//   }
// }
// console.log(arr)

//方法三:利用indexOf去重
// const newArr=[]
// for(let i=0;i<arr.length;i++){
//   if(newArr.indexOf(arr[i])===-1){
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr)

//方法四:利用includes
// const newArr=[]
// for(let i=0;i<arr.length;i++){
//   if(!newArr.includes(arr[i])){
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr)

//方法五:利用filter
// const newArr=arr.filter((item,index)=>{
//   return arr.indexOf(item,0)===index
// })
// console.log(newArr)

//方法六:利用reduce+includes
// const newArr=arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[])
// console.log(newArr)

//方法七：[...new Set(arr)]
// const set=new Set(arr)
// console.log([...set])

//方法八：利用Map数据结构去重
// const newArr=[]
// const map=new Map()
// for(let i=0;i<arr.length;i++){
//   if(!map.has(arr[i])){
//     map.set(arr[i],'number')
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr)

//方法九：利用递归去重
function unique(arr) {
  const array = arr
  let len = array.length

  array.sort( (a, b)=> { //排序后更加方便去重
    return a - b
  })

  function loop(index) {
    if (index >= 1) {
      if (array[index] === array[index - 1]) {
        array.splice(index, 1)
      }
      loop(index - 1)//递归loop，然后数组去重
    }
  }
  loop(len - 1)
  return array
}
const newArr=unique(arr)
console.log(newArr)