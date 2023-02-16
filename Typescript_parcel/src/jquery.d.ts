/** 手写jquery的声明文件 */


// 1.定义全局变量
declare var $: (param: () => void) => void;


/**
 * 2.函数重载
 */
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

// 定义全局函数1
declare function $(readyFunc: () => void): void;

// 定义全局函数2
declare function $(selector: string): JqueryInstance;




/**
 * 3.使用interface的语法，实现函数重载
 */
interface Jquery {
  (readyFunc: () => void): void;
  (selector: string): JqueryInstance;
}
declare var $: Jquery;



/**
 * 4.如何对对象进行类型定义，以及对类进行定义，以及命名空间的嵌套
 */
declare namespace $ {
  namespace fn {
    class init { }
  }
}




/**
 * ES6模块化编写.d.ts
 */
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  // 混合类型
  declare function $(readyFunc: () => void): void;
  declare function $(selector: string): JqueryInstance;
  namespace $ {
    namespace fn {
      class init { }
    }
  }
  export = $;
}