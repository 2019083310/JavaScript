function instanceOf(father,child){
  const fp=father.prototype
  let cp=child.__proto__

  while(cp){
    if(cp===fp){
      return true
    }

    cp=cp.__proto__
  }

  return false
}

function Person(name){
  this.name=name
}

const p=new Person('liu')

console.log(instanceOf(Person,p))//true