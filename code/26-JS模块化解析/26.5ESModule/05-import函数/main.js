// import './foo.js'

// import {sum} from './foo.js'
const kobe=import('./foo.js').then(res=>{
  console.log(res)
  return res
})

console.log(kobe)
kobe.then(res=>{
  res.sum(1)
})
console.log('后续的代码被执行了')
console.log('代码块------')
console.log(import.meta)