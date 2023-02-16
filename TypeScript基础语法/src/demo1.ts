/**
 * 联合声明类型 && 类型保护
 */
interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

//联合声明类型
function trainAnimal(animal: Bird | Dog) {
  // 1.通过类型断言的方式 进行 类型保护
  if (animal.fly) {
    (animal as Bird).sing(); //断言的方式，告诉ts  animal就是Bird
  } else {
    (animal as Dog).bark();
  }

  // 2.通过 in 语法 进行 类型保护
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}




/*********************************************************************/
function add(first: string | number, second: string | number) {
  // 3.typeof语法来做类型保护
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}






/*********************************************************************/
class NumberObj { //【只有class才能被instanceof调用的默认行为，不能使用interface】
  count!: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  // 4.使用 instanceof 语法来做类型保护
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}