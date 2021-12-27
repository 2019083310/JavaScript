# javaScript的数据类型、类型转化、类型鉴别

### 数据类型

#### 原始数据类型：number boolean string undefined null symbol (es6新增，表示符号)

#### 引用数据类型：Object

```
var a = -123.234; var a = "hello world"; var a = true/false; var a = undefined; var a = null;
```

**”原始值不能添加动态属性“**，即`"abc".aa = '7';`这样不会报错，但是立马就不能访问到该属性了，造成此影响的原因是**包装类，后文有解释**

原始值为栈内存中存储

#### number：

- 可能存在`+0`或`-0`
- 八进制：必须以`0`开头，如`var num = 075;`（在严格模式下无效，会抛出语法错误），es6中使用的是`0o`
- 十六进制：必须以`0x开头`，如`var num = 0x1f;`
  - 无论是八进制还是十六进制，在所有数学操作中都被视为十进制数值；

- 值的范围：`Number.MIN_VALUE = 5e-324; -> Number.MAX_VALUE = 1.7976931348623157e+308;`（大部分浏览器中）

- 如果值超出了这个范围，这个值将会被转换为`Infinity`或`-Infinity`，可以使用`isFinite()`函数确定一个数是不是有限大

```javascript
isFinite(Number.MAX_VALUE + Number.MAX_VALUE); => false
```

```javascript
Number.NEGATIVE_INFINITY`和`Number.POSITIVE_INFINITY`可以获取到`-Infinity`和`Infinity
```

NaN（not a number）：表示本来要返回的数值操作失败了，比如0、+0、-0相除会返回NaN，而非零值除以0或-0会返回Infinity或-Infinity，任何设计NaN的操作都会返回NaN，NaN不等于包括NaN在内的任何值

#### string：

用``、"、'`囊括的字符串，相关字符字面量：转义字符``、换行`\n`、制表`\t`、退格`\b`、回车`\r`、换页`\f`、十六进制nn表示的字符`\xnn`、十六进制nnnn表示的Unicode字符`\unnnn`，这些字面量虽然实际长度不为1，但是在string中这些转义序列只表示一个字符

- 字符串是不可变的，一旦创建其值就不能改变了，例如：

```javascript
var lang = "abc";
lang = lang + "bb";
//首先会分配一个可以容纳5个字符的空间，然后将abc和bb填入，最后销毁“abc”和“bb”
```

- toString()：几乎所有对象都有`toString()`方法，除了null和undefined

**模板字面量**：用`囊括的字符串，模板字面量会保留反引号中所有的空格回车，**模板字面量不是字符串，而是一种特殊的JavaScript语法表达式，只不过求值后得到的是字符串**，模板字面量可以插值，例如：

```javascript
// before
let str = value + " hello " + (value2 * 2);
// now
let str = `${ value } hello ${ value2 * 2 }`;
//所有插入的值都会用toString()强转为字符串型，而且任何JavaScript表达式都可以用于插值
```

**模板字面量标签函数**：直接看例子理解通透一点

```javascript
let a = 6,
    b = 9;

function test(strings, aval, bval, sumval) {
    console.log(strings);  //第一个参数是以插值为分割符，将字符串分割出来的一个数组
    console.log(aval);
    console.log(bval);
    console.log(sumval);
    return 'foobar';
}

let testStr = `${ a } + ${ b } = ${ a + b }`;
let testRes = test`${ a } + ${ b } = ${ a + b }`;

console.log(testStr);
console.log(testRes);
```



![img](https://img.samuel-luo.space/image-20210705133741015.png)



因为表达式的参数是可变的，通常我们都会使用剩余操作符将他们收集到一个数组中，如：

```javascript
function test(strings, ...expressions) {
    for (const expression of expressions) {
        conosle.log(expression);
    }
}
// 6 5 11
```

如果要获取原字符串：

```javascript
function test(strings, ...expressions) {
    return strings[0] +
        expressions.map((val, index) => `${ val }${ strings[i + index] }`).join('');
}
```

**原始字符串**：

```javascript
console.log(`\u00A9`);	//©
console.log(String.raw`\u00A9`);	//\u00A9

console.log(`asdf \n aaa`);	//会换行
console.log(String.raw`asdf \n aaa`);	//不会换行

console.log(`afda
aaa`);	//会换行
conaole.log(String.raw`afda
aaa`);	//会换行

