// console.log(module)

// delete module.loaded

// require('./foo.js')
// require('./foo.js')
// require('./foo.js')
// console.log(module)
// import {name,age,add} from './foo.js'
// import * as foo from './foo.js'
import foo from './foo.js'

console.log(foo.name)
console.log(foo.age)
// add(1,2)

// name='liu'
// foo.name='liu'

setTimeout(()=>{
  console.log(foo.name)
  console.log(foo.age)
  // add()
},2000)
