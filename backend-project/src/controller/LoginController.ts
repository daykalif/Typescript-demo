import 'reflect-metadata';
import { Request, Response } from "express";
import { controller, get, post } from '../decorator';
import { getResponseData } from '../utils/util';

interface BodyRequest extends Request {
  body: { [key: string]: string | undefined }
}


/**
 *  装饰器执行顺序由下到上
    先执行 ： @get 中传入 path
    再执行 ： @controller 中能获取到 path 对应的值
 */
@controller('/api')
export class LoginController {
  static isLogin(req: BodyRequest): boolean {
    return !!(req.session ? req.session.login : false);
  }

  @get('/isLogin')
  isLogin(req: BodyRequest, res: Response): void {
    const isLogin = LoginController.isLogin(req);
    res.json(getResponseData(isLogin));
  }

  @post('/login')
  login(req: BodyRequest, res: Response): void {
    const { password } = req.body;
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.json(getResponseData(true));
    } else {
      if (password === '123' && req.session) {
        req.session.login = true;
        res.json(getResponseData(true));
      } else {
        res.json(getResponseData(false, '登陆失败'));
      }
    }
  }

  @get('/logout')
  logout(req: BodyRequest, res: Response): void {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData(true));
  }
}