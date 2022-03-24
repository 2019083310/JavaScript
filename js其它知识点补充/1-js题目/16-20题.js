// 16. 加号 VS 减号
'5' + 3;//'53'
'5' - 3;//2

// 17. 打死那个疯子
// 你只要知道 + 1 = 1和- 1 = -1，注意符号之间的空格。两个减号抵消，
// 所以最终结果等效于 1 + 1 = 2。或者你也可以在符号之间插入 0 来理解，
// 即 1 + 0 - 0 + 0 + 0 + 0 - 0 + 1，这样你就一目了然了吧！千万别写这样的代码，因为可能会被打死！
1+ - + + + - + 1==2

// 18. 淘气的map
// 对于数组的方法，callback只会遍历有索引赋值的调用，map会保留逗号
var ary = Array(3);
ary[0] = 2;
ary.map(function(elem) {
  return "1";
});//[1,,,]

// 19. 统统算我的
// 在JavaScript中，参数变量和 arguments 是双向绑定的。
// 改变参数变量，arguments 中的值会立即改变；而改变 arguments 中的值，参数变量也会对应改变。
function sidEffecting(ary) {
  ary[0] = ary[2];
}

function bar(a, b, c) {
  c = 10;
  sidEffecting(arguments);
  return a + b + c;
}

bar(1, 1, 1);//21

// 20. 损失精度的IEEE 754
// 这是IEEE 754规范的黑锅，不是JavaScript的问题。
// 表示这么大的数占用过多位数，会丢失精度，学过计算机组成原理的应该知道是怎么回事。
var a = 111111111111111110000;
var b = 1111;
console.log(a + b);//111111111111111110000