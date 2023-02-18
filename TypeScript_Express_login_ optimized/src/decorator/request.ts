import { CrowllerController, LoginController } from '../controller';

export enum Methods {
  get = 'get',
  post = 'post',
}

/**
 * 设置元数据:  把target构建函数的每个 属性(key)中 定义元数据 'path'
 * 
 * 设置:
    类装饰器:   Reflect.defineMetadata('键名',值,类的构造函数)
    其他装饰器: Reflect.defineMetadata('键名',值,类的构造函数,'属性名称')
 */
function getRequestDecorator(type: Methods) {
  return function (path: string) {
    return function (target: CrowllerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', type, target, key);
    }
  }
}


export const get = getRequestDecorator(Methods.get);
export const post = getRequestDecorator(Methods.post);
