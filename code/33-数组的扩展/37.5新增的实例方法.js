console.log(Array.prototype)

// 1.copyWithin方法
// 该方法接收三个参数，第一个参数表示替换开始的位置，第二个参数表示开始查找的位置,默认是0
// 第三个参数表示查找结束的位置，也可以是负数
// 该方法会改变原数组
const arr=[1,2,3,4,5]
console.log(arr.copyWithin(0,3,4))
console.log(arr)

// 2.find和findIndex方法
// 2.1find方法返回查找到的数值，接受两个参数，第一个参数是函数，第二个参数可以指定this的绑定
// 该方法查找到第一个就会返回，找不到返回undefined，不会改变原数组
console.log(arr.find((value,index,arr)=>{
  return value>2
}))

// 2.2findIndex方法返回的是查找到的符合条件的元素的位置索引
console.log(arr.findIndex((value,index,arr)=>{
  return value>2
}))

// 3.fill方法用于填充数组,已有的元素会被替代，会改变原数组
// 可以接收三个参数，第一个参数表示要填充的数据，另外两个参数表示要填充的起始和结束的位置
// 如果填充的是对象，则是填充的同一个对象的引用，是浅拷贝
console.log(new Array(3).fill(7))
// console.log(arr.fill(0))
console.log(arr.fill(6,0,1))
arr.fill({name:"liu"},0,1)
console.log(arr)

// 4.entries,keys,values方法,用于遍历数组,返回的是一个可迭代对象
// 4.1keys方法，键的遍历
for(const item of arr.keys()){
  console.log(item)
}

// 4.2values方法
for(const item of arr.values()){
  console.log(item)
}

// 4.3键值对方法
for(const item of arr.entries()){
  console.log(item)
}

// 5.includes方法
// 该方法主要是对indexOf方法做了一个补充缺陷，可以对NaN做一个识别，而indexOf方法不可以
console.log(arr.includes(2))
arr.push(NaN)
console.log(arr.indexOf(NaN))//-1
console.log(arr.includes(NaN))//true

// 6.flat和flatMap方法
// 6.1flat方法主要是将维
const arr2=[1,2,[3,4],[1,[[2,3,4]]]]
console.log(arr2.flat(3))

// 6.2flatMap是可以Map操作，然后flat，但是flat只能是1
console.log(arr.flatMap((value)=>{
  if(value===2){
    return value*2
  }
  return value
}))

// 7.at方法
// 弥补了javaScript中的数组的索引不能是负数的情况，原因是数组也是特殊的对象
// obj[-1]也就可以表示为健名为-1的情况，所以不能让它再有另一个语义去表示数组
// at方法就可以接收负数，返回所引出的值
// 该方法也可以用于字符串

console.log(arr.at(-1))
console.log('123'.at(-1))
