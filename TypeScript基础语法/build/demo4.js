"use strict";
var DataManager = (function () {
    function DataManager(data) {
        this.data = data;
    }
    DataManager.prototype.getItem = function (index) {
        return this.data[index];
    };
    return DataManager;
}());
var data = new DataManager([]);
var data1 = new DataManager([]);
var func = function () {
    return "123";
};
function hello(params) {
    return params;
}
var funct = hello;
//# sourceMappingURL=demo4.js.map