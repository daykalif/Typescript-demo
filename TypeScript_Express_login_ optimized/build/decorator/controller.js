"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
var router_1 = __importDefault(require("../router"));
/**
 * 获取元数据:  获取 target 构造函数上每个 key的 元数据 'path'
 *
 * 获取:
        获取类装饰器上的元数据： Reflect.getMetadata('键名',类名)
        获取属性上的元数据 ：Reflect.getMetadata('键名',类名,'属性名称')
 */
function controller(root) {
    return function (target) {
        for (var key in target.prototype) {
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            var middleware = Reflect.getMetadata('middleware', target.prototype, key);
            var handler = target.prototype[key];
            if (path && method) {
                var fullPath = root === '/' ? path : "".concat(root).concat(path);
                if (middleware) {
                    router_1.default[method](fullPath, middleware, handler);
                }
                else {
                    router_1.default[method](fullPath, handler);
                }
            }
        }
    };
}
exports.controller = controller;
