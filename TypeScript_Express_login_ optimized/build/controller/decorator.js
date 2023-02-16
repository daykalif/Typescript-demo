"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.controller = void 0;
/**
 * 获取元数据:  获取 target 构造函数上每个 key的 元数据 'path'
 *
 * 获取:
        获取类装饰器上的元数据： Reflect.getMetadata('键名',类名)
        获取属性上的元数据 ：Reflect.getMetadata('键名',类名,'属性名称')
 */
function controller(target) {
    for (var key in target.prototype) {
        console.log(Reflect.getMetadata('path', target.prototype, key));
    }
}
exports.controller = controller;
/**
 * 设置元数据:  把target构建函数的每个 属性(key)中 定义元数据 'path'
 *
 * 设置:
    类装饰器:   Reflect.defineMetadata('键名',值,类的构造函数)
    其他装饰器: Reflect.defineMetadata('键名',值,类的构造函数,'属性名称')
 */
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
