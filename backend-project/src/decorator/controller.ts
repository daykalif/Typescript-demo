import router from '../router';
import { RequestHandler } from 'express';
import { Methods } from './request';

/**
 * 获取元数据:  获取 target 构造函数上每个 key的 元数据 'path'
 * 
 * 获取:
        获取类装饰器上的元数据： Reflect.getMetadata('键名',类名)
        获取属性上的元数据 ：Reflect.getMetadata('键名',类名,'属性名称')
 */
export function controller(root: string) {
  return function (target: new (...args: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key);
      const method: Methods = Reflect.getMetadata('method', target.prototype, key);
      const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target.prototype, key);
      const handler = target.prototype[key];
      if (path && method) {
        const fullPath = root === '/' ? path : `${root}${path}`;
        if (middlewares && middlewares.length) {
          router[method](fullPath, ...middlewares, handler);
        } else {
          router[method](fullPath, handler);
        }
      }
    }
  }
}
