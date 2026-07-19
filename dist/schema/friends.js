"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendscollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const friendschema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    }
});
exports.friendscollection = mongoose_1.default.model("friends", friendschema);
//# sourceMappingURL=friends.js.map