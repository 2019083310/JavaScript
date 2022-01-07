const divEl=document.querySelector('#box')
const spanEl=document.querySelector('#san')

// 1.方法一:onevent
// 事件只能绑定一次，有多个处理函数，后面的会覆盖前面的
// divEl.onclick=function(){
//   console.log('onEvent1')
// }

// divEl.onclick=function(){
//   console.log('onEvent2')
// }

// 2.方法二：addEventListe
// 可以为同一个事件，绑定多个处理函数，都会被依次从上到下执行
// ie9以下的浏览器不支持
// divEl.addEventListener('click',(event)=>{
//   console.log('addEventListener1')
// })

// divEl.addEventListener('click',(event)=>{
//   console.log('addEventListener2')
// })

// divEl.addEventListener('click',(event)=>{
//   console.log('addEventListener3')
// })

// 3.方法三：attachEvent()ie独有
// 也可以为同一个事件绑定多个处理函数，会被依次执行，从下倒上
// divEl.attachEvent('onclick',()=>{
//   console.log('attachEvent1') 
// })

// divEl.attachEvent('onclick',()=>{
//   console.log('attachEvent2') 
// })

// divEl.attachEvent('onclick',()=>{
//   console.log('attachEvent3') 
// })

// 4.封装addEvent函数
function bind(el,event,callback){
  if(el.addEventListener){
    el.addEventListener(event,callback,false)
  }else{
    el.attachEvent('on'+event,()=>{
      callback.call(el)
    })
  }
}

bind(divEl,'click',()=>{
  console.log('addEventListener1')
})
bind(divEl,'click',()=>{
  console.log('addEventListener2')
})
bind(divEl,'click',()=>{
  console.log('addEventListener3')
})