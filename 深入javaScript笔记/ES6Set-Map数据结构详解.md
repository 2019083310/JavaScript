# Set、WeakSet、Map、WeakMap数据结构详解

### Set的基本使用

​	在ES6之前，我们存储数据的结构主要有两种：数组、对象。

​	在ES6中新增了另外两种数据结构：Set、Map，以及它们的另外形式WeakSet、WeakMap。 

​	Set是一个新增的数据结构，可以用来保存数据，**类似于数组**，但是和数组的区别是**元素不能重复**。 创建Set我们需要通过Set构造函数（暂时没有字面量创建的方式）：我们可以发现Set中存放的元素是不会重复的，那么Set有一个非常常用的功能就是给数组去重。

![image-20211220151359979](D:\截图\Set-Map\image-20211220151359979.png)



### Set的常见方法

Set常见的属性：size：返回Set中元素的个数；

Set常用的方法：

- add(value)：添加某个元素，返回Set对象本身；
- delete(value)：从set中删除和这个值相等的元素，返回boolean类型；
- has(value)：判断set中是否存在某个元素，返回boolean类型；
- clear()：清空set中所有的元素，没有返回值；
- forEach(callback, [, thisArg])：通过forEach遍历set； 

**另外Set是支持for of的遍历的**。



### WeakSet使用

和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构。那么和Set有什么区别呢？

- 区别一：WeakSet中只能存放对象类型，不能存放基本数据类型；

- 区别二：**WeakSet对元素的引用是弱引用**，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；

  ![image-20211220152127599](D:\截图\Set-Map\image-20211220152127599.png)

WeakSet常见的方法：

- add(value)：添加某个元素，返回WeakSet对象本身；
- delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；
- has(value)：判断WeakSet中是否存在某个元素，返回boolean类型；

#### WeakSet的应用

**注意：WeakSet不能遍历**

- 因为WeakSet只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。
- 所以存储到WeakSet中的对象是没办法获取的

那么这个东西有什么用呢？事实上这个问题并不好回答，我们来使用一个Stack Overflow上的答案

![image-20211220152248729](D:\截图\Set-Map\image-20211220152248729.png)



### Map的基本使用

另外一个新增的数据结构是Map，用于存储映射关系。

但是我们可能会想，在之前我们可以使用对象来存储映射关系，他们有什么区别呢？

- 事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）；
- 某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key； 

那么我们就可以使用Map：

![image-20211220152430885](D:\截图\Set-Map\image-20211220152430885.png)

#### Map的常用方法

Map常见的属性：size：返回Map中元素的个数；

Map常见的方法：

- set(key, value)：在Map中添加key、value，并且返回整个Map对象；
- get(key)：根据key获取Map中的value； 
- has(key)：判断是否包括某一个key，返回Boolean类型；
- delete(key)：根据key删除一个键值对，返回Boolean类型；
- clear()：清空所有的元素；
- forEach(callback, [, thisArg])：通过forEach遍历Map； 

**Map也可以通过for of进行遍历**。



### WeakMap的使用

和Map类型相似的另外一个数据结构称之为WeakMap，也是以键值对的形式存在的。

那么和Map有什么区别呢？

- 区别一：WeakMap的key只能使用对象，不接受其他的类型作为key； 
- 区别二：**WeakMap的key对对象想的引用是弱引用**，如果没有其他引用引用这个对象，那么GC可以回收该对象；

![image-20211220152804661](D:\截图\Set-Map\image-20211220152804661.png)

WeakMap常见的方法有四个：

- set(key, value)：在Map中添加key、value，并且返回整个Map对象；
- get(key)：根据key获取Map中的value； 
- has(key)：判断是否包括某一个key，返回Boolean类型；
- delete(key)：根据key删除一个键值对，返回Boolean类型；

#### WeakMap的应用

注意：WeakMap也是不能遍历的，因为没有forEach方法，也不支持通过for of的方式进行遍历；

那么我们的WeakMap有什么作用呢？

**实际上WeakMap数据结构是和响应式原理结合起来的。**

![image-20211220152906799](D:\截图\Set-Map\image-20211220152906799.png)

