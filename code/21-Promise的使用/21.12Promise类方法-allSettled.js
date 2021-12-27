// all方法有一个缺陷：当有其中一个Promise变成reject状态时，
// 新Promise就会立即变成对应的reject状态。那么对于resolved的，以及依然处于pending状态的Promise，我们是获取不到对应的结果的；
// 在ES11（ES2020）中，添加了新的API Promise.allSettled： 
// 该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是reject时，才会有最终的状态；
// 并且这个Promise的结果一定是fulfilled的；
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 3000);
})

// allSettled
const result=Promise.allSettled([p1, p2, p3])
console.log(result)
