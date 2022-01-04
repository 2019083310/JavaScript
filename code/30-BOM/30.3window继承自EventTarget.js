window.addEventListener('click',()=>{
  console.log('window发生了点击')
})

window.removeEventListener('click',()=>{
  console.log('window发生了点击')
})

window.addEventListener('liu',()=>{
  console.log(1)
})

window.dispatchEvent(new Event('liu'))