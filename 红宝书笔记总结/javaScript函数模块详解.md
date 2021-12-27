 

# javaScript函数模块详解

​	函数实际上是对象，每个函数都是Function类型的实例，而Function也有属性和方法，和其他引用类型一样

可以将函数名想象成指针，函数想象成对象

​	注意，严格模式下函数有以下规定：函数不能以eval或arguments作为名称，同样他们俩也不能做参数名，函数参数不能同名

```javascript
//函数声明
//js引擎会在任何代码执行之前，先读取函数声明并在执行上下文中生成函数定义，叫做“函数声明提升”
function test(a,b){}
//函数体
//必须等到代码执行的那一刻才会在执行上下文中生成函数定义，用var和let都是这样
//1、命名函数表达式var test=function test(){}
//2、匿名函数表达式 --> 函数表达式var test = function (){}
//3.箭头函数let test = () => {}
//4.Function构造函数（不推荐）
//接收任意多个字符串参数，最后一个参数始终会被当成函数体，之前的参数都是函数参数
let test = new Function("arg1", "arg2", "return arg1 + arg2")
//这段代码会被解释两次：第一次将它当作常规ECMAScript代码，第二次解释传给构造函数的字符串
return：终止函数、返回值
```

作用域：变量和函数生效（能被访问的）的区域

###  没有重载 

同一个函数被定义多次，那么，最后一个会覆盖之前所有的定义

###  箭头函数 

- 任何可以使用函数表达式的地方，都可以使用箭头函数

- 箭头函数非常适合嵌入式场景，因为其简洁的语法

- 只有没有参数或者多个参数的情况下，才需要使用括号

- 箭头函数也可以不用大括号，如果不使用大括号，箭头后面只能由一行代码，例如一个赋值操作、或者一个表达式，而且会隐式返回这行代码的值

- 注意：箭头函数不能使用arguments、super和new.target，也不能用作构造函数，更没有prototype属性


###  函数名 

​	ECMAScript6的所有函数对象都会暴露一个只读的name属性，其中包含关于函数的信息。大多数情况下，这个属性中保存的就是一个函数标识符，或者说是一个字符串化的变量名，即使函数没有名称也会如实显示成空字符串。如果他是Function构造函数构建的，则会标识成“anonymous”

​	如果是一个获取函数、设置函数，或者使用bind()实例化，那么标识符前面会加上相应的前缀bound foo、get foo、set foo

###  参数、arguments 

实参在函数里被存在列表arguments（类数组对象）里，形参和实参没有强制规定个数

```javascript
function abc(a){
	console.log(arguments)
}
abc(1,2,3)
arguments = [1,2,3] //实参列表
```

在形参和列表arguments存在一种映射，某个值改变相应的另一个值也改变

但是形参和arguments在内存中是分开的

```javascript
function sum(a,b){
	a = 2
	console.log(arguments[0])
	arguments[0] = 4
	console.log(a)
}
sum(1,3)
2
10
4
```

但是如果函数一开始就没有存在的映射并不会有此效果

```javascript
function sum(a,b){
	b = 2
	console.log(arguments[1])
}
sum(1)  //只传一个实参情况
//undefined
```

严格模式下，给arguments赋值不会再影响形参的值；在函数中尝试重写arguments对象会导致语法错误

```javascript
function sum(a,b){
	a = 2
    console.log(arguments[0])
    arguments[0] = 4
    console.log(a)
}
sum(1,3)
//1
//10
//2
```

###  arguments.callee 

指向arguments对象函数所在的指针

```javascript
function test(num) {
	if (num < 1) {
    	return 1
        } else {
        	return num * test(num - 1);
		}
}//这样只能调用名称为test的函数，如果函数名变化就会出现相应问题
let trueTest = test
test = function() {return 0;}
test(5)  //0
trueTest(5)  //0，因为trueTest函数里会调用test()
//下面可以避免这种情况
function test(num) {
    if (num < 1) {
        return 1;
        } else {
            return num * arguments.callee(num - 1)
        }
}
let trueTest = test
test = function() {return 0;}
test(5);  //0
trueTest(5);  //120
```

###  默认参数值 

​	ES5.1以前需要手动检测某个参数是否为undefined，ES6之后就能显式定义默认参数了

但是这样将会断开形参与arguments之间的同步映射（只要有一个形参有默认值就会这样）

```javascript
function test(name = 'lsn') {
	console.log(name)
    console.log(arguments[0])
}
//给函数传undefined相当于没有传值，也就是arguments不会和name建立联系
test(undefined);
//lsn
//undefined
```

```javascript
function test(name = 'lsn', say) {
	name = 'haha'
    say = 'lll'
    console.log(arguments[0], arguments[1])
}
test('foo', 'l')
//foo
```

默认参数值不一定是原始值或对象类型，可以是调用函数后的返回值function test(name = getName()) {}

