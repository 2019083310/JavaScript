// 数组中的empty
// empty是严格等于undefined  即empty===undefined
// empty出现在哪里？比如：
const arr=new Array(5)//这五个元素都是empty

arr.length=20//其余的没有索引赋值的元素也是empty
const arr=[1,2,3]
arr.length=20
arr[4]===undefined//true

// 数组不同的函数对empty的处理不同
//1. map会直接跳过这个空位并且保留,就是说map等函数不会对未引用的索引进行调用
const arr2=[1,2,3,,]
const newArr=arr2.map((i)=>{
  console.log(i)//不会打印empty
  return i
})
console.log(newArr)//[1,2,3,,]

// 2.forEach也会跳过空位不处理，不打印
arr2.forEach((value)=>{
  console.log(value)
})

// 3.for循环不会跳过空位，会打印undefined

// 4.join()方法会将空位转化为空字符串
console.log([1,,,].join())

// 5.filter方法也会跳过空位，不对未引用的索引调用函数
console.log([1,2,3,,,].filter((v)=>{
  return v===''
}))