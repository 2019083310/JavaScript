// require加载文件的情况
// 1.路径是一个核心模块或者是一个自己起的名字，不带/路径：那么require会从当前文件所在的文件夹下寻找node_modules
// 在node_modules中寻找这个模块名，如果找到则去该模块的文件夹下寻找package.json,
// 在package.json中找到main.js,根据main.js中的index.js去找该目录下的index.js并返回
// 如果该目录下没有package.json，则会直接寻找该目录下的index.js并返回
// 如果index.js也没有，则会依次进入上一层目录以此查找，如果都没有，返回not found

// 如果该文件所在的文件夹下没有node_modules会去上一层文件夹下依次寻找，直到根目录下
// 如果没有找到，就会返回错误：not  found 


// node每一个js都是一个模块，都是Module的实例const module=new Module()
// 所以可以输出module对象看看里面有什么，方便调试
// console.log(module)

// const axios=require('axios')
// console.log(axios)

// 2.require()加载的是一个相对路径或者是一个绝对路径
// 如果加载的是一个目录名，则会进入该目录下找./目录名/index.js-->index.json-->index.node
// require('./abc')

// 如果加载的是一个文件，但是没有后缀名
// 依次查找.js-->.json-->.node

// require('./foo')

