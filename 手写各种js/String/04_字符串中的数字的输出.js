// 要求：如下字符串
// 如果字符串中的数字是连续的，输出开始~结尾，如果不连续直接输出
// '1,2,3,5,7,8,10'-->输出 '1~3,5,7~8,10'

// 1.转为数组
const str = '1,2,3,5,7,8,10'
const str2 = '1,2,3,4,5,6,8,9,10,11,23,56'

function getValue(str) {
  const arrStr = str.split(',')
  const result = []

  //2. 定义一个变量表示序列的第一个
  let temp = 0

  // 3.遍历数组，如果当前值+1===next 继续
  // 当前值+1!==next 表示是一个序列
  let next = 1
  for (let i = 0; i < arrStr.length; i++) {
    if (Number(arrStr[i]) + 1 === Number(arrStr[next]) && next < arrStr.length) {
      next++
    } else {
      if (next - 1 === temp) {
        result.push(arrStr[i])
      } else {
        result.push(`${arrStr[temp]}~${arrStr[i]}`)
      }
      temp = next
      next++
    }
  }

  // 返回字符串
  const res = result.join(',')

  return res
}

console.log(getValue(str))
console.log(getValue(str2))
// console.log(str2)