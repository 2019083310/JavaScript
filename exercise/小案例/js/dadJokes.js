// ?获取元素
const pageEl = document.querySelector('.page')
const btn = document.querySelector('.btn')

// ?网络请求
async function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()

  pageEl.innerHTML = data.joke
}

getJoke()

btn.addEventListener('click', () => {
  getJoke()
})