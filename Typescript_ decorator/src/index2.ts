function testDecorator2(flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log('decorator2');
      }
    }
  } else {
    return function (constructor: any) { };
  }
}


@testDecorator2(false)
class Test2 { }


const test2 = new Test2();
(test2 as any).getName();