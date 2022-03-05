// 防抖函数的封装

function debounce(fn, delay, immediate, resultCallback) {
  let timer = null
  // 表示是否立即执行
  let flag = false

  function _debounce(...args) {
    if (timer) clearTimeout(timer)

    if (immediate && !flag) {
      const result = fn.apply(this, args)
      if (resultCallback) resultCallback(result)
      flag = true
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, args)
        if (resultCallback) resultCallback(result)
        timer = null
        flag = true
      }, delay)
    }
  }

  return _debounce
}