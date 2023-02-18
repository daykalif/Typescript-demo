"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = exports.Methods = void 0;
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods = exports.Methods || (exports.Methods = {}));
/**
 * 设置元数据:  把target构建函数的每个 属性(key)中 定义元数据 'path'
 *
 * 设置:
    类装饰器:   Reflect.defineMetadata('键名',值,类的构造函数)
    其他装饰器: Reflect.defineMetadata('键名',值,类的构造函数,'属性名称')
 */
function getRequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getRequestDecorator(Methods.get);
exports.post = getRequestDecorator(Methods.post);
