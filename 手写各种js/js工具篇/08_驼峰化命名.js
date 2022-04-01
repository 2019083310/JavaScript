// 将骆驼命名规则的字符串转换成使用短横线命名法的字符串, 并且全小写 .
// 例如: 'getElementById' => 'get-element-by-id'
// 1--正则表达式
// function getKebabCase(str){
//   let temp=str.replace(/[A-Z]/g,function(i){
//     return '-'+i.toLowerCase()
//   })
//   if(temp.slice(0,1)==='-'){
//     temp=temp.slice(1)
//   }

//   return temp
// }
// console.log(getKebabCase('getElementById'))

// 2-数组
function getKebabCase(str){
  let arr=str.split('')
  let result=arr.map(item=>{
    if(item.toUpperCase()===item){
      return '-'+item.toLowerCase()
    }else{
      return item
    }
  })

  return result.join('')
}
console.log(getKebabCase('getElementById'))

// 将短横线命名规则的字符串转换成使用驼峰命名法的字符串. 
// 例如: 'get-element-by-id ' => 'getElementById'
// 1-正则

// 2-数组
function getCamelCase(str){
  let arr=str.split('')
  for(let i=0;i<arr.length;i++){
    if(arr[i]==='-'){
      arr.splice(i,1)
      arr[i]=arr[i].toUpperCase()
    }
  }
  return arr.join('')
}
console.log(getCamelCase('get-element-by-id'))
