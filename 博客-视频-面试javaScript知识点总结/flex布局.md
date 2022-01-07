# Flex布局的使用

​	网页布局（layout）是 CSS 的一个重点应用。布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性 + [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)属性 + [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)属性。它对于那些特殊布局非常不方便，比如，[垂直居中](https://css-tricks.com/centering-css-complete-guide/)就不容易实现。

​	2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。Flex 布局将成为未来布局的首选方案。

## flex的使用

### 介绍

​	首先flex分为块级弹性布局和行内级弹性布局。分别对应flex和inline-flex。

​	一个元素既可以是弹性容器也可以是弹性元素。弹性元素就是弹性容器内的元素。容器内存在两根轴，水平的主轴和垂直的辅轴。

​	注意：Webkit 内核的浏览器，必须加上`-webkit`前缀。

### 弹性容器内的属性

容器内的属性有六个：对应的可选值

```javascript
flex-wrap:wrap|nowrap|wrap-reverse
flex-direction:row|row-reverse|column|column-reverse
flex-flow:wrap direction
justify-content:flex-start|flex-end|center|space-between|space-around
align-items:flex-start|flex-end|center|baseline|stretch
align-content:flex-start | flex-end | center | space-between | space-around | stretch
```

- flex-wrap:默认情况下，弹性元素都会排在一条主轴上面，不会换行或者列。默认值nowrap.
  - wrap:换行，第一行在上方。
  - wrap-reverse：换行，第一行在下方。
- flex-direction:用于决定主轴的方向，默认值是row，即水平方向排列，从左到右。
  - row-reverse:水平方向排列，但是元素是从主轴末端到主轴开始的顺序排列的，从右到左。
  - column:竖直方向排列，从上到下。
  - column-reverse:竖直方向排列，从下到上。
- flex-flow:是flex-wrap和flex-direction两个属性的简写属性。
- justify-content:用于决定主轴上元素的对齐方式。
  - flex-start:默认值，左侧对齐。
  - flex-end:右侧对齐。
  - center:居中对齐。
  - space-between:主轴上的元素两端对齐，即两个元素间的空距相等。
  - space-around:每个元素两侧的间隔相等。
- align-items:用于决定辅轴上的元素的对齐方式。
  - flex-start:辅轴起点对齐。
  - flex-end:辅轴终点对齐。
  - center:居中对齐。
  - stretch:默认值，如果项目未设置高度或设为auto，将占满整个容器的高度。

### 弹性元素的属性

常用的弹性元素的属性主要有三个：对应值

```javascript
flex-grow:默认值0,可选值0,1,2
flex-shrink:默认值1,可选值0,1
flex-basis:默认值auto,可选值自定义大小
```

- flex-grow:定义弹性元素的放大比例，默认值是0，，即如果存在剩余空间，也不放大。
  - 如果所有弹性元素的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个弹性元素的`flex-grow`属性为2，其他的弹性元素都为1，则前者占据的剩余空间将比其他弹性元素一倍。
- flex-shrink:定义弹性元素的缩小比例，默认值为1，即如果空间不足，弹性元素将缩小。
  - 如果所有弹性元素的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个弹性元素的`flex-shrink`属性为0，其他弹性元素都为1，则空间不足时，前者不缩小。
- flex-basis:定义了在分配多余空间之前，弹性元素占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即弹性元素的本来大小。
  - 它可以设为跟`width`或`height`属性一样的值（比如350px），则弹性元素将占据固定空间。
- flex属性的默认值为：0 1 auto （不放大会缩小）
  - flex为none：0 0 auto （不放大也不缩小）
  - flex为auto：1 1 auto （放大且缩小）
- flex:1即代表：弹性容器内的弹性元素自适应，放大且缩小
- flex:0即代表：弹性容器内的弹性元素不会放大也不会缩小

### flex布局的应用

html

```javascript
 <div id='box'>
    <div>
      <img src="../images/grid-01.png" alt="">
      <span>服务</span>
    </div>
    <div>
      <img src="../images/grid-02.png" alt="">
      <span>财务</span>
    </div>
    <div>
      <img src="../images/grid-03.png" alt="">
      <span>商场</span>
    </div>
    <div>
      <img src="../images/grid-04.png" alt="">
      <span>娱乐</span>
    </div>
    <div>
      <img src="../images/grid-05.png" alt="">
      <span>购物</span>
    </div>
    <div>
      <img src="../images/grid-06.png" alt="">
      <span>教育</span>
    </div>
    <div>
      <img src="../images/grid-07.png" alt="">
      <span>滴滴</span>
    </div>
    <div>
      <img src="../images/grid-08.png" alt="">
      <span>房产</span>
    </div>
  </div>
```

css

```javascript
 	*{
      padding: 0;
      margin: 0;
    }
    #box{
      display: flex;
      width: 450px;
      height: 250px;
      border:1px solid #333;
      margin:50px auto;
      flex-wrap: wrap;
    }
    #box div{
      width: 110.5px;
      height: 123px;
      text-align: center;
      border:1px solid #eee;
      justify-content: center;
      align-items: center;
    }
    #box div img{
      display: block;
      width: 80px;
      margin:auto
    }
```

