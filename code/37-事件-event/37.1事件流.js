const divEl=document.querySelector('#box')
const spanEl=document.querySelector('#san')

// 事件冒泡
// spanEl.addEventListener('click',(event)=>{
//   console.log('事件冒泡：span被点击了')
//   // 阻止事件冒泡
//   // event.stopPropagation()
// })

// divEl.addEventListener('click',()=>{
//   console.log('事件冒泡：div被点击了')
// })

// document.body.addEventListener('click',()=>{
//   console.log('事件冒泡：body被点击了')
// })

// 事件捕获
spanEl.addEventListener('click',(event)=>{
  console.log('事件捕获：span被点击了')
  // event.stopPropagation()
},true)

divEl.addEventListener('click',(event)=>{
  console.log('事件捕获：div被点击了')
  // event.stopPropagation()
},true)

document.body.addEventListener('click',()=>{
  console.log('事件捕获：body被点击了')
},true)

// 事件流的顺序-->事件捕获-->目标阶段-->事件冒泡

