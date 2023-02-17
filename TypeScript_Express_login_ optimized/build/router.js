"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
// router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
//   try {
//     const position = path.resolve(__dirname, '../data/course.json');
//     const result = fs.readFileSync(position, 'utf8');
//     res.json(getResponseData(JSON.parse(result)));
//   } catch (error) {
//     res.json(getResponseData(false, '数据不存在'));
//   }
// });
exports.default = router;
