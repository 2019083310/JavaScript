console.log(FocusEvent.prototype)

// 焦点事件主要有两个focus和blur，一个是获得焦点，一个是失去焦点
// 焦点事件主要是用于表单元素和document
const input=document.querySelector('#in')

input.addEventListener('focus',()=>{
  console.log('document获得焦点')
})

input.addEventListener('blur',()=>{
  console.log('document失去焦点')
})