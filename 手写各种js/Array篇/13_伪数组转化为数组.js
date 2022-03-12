const set=new Set([1,2,3])

// 1.es6扩展运算符
console.log([...set])

// 2.Array.from()
console.log(Array.from(set))

// 3.遍历
const arr=[]
for(const item of set){
  arr.push(item)
}
console.log(arr)

// 4.利用concat
console.log(Array.prototype.concat([],...set))

