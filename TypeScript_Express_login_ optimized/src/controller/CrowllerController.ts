import 'reflect-metadata';
import { Request, Response, NextFunction } from "express";
import fs from 'fs';
import path from 'path';
import { controller, get, post, use } from './decorator';
import { getResponseData } from '../utils/util';
import Crowller from '../utils/crowller';
import Analyzer from '../utils/analyzer';

interface BodyRequest extends Request {
  body: { [key: string]: string | undefined }
}


const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : undefined;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, '请先登陆'));
  }
}


@controller
class CrowllerController {
  @get('/getData')
  @use(checkLogin)
  getData(req: BodyRequest, res: Response) {
    const secret = 'secretKey';//secretKey是git仓库中的secretKey
    const url = `http://www.dell-lee.com/typescript/demo.html?sceret=${secret}`;

    const analyzer = Analyzer.getInstance();
    new Crowller(url, analyzer);
    res.json(getResponseData(true));
  }


  @get('/showData')
  @use(checkLogin)
  showData(req: BodyRequest, res: Response) {
    try {
      const position = path.resolve(__dirname, '../../data/course.json');
      const result = fs.readFileSync(position, 'utf8');
      res.json(getResponseData(JSON.parse(result)));
    } catch (error) {
      res.json(getResponseData(false, '数据不存在'));
    }
  }
}