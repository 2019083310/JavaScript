// 我们判断数据类型的方式最好用的就是Object.prototype.toString.call()
// 该方法会返回给我们一个字符串格式为:'object Number' 'object String'===>'object Xxx'

// 注意的是:X第一首字母大写

// 那.call方法我们知道是显示绑定this，那原理是什么？
Object.prototype.toString.call()
