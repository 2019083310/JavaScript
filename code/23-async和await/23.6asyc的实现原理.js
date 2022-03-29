// 其实async的实现原理就是将generator的regeneratorRuntime.wrap()函数放在asyncToGenerator()函数里面了\
// 因为promise的链式调用也是很麻烦，所以用了promise+generator结合的方法
// 他们两个一结合,我们需要手动去处理,同时里面的状态是不固定的，因此我们可以借助第方库co来实现
// 这样一来我们的generator+promise+co函数的通用性就适用于异步函数的处理解决方案了
// 所以async和await的实现就相当于generator的实现体被包裹在了asyncToGenerator()函数内部
// 然后asyncGenerator()函数又自调用返回给了我们一个新的函数，这个函数可以理解为co函数
// 我们之后执行async的异步函数就是调用co函数，返回给我们一个promise

// "use strict";

// function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
//   try {
//     var info = gen[key](arg);
//     var value = info.value;
//   } catch (error) {
//     reject(error);
//     return;
//   }
//   if (info.done) {
//     resolve(value);
//   } else {
//     Promise.resolve(value).then(_next, _throw);
//   }
// }

// function _asyncToGenerator(fn) {
//   return function () {
//     var self = this,
//       args = arguments;
//     return new Promise(function (resolve, reject) {
//       var gen = fn.apply(self, args);

//       function _next(value) {
//         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
//       }

//       function _throw(err) {
//         asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
//       }
//       _next(undefined);
//     });
//   };
// }

// function add() {
//   return _add.apply(this, arguments);
// }

// function _add() {
//   _add = _asyncToGenerator( /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
//     return regeneratorRuntime.wrap(function _callee$(_context) {
//       while (1) {
//         switch (_context.prev = _context.next) {
//           case 0:
//             _context.next = 2;
//             return 1;

//           case 2:
//           case "end":
//             return _context.stop();
//         }
//       }
//     }, _callee);
//   }));
//   return _add.apply(this, arguments);
// }