// 导入方式一：import {name,age} from './foo.js'

// import {name,age} from './foo.js'
// 注意，这种方式导入的名字必须跟导出的名字一致

// console.log(name)
// console.log(age)

// 导入方式二：起别名

// import {name as fName,age as fAge} from './foo.js'

// console.log(fName)
// console.log(fAge)

// 导入方式三：import * as 对象名自己起 from './foo.js'
// 一次性导入所有到自己命名的对象中

// import * as foo from './foo.js'

// console.log(foo.name)
// console.log(foo.age)