这个getName()求值函数只有在test()函数被调用的时候才会运行求值，test()函数定义时不会

箭头函数也能使用默认值，不过在只有一个参数时就必须加括号了

###  默认参数作用域与暂时性死区 

​	先定义的默认参数可以被后面的命名参数使用，但是不能被前面的命名参数使用，这里和按顺序let定义let是一样的

```javascript
function test(name = 'lsn', val = 'foo') {}
//同下
function test() {
    let name = 'lsn'
    let val = 'foo'
}

function test(name = 'lsn', val = name) {}
//这里val就等于lsn

//参数有自己的作用域，所以不能使用函数体的作用域
//function test(name = hi) {
//    let hi = 'lsn'
//}
//上面这种会报错
```

###  扩展参数 

使用扩展操作符会将**可迭代对象拆分**，并将迭代返回值每个单独传入

```javascript
function test() {
    console.log(arguments.length)
}
test([0, 1])	//1
test(...[0, 1])	//2
```

 **收集参数** 

正好和扩展参数相反，会得到一个Array实例,但是不影响arguments

```javascript
function test(...value) {
    console.log(value)
}
test(1, 2, 3)	//[1, 2, 3]
//Arguments(3) [1, 2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
```

###  this 

​	在标准函数中，this引用的是把函数当成方法调用的上下文对象（如在全局调用函数时，this指向window）

​	在箭头函数中，this引用的是定义箭头函数的上下文，而且因为箭头函数默认不会使用自己的this，而是会和外层的this保持一致（看作箭头函数this指向的是外层this所指向的对象），并且箭头函数的this是不可改的

```javascript
window.color = 'red'
let o = {
    color: 'blue'
}

function say() {console.log(this.color)}
say()	//red
o.say = say
o.say()	//blue

let say1 = () => {console.log(this.color)}
say1()	//red
o.say1 = say1
o.say1()	//red
```

###  传递参数 

​	因为原始值和引用值存储方式不一样，函数中传参方式有区别，原始值为按值传递，即复制一份副本传入到参数中；而引用值则会将引用值的堆内存位置复制到参数中。

​	两者其实和复制值是一样的，上文有解释

###  arguments（ES5严格模式下不允许使用） 

####  1、callee 

能够调用当前function（严格模式下访问会报错）

```javascript
function test () {
    console.log(arguments.callee)
}

test()
```

阶乘

```javascript
var num = (function (n) {
    if(n == 1) {
        return 1
    }
    return n * arguments.callee(n-1)
}(100))
```

####  2、caller 

es5会给函数对象上添加这个属性，基本浏览器早期版本都支持这个属性

引用当前函数被调用的环境，如果是全局作用域中调用则为null

```javascript
function test () {
    demo()
}

function demo () {
    console.log(demo.caller)
}

test()
```





