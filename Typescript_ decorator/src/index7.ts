// target:原型  key:方法名  paramIndex:参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log(target, method, paramIndex);
}


class Test7 {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}

const test7 = new Test7();
test7.getInfo('daykalif', 20);