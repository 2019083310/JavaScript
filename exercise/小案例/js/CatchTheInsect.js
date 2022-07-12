// ?获取元素
const btnEl = document.querySelector('.btn')
const homeEl = document.querySelector('.home')
const contentEl = document.querySelector('.content')

const insects = document.querySelectorAll('.item')
const matchEl = document.querySelector('.match')
const time = document.querySelector('.time')
const score = document.querySelector('.score')
const insectEl = document.querySelector('.insect')

btnEl.addEventListener('click', () => {
  homeEl.classList.add('active')
  homeEl.style.display = 'none'
  contentEl.style.display = 'flex'
  contentEl.classList.add('active')
})

const insectsArr = ['http://pngimg.com/uploads/fly/fly_PNG3946.png', 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png', 'http://pngimg.com/uploads/spider/spider_PNG12.png', 'http://pngimg.com/uploads/roach/roach_PNG12163.png']
insects.forEach((insect, index) => {
  insect.addEventListener('click', () => {
    contentEl.style.display = 'none'
    matchEl.style.display = 'flex'

    totalTime()
    randomGenerateInsect(insectsArr[index])
  })
})

// 随机生成虫子
let speed = 1
let count = 0

// 计时
let seconds = 0
let minutes = 0

function totalTime() {
  seconds = Number(seconds) + 1
  minutes = Number(minutes)
  seconds = seconds < 10 ? `0${seconds}` : seconds

  if (seconds == 60) {
    minutes = Number(minutes) + 1
    seconds = 0
  }
  minutes = minutes < 10 ? `0${minutes}` : minutes

  time.innerHTML = `${minutes}:${seconds}`

  setTimeout(totalTime, 1000)
}

function randomGenerateInsect(insectSrc) {
  for (let i = 0; i < speed; i++) {
    const imgEl = document.createElement('img')
    imgEl.classList.add('style')
    imgEl.src = insectSrc
    const [width, height] = randomNumber()

    imgEl.style.left = width + 'px'
    imgEl.style.top = height + 'px'

    imgEl.addEventListener('click', () => {
      count++
      speed++
      imgEl.style.display = 'none'
      score.innerHTML = count

      randomGenerateInsect(insectSrc)
    })

    insectEl.appendChild(imgEl)
  }
}

// 随机生成坐标数字
function randomNumber() {
  const width = Math.ceil(Math.random() * (document.documentElement.clientWidth))
  const height = Math.ceil(Math.random() * document.documentElement.clientHeight + 100)

  return [width, height]
}