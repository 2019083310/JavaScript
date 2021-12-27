const names = ["abc", "cba", "nba", "mba", NaN]

if (names.indexOf("cba") !== -1) {
  console.log("包含abc元素")
}

console.log(names.includes('abc',2))

// ES7 ES2016
if (names.includes("cba", 2)) {
  console.log("包含abc元素")
}

if (names.indexOf(NaN) !== -1) {
  console.log("包含NaN")
}

if (names.includes(NaN)) {
  console.log("包含NaN")
}

//以上方法在字符串中同样适用
const str='liu'
console.log(str.indexOf('l'))//0
console.log(str.includes('l'))//true