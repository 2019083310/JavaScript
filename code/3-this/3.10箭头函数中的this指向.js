// const add=()=>console.log('5')
// add()
//箭头函数如果简写函数体，那么return是要省略的，不省略会报错

// const sub=()=>({name:'1'})
// console.log(sub())
//箭头函数中如果只返回一个对象，要见写返回体，则要在对象外侧加上小括号，这样js在解析的时候就会认为返回的是一个对象，否则是undefined
// 1.测试箭头函数中this指向
// var name = "why"

// var foo = () => {
//   console.log(this)
// }

// foo()
// var obj = {foo: foo}
// obj.foo()
// foo.call("abc")

// 2.应用场景
var obj = {
  data: [],
  getData: function() {
    // 发送网络请求, 将结果放到上面data属性中
    // 在箭头函数之前的解决方案
    // var _this = this
    // setTimeout(function() {
    //   var result = ["abc", "cba", "nba"]
    //   _this.data = result
    // }, 2000);
    // 箭头函数之后
    setTimeout(() => {
      var result = ["abc", "cba", "nba"]
      this.data = result
      console.log(this)
    }, 2000);
  }
}

obj.getData()
console.log(obj.data)
