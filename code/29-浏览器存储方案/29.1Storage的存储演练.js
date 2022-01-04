console.log(localStorage)
console.log(sessionStorage)
// console.log(Storage)

// localStorage和sessionStorage是Storage的实例
console.log(localStorage instanceof Storage) //true
console.log(Storage instanceof Function) //true
console.log(Storage.__proto__ === Function.prototype) //true
console.log(Object.getPrototypeOf(Storage))

// localStorage.setItem('name','liu')
// sessionStorage.setItem('name','coder')

const btn = document.querySelector('button')
btn.onclick = function () {
  console.log('----')
  localStorage.setItem('name', 'liu')
  sessionStorage.setItem('name', 'coder')
}