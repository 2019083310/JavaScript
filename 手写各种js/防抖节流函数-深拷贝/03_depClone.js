// 实现方式1：JSON序列化
// 这种方式不能处理函数以及正则表达式

// 实现方式2：第三方库

// 实现方式3：递归
function isObject(value) {
  const typeValue = typeof value
  return (value !== null) && (typeValue === 'object' || typeValue === 'function')
}

function deepClone(resource, map = new WeakMap()) {

  // 对set类型的处理
  if (resource instanceof Set) {
    return new Set([...resource])
  }

  // 对map类型的处理
  if (resource instanceof Map) {
    return new Map([...resource])
  }

  // 对symbol类型处理
  if (typeof resource === 'symbol') {
    return Symbol(resource.description)
  }

  // 对函数做处理
  if (typeof resource === 'function') {
    return resource
  }

  // 对数组的处理
  const newObject = Array.isArray(resource) ? [] : {}

  // 对基本数据类型做处理
  if (!isObject(resource)) {
    return resource
  }

  // 实现循环引用
  if (map.has(resource)) {
    return map.get(resource)
  }

  map.set(resource, newObject)

  for (const objKey in resource) {
    newObject[objKey] = deepClone(resource[objKey], map)
  }

  // Symbol类型作为对象的键值是不能遍历的
  const symbols = Object.getOwnPropertySymbols(resource)
  for (const s of symbols) {
    newObject[s] = deepClone(resource[s], map)
  }

  return newObject
}

// 测试
const s1 = Symbol('aaa')
const s2 = Symbol('bbb')
const set = new Set([1, 1, 2, 2])
const map = new Map()
map.set('a', 'a')

const obj = {
  name: 'coder',
  friend: {
    name: 'curry'
  },
  age: 18,
  eating() {},
  hobbies: ['篮球', '羽毛球'],
  [s1]: 'hello',
  s2: s2,
  set: set,
  map: map,
}
obj.info = obj

const newObj = deepClone(obj)
console.log(newObj)

obj.friend.name = 'kobe'
console.log(newObj)