function test(strings) {
    for (const string of strings) {
        console.log(string);	//会返回转义字符
    }
    
    for (const string of strings.raw) {
        console.log(string);	//会返回实际字符串
    }
}
```

#### symbol：

es6新增数据类型，它是原始值，且是唯一的、不可变的，用途是确保对象属性使用唯一标识符，不会发生属性冲突危险，它是用来创建唯一记号，进而作用非字符串形式的对象属性。`**Symbol()**`不能做构造函数，所以不能和new配合使用，入果想使用符号包装对象，可以借助Object的力量，像这样`let mySymbolObj = new Object(Symbol());`。

###### `Symbol()`：

创建一个符号，`let sym = Symbol();`，同时可以传入一个字符串用作对该符号的描述，将来可以通过这个字符串调试代码，但是这个字符串参数与符号定义或标识完全无关。

```javascript
let a = Symbol();
let b = Symbol();
console.log(a == b);	//false

let c = Symbol('foo');
let d = Symbol('foo');
console.log(c == d);	//false

console.log(c);	//Symbol(foo);
```

利用symbol的唯一性可以把它当作对象属性，因为symbol的普通定义是不会有重复的

### 值的改变和复制

```javascript
var num = 100;
var num1 = num;
num = 200;
```

![img](https://img.samuel-luo.space/image-20210123171719625.png)![img](https://img.samuel-luo.space/image-20210123171742829.png)



```javascript
var arr = [1,2];
var arr1 = arr;
var arr = [1,3];
```



![img](https://img.samuel-luo.space/image-20210123172321184.png)



![img](https://img.samuel-luo.space/image-20210123172331716.png)



![img](https://img.samuel-luo.space/image-20210123172509792.png)



### 类型转换

注：null和undefind不会发生类型转化，当做比较的时候

```javascript
var num = 1 * "1";
var num = "1" * "2";
var num = "2" - "1";
var num = "2" / "1";
var num = "1" + "1";
类型	   值
number : 1
number : 2
number : 1
number : 2
string : "11"
```

出现这样的原因是因为JavaScript有自带的类型转换

#### 1、Number(obj)：将内容转换成数字

```javascript
var num = Number("123");	123
var num = Number(true/false);	1/0
var num = Number(null);	0
var num = Number(NaN);	NaN
var num = Number(undefined);	NaN
var num = Number("a");	NaN
var num = Number("123abc");	NaN
var num = Number([]);	0
var num = Number("");	NaN
var num = Number("0xA");	10
```



#### 2、parseInt(obj,16(设定当前obj的进制，将转换为10进制输出，范围是2~36))：将数转换成整型，遇到非数字位截至，并返回前面的数

```javascript
var num = parseInt("123");	123
var num = parseInt(true/false);	NaN/NaN
var num = parseInt("123.3");	123
var num = parseInt(10,16);	16
var num = parseInt(10,0); 10/NaN
var num = parseInt(3,2); NaN
var num = parseInt("100px");	100
var num = parseInt("");	NaN
var num = parseInt("0xA");	10
```



#### 3、parseFloat()：转换成浮点数，遇到除了第一个”.“以外的非数字位截至并返还

```javascript
var num = parseInt("100.1px");	100.1
```



#### 4、String()：转换成string类型

如果值有`toString()`方法，则调用它，如果值是null则返回”null“，如果是undefined则返回”undefined“

```javascript
var str = String(undefined);	"undefined"
```



#### 5、Boolean()：转换成布尔类型

```javascript
**undefined、null、NaN、“”、0、false ==> false**
```



#### 6、toString()：将obj转换成string，但是undefined、null不能用toString()

```javascript
var num = 123;
var str = num.toString();
"123"
```

toString(radix)：以10进制为基础转换成radix进制

```javascript
var num = 123;
var str = num.toString(8);
"173"
```



#### 7、隐式类型转换：

isNaN()：先将内容调用对象的`valueOf()`方法，确定返回值是否能转换为数值（`Number()`方法），如果不能，再调用`toString()`方法并测试其返回值

```javascript
var res = isNaN(NaN);	true
var res = isNaN(123)	false
var res = isNaN("123")	false
var res = isNaN("abc")	true
var res = isNaN(null)	false
```



++、--：先调用Number()，再进行计算，值为number类型

```javascript
var a = "123"; a++;	124
var a = "abc"; a++;	NaN
```



+、-：一元正负

```javascript
var a = +"abc";	number:NaN
```

+：加号

*、/、-、%：数学运算

&&、||、！：逻辑运算符

<、>、<=、>=：比较运算符

==、!=：判断运算符

```javascript
undefined > 0;	false
undefined < 0;	false
undefined == 0;	false
undefined != 0;	true
null > 0;	false
null < 0;	false
null == 0;	false
null != 0;	true
undefined == null;	true
NaN == NaN;	false

