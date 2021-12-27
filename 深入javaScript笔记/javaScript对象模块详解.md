# javaScript对象模块详解

### 对象Object

```javascript
var mrDeng = {
    name : "MrDeng",
    age : 40,
    sex : "male",
    health : 100,
    smoke : function () {
        console.log("I am smoking cool!!!")
        this.health --
    },
    drink : function () {
        console.log("I am drinking")
        this.health ++
    }
}
```

### 对象创建方法

```javascript
1. var obj = {}  plainObject  对象字面量/对象直接量
2. 构造函数
	1）系统自带的构造函数  new Object()
	2）自定义
var obj = new Object();

//方法1、2创建的对象没有任何区别，不过1在创建时不会实际调用Object构造函数
//javascript生产出的对象是灵活的，不同于c++和java中生成的对象是固定的

var obj = Object.create(xxx.prototype/null, 对象属性（可不传）);
//三种方式一样，只不过最后一种需要传入Object或null，传入null时所构造的对象将会没有原型，而且可以传第二个参数，与defineProperties()的第二个参数一样，详情请看下文定义多个属性
//var声明的全局变量、在函数范围内声明的局部变量所增加的属性一定是不可配置的属性，例如不能进行delete操作
```

### 对象属性和方法

ECMA-262使用一些内部特性来描述属性的特征，开发者不能在js中直接访问这些特性，为了将某个特性标识为内部特性，会用两个中括号将特性的名称括起来，如`[[scope]]`

#### 数据属性

数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置，有四个属性特性描述他们的行为：

- `[[Configurable]]`：表示属性是否可以通过delete删除并重新定义，是否可以修改他的特性，以及是否可以把它改为访问器属性，所有直接定义在这个对象上的属性都为true，通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false
- `[[Enumerable]]`：表示属性是否可以通过for-in循环返回，所有直接定义在这个对象上的属性都为true，通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false
- `[[Writable]]`：表示这个属性的值是否可以被修改，所有直接定义在这个对象上的属性都为true，通过属性描述符定义一个属性时，这个属性的[[Writable]]默认为false
- `[[Value]]`：包含属性的值，默认为undefined

要修改属性的默认特性，就必须用Object.defineProperty()方法，该方法接受三个参数

```javascript
let person = {}
Object.defineProperty(person, "name", {
    configureable: true,
    enumerable: true,
    writable: false,
    value: "nico"
})
//第三个参数里可以根据要修改的特性设置一个或多个值
console.log(person.name)	//"nico"
person.name = 'lsn'//writable设为false后，严格模式下修改只读属性会抛出错误
console.log(person.name)	//"nico"
```

一个属性被设置为不可配置后，就不可能再变回可配置了，再次调用并修改任何**非writable**属性会导致错误

#### 访问器属性

访问器不包含数据值，相反，他们包含一个获取函数（getter）和一个设置函数（setter），不过这两个函数不是必须的。在读取访问器属性时会调用获取函数，返回一个有效的值，在写入访问器属性时，会调用设置函数并传入新值，访问器属性有4个特性：

- `[[Configurable]]`：与数据属性一样
- `[[Enumerable]]`：与数据属性一样
- `[[Get]]`：获取函数，读取时调用，默认值为undefined
- `[[Set]]`：设置函数，写入时调用，默认值为undefined

访问器属性必须使用Object.defineProperty()

```javascript
let person = {
    year: 2017,
    el: 1
}
Object.defineProperty(person, 'year', {
    get() {
        return this.year
    },
    set(val) {
        this.year = val
        this.el++
    }
})
book.year = 2001
book.el	//2
```

获取函数和设置函数不一定都要设置，只定义获取函数意味着只读，修改属性值会被忽略，严格模式下会抛出错误；同样的，只定义设置函数同理

在不支持Object.defineProperty()的浏览器中没有办法修改`[[Configurable]]`和`[[Enumerable]]`

#### 定义多个属性

Object.defineProperties()，接收两个参数

```javascript
let person = {};
Object.defineProperties(person, {
    year: {
        value: 2017
    },
    year_: {
        get() {
            return this.year
        }
    }
})
```

#### 读取属性的特性

