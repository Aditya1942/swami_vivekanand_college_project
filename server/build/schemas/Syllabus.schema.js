"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SyllabusSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    subCourse: [
        {
            maniTitle: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            pdfs: [
                {
                    type: String,
                    required: true,
                },
            ],
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});
let Syllabus = mongoose_1.default.model("Syllabus", SyllabusSchema);
exports.default = Syllabus;
//# sourceMappingURL=Syllabus.schema.js.map