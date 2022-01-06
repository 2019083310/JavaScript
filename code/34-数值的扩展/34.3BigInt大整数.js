console.log(BigInt.prototype)
// BigInt第八种数据类型，用来表示整数，对金融、科学的研究发展带来意义
// 用来精确地表示非常大的整数,在整数后面加一个n,表示大整数

// BigInt 与普通整数是两种值，它们之间并不相等
console.log(124n===124)//false

// `typeof`运算符对于 BigInt 类型的数据返回`bigint`
console.log(typeof 124n)//'bigint'

// BigInt 可以使用负号（`-`），但是不能使用正号（`+`），因为会与 asm.js 冲突
// console.log(+124n)报错

// JavaScript 以前不能计算70的阶乘（即`70!`），因为超出了可以表示的精度
// 现在支持大整数了，就可以算了，浏览器的开发者工具运行下面代码，就OK
let p=1
for(let i=1;i<=70;i++){
  p*=i
}
console.log(p)

let m=1n
for(let i=1n;i<=70n;i++){
  m*=i
}
console.log(m)//11978571669969891796072783721689098736458938142546425857555362864628009582789845319680000000000000000n