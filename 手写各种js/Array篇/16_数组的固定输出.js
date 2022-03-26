// 要求
// 随机生成一个数组[2,3,10,5,7,9,10,12,15,20,33]
// 输出：[[2,3,5,7,9],[10,12,15],[20],[33]]

// 过程：1.随机生成一个数组
// 2.去重    3.排序   4.存储0-9   10-19   20-29以此类推
// 随机生成数字
function getRandomNumber(min,max){
  min=Math.ceil(min)
  max=Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)+min)
}
let initArray=Array.from({length:10},()=>{return getRandomNumber(0,99)})

// 去重
initArray=[...new Set(initArray)]

// 排序
initArray.sort((a,b)=>a-b)

// 存储
const map={}
initArray.forEach(item=>{
  const key=Math.floor(item/10)
  if(!map[key]){
    map[key]=[]
  }
  map[key].push(item)
})
const res=[]
for(const key in map){
  res.push(map[key])
}
console.log(res)