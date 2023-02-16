interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) { }

  getInfo(key: string) {
    if (key === 'name' || key === 'age' || key === 'gender') {
      return this.info[key];
    }
  }

  getInfo2<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'daykalif',
  age: 18,
  gender: 'male'
});

const test1 = teacher.getInfo('name');    // const test1: string | number | undefined
const test2 = teacher.getInfo('name');    // 不报错

const test3 = teacher.getInfo2('name');   // const test3: string
const test4 = teacher.getInfo2('hello');  // 报错


/******************************************************************************/


type NAME = 'name';
const abc: NAME = 'name';   // 不报错
const def: NAME = 'hhhh';   // 报错