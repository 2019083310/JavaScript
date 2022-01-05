// console.log(Object.getOwnPropertyDescriptors(Document))

document.addEventListener('click',()=>{
  console.log('document被点击')
})

const divEl=document.querySelector('#box')

divEl.addEventListener('click',()=>{
  console.log('div元素被点击')
})