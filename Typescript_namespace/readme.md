`npm init -y`
`tsc --init`
`tsc` --> 编译 page.ts 文件到 dist 文件下
监控并编译 ts： `tsc -w`

修改 tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "AMD",// 使用AMD
    "outFile": "./dist/page.js",  //将多个文件打包到一个文件
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,"esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
