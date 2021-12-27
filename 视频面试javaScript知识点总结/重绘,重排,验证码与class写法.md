### 1：HTML页面进行重绘和重排(回流)

#### 1.1 问题分析

​	该问题主要考核  html中的优化 与 重点概念

#### 1.2 核心问题讲解

##### **浏览器的运行机制：**

1. 构建DOM树（parse）：渲染引擎解析HTML文档，首先将标签转换成DOM树中的DOM node（包括js生成的标签）**生成内容树**（Content Tree/DOM Tree）；
2. 构建渲染树（construct）：解析对应的CSS样式文件信息（包括js生成的样式和外部css文件），而这些文件信息以及HTML中可见的指令（如<b></b>）**，构建渲染树**（Rendering Tree/Frame Tree）；render tree中每个NODE都有自己的style，而且render tree不包含隐藏的节点(比如display:none的节点，还有head节点)，因为这些节点不会用于呈现
3. 布局渲染树（reflow/layout）：从根节点递归调用，计算每一个元素的大小、位置等，给出每个节点所应该在屏幕上出现的精确坐标；
4. 绘制渲染树（paint/repaint）：遍历渲染树，使用UI 层来绘制每个节点。

**重绘（repaint或redraw）**：

​	当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。

**重绘是指一个元素外观的改变**所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

 　　**触发重绘的条件：改变元素外观属性。如：color，background-color等。******

**注意：**table及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用table布局页面的原因之一。

**重排（重构/回流/reflow）：**当渲染树中的一部分(或全部)因为元素的**规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)**。每个页面至少需要一次回流，就是在页面第一次加载的时候。

**重绘和重排的关系**：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。

　　　　　　　　　　所以，**重排必定会引发重绘**，但重绘不一定会引发重排。

 　　**触发重排的条件：任何页面布局和几何属性的改变都会触发重排，比如：**

　　1、页面渲染初始化；(无法避免)

　　2、添加或删除可见的DOM元素；

　　3、元素位置的改变，或者使用动画；

　　4、元素尺寸的改变——大小，外边距，边框；

　　5、浏览器窗口尺寸的变化（resize事件发生时）；

　　6、填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变；

　　7、读取某些元素属性：（offsetLeft/Top/Height/Width,　clientTop/Left/Width/Height,　scrollTop/Left/Width/Height,　width/height,　getComputedStyle(),　currentStyle(IE)　)

**重绘重排的代价：耗时，导致浏览器卡慢。******

#### 1.3 问题扩展

**优化：**　　

1、浏览器自己的优化：浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。

2、我们要注意的优化：我们要减少重绘和重排就是要减少对渲染树的操作，则我们可以合并多次的DOM和样式的修改。并减少对style样式的请求。

（1）**直接改变元素的className**

（2）display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后将元素设置为display：block；这样的话就只引发两次重绘和重排；

（3）使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；

（4）**将需要多次重排的元素，position属性设为absolute或fixed**，元素脱离了文档流，它的变化不会影响到其他元素；

（5）如果需要创建多个DOM节点，可以使用DocumentFragment**创建完后一次性的加入document；**

#### 1.4 结合项目中使用

代码例子

**// 举个例子  这么一个思路 建议不要边循环边渲染** 

  ```js
  var fragment = document.createDocumentFragment();
    for(let i=0;i<100;i++){

      var li = document.createElement('li');

      li.innerHTML = 'apple'+i;

      fragment.appendChild(li);

    }
    document.getElementById('fruit').appendChild(fragment);
  ```

### 2：网页验证码的作用 *网页中几种常见验证码(介绍+技术)

#### 2.1 问题分析

![img](D:\前端\面试\面试资料\2021前端面试必刷跨域浏览器工作原理VueReact性能优化-学习资料\html-js-移动端\笔记\images\验证码1.png)![img](D:\前端\面试\面试资料\2021前端面试必刷跨域浏览器工作原理VueReact性能优化-学习资料\html-js-移动端\笔记\images\验证码2.png)

#### 2. 2 核心问题讲解

作用：

1  验证码是目前大多网站所支持并使用于注册登录的。就在于其作用能有效**防止恶意登录注册**，验证码每次都不同,

这就可以排除,用其他病毒或者软件自动申请用户及自动登陆.有效防止这种问题。

2  短信验证码等可以验证用户的合法性

#### 2.3 问题扩展

   这些功能怎么做呢？

​     1 智能选图  文字点选   短信  滑动 等一般  都是购买的服务

​     2 图片文字验证码  这个 后台可以做 比如 php  java等  当然也可以去购买

 总之：他和后端关系很大  基本 对于前端来说  就是  发送ajax 就行

#### 2.4  结合项目中使用

 比如 短信  聚合  <https://www.juhe.cn/>

​         1 前端 点击发送验证码  提交手机 到后台 

​          2  后台 拿到前端发来的手机  调用购买的  短信接口 就可以发送验证码到手机上了

   比如 滑动验证码 极验  [文档]( https://www.geetest.com/Sensebot?utm_campaign=sem%E8%A1%8C%E4%B8%BA%E9%AA%8C%E8%AF%81&bd_vid=9865356497840709924)     [前端部署](https://docs.geetest.com/install/deploy/client/web)

​            购买后 前端只需要引入js文件  然后 按照文档 写上就行   

### 3：ES6的类Class

​	es相关语法  let const等。。

 ```js
// function Person (){
    //   this.name='建林'
    //   this.age=18
    //   this.say=function(){
    //     console.log('say方法')
    //   }
    // }

    class Person {
        constructor(){
           this.name='建林'
           this.age=18
        }

        say() {
          console.log('say方法')
        }
    }

    class Teacher extends Person {
        constructor(){
            super();// 继承必须写super 他就是父类 上面的那个 constructor
           
            this.name='思聪'
        }

        eat(){
          console.log('eat')
        }

    }

    let t1=new Teacher()
    console.log(t1)
 ```
