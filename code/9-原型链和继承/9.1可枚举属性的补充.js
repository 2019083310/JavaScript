const obj = {
  name: "liu",
  age: 20
}

Object.defineProperty(obj, "address", {
  value: "北京市"
})

console.log(obj)

//虽然，address是不可枚举的，但是js是非常灵活的，我们的浏览器为了方便我们的调试，
// 在浏览器上依然可以看到不可枚举的属性，只是它的颜色比较暗，跟其它的不同，做一个颜色区分
//
