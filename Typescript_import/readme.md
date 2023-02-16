运行`tsc`，代码会编译到 dist 目录下，为 amd 代码：

```
define("components", ["require", "exports"], function (require, exports) {

});
```

amd 的语法浏览器是不兼容的，如果要兼容下述代码，我们需要引入 require.js
index.html 中添加

`<script src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.js"></script>`

如果不想手动调用 require.js，我们可以接入 webpack 来实现更优方式
