let a = {
  name: 'julia',
  age: 20
}

function change(o) {
  o.age = 24
  o = {
    name: 'Kath',
    age: 30
  }
  return o
}

let b = change(a)
console.log(b.age) //30
console.log(a.age) //24