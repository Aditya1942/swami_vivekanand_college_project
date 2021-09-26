"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = __importDefault(require("../midddleware/auth.js"));
const NssNcc_schema_1 = __importDefault(require("../schemas/NssNcc.schema"));
const router = express_1.default.Router();
router.post("/nss", auth_js_1.default, async (req, res) => {
    try {
        const { title, img } = req.body;
        let type = "nss";
        const newNss = new NssNcc_schema_1.default({
            title,
            img,
            type,
        });
        const Nss = await newNss.save();
        res.json(Nss);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.get("/nss", async (req, res) => {
    try {
        const Nss = await NssNcc_schema_1.default.find({ type: "nss" });
        res.json(Nss);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.get("/nss/:id", async (req, res) => {
    try {
        const Nss = await NssNcc_schema_1.default.findById(req.params.id);
        if (!Nss) {
            return res.status(404).json({ message: "Nss not found" });
        }
        res.json(Nss);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.put("/nss/:id", auth_js_1.default, async (req, res) => {
    try {
        const { title, img } = req.body;
        const Nss = await NssNcc_schema_1.default.findById(req.params.id);
        if (!Nss) {
            return res.status(404).json({ message: "Nss not found" });
        }
        Nss.title = title;
        Nss.img = img;
        const updateNss = await Nss.save();
        res.json(updateNss);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.delete("/nss/:id", auth_js_1.default, async (req, res) => {
    try {
        const Nss = await NssNcc_schema_1.default.findById(req.params.id);
        if (!Nss) {
            return res.status(404).json({ message: "Nss not found" });
        }
        await Nss.remove();
        res.json({ msg: "Nss removed" });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.post("/ncc", auth_js_1.default, async (req, res) => {
    try {
        const { title, img } = req.body;
        let type = "ncc";
        const newNcc = new NssNcc_schema_1.default({
            title,
            img,
            type,
        });
        const Ncc = await newNcc.save();
        res.json(Ncc);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.get("/ncc", async (req, res) => {
    try {
        const Ncc = await NssNcc_schema_1.default.find({ type: "ncc" });
        res.json(Ncc);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.put("/ncc/:id", auth_js_1.default, async (req, res) => {
    try {
        const { title, img } = req.body;
        const Ncc = await NssNcc_schema_1.default.findById(req.params.id);
        if (!Ncc) {
            return res.status(404).json({ msg: "Ncc not found" });
        }
        Ncc.title = title;
        Ncc.img = img;
        const updateNcc = await Ncc.save();
        res.json(updateNcc);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
router.delete("/ncc/:id", auth_js_1.default, async (req, res) => {
    try {
        const Ncc = await NssNcc_schema_1.default.findById(req.params.id);
        if (!Ncc) {
            return res.status(404).json({ msg: "Ncc not found" });
        }
        await Ncc.remove();
        res.json({ msg: "Ncc removed" });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("server Error");
    }
});
exports.default = router;
//# sourceMappingURL=NssNcc.js.map