"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CoCurricularActivitiesSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const CoCurricularActivities = mongoose_1.default.model("CoCurricularActivities", CoCurricularActivitiesSchema);
exports.default = CoCurricularActivities;
//# sourceMappingURL=CoCurricularActivities.schema.js.map