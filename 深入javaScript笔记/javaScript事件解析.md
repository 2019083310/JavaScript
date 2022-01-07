# javaScript事件解析

### 事件流--事件冒泡和事件捕获

事件流就是描述页面接受事件的顺序。

**冒泡**结构上（非视觉上）嵌套关系的元素会存在冒泡事件功能，及同一事件，子元素向父元素冒泡。

**捕获**

- IE没有
- 将addEventListener第三个参数设置true
- 结构上（非视觉上）嵌套关系的元素会存在捕获事件功能，及同一事件，父元素向子元素捕获

#### DOM事件流

DOM2 Event规范规定事件流分三阶段：事件捕获、到达目标、事件冒泡。

通常不认为到达目标后的事件处理阶段不属于事件捕获，而被认为是冒泡阶段的一部分。

现代浏览器会在捕获阶段在事件目标上触发事件，虽然DOM2 Events规范捕获阶段不命中事件目标，所以就导致在时间目标上有两个机会来处理事件。

##### 执行顺序：先捕获后冒泡

```javascript
wrapper.addEventListener('click', function() {    console.log('wrappermp');}, false)
content.addEventListener('click', function() {    console.log('contentmp');}, false)
box.addEventListener('click', function() {    console.log('boxmp');}, false)

wrapper.addEventListener('click', function() {    console.log('wrapperbh');}, true)
content.addEventListener('click', function() {    console.log('contentbh');}, true)
box.addEventListener('click', function() {    console.log('boxbh');}, true);
```



![image-20220107101915895](D:\截图\事件-event\image-20220107101915895.png)

不冒泡的事件：focus、blur、change、submit、reset、select等。

**取消冒泡**

###### 1、调用事件对象函数`e.stopPropagation()`IE9以下版本不支持

###### 2、配置事件对象属性`e.cancelBubble = true`IE支持

###### 封装取消冒泡函数stopBubble

```javascript
function stopBubble(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
```



### 事件绑定

事件绑定的方法：

 1、elem.onXXX = function() {} ----兼容性很好，执行时this是本身。



 2、dom.addEventListener(事件类型，处理函数，false) 

- IE9一下不兼容，可以给一个对象的一个事件绑定多个处理函数，同一个函数只能绑定一次
- 执行时this是本身
- 第三个参数决定了事件是以冒泡还是捕获模型处理，false为冒泡，true为捕获



 3、dom.attachEvent('onXXX'，处理函数) 

- IE独有，可以给一个对象的一个事件绑定多个处理函数，并且可以绑定多次同一个函数

-  执行时this指向window——解决方案 

```javascript
div.attachEvent('onclick', function() {    test.call(div);})function test() {    //...}
```



 4、封装addEvent方法 

```javascript
function bind(el,event,callback){
  if(el.addEventListener){
    el.addEventListener(event,callback,false)
  }else{
    el.attachEvent('on'+event,()=>{
      callback.call(el)
    })
  }
}
```



### 事件对象

在DOM合规的浏览器中，event对象是传给事件处理程序的唯一参数，不管是使用HTML、DOM0还是DOM2方法绑定的事件，都会在事件处理函数中传入event对象参数；event对象只在事件处理程序执行期间存在，一旦执行完毕，就会被销毁。

在ie8及以下的浏览器中event是作为window的属性来保存的，不会直接传递给函数。

```javascript
event=event||window.event
```

事件对象都会有以下公共属性和方法：

| 属性/方法                  | 类型         | 读/写 | 说明                                                         |
| -------------------------- | ------------ | ----- | ------------------------------------------------------------ |
| bubbles                    | Boolean      | R     | 表示事件是否冒泡                                             |
| cancelable                 | Boolean      | R     | 表示是否可以取消事件的默认行为                               |
| currentTarget              | Element      | R     | 当前事件处理程序所在的元素                                   |
| defaultPrevented           | Boolean      | R     | true表示已调用preventDefault()方法（DOM3新增）               |
| detail                     | Integer      | R     | 事件相关的其他信息                                           |
| eventPhase                 | Integer      | R     | 表示事件处理程序阶段：1-捕获、2-到达目标、3-冒泡             |
| preventDefault()           | Function     | R     | 用于取消事件的默认行为，只有cancelable为true才能调用         |
| stopImmediatePropagation() | Function     | R     | 用于取消所有后续事件捕获或冒泡并阻止调用任何后续事件处理程序（DOM3新增） |
| stopPropagation()          | Function     | R     | 用于取消所有后续事件捕获或冒泡，只有bubbles为true才可以调用  |
| target                     | Element      | R     | 事件目标                                                     |
| trusted                    | Boolean      | R     | true表示事件是由浏览器生成的，false表示事件是由开发者通过js创建的（DOM3新增） |
| type                       | String       | R     | 被触发的事件类型                                             |
| View                       | AbstractView | R     | 与事件相关的抽象视图，等于事件所发生的window对象             |

#### 阻止默认事件

##### 1、`return false`

以对象属性注册的事件才有效

```javascript
dom.onclick = function() {	return false;}
```

##### 2、事件对象方法`e.preventDefault()`

- 会将cancelable属性设置为true
- IE9以下不兼容

##### 3、事件对象属性`e.returnValue = false`IE兼容



### 事件类型

DOM3 Event定义了如下事件类型：

- ​	用户界面事件（UIEvent），涉及与BOM交互的通用浏览器事件
- ​	焦点事件（FocusEvent），元素获取或失去焦点时触发
- ​	鼠标事件（MouseEvent），使用鼠标在界面上执行某些操作触发
- ​	滚轮事件（WheelEvent），使用鼠标滚轮时触发
- ​	输入事件（InputEvent），向文档中输入文本时触发
- ​	键盘事件（KeyboardEvent），使用键盘在页面上执行某些操作时触发
- ​	合成事件（CompositionEvent），使用某种IME（Input Method Editor）输入字符时触发
- ​	同时浏览器还保留了一些DOM和BOM上的专有事件，不同浏览器实现不同



