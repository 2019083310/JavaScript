function Test() {
    this.flag = false
    this.change = () => {
        console.log(typeof this) //test
        this.flag = true
        console.log(test.flag)
    }
}

const test = new Test()
document.addEventListener('click', test.change)

var name = 'kobe'
const obj = {
    name: 'liu',
    add: () => {
        console.log(this) //window
        console.log(this.name)
    }
}
console.log(window.name) //kobe
obj.add() //kobe