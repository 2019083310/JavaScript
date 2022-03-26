 Promise.resolve('foo')
   .then(function (string) {
     return new Promise(function (resolve, reject) {
       setTimeout(function () {
         string += 'bar';
         resolve(string);
       }, 1000); //将1ms改为1s更易观察
     });
   })
   .then(function (string) {
     setTimeout(function () {
       string += 'baz';
       console.log(string);
     }, 1000)
     return string;
   })
   .then(function (string) {
     console.log("Last Then:  oops... didn't bother to instantiate and return " +
       "a promise in the prior then so the sequence may be a bit " +
       "surprising");
     console.log(string);
   });