**1.用户界面事件和UI事件不一定和用户操作有关；UI事件主要有几种：**

- DOMActivate：元素被用户通过鼠标或键盘操作激活时触发（在DOM3 Event中已经被废弃，因为浏览器实现存在差异，所以不要使用）
- load：在window上当页面加载完成后触发，在窗套上当所有窗格都加载完成后触发，在<img>元素上当图片加载完成后触发，在<object>元素上当相应对象加载完成后触发
- unload：在window上当页面完全卸载后触发，在窗套上当所有窗格都卸载完成后触发，在<object>元素上当相应对象卸载完成后触发
- abort：在<object>元素上当相应对象加载完成前被用户提前终止下载时触发
- error：在window上当js报错时触发，在<img>元素上当无法加载指定图片时触发，在<object>元素上当无法加载相应对象时触发，在窗套上当一个或多个窗格无法加载完成时触发
- select：在文本框上当用户选择了一个或多个字符时触发
- resize：在window窗格上当窗口或窗格被缩放时触发
- scroll：当用户滚动包含滚动条的元素时在元素上触发，<body>元素包含已加载页面的滚动条
- 除了DOMActivate，这些事件在DOM2 Events中都被归为HTML Events



##### 2.焦点事件

焦点事件在页面获得或失去焦点时触发，焦点事件有以下6中：

- blur：当元素失去焦点时触发，这个事件不冒泡
- DOMFocusIn：当元素获得焦点时触发，是focus的冒泡版，只有Opera实现了，DOM3 Events废弃了这个，推荐focusIn
- DOMFocusOut：当元素失去焦点触发，是blur的通用版，只有Opera实现了，DOM3 Events废弃了这个，推荐focusout
- focus：当元素获得焦点时触发，这个事件不冒泡
- focusin：当元素获得焦点时触发，focus的冒泡版
- focusout：当元素失去焦点时触发，blur的通用版

因为这两个事件不冒泡，所以IE增加了focusin和focusout，后来被DOM3 Events标准化

**当焦点从页面中的一个元素转移到另一个元素上时，会依次发生如下事件：**

- ​	focusout，在失去焦点的元素上触发
- ​	focusin，在获得焦点的元素上触发
- ​	blur，在失去焦点的元素上触发
- ​	DOMFocusOut在失去焦点的元素上触发
- ​	focus在获得焦点的元素上触发
- ​	DOMFocusIn，在获得焦点的元素上触发



##### 3.鼠标和滚轮事件

DOM3 Events定义了9种鼠标事件:

- click，用户按住鼠标左键或按回车后触发
- dblclick，在用户双击鼠标左键时触发
- mousedown，在用户按下任意鼠标键时触发
- mouseenter，用户把鼠标光标从元素外部移到元素内部时触发；这个事件不冒泡，也不会在光标经过后代元素时触发
- mouseleave，用户把鼠标光标移到元素外部时触发；这个事件不冒泡，也不会在光标经过后代元素时触发
- mousemove，在鼠标光标在元素上移动时反复触发
- mouseout，用户把鼠标光标从一个元素移动到另一个元素时触发，移动到的元素可以是原始元素的外部元素也可以是其子元素
- mouseover，用户把鼠标光标从元素外部移到元素内部时触发
- mouseup，在用户释放鼠标键时触发
- mousewheel，触发鼠标滚轮或类似设备上的滚轮交互

除了mouseenter和mouseleave，所有鼠标事件都会冒泡，都可以被取消

###### mousewheel事件

- mousewheel事件会在用户使用鼠标滚轮时触发，这个事件会在任何元素上触发，在IE8中会冒泡到document事件，在现代浏览器中会冒泡的window
- mousewheel事件的event对象包含鼠标事件的所有标准信息，还有一个名为wheelDelta的新属性；鼠标滚轮向前滚动时，wheelDelta每次都是加120；鼠标滚轮向后滚动时，wheelDelta每次都是减120
- 可以为任何元素或文档添加onmousewheel事件处理程序



##### 4.键盘与输入事件

键盘事件包含三个事件：

- keydown，用户按下键盘某键时触发，持续按住会重复触发
- keypress，用户按下键盘上某个键并产生字符时触发，持续按住会重新触发；Esc键也会触发这个事件；DOM3 Events废弃了这个事件，推荐textInput事件
- keyup，用户释放键盘上某个键时触发

所有元素都支持这些事件

###### keydown和keypress区别：

- keydown没有charCode，keypress有charCode
- keydown可以检测到所有按键（除fn以外），keypress只能监控到字符类按键
- 如果想检测字符以及大小写则用keypress更好，如果想检测控制类按键则keydown更好

###### 1、键码

对于keydown和keyup事件，event对象的keyCode属性中会保存一个键码，对应键盘上特定的一个键

对于字母和数字键，keyCode的值与小写字母和数字的ASCII码一致

非字符键键码，参见红宝书p519

###### 2、字符编码

在kypress事件发生时，意味着案件会影响屏幕上显式地文本；对插入或移除字符的键，所有浏览器都会触发keypress事件，其他键则取决于浏览器

浏览器在event对象上支持charCode属性，只有keypress事件时这个属性才会被设置值，包含的是案件字符对应的ASCII码；其他事件中charCode属性值是0，在keypress事件发生时则是对应的案件的键码；IE8及更早版本浏览器和Opera使用keyCode传达字符的ASCII码

