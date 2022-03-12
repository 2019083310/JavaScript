// Object.assign这个方法主要是用来合并对象，是一个浅拷贝

Object.defineProperty(Object, 'assign', {
  value: function (target, ...args) {
    if (target === null) {
      return new Error('target不是一个对象')
    }

    // 不是一个对象会自动转化为对象
    const to = Object(target)

    // 遍历赋值
    for (let i = 0; i < args.length; i++) {
      const item = args[i]

      for (const key in item) {
        // 使用for...in和hasOwnProperty双重判断，确保只拿到本身的属性、方法（不包含继承的）
        if (Object.prototype.hasOwnProperty.call(item,key)){
          to[key]=item[key]
        }
      }
    }

    return to

  },
  writable: true,
  configurable: true,
  enumerable: false
})