// y修饰符和g修饰符都是全局匹配,不同的是g修饰符只要剩余中有匹配即可
// y修饰符必须从剩余的头部开始匹配
// 实际上，y修饰符号隐含了头部匹配的标志^
const str='aaa_aa_a'

const reg1=/a+/g
const reg2=/a+/y

console.log(reg1.exec(str))//['aaa']
console.log(reg2.exec(str))//['aaa']

console.log(reg1.exec(str))//['aa']
console.log(reg2.exec(str))//null

