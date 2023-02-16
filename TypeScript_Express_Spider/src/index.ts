import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// 自定义中间件
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = 'daykalif';
  next();
});

app.use(router);

app.listen(7001, () => {
  console.log('server is running');
});