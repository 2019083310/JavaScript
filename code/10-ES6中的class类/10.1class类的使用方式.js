class Person{

}

//这种ES6新增的class类写法在有些不支持ES6的浏览器中是无法运行的
//这就用到了babel工具，这是一个非常强大的工具，可以帮助我们转化为浏览器支持的js代码

console.log(Person.prototype)
console.log(Person.prototype.constructor)
console.log(Person.prototype.__proto__)
console.log(typeof Person)

const p=new Person()
console.log(p.__proto__===Person.prototype)