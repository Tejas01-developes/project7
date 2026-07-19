"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshtoken = exports.accesstoken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accesstoken = (id) => {
    return jsonwebtoken_1.default.sign({ id: id }, process.env.ACCESS_SECRET, { expiresIn: "15m" });
};
exports.accesstoken = accesstoken;
const refreshtoken = (id) => {
    return jsonwebtoken_1.default.sign({ id: id }, process.env.REFRESH_SECRET, { expiresIn: "7d" });
};
exports.refreshtoken = refreshtoken;
//# sourceMappingURL=tokengenerate.js.map