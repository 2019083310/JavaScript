// 大数相加:
// js最大的安全整数为2**53次方，如果超过该值，就会不准确
// 精度丢失--IEE754标准
// 6453234253452432+7326362323251323

// 思路：转为字符串-->拆分为数组翻转-->每个数字相加-->进位
function bigNumberSum(str1,str2){
  const arr1=str1.split('').reverse()
  const arr2=str2.split('').reverse()

  const length=Math.max(arr1.length,arr2.length)
  const result=[]
  let flag=0
  for(let i=0;i<length;i++){
    const num1=Number(arr1[i])||0
    const num2=Number(arr2[i])||0
    let sum=num1+num2+flag
    if(sum>=10){
      sum=sum%10
      flag=1
    }else{
      flag=0
    }
    result.push(sum)
    if(i===length-1&&flag){
      result.push(flag)
    }
  }
  return result.reverse().join('')
}
console.log(bigNumberSum('6453234253452432','7326362323251323'))

// BigInt
console.log(String(6453234253452432n+7326362323251323n))