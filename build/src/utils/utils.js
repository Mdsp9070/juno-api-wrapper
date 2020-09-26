"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientHash = exports.delay = void 0;
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.delay = delay;
function getClientHash(clientId, clientSecret) {
    var data = clientId + ":" + clientSecret;
    var buff = Buffer.from(data);
    return buff.toString('base64');
}
exports.getClientHash = getClientHash;
