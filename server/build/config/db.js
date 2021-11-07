"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = process.env.MONGO_URI_LIVE;
const connectDB = async () => {
    console.log(db);
    try {
        mongoose_1.default.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
        const connection = mongoose_1.default.connection;
        connection.once("open", function () {
            console.log("MongoDB database connection established successfully");
        });
        console.log("MongoDB connected...");
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map