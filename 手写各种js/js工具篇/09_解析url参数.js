// 获取url参数的四种方式
// 1-正则表达式
// 这种不适用于参数的转码
let URL='https://juejin.cn/search?query=%E8%A7%A3%E6%9E%90url%E5%8F%82%E6%95%B0&name=coder&age=21'
let URL2='https://juejin.cn/search?name=coder&age=21&height=1.88'
// function getUrlParams(url){
//   const pattern=/(\w+)=(\w+)/ig
//   let params={}
//   url.replace(pattern,($,$1,$2)=>{
//     params[$1]=$2
//   })
//   return params  
// }
// const result=getUrlParams(URL2)
// console.log(result)


// 2-a标签
function getUrlParams(url){
  // 创建一个a标签
  const a=document.createElement('a')
  a.href=url
  const searchStr=a.search.slice(1)
  const paramsObj={}
  const paramsArr=searchStr.split('&')

  paramsArr.forEach(param=>{
    let [key,val]=param.split('=')
    val=decodeURI(val)
    val=/^\d+$/.test(val)?parseFloat(val):val

    paramsObj[key]=val
  })

  return paramsObj
}
const result=getUrlParams(URL)
console.log(result)

// 3-split拆分
// function getUrlParams(url){
//   const paramsStr=url.split('?')[1]
//   const paramsArr=paramsStr.split('&')
//   const paramsObj={}
//   paramsArr.forEach(param=>{
//     if(/=/.test(param)){
//       let [key,value]=param.split('=')
//       // 对value解码
//       value=decodeURIComponent(value)
//       // 判断是否转为数字
//       value=/^\d+$/.test(value)?parseFloat(value):value

//       // 如果对象有key，添加一个值
//       if(paramsObj.hasOwnProperty(key)){
//         paramsObj[key]=[].concat(paramsObj[key],value)
//       }else{
//         paramsObj[key]=value
//       }
//     }else{
//       paramsObj[param]=true
//     }
//   })

//   return paramsObj
// }
// const result=getUrlParams(URL)
// console.log(result)

// 4-UrlSearchParam构造函数提供的方法
// 这个方法兼容性不太好，但是就不用decodeURLComponent()方法来解码了,它会自动解码
// UrlSearchParam()接受的是一个search字符串，而不是整个url,因此需要先拆分提取search
// 生成的是一个UrlSearchParam实例对象，有自己的values(),keys()等方法
// function getUrlParams(url){
//   const params=url.split('?')[1]
//   const urlSp=new URLSearchParams(params)
//   const resObj=Object.fromEntries(urlSp)
  
//   return resObj
// }

// const result=getUrlParams(URL)
// console.log(result)


// function parseParam(url) {
//   const paramsStr = /.+\?(.+)$/.exec(url)[1] //将?后面的字符串提取出来
//   const paramsArr = paramsStr.split('&') //将字符串以 &分割
//   let paramsObj = {}
//   // 将params存到对象中
//   paramsArr.forEach(param => {
//     if (/=/.test(param)) {
//       // 处理有value的参数
//       let [key, val] = param.split('=')
//       val = decodeURIComponent(val) //解码
//       val = /^\d+$/.test(val) ? parseFloat(val) : val //判断是否转为数字

//       if (paramsObj.hasOwnProperty(key)) {
//         // 如果对象有key,则添加一个值
//         paramsObj[key] = [].concat(paramsObj[key], val)
//       } else {
//         paramsObj[key] = val
//       }
//     } else {
//       // 处理没有value的参数
//       paramsObj[param] = true
//     }
//   })
//   return paramsObj
// }
// console.log(parseParam('https://juejin.cn/search?query=%E8%A7%A3%E6%9E%90url%E5%8F%82%E6%95%B0'))
