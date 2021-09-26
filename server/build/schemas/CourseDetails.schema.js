"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CourseDetailSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    maniTitle: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subjects: {
        subjects: [
            {
                type: String,
            },
        ],
        semester: [
            {
                title: {
                    type: String,
                },
                subjects: [
                    {
                        type: String,
                    },
                ],
            },
        ],
    },
    futureScope: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    eligibility: {
        type: String,
        required: true,
    },
    afterThisCourse: {
        type: String,
        required: true,
    },
    courseDuration: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
let CourseDetail = mongoose_1.default.model("CourseDetails", CourseDetailSchema);
exports.default = CourseDetail;
//# sourceMappingURL=CourseDetails.schema.js.map