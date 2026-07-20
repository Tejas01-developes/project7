"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessfilter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessfilter = (req, resp, next) => {
    const token = req.headers.authorization;
    const access = token?.split(" ")[1];
    if (!access) {
        resp.status(400).send("Access token is absent");
        return;
    }
    try {
        const decode = jsonwebtoken_1.default.verify(access, process.env.ACCESS_SECRET);
        req.id = decode.id;
        next();
    }
    catch (err) {
        resp.status(400).send("Access filter failed");
        return;
    }
};
exports.accessfilter = accessfilter;
//# sourceMappingURL=accessfilter.js.map