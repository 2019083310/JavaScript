// ?获取元素
const count = document.querySelector('.count')
const imageEl = document.querySelector('.pic')

let clickTimes = 0
let clickTime = 0
imageEl.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      return
    } else {
      clickTime = 0
    }
  }

  clickTimes++
  count.innerHTML = clickTimes

  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.classList.add('active')

  const x = e.clientX
  const y = e.clientY

  const x2 = e.target.offsetLeft
  const y2 = e.target.offsetTop

  const insideX = x - x2
  const insideY = y - y2

  heart.style.left = `${insideX}px`
  heart.style.top = `${insideY}px`

  imageEl.appendChild(heart)

  setTimeout(() => heart.remove(), 1000)
})