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
