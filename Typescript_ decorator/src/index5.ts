function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}

class Test5 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}
const test5 = new Test5('daykalif');
test5.name = 'daykalif wang';
console.log(test5.name);