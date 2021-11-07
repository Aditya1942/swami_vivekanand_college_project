"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routers/auth"));
const Course_1 = __importDefault(require("./routers/Course"));
const NssNcc_1 = __importDefault(require("./routers/NssNcc"));
const CoCurricularActivities_1 = __importDefault(require("./routers/CoCurricularActivities"));
const Gallery_1 = __importDefault(require("./routers/Gallery"));
const Syllabus_1 = __importDefault(require("./routers/Syllabus"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3001;
app.listen(port, () => console.log(`app listening on port ${port}!`));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.default)();
console.log(path_1.default.join(__dirname, "../"));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../public/")));
app.get("/api", (req, res) => res.send("server is running"));
app.use("/api/auth", auth_1.default);
app.use("/api/courses", Course_1.default);
app.use("/api", NssNcc_1.default);
app.use("/api/coCurricularActivity", CoCurricularActivities_1.default);
app.use("/api/gallery", Gallery_1.default);
app.use("/api/syllabus", Syllabus_1.default);
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../public/"));
});
//# sourceMappingURL=index.js.map