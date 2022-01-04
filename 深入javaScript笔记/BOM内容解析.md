# BOM部分内容解析

### 认识BOM

JavaScript有一个非常重要的运行环境就是浏览器，而且浏览器本身又作为一个应用程序需要对其本身进行操作，所以通常浏览器会有对应的对象模型（BOM，Browser Object Model）。

**我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁。**

BOM主要包括一下的对象模型：

- window：包括全局属性、方法，控制浏览器窗口相关的属性、方法；
- location：浏览器连接到的对象的位置（URL）；
- history：操作浏览器的历史；
- document：当前窗口操作文档的对象；

window对象在浏览器中有两个身份：

- 身份一：全局对象。
  - 我们知道ECMAScript其实是有一个全局对象的，这个全局对象在Node中是global； 
  - 在浏览器中就是window对象；
- 身份二：浏览器窗口对象。
  - 作为浏览器窗口时，提供了对浏览器操作的相关的API；



### Window全局对象

在浏览器中，window对象就是之前经常提到的全局对象，也就是我们之前提到过GO对象：

- 比如在全局通过var声明的变量，会被添加到GO中，也就是会被添加到window上；

- 比如window默认给我们提供了全局的函数和类：setTimeout、Math、Date、Object等；

- 通过var声明的变量，全局提供的类和方法：

  ![image-20220104171232699](D:\截图\BOM\image-20220104171232699.png)

这些用法是我们常常看到的，并且也是作为JavaScript语言本身所拥有的一些特性。那么接下来我们来看一下作为窗口对象，它拥有哪些特性。



### Window窗口对象

事实上window对象上肩负的重担是非常大的：

- 第一：包含大量的属性，localStorage、console、location、history、screenX、scrollX等等（大概60+个属性）；
- 第二：包含大量的方法，alert、close、scrollTo、open等等（大概40+个方法）；
- 第三：包含大量的事件，focus、blur、load、hashchange等等（大概30+个事件）；
- 第四：包含从EventTarget继承过来的方法，addEventListener、removeEventListener、dispatchEvent方法；

那么这些大量的属性、方法、事件在哪里查看呢？

MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window

查看MDN文档时，我们会发现有很多不同的符号，这里我解释一下是什么意思：

- 删除符号：表示这个API已经废弃，不推荐继续使用了；
- 点踩符号：表示这个API不属于W3C规范，某些浏览器有实现（所以兼容性的问题）；
- 实验符号：该API是实验性特性，以后可能会修改，并且存在兼容性问题；



### window常见的属性

![image-20220104171719417](D:\截图\BOM\image-20220104171719417.png)



### window常见的方法

![image-20220104171750642](D:\截图\BOM\image-20220104171750642.png)



### window常见的事件

![image-20220104171851516](D:\截图\BOM\image-20220104171851516.png)



### EventTarget

Window继承自EventTarget，所以会继承其中的属性和方法：

- addEventListener：注册某个事件类型以及事件处理函数；
- removeEventListener：移除某个事件类型以及事件处理函数；
- dispatchEvent：派发某个事件类型到EventTarget上；

![image-20220104171950012](D:\截图\BOM\image-20220104171950012.png)



### Location对象常见的属性

Location对象用于表示window上当前链接到的URL信息。

常见的属性有哪些呢？

- href: 当前window对应的超链接URL, 整个URL； 
- protocol: 当前的协议；
- host: 主机地址；
- hostname: 主机地址(不带端口)； 
- port: 端口；
- pathname: 路径；
- search: 查询字符串；
- hash: 哈希值；
- username：URL中的username（很多浏览器已经禁用）；
- password：URL中的password（很多浏览器已经禁用）；



### Location对象常见的方法

我们会发现location其实是URL的一个抽象实现：

![image-20220104172106549](D:\截图\BOM\image-20220104172106549.png)

location有如下常用的方法：

- assign：赋值一个新的URL，并且跳转到该URL中；
- replace：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）；
- reload：重新加载页面，可以传入一个Boolean类型；

![image-20220104172147735](D:\截图\BOM\image-20220104172147735.png)



### history对象常见属性和方法

history对象允许我们访问浏览器曾经的会话历史记录。

有两个属性：

- length：会话中的记录条数；
- state：当前保留的状态值；

有五个方法：

- back()：返回上一页，等价于history.go(-1)； 
- forward()：前进下一页，等价于history.go(1)； 
- go()：加载历史中的某一页；
- pushState()：打开一个指定的地址；
- replaceState()：打开一个新的地址，并且使用replace；

![image-20220104172259668](D:\截图\BOM\image-20220104172259668.png)