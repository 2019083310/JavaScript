// 根据LyPromise来实现
LyPromise.race = function (promises) {
  return new LyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        resolve(v)
      }, err => {
        reject(err)
      })
    }
  })
}

// 根据Promise来实现
Promise.LyRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(resolve).catch(reject)
    })
  })
}