"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NssNccSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
let NssNcc = mongoose_1.default.model("NssNcc", NssNccSchema);
exports.default = NssNcc;
//# sourceMappingURL=NssNcc.schema.js.map