// 获取元素
const formEl = document.querySelector('.form')
const editForm = document.querySelector('.edit')
const container = document.querySelector('.todo-list')

// 从localStorage中获取本地数据
const todos = JSON.parse(localStorage.getItem('todos') || '[]')
if (todos.length) {
  todos.forEach(todo => saveTodoInfo(todo))
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  saveTodoInfo()
})

// 保存todo
function saveTodoInfo(todo) {
  // 获取表单的value
  let value = editForm.value
  if (todo) {
    value = todo.title
  }

  if (value.trim()) {
    // 创建元素
    const liEl = document.createElement('li')
    if (todo && todo.completed) {
      liEl.classList.add('completed')
    }

    liEl.classList.add('item')
    liEl.innerText = value

    // 鼠标左键监听
    liEl.addEventListener('click', () => {
      liEl.classList.toggle('completed')
      updateStorage()
    })

    // 鼠标右键删除todo list
    liEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      liEl.remove()
      updateStorage()
    })

    container.appendChild(liEl)
    editForm.value = ''
    updateStorage()
  }
}

// 保存到localStorage中
function updateStorage() {
  const todoEls = document.querySelectorAll('li')

  const todos = []

  todoEls.forEach(todoEl => {
    todos.push({
      title: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}