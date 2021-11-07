"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Gallery = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    images: [
        {
            img: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: false,
                default: "",
            },
            isBig: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});
let GallerySchema = mongoose_1.default.model("Gallery", Gallery);
exports.default = GallerySchema;
//# sourceMappingURL=Gallery.schema.js.map