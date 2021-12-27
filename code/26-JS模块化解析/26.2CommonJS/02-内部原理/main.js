// module.exports和exports都可以使用的原因
// 是因为node的源码中是这样写的

module.exports={}
const exports=module.exports
// 所以对于exports中添加的内容也是对module.exports中添加内容
// 他们两个的引用的内存地址是相同的

// 对于require，他有两个作用
// 1：加载并执行所加载的模块的代码
// 2：导入所加载模块的导出的module,exports对象

function require(url){
  // return module.exports   它内部的实现原理就是这样的

}
require()

//记住：我们调用require方法返回的永远是module.exports所引用的对象，而不是exports  
