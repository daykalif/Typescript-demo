项目运行：npm run dev

空文件夹下：

1.生成 package.json 文件

> npm init -y

2.生成 tsconfig.json

> tsc --init

> 3.卸载全局安装的 ts-node
> npm uninstall ts-node -g

> 4.只在当前项目上安装 ts-node
> npm install -D ts-node

5.安装 typescript

> npm install typescript -D

> npm install superagent --save

<!-- 获取页面上的内容，需要superagent工具帮助我们拿到页面上的内容，它的作用是在node里面也可以发ajax请求去获取数据；安装翻译文件 -->

> npm i @types/superagent -D

运行 npm run dev

提前页面上的信息，对 html 进行分析，需安装 cheerio 的库
npm install cheerio --save

npm install @types/cheerio -D

【组合模式的编写】

ts-node 只能是给开发人员使用，给普通用户使用需要在 package.json 中增加:
"build": "tsc"
并将 tsconfig.json 文件修改 "outDir": "./build", 使打包时的目录生成到 build 文件夹下。

修改代码后，build 的文件进行热更新的方式：
移除 package.json 中的 "dev": "ts-node ./src/crowller.ts"；
并且求改 build 为 "build": "tsc -w"，此时代码变化打包可以实时变化

> 监控文件变化:

npm install nodemon -D

package.json 文件添加 :

"start": "nodemon node ./build/crowller.js"

添加 nodemonconfig，来去除对某些文件的监测。

"nodemonConfig": {
"ignore": [
"data/*"
]
},

此时可以运行 npm run start

此时运行着 npm run build 和 npm run start,
修改 crowller.ts 时，"build":"tsc -w"这个会监听 ts 文件发生变化，重写编译 ts 文件，生成 js 文件，nodemon 监测 js 文件改变，就会重新运行 js 文件，修改 course.json 文件

并行执行：
npm install concurrently -D

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev:build": "tsc -w",
"dev:start": "nodemon node ./build/crowller.js",
"dev": "concurrently npm run dev:build & npm run dev:start"
},

也可以缩写："dev":"concurrently npm:dev:\*"

### 环境搭建 2

`npm i express`
`npm i @types/express @types/node nodemon concurrently reflect-metadata ts-node typescript`
`npm install body-parser`

- @types 开头的依赖是一些类型定义文件，以 d.ts 结尾，因为大部分 npm 包都是 js 写的，这时候就需要 d.ts 文件来告诉 ts 你的东西到底是什么类型
- nodemon 是一个 node 命令加强版，有自动检测源文件并重新执行的功能
- concurrently 是一个并行执行 npm 命令的工具，例如你同时启动了前端服务器和后端服务器:npm run dev && npm run server ，这样的话 npm 是没法运行 npm run - server 命令的，因为这 2 个命令都会阻塞命令行，所以需要 concurrently 包
- reflect-metadata 是一个通过 ES6 的 Reflct 来定义元数据信息的包，后面会看到
- ts-node 也是一个 node 命令加强版，普通 node 命令只能执行 js，ts-node 能编译并执行 ts
- typescript 就不用说了，编译全靠它，在命令行能用 tsc 命令手动编译 ts 文件
- express 是我们要基于这个 web 服务器进行封装，不用 koa 是因为 koa 拆的太散了，还要去安装 koa-router 包

"scripts":{
"dev:build": "tsc -w",
"dev:start": "nodemon ./build/index.js",
"dev": "tsc && concurrently npm:dev:\*"
}

tsc -w 就是检测我们刚才设置 src 目录里的文件，一变化就重新编译
nodemon 功能上面讲了
concurrently 功能上面也讲了
所以直接运行 npm run dev 就能同时检测 src 源文件和 build 最终文件，完美！
