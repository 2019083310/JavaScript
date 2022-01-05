function divClick(){
  console.log('div元素被点击')
}

const divEl=document.querySelector('#box')

// DOM0
// divEl.onclick=function(){
//   console.log('div元素被点击了')
// }

// DOM2
divEl.addEventListener('click',()=>{
  console.log('div元素被点击1')
})

divEl.addEventListener('click',()=>{
  console.log('div元素被点击2')
})

divEl.addEventListener('click',()=>{
  console.log('div元素被点击3')
})