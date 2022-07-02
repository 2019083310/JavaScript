// 获取元素
const textEl = document.querySelector('.text')
const btnEl = document.querySelector('#speed')

// 定义文本
const text = 'We Love Programming!'

// 定义文本截取函数字符串
let idx = 1
let speed = 300 / btnEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  if (idx > text.length) {
    idx = 1
  }

  setTimeout(writeText, speed)
}

btnEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value
})