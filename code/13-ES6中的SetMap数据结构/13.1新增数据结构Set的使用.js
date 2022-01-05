// 1.创建Set结构
const set =new Set()
set.add(1)
set.add(3)
set.add(5)

console.log(set)
// console.log(set.length)Set是没有length属性的

// 2.添加对象时特别注意:
// set.add({})
// set.add({})//这种是两个不同的对象，内存地址不一样

// const obj = {}
// set.add(obj)
// set.add(obj)//这种是相同的，内存地址一样

// console.log(set)

// 3.对数组去重(去除重复的元素)
// const arr = [33, 10, 26, 30, 33, 26]
// const newArr = []
// for (const item of arr) {
//   if (newArr.indexOf(item) !== -1) {
//     newArr.push(item)
//   }
// }

// const arrSet = new Set(arr)
// const newArr = Array.from(arrSet)
// const newArr = [...arrSet]
// console.log(newArr)

// 4.size属性
console.log(set.size)

// 5.Set的方法
// add
set.add(100)
console.log(set)

// delete
set.delete(3)
console.log(set)

// has
console.log(set.has(100))

// clear
// set.clear()
// console.log(set)

// 6.对Set进行遍历
set.forEach(item => {
  console.log(item)
})

for (const item of set) {
  console.log(item)
}

