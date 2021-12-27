//String Padding---字符串填充

let str='abc'
console.log(str.padStart(5,'*'))
console.log(str.padEnd(5,'*'))

//案例--号码
const phone='19831645976'
const phones=phone.slice(-4)
console.log(phones)
const NewPhone=phones.padStart(11,'*')
console.log(NewPhone)