"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = __importDefault(require("./crowller"));
var dellAnalyzer_1 = __importDefault(require("./dellAnalyzer"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send("\n    <html>\n      <body>\n        <form method=\"post\" action=\"/getData\">\n          <input type=\"password\" name=\"password\"/>\n          <button>\u63D0\u4EA4</button>\n        </form>\n      </body>\n    </html>\n  ");
});
router.post('/getData', function (req, res) {
    var password = req.body.password;
    if (password === '123') {
        var secret = 'secretKey'; //secretKey是git仓库中的secretKey
        var url = "http://www.dell-lee.com/typescript/demo.html?sceret=" + secret;
        var analyzer = dellAnalyzer_1.default.getInstance();
        new crowller_1.default(url, analyzer);
        res.send('get Data success');
    }
    else {
        res.send(req.teacherName + " password error");
    }
});
exports.default = router;
