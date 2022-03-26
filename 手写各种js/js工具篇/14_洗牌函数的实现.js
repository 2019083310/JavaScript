// 主要是生成一个随机数，验证码等等，不重复哦
// 六位数验证码可重复
function sample(length){
  let arr=Array(100).fill(1).map((v,i)=>{
    return i/10|0
  })

  return shuffle(arr,length)
}

// 六位数验证码不可重复
function notSample(length){
  let arr=Array(10).fill(1).map((v,i)=>i)//[0,1,2,3,4,5,6,7,8,9]
  return shuffle(arr,length)
}

function shuffle(arr,length){
  let index=0
  while(index<length){
    let changeIndex=arr.length-1-index
    let randomIndex=Math.round(Math.random()*(changeIndex-1))
    let temp=arr[changeIndex]
    arr[changeIndex]=arr[randomIndex]
    arr[randomIndex]=temp
    index+=1
  }

  return arr.slice(arr.length-length).join('')
}

console.log(notSample(6))
console.log(notSample(6))
console.log(notSample(6))
console.log(notSample(6))