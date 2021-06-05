//定义Person构造函数
function Person(name, id) {
  this.name = name;
  this.id = id;
}

//在Person.prototype中加入方法
Person.prototype.sayHi = function() {
  console.log('你好, 我是' +  this.name);
}

//实例化对象
let p1 = new Person('阿辉', 1234);

//调用sayHi方法
p1.sayHi();