// flat() 方法会按照一个可指定的深度递归遍历数组，
// 并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 注意一：flatMap是先进行map操作，再做flat的操作；
// 注意二：flatMap中的flat相当于深度为1；

// 1.flat的使用
const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
const newNums = nums.flat()
console.log(newNums)

const newNums2 = nums.flat(2)
console.log(newNums2)

// 2.flatMap的使用
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(item => {
  return item * 2
})
const newNums4 = nums2.map(item => {
  return item * 2
})

console.log(newNums3)
console.log(newNums4)