require.config({
  baseUrl:'src',//config默认的属性
  paths:{
    foo:'./foo',//这里就是为foo这个模块做一个注册定义他的加载路径,这是相对于html加载
    bar:'./bar'
  }
})

// 这里是加载执行foo模块，参数是一个数组，可以加载多个已经注册的模块
require(['foo','bar'],function(foo,bar){
  console.log(foo)
  console.log('bar:',bar)
})