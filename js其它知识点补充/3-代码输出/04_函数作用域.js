function foo() {
  this.name = 'coder'
  return {}
}

var a = new foo()
console.log(a.name)

function foo() {
  this.name = 'xxx'
  return 1
}
var a = new foo()
console.log(a.name)