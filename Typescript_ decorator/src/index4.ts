// 如果装饰的是普通方法，target 对应的是 prototype
// 如果装饰的是静态方法，target 对应的是 类的构造函数
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target, key);
  descriptor.writable = false; // descriptor.writable：是否允许对装饰的方法进行修改
  descriptor.value = function () {  // descriptor.value：属性或者方法原始的值
    return 'decorator';
  }
}

class Test4 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @getNameDecorator
  static getNumber() {
    return 123;
  }

  @getNameDecorator
  getName() {
    return this.name;
  }
}
const test4 = new Test4('daykalif');
// test4.getName = () => {    // descriptor.writable = true 才可用
//   return '456';
// }

console.log(test4.getName());