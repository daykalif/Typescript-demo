/**
 * 类的装饰器
 * 
 * 装饰器本身是一个函数
 * 装饰器本身是一个函数
 * 类装饰器接受的参数是构造函数
 * 装饰器通过 @ 符号来使用
 * @param constructor 
 */

function testDecorator(constructor: any) {
  constructor.prototype.getName = () => {
    console.log('decorator');
  }
}

function testDecorator1(constructor: any) {
  console.log('decorator1');
}

@testDecorator
@testDecorator1
class Test { }


const test = new Test();
(test as any).getName();