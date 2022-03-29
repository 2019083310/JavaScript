function* generatorFn() {
  console.log('开始执行')
  console.log(111)

  yield 1

  console.log(222)

  yield 2

  console.log('执行结束')
}
const gen = generatorFn()

const res1 = gen.next()
const res2 = gen.next()
const res3 = gen.next()
const res4 = gen.next()

// 转换后的es5代码
// "use strict";

// var _marked = /*#__PURE__*/regeneratorRuntime.mark(generatorFn);

// function generatorFn() {
//   return regeneratorRuntime.wrap(function generatorFn$(_context) {
//     while (1) {
//       switch (_context.prev = _context.next) {
//         case 0:
//           console.log('开始执行');
//           console.log(111);
//           _context.next = 4;
//           return 1;

//         case 4:
//           console.log(222);
//           _context.next = 7;
//           return 2;

//         case 7:
//           console.log('执行结束');

//         case 8:
//         case "end":
//           return _context.stop();
//       }
//     }
//   }, _marked);
// }

// var gen = generatorFn();
// var res1 = gen.next();
// var res2 = gen.next();
// var res3 = gen.next();
// var res4 = gen.next();

// 我们自定义的生成器函数会经过regeneratorRuntime.wrap()函数变成GeneratorFunctionPrototype的实例对象
// regeneratorRuntime.wrap(fn)里面会传递一个状态机函数，状态机函数会有一个参数，context对象，里面包含
// next调用next方法的下一个指针  done状态即函数是否执行完毕  send调用next函数传递的参数作为上一个next函数的返回值
// stop是一个方法，表示遇到return退出状态机函数
const generatorObj={
  // mark标记，没什么意义
  mark(fn){
    return fn
  },
  wrap(fn){
    const context={
      next:0,//表示下一次执行生成器函数的switch中的下标
      sent:'',//表示next调用时候传递归来的值，座位上一次的yield的返回值
      done:false,//是否完成
      //完成函数
      stop(){
        this.done=true
      }
    }

    return {
      next(param){
        context.sent=param
        const value=fn(context)

        return {
          done:context.done,
          value
        }
      }
    }
  }
}