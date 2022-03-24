function parseParam(url){
  const paramsStr=/.+\?(.+)$/.exec(url)[1]//将?后面的字符串提取出来
  const paramsArr=paramsStr.split('&')//将字符串以 &分割
  let paramsObj={}
  // 将params存到对象中
  paramsArr.forEach(param=>{
    if(/=/.test(param)){
      // 处理有value的参数
      let[key,val]=param.split('=')
      val=decodeURIComponent(val)//解码
      val=/^\d+$/.test(val)?parseFloat(val):val//判断是否转为数字

      if(paramsObj.hasOwnProperty(key)){
        // 如果对象有key,则添加一个值
        paramsObj[key]=[].concat(paramsObj[key],val)
      }else{
        paramsObj[key]=val
      }
    }else{
      // 处理没有value的参数
      paramsObj[param]=true
    }
  })
  return paramsObj
}
console.log(parseParam('https://juejin.cn/search?query=%E8%A7%A3%E6%9E%90url%E5%8F%82%E6%95%B0'))