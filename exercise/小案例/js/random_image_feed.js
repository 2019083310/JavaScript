// ?获取元素
const containerEl = document.querySelector('.image_container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

// ?获取图片数据
for (let i = 0; i < rows * 3; i++) {
  const imgEl = document.createElement('img')
  imgEl.src = `${unsplashURL}${getRandomSize()}`

  containerEl.appendChild(imgEl)
}



// ?随机获取图片生成函数
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}