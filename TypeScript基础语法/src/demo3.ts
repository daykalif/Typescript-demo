// 泛型 generic 泛指的类型

function join<T>(first: T, second: T) {
  return `${first}${second}`;
}
join<string>("1", "1");
join<number>(1, 1);

// join<string>(1, 1); //报错




/**
 * 函数数组：
 */
// 1.T[]
function map<T>(params: T[]) {
  return params;
}
map<string>(["123", "456"]);

/** 等价于：*/

// 2.Array<T>
function mapCopy<T>(params: Array<T>) {
  return params;
}
mapCopy<string>(["123", "456"]);



/**
 * 传多个参数:
 */
function join2<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join2<number, number>(1, 1);
join2<number, string>(1, "1");
// 类型推断
join2(1, "1");
join2("1", 1);


/**
 * 函数返回类型也为 T:
 */
function anotherJoin<T>(first: T, second: T): T {
  return first;
}