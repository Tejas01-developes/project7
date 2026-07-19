"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setcontext = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const setcontext = (req, resp) => {
    const token = req.headers.authorization;
    const access = token?.split(" ")[1];
    if (!access) {
        resp.status(401);
        throw new Error("Access token is absent");
    }
    try {
        const decode = jsonwebtoken_1.default.verify(access, process.env.ACCESS_SECRET);
        return {
            id: decode.id,
            isAuth: true
        };
    }
    catch (err) {
        resp.status(401);
        throw new Error("Access filter failed");
    }
};
exports.setcontext = setcontext;
//# sourceMappingURL=context.js.map