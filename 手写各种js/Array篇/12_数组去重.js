// 1.es6扩展运算符
// function uniqueArray(arr){
//   const set=new Set(arr)
//   const newArr=[...set]
//   return newArr
// }

// 不考虑兼容性，这种去重的方法代码最少。
// 这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。

// console.log(uniqueArray([1, 2, 3, 1, 2, 3]))
// console.log(uniqueArray([1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 1, 2]))

// 2.遍历
// function uniqueArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j,1)
//         j--
//       }
//     }
//   }

//   return arr
// }

// 3.indexOf去重/includes
// function uniqueArray(arr) {
//   // const newArr=[]
//   for (let i = 0; i < arr.length; i++) {
//     const p = arr.indexOf(arr[i])
//     if (p !== -1) {
//       const q = arr.indexOf(arr[i], p + 1)
//       if (q !== -1) {
//         arr.splice(q, 1)
//       }
//     }
    // if(!newArr.includes(arr[i])){
    //   newArr.push(arr[i])
    // }
  // }

  // return arr
// }

// const arr2=uniqueArray([1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 1, 2])
// console.log(uniqueArray(arr2))

// 4.filter+includes
function uniqueArray(arr){
  const newArr=arr.filter((item,index)=>{
    return arr.indexOf(item,0)===index
  })
}

// 5.reduce+includes
function uniqueArray(arr){
  const newArr=arr.reduce((pre,cur)=>{
    pre.includes(cur)?pre:[...pre,cur]
  },[])
}