Object.getOwnPropertyDescriptor()方法可以取得指定属性的属性描述符，接受两个参数（只对当前实例属性有效，如果想读取原型上的值，请直接对原型对象使用）

```javascript
let person = {};
Object.defineProperties(person, {
    year: {
        value: 2017
    },
    year_: {
        get() {
            return this.year
        }
    }
})
let des = Object.getOwnPropertyDescriptor(person, "year")
console.log(des)	//{value: 2017, writable: false, enumerable: false, configurable: false}
let des1 = Object.getOwnPropertyDescriptor(person, "year_")
console.log(des1)	//{set: undefined, enumerable: false, configurable: false, get: ƒ}
```

es2017新增了Object.getOwnPropertyDescriptors()，这个方法实际上会在每个自由属性上调用Object.getOwnPropertyDescriptor()并在一个新对象上返回它们

```javascript
console.log(Object.getOwnPropertyDescriptors(person))

//->
{
    year: {
        configurable: false,
        enumerable: false,
        value: 2017,
        writable: false
    },
    year_: {
        configurable: false,
        enumerable: false,
        get: ƒ get(),
        set: undefined
    }
}
```

#### 对象方法补充

- 禁止对象扩展新属性：*preventExtensions*
  - 给一个对象添加新的属性会失败（在严格模式下会报错）；

- 密封对象，不允许配置和删除属性：*seal*
  - 实际是调用*preventExtensions*
  - 并且将现有属性的*configurable:false*

- 冻结对象，不允许修改现有属性： *freeze* 
  - 实际上是调用*seal*
  - 并且将现有属性的*writable: false*

#### 合并对象

​	Object.assign()方法（**浅复制**），接收一个目标对象和一个或多个源对象，然后将源对象可枚举属性（Object.propertyIsEnumerable()返回true）和自有（Object.hasOwnProperty()返回true）属性复制到目标对象。以字符串和符号为键的属性会被复制。对每个符合条件的属性，这个方法会使用源对象上的[[Get]]取得属性值，然后使用目标函数上的[[Set]]设置值

```javascript
let dest, src, result
dest = {}
src = {id: 'src'}

result = Object.assign(dest, src)
dest === result	//true
dest !== src	//true
//result	=>	{id: src}

result = Object.assign(dest, {a: 'foo'}, {b: 'bar'})
//result	=>	{a: foo, b: bar}

dest = {
    set a(val) {
        console.log(val)
    }
}
src = {
    get a() {
        return 'foo'
    }
}
Object.assign(dest, src)
//调用src的get，然后调用dest的set并传入值，但是set并没有保存值，所以值并未传过来
//dest	=>	{set a(val) {...}}
```

如果多个源对象都有相同的属性，则使用最后一个复制的值，从源对象访问器属性取得的值，会作为一个静态值赋给目标对象，不能在两个对象间转移获取函数和设置函数

```javascript
let dest = {
    year: 2017
}
Object.defineProperty(dest, "a", {
    enumerable: true,
    set(val) {
        this.year = val;
        console.log("hello")
    },
    get() {
        console.log(this.year)
        return 2001;
    }
})
let result = {}
let res = Object.assign(result, dest)
console.log(Object.getOwnPropertyDescriptors(res))
// ->
{
    //这里的a属性由访问器属性变为数据属性
    a: {
        configurable: true,
        enumerable: true,
        value: 2001,
        writable: true
    },
    year: {
        configurable: true,
        enumerable: true,
        value: 2001,
        writable: true
    }
}
```

如果复制中途出错，操作会终止并抛出错误，但是在此之前的复制操作都已经完成，并不会**“回滚”**

#### 对象相等判定

Object.is()，该方法必须接受两个参数

```javascript
true === 1;	//false

+0 === -0;	//true
+0 === 0;	//true
-0 === 0;	//true

NaN === NaN;	//false
isNaN(NaN);	//true

Object.is(true, 1);	//false
Object.is(+0, -0);	//false
Object.is(+0, 0);	//true
Object.is(-0, 0);	//false
Object.is(NaN, NaN);	//true
```

### 增强对象语法

#### 属性值简写

