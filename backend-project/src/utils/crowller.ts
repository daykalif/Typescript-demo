
// 引入文件操作的模块
import fs from 'fs';
import path from 'path';

// superagent缺少类型定义文件(因为superagent是js写的，并不是ts语法写的)
// ts --读取--> .d.ts 翻译文件，即类型定义文件【作用是将js的文件补全类型】-->js 
//【安装翻译文件：npm i @types/superagent -D，此时import superagent from 'superagent';就不报错了】
// 其余的翻译文件在npmjs.com网站中寻找@types命名空间下的包名

import superagent from 'superagent';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../../data/course.json');

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  // 获取html内容
  private async getRawHtml() {
    const result = await superagent.get(this.url);//url是类中的属性，所以需要使用this
    return result.text;
  }

  // 将爬到的数据写入文件
  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
}

export default Crowller;