// 空位不代表是undefined
// undefined还代表有值

// ES5以前对空位的处理很不一致
//1.every/forEach/filter/reduce/some()都会跳过空位
//2.map会跳过空位，但会保留这个值
//3.join()和toString()会将空位视为undefined,而undefined和null会被处理成字符串

// 2.1map方法
const arr=[,1,,1,3]
console.log(arr.map((item)=>{
  return item*2
}))

// 1.1forEach方法
arr.forEach((value,index,arr)=>{
  console.log(value)
})

// 1.2filter方法
const arr2=arr.filter((item)=>{
  return item>0
})
console.log(arr2)

// 1.3reduce方法
const result=arr.reduce((pre,currentValue)=>{
  return pre+currentValue
},0)
console.log(result)

// 1.4every方法
const result2=arr.every((value,index,arr)=>{
  return value>0
})
console.log(result2)

// 1.5some方法
const result3=arr.some((value,index,arr)=>{
  return value>2
})
console.log(result3)

// 3.1join方法
console.log(arr.join('-'))

// 3.2toString方法
console.log(arr.toString())

// ES6明确将空位转换为undefined
// map还是会跳过空位
// entries，keys,values,find和findIndex会将空位处理为undefined
console.log(arr.find((item)=>{
  return item==='undefined'
}))//undefined

console.log(arr.findIndex((item)=>{
  return item==='undefined'
}))//-1

