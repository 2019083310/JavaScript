 1.var

所有ECMAScript版本均可用

var是函数作用域

var定义的变量可以修改，如果不初始化会输出undefined，不会报错

var声明的变量在其作用域中会进行代码提升，多余的声明将会在顶部合并为一个声明

var在全局作用域中声明的变量会成为window对象的属性

当不使用var进行定义时，变量默认的configurable为true，可以进行delete等命令进行操作，而当var在定义一个全局变量的时候configurable 变为了false，即不会被delete删除

暗示全局变量（imply global）：如果一个变量未经声明就被初始化，此变量将为全局对象（window）所有，被添加到全局上下文

a = 10; --> window.a = 10;

全局上的所有变量也归全局对象（window）所有，所以说，window就是全局的域

```javascript
var b = 10; --> window.b = 10;

a = 10; --> window.a = 10;
console.log(a); --> console.log(window.a);

function test(){
    var a = b = 123; --> b = 123; var a = b;
}
test();
//控制台打印：
window.a:undefined
window.b:123
```

 2.let 

只能在ECMAScript6以及更新版本中使用

let是块级作用域，函数内部使用let定义后，对函数外部无影响

let拥有块级作用域,一个 {代码} 就是一个块级作用域，也就是let声明块级变量，即局部变量（只要是{}中定义的let，就不能被{}外访问）

let在其作用域中不能被重复声明（函数作用域和块级作用域）

严格来说，let在JavaScript运行时也会被提升，但由于”暂时性死区“，let不能在声明前使用变量

在let声明之前执行的瞬间被称为”暂时性死区“（temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出：ReferenceError

let在全局作用域中声明的变量不会成为window的对象属性

 3.const 

只能在ECMAScript6以及更新版本中使用

const定义的变量不可以修改，而且必须初始化，但是，当const对象是引用值的时候，可以修改引用值内部属性，但是不能修改对象的引用，例如：

```javascript
const person = {};
person.name = 'lsn';
// correct

const name = 1;
name = 2;
// wrong
```

const的作用域与let相同，只在声明所在的块级作用域内有效，并且也是和let一样不可以重复进行声明，不能在定义前访问变量

const在全局作用域中声明的变量不会成为window的对象属性

 多个赋值规范： 

```javascript
var a,
	b,
	c=100;
1.变量名必须以英文字母、_、$开头
2.变量名可以包括英文字母、_、$、数字
3.不可以用系统的关键字、保留字作为变量名
```



