const userInfo: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(msg);
      }
    }
  }
}


class Test8 {
  getName() {
    try {
      return userInfo.name;
    } catch (error) {
      console.log('error-->name不存在');
    }
  }

  @catchError('userInfo age存在问题')
  getAge() {
    return userInfo.age;
  }

  @catchError('userInfo getGender存在问题')
  getGender() {
    return userInfo.getGender;
  }
}


const test8 = new Test8();
test8.getName();
test8.getAge();
test8.getGender();