```javascript
let name = "lsn"
let person = {
    name: name
}
person.name	//lsn

//简写属性名，如果没有找到同名变量则会报错
let person = {
    name
}
person.name	//lsn

//代码压缩程序会在不同的作用域间保留属性名，以防止找不到引用
function getName(name) {
    return {
        name
    }
}
let person = getName("lsn")
person.name	//lsn
```



#### 可计算属性

不能在对象字面量中直接动态命名属性，要使用中括号[]，而且中括号中的对象会被当作表达式求值

```javascript
const name = 'lsn';

let person = {};
person[name] = 'matt';
person.lsn;	//matt

function getName(name) {
    return `${name}`;
}
person = {
    [getName('lsn')]: 'matt'
}
person.lsn;	//matt
//可计算表达式中抛出任何错误都会中断对象的创建；计算属性的表达式抛出错误，之前完成的计算是不能回滚的
```

#### 简写方法名

```javascript
let person = {
    sayName: function() {
        console.log(name);
    }
}
//简写
let person = {
    sayName(name) {
        console.log(name);
    }
};
person.sayName('lsn');	//lsn

//简写对于访问器属性的获取函数和设置函数也适用
let person = {
    name_: '',
    get name() {
        return this.name_;
    },
    set name(name) {
        this.name_ = name;
    },
    sayName() {
        console.log(name_);
    }
}
person.name;	//''
person.name = 'matt';
person.name_;	//matt

//简写方法名可以与计算属性键相互兼容
const name = 'sayName';
let person = {
    [name](name) {
        console.log(name);
    }
}
person.sayName('lsn');	//lsn
```

### 对象解构

使用与对象匹配的结构来实现对象属性的赋值

```javascript
let person = {
    name: 'lsn',
    age: 19
}
let {name: personName, age: personAge} = person
personName	//lsn
personAge	//19

//简写
let {name, age}	= person
name;	//lsn
age;	//19

//如果不能匹配，则该变量的值就是undefined
let {name, job} = person;
name;	//lsn
job;	//undefined

//可以在结构赋值的同时定义默认值
let {name = 'h', job = 'h'} = person;
name;	//lsn
job;	//h
```

结构函数在内部使用ToObject()（不能在运行时环境中直接访问）把源数据结构转换为对象，这意味着在对象解构的上下文中，原始值会被当成对象，所以null和undefined不能被解构，否则会报错

```javascript
let {length} = 'foo';
length;	//3
let {cunstructor: c} = 4;
c === Number;	//true

let {_} = null;	//TypeError
let {_}	= undefined;	//TypeError
```

解构并不要求变量必须在解构表达式中声明，但是如果给事先声明的变量赋值，赋值表达式需要用括号括起来

```javascript
let personName, personAge;
let person = {
    name: 'lsn',
    age: 19
}
({name: personName, age: personAge} = person);
```

可以利用解构来复制对象属性

```javascript
let person = {
    name: 'lsn',
    age: 19,
    say: {h: "hello"}
}
let obj = {};
({name: obj.name, age: obj.age, say: obj.say} = person);
//但是say属于引用，person和obj中的say指向同一个对象，所以改变一个另一个也会变

//套娃
let {say: {h}} = person;
h;	//hello
//可以看作
```

在外层属性没有定义的情况下不能使用嵌套解构，无论源对象还是目标对象都一样

```javascript
let personCopy = {};

//foo在源对象上是undefined
({foo: {title: personCopy.title}} = person);
//报错

//say在目标对象上是udefined
({say: {h: person.say.h}} = person)；
//报错
```

如果解构中出错，则出错前赋值成功，出错后赋值失败，为undefined

函数参数中也可以使用解构赋值

```javascript
function get(name, {hello, f: personf}, age) {
    ...
}
```

因为在ECMAScript中Object是派生其他对象的基类，Object所有属性和方法在派生对象上同样存在



### 冻结对象

​	将对象冻结，不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值，该对象的原型也不能被修改

​	虽然修改对象的属性不会报错（在严格模式下会报错），但是操作无效

```javascript
let obj = {}
Object.freeze(obj)
obj.name = 'lsn'
console.log(obj.name)	//undefined
```

#### 1、属性增加

