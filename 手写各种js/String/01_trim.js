// 去除字符串两端的空格，借用字符串的replace

String.prototype.strim=function(){
  return this.replace(/^\s+|\s+$/g, '')
}
let str='    aaa     '
console.log(str.length)
console.log(str.strim().length)