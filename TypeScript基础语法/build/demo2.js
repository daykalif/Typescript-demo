"use strict";
var Status;
(function (Status) {
    Status[Status["OFFLINE"] = 0] = "OFFLINE";
    Status[Status["ONLINE"] = 4] = "ONLINE";
    Status[Status["DELETE"] = 5] = "DELETE";
})(Status || (Status = {}));
console.log(Status.OFFLINE);
console.log(Status[4]);
console.log(Status.ONLINE);
console.log(Status.DELETE);
function getResult(status) {
    if (status === Status.OFFLINE) {
        return "offline";
    }
    else if (status === Status.ONLINE) {
        return "online";
    }
    else if (status === Status.DELETE) {
        return "delete";
    }
    return "error";
}
var result = getResult(Status.OFFLINE);
console.log(result);
//# sourceMappingURL=demo2.js.map