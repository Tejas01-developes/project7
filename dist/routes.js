"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const controller_1 = require("./controller");
const refreshfilter_1 = require("./handletoken.ts/refreshfilter");
const accessfilter_1 = require("./handletoken.ts/accessfilter");
const router = (fastify) => {
    fastify.post("/register", controller_1.registeruser);
    fastify.post("/login", controller_1.loginuser);
    fastify.post("/refresh", refreshfilter_1.refreshfilter);
    fastify.post("/demo", { preHandler: [accessfilter_1.accessfilter] }, controller_1.demofunction);
};
exports.router = router;
//# sourceMappingURL=routes.js.map