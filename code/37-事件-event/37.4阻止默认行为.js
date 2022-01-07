// 默认行为就比如像超链接，表单提交这种行为，就会自动跳到另一个页面

// 阻止默认行为的方法
// 方法1：return false
// 该方法只有是以onXXX绑定的事件才有效
const a=document.getElementsByTagName('a')[0]
// a.onclick=function(){
//   return false//有效
// }

// a.addEventListener('click',()=>{
//   return false//无效
// })

// 方法二：e,preventDefault(),ie9以下不兼容
// ie9以下使用e.cancelable设置为true
// a.addEventListener('click',(event)=>{
//   event.preventDefault()
// })

// 方法三：ie兼容，将event.returnValue属性设置为false
a.addEventListener('click',(e)=>{
  e.returnValue=false
})