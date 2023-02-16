/**
 * 枚举类型
 */

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETE: 2
// }

enum Status {
  OFFLINE,
  ONLINE = 4, //设初始值
  DELETE,
}

//不写 = 4的话，默认0，1，2
console.log(Status.OFFLINE); //0

console.log(Status[4]); //ONLINE
console.log(Status.ONLINE); //4

console.log(Status.DELETE); //5

function getResult(status) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETE) {
    return "delete";
  }
  return "error";
}

const result = getResult(Status.OFFLINE);
console.log(result);