import { Router } from 'express';
export const router = Router();



/**
 * 获取元数据:  获取 target 构造函数上每个 key的 元数据 'path'
 * 
 * 获取:
        获取类装饰器上的元数据： Reflect.getMetadata('键名',类名)
        获取属性上的元数据 ：Reflect.getMetadata('键名',类名,'属性名称')
 */
export function controller(target: any) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const handler = target.prototype[key];
    if (path) {
      router.get(path, handler);
    }
  }
}


/**
 * 设置元数据:  把target构建函数的每个 属性(key)中 定义元数据 'path'
 * 
 * 设置:
    类装饰器:   Reflect.defineMetadata('键名',值,类的构造函数)
    其他装饰器: Reflect.defineMetadata('键名',值,类的构造函数,'属性名称')
 */
export function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}