![img](https://dlnu19javastudy.yuque.com/api/filetransfer/images?url=https%3A%2F%2Fimg.samuel-luo.space%2Fimage-20210521103642552.png&sign=963641474beb54b91594613f8c60db1bcc09672aeeb134261b2b498257cd5613)





如果要降低耦合度，则可以通过arguments.callee.caller来引用同样的值

###  new.target 

在函数里调用，如果该函数是使用new关键字调用的，则target会引用被调用的构造函数，如果该函数被当成普通函数运用，则返回undefined

```javascript
function test() {
    if (new.target) {
        throw 'hello'
    }
}
new test()	//hello
test()	//
```

###  属性 

每个函数都有两个属性：length和prototype

length：该属性保存函数定义的命名参数的个数

```javascript
function test(helo) {}
test.length	//1
```

prototype：该属性不可枚举，所以使用for-in不会返回这个属性 

### apply()、call()

这两个方法可以改变函数内this的引用，下文有详细说明

```javascript
fun.apply(obj, arguments)	//可以是Array实例也可以是arguments对象
fun.call(obj, ...arguments)	//参数必须一个个分开
```

在严格模式下，调用函数如果没有指定上下文对象，则this值不会指向window。除非使用apply()或call()把函数指定给一个对象，否则this值会变成undefined

###  函数表达式 

任何时候，把函数当作值来用，他就是一个函数表达式

###  递归 

阶乘

```javascript
function mul(n){
	if(n == 1){
		return 1
	}
	return n * mul(n-1)
}
```

斐波那契数列

```javascript
function fb(n){
	if(n == 1 || n == 2){
		return 1
	}
	return fb(n-1) + fb(n-2)
}
```

但是这样直接用函数名可能会有问题，因为如果这个变量被赋值为null则会报错，所以建议使用arguments.callee

但是在严格模式下，不能访问arguments.callee，所以这里可以用命名函数表达式

###  尾调用优化 

es6规定如果一个函数的返回时另一个函数的返回，则执行尾调用优化，具体如下

```javascript
function outter() {
    return inner()	//尾调用
}

上述代码在es6中优化如下：
1、执行到outter函数体，第一个栈帧被推到栈上
2、执行outter函数体，到达return语句。为求值语句，必须先求值inner
3、引擎发现把第一个栈弹出栈外也没关系，因为inner的返回值也是outter的返回值
4、弹出outter的栈帧
5、执行到inner函数体，栈帧被推到栈上
6、执行inner函数体，计算其返回值
7、将inner的栈帧推出到栈外
```

现在的浏览器没法测试尾调用优化是否起作用，但是这个是es6规范所规定的

#####  尾调用优化条件 

代码在严格模式下执行、外部函数的返回值时对尾调用函数的调用，尾调用函数返回后不需要执行额外的逻辑、尾调用函数不是引用外部函数作用域中自由变量的闭包

尾调用优化很适合递归，因为递归代码最容易在栈内存中产生大量栈帧

之所以要求严格模式，主要是因为非严格模式下函数调用允许使用f.arguments和f.caller，而它们都会引用外部函数的栈帧

###  立即调用的函数表达式（IIFE，Immediately Invoked Function Expression） 

定义后立即执行，执行完立即释放，不占用内存

```javascript
(function (){
   //... 
}())
或
(function abc(){
   //... 
}())
或
(function abc(){
   //... 
})()
//W3C建议前两种执行方式
//只有表达式才能被执行符号"()"执行，function test(){}();这种将不会执行，因为()前方是函数定义式；var test = function (){}();这种将会执行，并且和立即执行函数没有区别
//被执行符号执行的表达式将会自动放弃函数的名称
//+ function (){}();这种将会执行，+ - ！等都可以
//()可以是数学优先表达式所以(function (){})()、(function (){}())首先是数学表达式()将函数定义式转化为表达式，然后就可被执行

如果传参
(function abc(a,b){
   //... 
}(a,b))

如果要返回值
var abc = (function abc(a,b){
    //... 
    return 12
}(a,b))
```

在es5.1以前，为了防止定义的变量外泄，常常用IIFE，但是es6以后就可以用块级作用域了

```javascript
//内嵌块级作用域
{
    let i
    for (i = 1; i < count; i++) {
        console.log(i)
    }
}
console.log(i)	//报错

//循环块级作用域
for (let i = 0; i < count; i++) {
    console.log(i)
}
console.log(i);//报错
```

###  私有变量 

私有变量和特权方法、静态私有变量、模块模式模块增强模式（详情请看红宝书p316）

 预编译：在函数执行的前一刻发生（生成函数上下文） 

1、创建AO（Activation Object）对象	[翻译：执行期上下文]

2、找形参和变量声明，将变量和形参名作为AO的属性名，值为undefined

3、将实参和形参相统一

4、找函数体的函数声明，赋值于函数体

5、创建arguments和this，这个this指向window（）

```javascript
function fn(a){
    console.log(a)
    var a = 123
    console.log(a)
    function a(){}
    console.log(a)
    var b = function (){}
    console.log(b)
    function d(){}
}
fn(1)

//step1
    AO{

    }
//step2
    AO{
        a:undefined,
        b:undefined,
    }
//step3
    AO{
        a:1,
        b:undefined,
    }
//step4
	AO{
        a:function a(){},
        b:undefined,
        d:function d(){},
    }
 //step5
     AO{
         arguments:[],
         this:window,
         a:function a(){},
         b:undefined,
         d:function d(){},
     }

//执行函数体(控制台打印)
f a(){}
123
123
f (){}
```

全局对象没有形参，所以没有第三步，而且第一步创建的是GO（Global Object）对象，

GO === window

```javascript
console.log(a)
var a = 123
//控制台输出：undefined

console.log(a)
//控制台输出：error: a is not defined

test()
function test(){
	console.log("test")
}
//控制台输出：test
```

程序优先找自己所拥有的变量，在函数中优先AO中的对象，如果没有则向父级寻找，例如GO

注意：预编译不管有没有if ，只看声明

```javascript
console.log(a) //undefined
console.log(c) //undefined
if(){
   var a//会被预编译
   function c(){}//会被预编译
}
```

最新：亲自实验IE、chrome、Edge，发现新特性！！！

if里面的function f函数声明会在GO和这个函数里面的AO同时声明f = function()，这是if语句里的特性

```javascript
var a
console.log(f)
if (true) {
    function f () {
        console.log(f)
        f = a
        console.log(f)
        //console.log("test")
    }
    console.log(f)
}
f()
console.log(f)
//console
undefined
ƒ f () {
    console.log(f)
    f = a
    console.log(f)
    console.log("test")
}
ƒ f () {
    console.log(f)
    f = a
    console.log(f)
    console.log("test")
}
undefined
ƒ f () {
    console.log(f)
    f = a
    console.log(f)
    console.log("test")
}
```