const name = 'a'

class A {
  constructor() {
    this.name = 'b'
  }

  getName = () => {
    return this.name
  }
}

const a = new A()
console.log(a.getName()) //b