```javascript
mrDeng.wife = "xiaoliu";	//点语法，这种方法只能给属性名字母数字字符
mrDeng["wife"] = "xiaoliu";	//这种方法可以给属性名包含非字母数字字符

//结果
var mrDeng = {
    name : "MrDeng",
    age : 40,
    sex : "male",
    health : 100,
+=> wife : "xiaoliu",
    smoke : function () {
        console.log("I am smoking cool!!!");
        this.health --;
    },
    drink : function () {
        console.log("I am drinking");
        this.health ++;
    }
}
```

#### 2、属性修改

```javascript
mrDeng.sex = "female";	//点语法

//结果
var mrDeng = {
    name : "MrDeng",
    age : 40,
==> sex : "female",
    health : 100,
    wife : "xiaoliu",
    smoke : function () {
        console.log("I am smoking cool!!!");
        this.health --;
    },
    drink : function () {
        console.log("I am drinking");
        this.health ++;
    }
}
```

#### 3、属性删除

只使用delete，返回boolean值，如果该属性不存在则返回undefined，存在则返回true并删掉

```javascript
delete mrDeng.wife;	//点语法

//结果
var mrDeng = {
    name : "MrDeng",
    age : 40,
    sex : "male",
    health : 100,
-=>    
    smoke : function () {
        console.log("I am smoking cool!!!");
        this.health --;
    },
    drink : function () {
        console.log("I am drinking");
        this.health ++;
    }
}

//var声明的全局变量、在函数范围内声明的局部变量所增加的属性一定是不可配置的属性，不能进行delete操作
```

#### 4、属性查询

```javascript
mrDeng.sex;	//点语法
mrDeng["sex"];

//输出
male
```



### 创建对象-工厂模式

```javascript
function creat(a, b) {
    let o = new Object();
    o.a = a;
    o.b = b;
    return o;
}
```



### 创建对象-构造函数模式

```javascript
//要遵守大驼峰式命名规则，以区分普通函数和构造函数
function Person () {
    
}

//如果不想传参数，构造函数后面的括号可加可不加
var person1 = new Person();
let person1 = new Person;

function Car (color) {
    this.color = color;
    this.name = "BMW";
    this.height = "1400";
    this.lang = "4900";
    this.weight = 1000;
    this.health = 100;
    this.run = function () {
        this.health --;
    }
}

var car = new Car("blue");
```



#### 构造函数内部原理

```javascript
//当一个函数被new的时候，会隐式产生一个新对象，这个新对象上的[[prototype]]特性被赋值为构造函数prototype属性
//构造函数内部的this被赋值为这个新对象（this指向这个新对象）
//然后执行构造函数内部代码，最后隐式的返回这个this指向的对象（如果构造函数有显式地返回对象，则返回函数中显式返回的对象而不是创建的这个新对象）

function Student(name, age, sex){
    //var this = {
    //	name : "",
    //	age : "",
    //	sex : ""
	//}
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2017;
    //return this;
}

var stu = new Student(name, age, sex);

//如果显式模拟return返回一个对象则会改变构造函数返回的对象
function Student(name, age, sex){
    //var this = {
    //	name : "",
    //	age : "",
    //	sex : ""
	//}
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2017;
    return {};
}

var stu = new Student(name, age, sex);
stu => {}

//但是如果你返回的是原始值，不是对象值的时候，将会忽略return正常返回
function Student(name, age, sex){
    //var this = {
    //	name : "",
    //	age : "",
    //	sex : ""
	//}
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2017;
    return 123;
}

var stu = new Student(name, age, sex);
stu => {name : name, age : age, sex : sex};
```

构造函数构造的对象在控制台输出的名为该对象constructor名

```javascript
function test() {}
new test();
```



