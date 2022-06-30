// 获取元素
const searchEl = document.querySelector('.search')
const containerEl = document.querySelector('.user-list')
const listItems = []

searchEl.addEventListener('input', (e) => filterUserByName(e.target.value))

//请求用户在线列表并且创建元素
async function getUserList() {
  let res = await fetch('https://randomuser.me/api?results=50')

  const {
    results
  } = await res.json()

  containerEl.innerHTML = ''
  results.forEach(user => {
    const el = document.createElement('li')
    el.classList.add('item')

    listItems.push(el)

    el.innerHTML = `
      <img src=${user.picture.thumbnail} class="avatar"></img>
      <div class="info">
        <p class="name">${user.name.first} ${user.name.last}</p>
        <p class="location">${user.location.city} ${user.location.country}</p>
      </div>
    `

    containerEl.appendChild(el)
  })

}
getUserList()

function filterUserByName(str) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(str.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}