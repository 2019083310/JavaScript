// ES5就支持先行断言和先行否定断言
// ES6开始支持后行断言和后行否定断言

//1.先行断言指的是x只有在y前面才匹配成功，必须写成/x(?=y)/
// 先行否定断言指的是x只有不在y前面才匹配，必须写成/x(?!y)/

console.log(/\d+(?=%)/.exec('100% of US presidents have been male'))//['100']
console.log(/\d+(?!%)/.exec('that’s all 44 of them'))

// 2.后行断言与先行断言相反，x只有在y后面才匹配成功,必须写成/(?<=y)x/
// 后行否定断言是x只有不在y后面才匹配成功,必须写成/(?<!y)x/

console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'))//['100']
console.log(/(?<!\$)\d+/.exec('it’s is worth about €90'))//['90']