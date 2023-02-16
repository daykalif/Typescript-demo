"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = __importDefault(require("./crowller"));
var dellAnalyzer_1 = __importDefault(require("./dellAnalyzer"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n      <html>\n        <body>\n          <a href='/getData'>\u722C\u53D6\u5185\u5BB9</a>\n          <a href='/showData'>\u5C55\u793A\u5185\u5BB9</a>\n          <a href='/logout'>\u9000\u51FA</a>\n        </body>\n      </html>\n    ");
    }
    else {
        res.send("\n      <html>\n        <body>\n          <form method=\"post\" action=\"/login\">\n            <input type=\"password\" name=\"password\"/>\n            <button>\u767B\u9646</button>\n          </form>\n        </body>\n      </html>\n    ");
    }
});
router.post('/login', function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send('已经登陆过');
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.send('登陆成功');
        }
        else {
            res.send('登陆失败');
        }
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
});
router.get('/getData', function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        var secret = 'secretKey'; //secretKey是git仓库中的secretKey
        var url = "http://www.dell-lee.com/typescript/demo.html?sceret=".concat(secret);
        var analyzer = dellAnalyzer_1.default.getInstance();
        new crowller_1.default(url, analyzer);
        res.send('get Data success');
    }
    else {
        res.send('请登录后进行爬虫');
    }
});
router.get('/showData', function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        try {
            var position = path_1.default.resolve(__dirname, '../data/course.json');
            var result = fs_1.default.readFileSync(position, 'utf8');
            res.json(JSON.parse(result));
        }
        catch (error) {
            console.log('尚未爬取到内容');
        }
    }
    else {
        res.send('用户尚未登陆，请先登陆');
    }
});
exports.default = router;
