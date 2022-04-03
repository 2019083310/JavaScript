// 判断某个变量的数据类型
function getType(param){
  const ret=Object.prototype.toString.call(param)
  // 截取字符串中具体的数据类型
  const spaceIndex=ret.indexOf(' ')//索引
  const res=ret.slice(spaceIndex+1,-1)

  console.log(res)
}

getType('111')
getType(111)
getType(false)
getType(null)
getType(Symbol('aaa'))
getType(new Set())
getType(new Map())
getType(()=>{})
getType({name:'coder'})
getType(undefined)
getType([1,2,3])
getType(new Date())
getType(new WeakMap())
getType(new RegExp())
