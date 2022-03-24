// 讲一个时间戳格式化为YYYY-MM-DD HH:mm:ss
// 如果拿到的是时间戳格式--先转换为utc格式--new Date(时间戳)
// 1.获取当前日期的utc格式
function getTime() {
  return new Date()
}

// 2.将时间格式化  timeFlag=true  格式化为YYYY-MM-DD HH:mm:ss
function dateTime(time, timeFlag) {
  // const date = new Date(Date.parse(time))
  const date=time
  const y=date.getFullYear()//年
  let mo=date.getMonth()+1//月
  m0=mo<10?`0${mo}`:mo
  let d=date.getDate()//日
  d<10?`0${d}`:d
  let h=date.getHours()//小时
  h=h<10?`0${h}`:h
  let mi=date.getMinutes()//分钟
  mi=mi<10?`0${mi}`:mi
  let s=date.getSeconds()//秒
  s=s<10?`0${s}`:s
  let result=''
  if(timeFlag){
    result=`${y}-${mo}-${d} ${h}:${mi}:${s}`
  }else{
    result=`${y}-${mo}-${d}`
  }
  return result
}
const time = getTime()
const timeFormat1 = dateTime(time, true)
const timeFormat2 = dateTime(time, false)
console.log(time)
console.log(timeFormat1)
console.log(timeFormat2)