/**
 * simple_decorator
 * @returns 
 */
function testDecorator3() {
  return function <T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = 'wang';
      getName() {
        return this.name;
      }
    }
  }
}

const Test3 = testDecorator3()(class {
  name: string;
  constructor(name: string) {
    console.log(1);
    this.name = name;
    console.log(2);
  }
});

const test3 = new Test3('daykalif');
console.log(test3);
console.log(test3.getName());