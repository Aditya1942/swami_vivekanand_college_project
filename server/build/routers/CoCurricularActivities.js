"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../midddleware/auth"));
const CoCurricularActivities_schema_1 = __importDefault(require("../schemas/CoCurricularActivities.schema"));
const router = express_1.default.Router();
router.post("/", auth_1.default, async (req, res) => {
    try {
        const { img } = req.body;
        const newCoCurricularActivity = new CoCurricularActivities_schema_1.default({
            img,
        });
        const coCurricularActivity = await newCoCurricularActivity.save();
        res.json(coCurricularActivity);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/", async (req, res) => {
    try {
        const coCurricularActivity = await CoCurricularActivities_schema_1.default.find();
        res.json(coCurricularActivity);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.put("/:id", auth_1.default, async (req, res) => {
    try {
        const { img } = req.body;
        const coCurricularActivity = await CoCurricularActivities_schema_1.default.findById(req.params.id);
        if (!coCurricularActivity) {
            return res.status(404).json({ msg: "CoCurricularActivity not found" });
        }
        coCurricularActivity.img = img;
        await coCurricularActivity.save();
        res.json(coCurricularActivity);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.delete("/:id", auth_1.default, async (req, res) => {
    try {
        const coCurricularActivity = await CoCurricularActivities_schema_1.default.findById(req.params.id);
        if (!coCurricularActivity) {
            return res.status(404).json({ msg: "CoCurricularActivity not found" });
        }
        await coCurricularActivity.remove();
        res.json({ msg: "CoCurricularActivity removed" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=CoCurricularActivities.js.map