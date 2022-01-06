// 1.push()添加元素
const arr=[1,2,3]
arr.push(4)
console.log(arr)

// 2.pop()删除数组的最后一个元素
console.log(arr.pop())//返回删除的元素

// 3.shift删除数组的第一个元素
console.log(arr.shift())//返回删除的元素

// 4.unshift()数组的头部添加元素
console.log(arr.unshift(1))//返回数组的长度
console.log(arr)

// 5.reverse()反转数组
console.log(arr.reverse())

// 6.splice()删除数组，修改数组
console.log(arr.splice(0,1))//删除的元素会被添加到一个数组中
console.log(arr)

// 6.2splice方法添加元素
console.log(arr.splice(0,0,1,'a'))
console.log(arr)

// 6.3修改元素
console.log(arr.splice(0,1,'b'))
console.log(arr)

// 7.fill方法
// 8.copyWithin方法
// 9.sort方法
// 10.flat()