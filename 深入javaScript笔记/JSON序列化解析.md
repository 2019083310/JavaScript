# javaScript中的JSON序列化解析

### JSON的由来

在目前的开发中，JSON是一种非常重要的**数据格式**，它并**不是编程语言**，而是一种可以在服务器和客户端之间传输的数据格式。

- JSON的全称是JavaScript Object Notation（JavaScript对象符号）：
- JSON是由Douglas Crockford构想和设计的一种轻量级资料交换格式，算是JavaScript的一个子集；
- 但是虽然JSON被提出来的时候是主要应用JavaScript中，但是目前已经独立于编程语言，可以在各个编程语言中使用；
- 很多编程语言都实现了将JSON转成对应模型的方式；

**其他的传输格式：**

- XML：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很少在被使用了；
- Protobuf：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所以目前在前端使用的较少；

目前JSON被使用的场景也越来越多：

- 网络数据的传输JSON数据；
- 项目的某些配置文件；
- 非关系型数据库（NoSQL）将json作为存储格式；



#### 小程序的app.json

![image-20220103214319351](D:\截图\包管理工具\image-20220103214319351.png)



### JSON基本语法

JSON的顶层支持三种类型的值：

- 简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型；
- 对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；
- 数组值：数组的值可以是简单值、对象值、数组值；

**注：JSON文件中不能有注释。**

![image-20220103214445055](D:\截图\包管理工具\image-20220103214445055.png)

### JSON序列化

某些情况下我们希望将JavaScript中的复杂类型转化成JSON格式的字符串，这样方便对其进行处理：

- 比如我们希望将一个对象保存到localStorage中；
- 但是如果我们直接存放一个对象，这个对象会被转化成 [object Object] 格式的字符串，并不是我们想要的结果；

![image-20220103214529294](D:\截图\包管理工具\image-20220103214529294.png)



#### JSON序列化方法

在ES5中引用了JSON全局对象，该对象有两个常用的方法：

- stringify方法：将JavaScript类型转成对应的JSON字符串；
- parse方法：解析JSON字符串，转回对应的JavaScript类型；

那么上面的代码我们可以通过如下的方法来使用：

![image-20220103214624877](D:\截图\包管理工具\image-20220103214624877.png)



### Stringify的参数replacer

**JSON.stringify()** 方法将一个 JavaScript 对象或值转换为 JSON 字符串：

- 如果指定了一个 replacer 函数，则可以选择性地替换值；
- 如果指定的 replacer 是数组，则可选择性地仅包含数组指定的属性；

![image-20220103214704731](D:\截图\包管理工具\image-20220103214704731.png)



### Stringify的参数space

当然，它还可以跟上第三个参数space： 

![image-20220103214743647](D:\截图\包管理工具\image-20220103214743647.png)

如果对象本身包含toJSON方法，那么会直接使用toJSON方法的结果：

![image-20220103214756072](D:\截图\包管理工具\image-20220103214756072.png)



### parse方法

**JSON.parse()** 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。

提供可选的 **reviver** 函数用以在返回之前对所得到的对象执行变换(操作)。

![image-20220103214829791](D:\截图\包管理工具\image-20220103214829791.png)