let person = {}
Object.defineProperty(person, "name", {
    configurable: true,
    enumerable: true,
    writable: false,
    value: "nico"
})
//第三个参数里可以根据要修改的特性设置一个或多个值
console.log(person)
console.log(person.name)	//"nico"
person.name = 'lsn'//writable设为false后，严格模式下修改只读属性会抛出错误
console.log(person.name)	//"nico"