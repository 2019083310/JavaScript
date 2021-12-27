class Person {
  constructor(name, age) {
    // 类的构造方法
    // 注意: 一个类只能有一个构造函数
    // 1.在内存中创建一个对象 moni = {}
    // 2.将类的原型prototype赋值给创建出来的对象 moni.__proto__ = Person.prototype
    // 3.将对象赋值给函数的this: new绑定 this = moni
    // 4.执行函数体中的代码
    // 5.自动返回创建出来的对象
    this.name = name
    this.age = age
  }
}

const p = new Person('liu', 21)
console.log(p)