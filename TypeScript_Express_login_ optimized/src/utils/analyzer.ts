// 引入文件操作的模块
import fs from 'fs';
import cheerio from 'cheerio';
import { Analyzer } from './crowller';

interface Course {
  title: string;
  count: number | undefined | null;
}

interface CourseResult {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}

export default class DellAnalyzer implements Analyzer {
  private static instance: DellAnalyzer;
  static getInstance() {  //static表示把这个方法挂在类上，而不是挂在实例上面
    if (!this.instance) {
      this.instance = new DellAnalyzer();
    }
    return this.instance;
  }

  private constructor() { }// 单例模式，这个类不能被外部实例化

  // 爬虫，获取html内容中的字段
  private getCourseInfo(html: string) {
    // 通过cheerio来分析获取的html内容
    const $ = cheerio.load(html);

    const courseItems = $('.course-item');
    const courseInfos: Course[] = [];

    courseItems.map((index, element) => {
      const descs = $(element).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(descs.eq(1).text().split('：')[1], 10);
      courseInfos.push({ title, count });
    });

    return {
      time: new Date().getTime(),
      data: courseInfos
    };
  }

  // 生成json
  private generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html);
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }

}