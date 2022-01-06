// s修饰符被称为dotAll模式
// .修饰符表示可以匹配任意字符，除了两种总特殊情况
// 1.unicode码点大于0xFFFF,这种可以使用u修饰符解决
// 2.行终止符\n,\r等四个，这种情况下可以用s修饰符解决，就可以匹配任意字符
console.log(/foo.bar/.test('foo\nbar'))//false
console.log(/foo.bar/s.test('foo\nbar'))//true