// any方法是ES12中新增的方法，和race方法是类似的：
// any方法会等到一个fulfilled状态，才会决定新Promise的状态；
// 如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态；
// 如果所有的Promise都是reject的，那么会报一个AggregateError的错误

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111)
    // reject(1111)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 500)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(33333)
    reject(3333)
  }, 3000)
})

const result1=Promise.any([p1,p2,p3])
console.log(result1)