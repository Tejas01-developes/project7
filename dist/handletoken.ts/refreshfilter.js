"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshfilter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokengenerate_1 = require("./tokengenerate");
const refreshfilter = (req, resp) => {
    const refresh = req.cookies.refresh;
    if (!refresh) {
        return resp.status(400).send("Refresh token is absent");
    }
    try {
        const decode = jsonwebtoken_1.default.verify(refresh, process.env.REFRESH_SECRET);
        const access = (0, tokengenerate_1.accesstoken)(decode.id);
        return resp.status(200).send({ access: access });
    }
    catch (err) {
        console.log(err);
        return resp.status(400).send("Refresh filter failed");
    }
};
exports.refreshfilter = refreshfilter;
//# sourceMappingURL=refreshfilter.js.map