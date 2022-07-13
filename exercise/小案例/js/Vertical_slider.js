// 获取元素
const rightWrapper = document.querySelector('.right>.wrapper')
const leftWrapper = document.querySelector('.left>.wrapper')
const downBtn = document.querySelector('.downBtn')
const upBtn = document.querySelector('.upBtn')

// console.log(leftWrapper, rightWrapper)
let currentIndex = 0
let leftCurrentIndex = 3

leftWrapper.style.top = `-${leftCurrentIndex*100}vh`

downBtn.addEventListener('click', () => {
  currentIndex++
  leftCurrentIndex--
  if (currentIndex > 3) {
    currentIndex = 0
  }

  if (leftCurrentIndex < 0) {
    leftCurrentIndex = 3
  }

  rightWrapper.style.top = `-${currentIndex*100}vh`
  leftWrapper.style.top = `-${leftCurrentIndex*100}vh`
})

upBtn.addEventListener('click', () => {
  currentIndex--
  leftCurrentIndex++

  if (currentIndex < 0) {
    currentIndex = 3
  }

  if (leftCurrentIndex > 3) {
    leftCurrentIndex = 0
  }

  rightWrapper.style.top = `-${currentIndex*100}vh`
  leftWrapper.style.top = `-${leftCurrentIndex*100}vh`
})