![img](https://img.samuel-luo.space/image-20210529144904777.png)



构造函数里的方法会在每个实例上创建一遍

```javascript
function Person() {
    this.say: function() {
        console.log("hello");
    }
    //逻辑等价于 this.say: new Function("console.log('hello')");
}

let a1 = new Person();
let a2 = new Person();
a1.say === a2.say;	//false

//解决办法是可以将函数定义在外面
function say() {
    console.log("hello");
}
function Person() {
    this.say: say;
}
```



### 创建对象-原型模式

##### 原型Prototype

原型是function对象的一个属性，它定义了的构造函数制造出的对象的公共祖先（可以理解为父类）。通过该构造函数产生的对象，也可以继承该原型的属性和方法，原型也是对象，并且会初始化一个隐式变量为constructor，其值为构造函数。

```javascript
Person.prototype.name = "hehe";
Person.prototype.say = function () {
    console.log("hh");
}
//或者
//但是下面这种方式会导致原型中没有constructor
Person.prototype = {
    name : "hehe"，
    say : function () {
        console.log("hh");
    }
}

function Person () {};
var person = new Person();
console.log(person);
```



![img](https://img.samuel-luo.space/image-20210515154502694.png)



原型增删改查，增加用`xxx.prototype.xxx = xxx;`，删除用`delete xxx.prototype.xxx`，查用`xxx.xxx`就行，修改用`xxx.prototype.xxx = xxx;`。

如果某个属性在当前对象未被定义时，会去原型prototype中查找。

除查询外，其他方法用`xxx.xxx`将会是修改当前实体对象，并不是原型。

#### constructor可以手动修改

```javascript
function Person() {};
Car.prototype.constructor = Person;
function Car() {};
var car = new Car();
```



![img](https://img.samuel-luo.space/image-20210515161128796.png)



在之前讲过的new时三段构造里，this其实并不是空的，这样做是为了链接当前对象以及该对象的prototype，并且这种链接方式为引用。所以上方查询的描述才能实现。

```javascript
//在new的时候，所进行的三步
function Person() {
    //var this = {
    //		__proto__ : Person.prototype
	//};
    .......//某些赋值语句
    //this = {
    //		......//赋值语句产生的属性 xxx : "xxx"/function ()
    //		__proto__ : Person.prototype
	//}
    //return this;
}
```



下面代码出现的情况是因为`__proto__`和prototype指向的空间已经不一样了

```javascript
Person.prototype.name = "sunny";
function Person() {};
var person = new Person();
Person.prototype.name = "cherry";
//person.__proto__.name = "cherry"

//但是如果换个方式进行
Person.prototype.name = "sunny";
function Person() {};
var person = new Person();
Person.prototype = {
    name : 'cherry'
}
//person.__proto__.name = "sunny"

//理解
Person.prototype = {name : "a"};
__proto__ = Person.prototype;
Person.prototype = {name : "b"};

//我们再换一下位置
Person.prototype.name = "sunny";
function Person(){}
Person.prototype = {
    name : 'cherry'
}
var person = new Person();
//person.__proto__.name = "cherry"
```

自己加的`__proto__`将不会有继承效果，但是会有这个属性，不归于系统所属。

#### 原型知识点补充

默认情况下，所有原型对象自动获得一个名为constructor的属性，指回与之关联的构造函数

```javascript
Person.prototype.constructor === Person;	//true
```

![img](http://img.samuel-luo.space/06087DDB8D5BC8FD00BB8EEF9B594614-1626568754116.png)

可以用isPrototypeOf()方法确定调用它的对象是不是传入参数对象的prototype（原型链中适用）

```
Person.prototype.isPrototypeOf(person1);	//true
```

可以用Object.getPrototypeOf()返回参数内部[[Prototype]]的值

```
Object.getPrototypeOf(person1) == Person.prototype;	//true
```

Object.setPrototypeOf()，传入两个参数a和b，会将b覆盖到a的[[Prototype]]属性值上（**但是这个方法不建议用，严重影响代码性能**）

可以通过Object.create()解决这个问题，详情请看上文创建对象部分

#### 原型的弊端

原型对象会共用同一个引用属性，所以一个实例所做的更改，另一个实例也会相查询到

#### 原型链

可以将原型链比作作用域链

```javascript
function SuperType() {
    this.property = true;
}
//对于xxx.f()，f函数中的this为xxx对象
SuperType.prototype.getSuperValue = function() {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

subType.prototype.getSubValue() = function() {
    return this.subproperty;
}
let instance = new SubType();
console.log(instance.getSuperValue());	//true
```



![img](http://img.samuel-luo.space/B21767949106627C57F44A1858BF89EA.png)



所有对象的最终原型是Object.prototype，Object.prototype的原型是null



![img](http://img.samuel-luo.space/D1CECF115C21345E0CDDAB926201B808.png)

