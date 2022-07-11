// 获取元素
const pageEl = document.querySelector('.tip')
const containerEl = document.querySelector('.container')
const keyEl = document.querySelector('.key')
const keyCodeEl = document.querySelector('.keyCode')
const codeEl = document.querySelector('.code')

// 绑定事件
document.addEventListener('keydown', (e) => {
  pageEl.style.display = 'none'
  containerEl.style.display = 'flex'

  keyEl.innerHTML=`<span>${e.key}</span>`
  keyCodeEl.innerHTML=`<span>${e.keyCode}</span>`
  codeEl.innerHTML=`<span>${e.code}</span>`
})