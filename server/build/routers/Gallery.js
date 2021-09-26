"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
router.post("/", upload.single("file"), (req, res) => {
    try {
        const files = req.files;
        console.log(files);
        return res.json({ status: "OK" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=Gallery.js.map