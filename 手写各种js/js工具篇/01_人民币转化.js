// 1234567变人民币形式1,234,567

function transform(num){
  const str=num.toString()
  let r=str.length-1
  let res=0
  const arr=[]
  while(r>=0){
    res++
    arr.unshift(str[r])
    if(res%3===0&&r!==0){
      arr.unshift(',')
    }
    r--
  }
  return arr.join('')
}

console.log(transform(1234567))
console.log(transform(123456789))
console.log(transform(1234567899))
