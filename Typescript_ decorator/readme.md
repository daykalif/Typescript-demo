`npm init -y`
`tsc --init`
`npm install ts-node -D`
`npm install typescript --save`

package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node ./src/index.ts"
  },
```

tsconfig.json
打开装饰器语法

```
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
```
