// 例如：5-->35  8-->56

// 1-字符串的填充
// function getValue(number){
//   return ''.padEnd(number,0).replace(/0/g,''.padEnd(7)).length
// }
// function getValue(number){
//   return ''.padEnd(number,0).repeat(7).length
// }
// getValue(5)
// getValue(8)

// 2.数组处理
function getValue(number){
  return new Array(number).fill().map(()=>{
    return new Array(7).fill()
  }).flat().length
}
getValue(5)
getValue(8)