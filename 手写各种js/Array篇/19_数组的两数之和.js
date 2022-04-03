// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 方法1：两层for循环
// function getTwoSum(nums,target){
//   let res=[]
//   for(let i=0;i<nums.length;i++){
//     let flag=false
//     for(let j=i+1;j<nums.length;j++){
//       if(nums[i]+nums[j]===target){
//         flag=true
//         res.push(i,j)
//         break
//       }
//     }
//     if(flag) break
//   }
//   return res
// }
// const arr=[2,7,11,15]
// console.log(getTwoSum(arr,9))

// 方法2:利用map
// function getTwoSum(nums,target){
//   const map=new Map()
//   for(let i=0;i<nums.length;i++){
//     const n=target-nums[i]
//     if(map.has(n)){
//       return [map.get(n),i]
//     }
//     map.set(nums[i],i)
//   }
// }
// const arr=[2,7,11,15]
// console.log(getTwoSum(arr,9))

// 方法3:利用双指针
// 1-如果数组的有序数组
// function getTwoSum(nums, target) {
//   const res = []

//   let l = 0
//   let r = nums.length - 1

//   while (l < r) {
//     let sum = nums[l] + nums[r]

//     if (sum > target) {
//       r--
//     } else if (sum < target) {
//       l++
//     } else {
//       res.push(l+1, r+1)
//       break
//     }
//   }

//   return res
// }
// const arr = [2, 7, 11, 15]
// console.log(getTwoSum(arr, 9))

// 2-数组是有序数组，但是值不能重复
function getTwoSum(nums, target) {
  const set = new Set()

  nums.sort((a, b) => a - b)
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    let sum = nums[l] + nums[r]

    if (sum > target) {
      r--
    } else if (sum < target) {
      l++
    } else {
      set.add(`${nums[l]},${nums[r]}`)
      l++
      r--
    }
  }

  return Array.from(set).map(i=>i.split(','))
}

// const arr = [1,2, 7,8,1,2, 11, 15]
const arr=[1,1,1,2,2,3,3]
console.log(getTwoSum(arr, 4))