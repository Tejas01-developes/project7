"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
class db {
    dburl;
    constructor() {
        this.dburl = process.env.DB_URL;
    }
    async connect() {
        try {
            await mongoose_1.default.connect(this.dburl);
            return console.log("Database connected");
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = new db();
//# sourceMappingURL=connectdb.js.map