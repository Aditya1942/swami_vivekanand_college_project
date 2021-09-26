"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
let User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=Users.schema.js.map