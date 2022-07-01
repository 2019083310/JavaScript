// ? 获取元素
const progressEl = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circleEl = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circleEl.length) {
    currentActive = circleEl.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circleEl.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progressEl.style.width = (actives.length - 1) / (circleEl.length - 1) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circleEl.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}