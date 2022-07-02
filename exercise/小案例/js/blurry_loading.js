// 获取元素
const coverEl = document.querySelector('.cover')

let number = 0
let blurNum = 20
let timer = null

loading()

function loading() {
  coverEl.innerText = number + '%'

  number++
  coverEl.style.backdropFilter = `blur(${blurNum-number*0.2}px)`

  if (number === 101) {
    coverEl.innerText=''
    clearTimeout(timer)
    return
  }

  setTimeout(loading, 50)
}