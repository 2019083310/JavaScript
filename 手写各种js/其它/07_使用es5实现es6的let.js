// 思想就是立即执行函数
function outputNum(count) {
  //块级作用域
  (function () {
    for (var i = 0; i < count; i++) {
      console.log(i)
    }
  })();
  console.log(i)
}

outputNum(5)