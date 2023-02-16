// 问题2:当我使用中间件的时候，对 req 或者 res 做了修改之后呢，实际上类型并不能改变
declare namespace Express {
  interface Request {
    teacherName: string;
  }
}