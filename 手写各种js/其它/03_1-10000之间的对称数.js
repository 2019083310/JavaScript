// 输出1-10000之间的所有对称数  11 22 111 222等

// 1.生成一个1-10000之间的数组
const arr=Array.from({length:10000},(v,i)=>i+1)

// 2.利用filter过滤添加到数组中
function getNumber(v){
  const newValue=Number(v.toString().split('').reverse().join(''))
  return v===newValue
}

// 3.返回所有的对称数
const res=arr.filter(v=>getNumber(v))
console.log(res)

// 方法2：观察法
// 1  1-9
// 2 11 22 33  ... 99
// 3  101  202  303 ...909  111...
// 4  1001  1111  2002 ...
const result=[]
for(let i=1;i<10;i++){
  result.push(i)//1-9
  result.push(i*11)//11-99
  for(let j=0;j<10;j++){
    result.push(i*101+j*10)//101-909
    result.push(i*1001+j*110)
  }
}
console.log(result)