//undefined和null不与数字进行比较，<、>、==、<=、>=输出结果全是false，!=输出结果为true

//引用值比较的是地址
{} == {} false
var obj = {}; obj1 = obj; 
obj == obj1 true
obj === obj1 true
```

=、!：绝对判断，不发生类型转换

```
NaN === NaN;	false
```

**在未定义的情况下，所有原始数据类型都为undefined**

**typeof返回值的类型都为字符串类型**

##### 全等运算符比较的是数据类型是否相同，不会发生转化，相等运算符比较的时候会发生转化，但是null和undefind不会转化



### 鉴别数据类型

ECMAScript 标准定义了 7 种数据类型：Boolean、Null、Undefined、Number、String、Symbol(ES6新增)和Object，除Object以外的那6种数据类型也被称为基本数据类型，另外还有Array、Function等复杂数据类型。

#### 1.typeof

　　typeof是一个一元运算符（不是一个函数方法），可以鉴别null以外的基本数据类型以及Object和Function。它的返回值是小写的字符串：

```javascript
/**** typeof ****/
typeof 37 ;  //输出 "number"
typeof "aaa" ;  //输出 "string"
typeof undefined ;  //输出 "undefined"
typeof false;  //输出 "boolean"
typeof {a:1,b:2};  //输出 "object"
typeof function(){};  //输出 "function"
 
//它不能鉴别null和array
typeof null;  //输出 "object"
typeof [1,2];  //输出 "object"
```



#### 2.instanceof（鉴别引用值类型，由原型链决定）

```javascript
finction Person() {
    
}
var person = new Person();

//A对象是不是B构造函数构造出来的
//也就是instanceof 会看A对象的原型链上有没有B的原型！！！
A instanceof B

> person instanceof Person
< true
> person instanceof Object
< true
> [] instanceof Array
< true
> [] instanceof Object
< true
var obj = {}；
> obj instanceof Array
< false
```

所有的引用值都是Object的实例，所有的原始值都不是对象，所以用instanceof检测原始值都会返回false



#### 3.Object.prototype.toString.call()

　　完美鉴别基本数据类型及Object、Function、Array、Date、Math等等类型

```javascript
/**** Object.prototype.toString.call ****/
Object.prototype.toString.call("aa"); //输出 "[object String]"
Object.prototype.toString.call(123); //输出 "[object Number]"
Object.prototype.toString.call(null); //输出 "[object Null]"
Object.prototype.toString.call(undefined); //输出 "[object Undefined]"
Object.prototype.toString.call([1,2,3]); //输出 "[object Array]"
Object.prototype.toString.call(function(){}); //输出 "[object Function]"
Object.prototype.toString.call({a:1,b:2}); //输出 "[object Object]"
```



#### 4.其他判断方法

　　Array.isArray()可以判断一个数据是否是数组类型。

　　instanceof操作符用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。某些情况下也能用来检测数据类型，慎用。

```javascript
/**** isArray判断数组 ****/
var arrTmp = [1,2];
Array.isArray(arrTmp);  //输出true
 
/**** instanceof判断类型，不准确 ****/
var numTmp1 = 123;
var numTmp2 = new Number(123);
numTmp1 instanceof Number; //输出 false
numTmp2 instanceof Number; //输出 true
arrTmp instanceof Array; //输出 true
arrTmp instanceof Object; //输出 true
```



#### 5.全套判断方法

　　（下面这段代码挪自Anguar源码，稍加修整）

```javascript
var toString = Object.prototype.toString;
 
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isDefined(value) {
    return typeof value !== 'undefined';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isDate(value) {
    return toString.call(value) === '[object Date]';
}
var isArray = Array.isArray;
function isFunction(value) {
    return typeof value === 'function';
}
function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
}
function isWindow(obj) {
    return obj && obj.window === obj;
}
function isFile(obj) {
    return toString.call(obj) === '[object File]';
}
function isFormData(obj) {
    return toString.call(obj) === '[object FormData]';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isPromiseLike(obj) {
    return obj && isFunction(obj.then);
}
function isElement(node) {
    return !!(node && (node.nodeName || (node.prop && node.attr && node.find)));
}
function isArrayLike(obj) {
    if (obj == null || isWindow(obj)) {
        return false;
    }
    var length = "length" in Object(obj) && obj.length;
    if (obj.nodeType === 1 && length) {
        return true;
    }
    return isString(obj) || isArray(obj) || length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj;
}
```