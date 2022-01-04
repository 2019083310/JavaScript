// 1length属性
console.log(localStorage.length)

// 2.setItem方法
localStorage.setItem('age',21)
localStorage.setItem('sex','男')

// 3.getItem方法
console.log(localStorage.getItem('age'))
console.log(localStorage.getItem('sex'))

// 4.key方法
console.log(localStorage.key(0))
console.log(localStorage.key(1))

// 5.clear方法
// localStorage.clear()

// 6.removeItem方法
localStorage.removeItem('sex')