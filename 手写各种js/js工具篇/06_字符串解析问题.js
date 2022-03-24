// var a = {
// 	b: 123,
// 	c: '456',
// 	e: '789',
// }
// var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
// => 'a123aa456aa {a.d}aaaa'

function lyParse(str,obj){
  let res=''
  // 标志位,前面是否有'{'
  let flag=false
  let start
  for(let i=0;i<str.length;i++){
    if(str[i]==='{'){
      flag=true
      start=i+1
      continue
    }
    if(!flag){
      res+=str[i]
    }else{
      if(str[i]==='}'){
        flag=false
        res+=match(str.slice(start,i),obj)
      }
    }
  }
  return res
}

// 对象匹配操作
function match(str,obj){
  const keys=str.split('.').slice(1)
  if(obj[keys]){
    return obj[keys]
  }else{
    return `{${str}}`
  }
}

// var a = {
// 	b: 123,
// 	c: '456',
// 	e: '789',
// }
// var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
// console.log(lyParse(str,a))