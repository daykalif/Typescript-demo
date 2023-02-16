"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var crowller_1 = __importDefault(require("./utils/crowller"));
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var util_1 = require("./utils/util");
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    }
    else {
        res.json((0, util_1.getResponseData)(null, '请先登陆'));
    }
};
var router = (0, express_1.Router)();
router.get('/getData', checkLogin, function (req, res) {
    var secret = 'secretKey'; //secretKey是git仓库中的secretKey
    var url = "http://www.dell-lee.com/typescript/demo.html?sceret=".concat(secret);
    var analyzer = analyzer_1.default.getInstance();
    new crowller_1.default(url, analyzer);
    res.json((0, util_1.getResponseData)(true));
});
router.get('/showData', checkLogin, function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf8');
        res.json((0, util_1.getResponseData)(JSON.parse(result)));
    }
    catch (error) {
        res.json((0, util_1.getResponseData)(false, '数据不存在'));
    }
});
exports.default = router;
