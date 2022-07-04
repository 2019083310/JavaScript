// 获取元素
const bodyEl = document.body
const slideEl = document.querySelector('.slide')
const rightBtn = document.querySelector('.left-arrow')
const leftBtn = document.querySelector('.right-arrow')

// 发起网络请求,得到图片数组
const bgImages = [
  'https: //images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
]

let currentIndex = 0
bodyEl.style.backgroundImage = `url(${bgImages[currentIndex]})`
slideEl.style.backgroundImage = `url(${bgImages[currentIndex]})`


leftBtn.addEventListener('click', () => {
  currentIndex++

  if (currentIndex > bgImages.length - 1) {
    currentIndex = 0
  }

  bodyEl.style.backgroundImage = `url(${bgImages[currentIndex]})`
  slideEl.style.backgroundImage = `url(${bgImages[currentIndex]})`
})

rightBtn.addEventListener('click', () => {
  currentIndex--

  if (currentIndex < 0) {
    currentIndex = bgImages.length - 1
  }

  bodyEl.style.backgroundImage = `url(${bgImages[currentIndex]})`
  slideEl.style.backgroundImage = `url(${bgImages[currentIndex]})`
})