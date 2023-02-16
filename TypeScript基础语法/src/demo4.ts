/**
 * 类中的泛型以及泛型类型
 */


/**
 * 示例1:
 */
// class DataManager<T> {
//   constructor(private data: T[]) { }

//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const data = new DataManager<string>(["1"]);
// data.getItem(0);


/**
 * 示例2:
 */
// interface Item {
//   name: string;
// }

// class DataManager<T extends Item> {
//   //T必须拥有Item中所有的东西
//   constructor(private data: T[]) { }

//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// const data = new DataManager([
//   {
//     name: "dell",
//   },
// ]);
// data.getItem(0);



/**
 * 示例3:
 */
class DataManager<T extends number | string> {
  constructor(private data: T[]) { }

  getItem(index: number): T {
    return this.data[index];
  }
}

interface Test {
  name: string;
}

const data = new DataManager<Test>([]); //报错
const data1 = new DataManager<number>([]);



/**
 * 示例 4:如何使用泛型作为一个具体类型的注解:
 */
const func: <T>() => string = <T>() => {
  return "123";
};


//---------------------------------------------
function hello<T>(params: T) {
  return params;
}
const funct: <T>(params: T) => T = hello;