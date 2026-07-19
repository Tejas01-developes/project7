"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.demofunction = exports.loginuser = exports.registeruser = void 0;
const userschema_1 = require("./schema/userschema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const tokengenerate_1 = require("./handletoken.ts/tokengenerate");
const tokenschema_1 = require("./schema/tokenschema");
const registeruser = async (req, resp) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return resp.status(400).send("Filed not recived to the backend");
    }
    try {
        const userid = crypto.randomUUID();
        const hash = await bcrypt_1.default.hash(password, 12);
        await userschema_1.usercollection.create({ userid, name, email, password: hash });
        return resp.status(200).send("user added");
    }
    catch (err) {
        return resp.status(400).send("Register api failed");
    }
};
exports.registeruser = registeruser;
const loginuser = async (req, resp) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return resp.status(400).send({ success: false, message: "Filed not recived to the backend" });
    }
    try {
        const res = await userschema_1.usercollection.findOne({ email: email });
        if (!res) {
            return resp.status(400).send({ success: false, message: "no user wit this email" });
        }
        const compare = await bcrypt_1.default.compare(password, res.password);
        if (!compare) {
            return resp.status(400).send({ success: false, message: "Password is incorrect" });
        }
        const access = (0, tokengenerate_1.accesstoken)(res.userid);
        let refresh;
        const tokres = await tokenschema_1.tokencollection.findOne({ userid: res.userid });
        if (!tokres) {
            refresh = (0, tokengenerate_1.refreshtoken)(res.userid);
            const tokenid = crypto.randomUUID();
            await tokenschema_1.tokencollection.create({ token_id: tokenid, token: refresh, userid: res.userid, added_at: Date.now(), expired_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
        }
        else {
            const now = Date.now();
            const expiretime = tokres.expired_at;
            if (!expiretime || now > expiretime?.getTime()) {
                refresh = (0, tokengenerate_1.refreshtoken)(res.userid);
                await tokenschema_1.tokencollection.updateOne({ userid: res.userid }, { $set: { token: refresh, added_at: Date.now(), expired_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) } });
            }
            else {
                refresh = tokres.token;
            }
            resp.cookie("refresh", refresh, {
                secure: true,
                sameSite: "lax",
                httpOnly: true,
                path: "/"
            });
            return resp.status(200).send({ success: true, message: "login success", access });
        }
    }
    catch (err) {
        console.log(err);
        return resp.status(400).send({ success: false, message: "Login api failed" });
    }
};
exports.loginuser = loginuser;
const demofunction = (req, resp) => {
    return resp.status(200).send({ success: true, message: "Demo function clicked" });
};
exports.demofunction = demofunction;
//# sourceMappingURL=controller.js.map