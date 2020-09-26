"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(message, code) {
        if (code === void 0) { code = 400; }
        (this.message = message), (this.status = code);
    }
    return AppError;
}());
exports.AppError = AppError;
