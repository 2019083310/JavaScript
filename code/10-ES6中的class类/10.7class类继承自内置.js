class lyArray extends Array{
  constructor(name,age){
    super()
    this.name=name
    this.age=age
  }

  firstItem(){
    return this[0]
  }

  lastItem(){
    return this[this.length-1]
  }
}

const arr=new lyArray('liu',21)
console.log(arr)
console.log(Object.getOwnPropertyDescriptors(arr.__proto__))
console.log(arr.push(...[1,2,3,4]))
console.log(arr.firstItem())
console.log(arr.lastItem())