"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokencollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const tokenschema = new mongoose_1.default.Schema({
    token_id: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    added_at: {
        type: Date,
        default: Date.now()
    },
    expired_at: {
        type: Date,
        require: true
    }
});
exports.tokencollection = mongoose_1.default.model("tokens", tokenschema);
//# sourceMappingURL=tokenschema.js.map