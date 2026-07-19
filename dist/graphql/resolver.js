"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const friends_1 = require("../schema/friends");
exports.resolver = {
    Mutation: {
        adduser: async (_parent, args, _ctx) => {
            const loggeduserid = _ctx.id;
            console.log(loggeduserid);
            if (!loggeduserid) {
                return {
                    success: false,
                    message: "you are not logged in"
                };
            }
            const { name, email, age } = args;
            await friends_1.friendscollection.create({ name, email, age });
            return {
                success: true,
                message: "friend added"
            };
        }
    }
};
//# sourceMappingURL=resolver.js.map