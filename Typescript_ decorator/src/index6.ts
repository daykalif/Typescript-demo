function nameDecorator(target: any, key: string): any {
  const descriptor: PropertyDescriptor = {
    writable: true
  };
  return descriptor;
}


// 修改的并不是实例上的 name，而是原型上的name
function nameDecorator1(target: any, key: string): any {
  target[key] = 'hhh';
}


class Test6 {
  @nameDecorator
  @nameDecorator1
  name = 'daykalif';
}
const test6 = new Test6();
test6.name = 'daykalif wang';
console.log(test6.name);
console.log((test6 as any).__proto__.name);