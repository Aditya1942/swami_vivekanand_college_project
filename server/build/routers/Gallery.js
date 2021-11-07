"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../midddleware/auth"));
const Gallery_schema_1 = __importDefault(require("../schemas/Gallery.schema"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/img/gallery");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() +
            "." +
            file.mimetype.slice(file.mimetype.lastIndexOf("/") + 1);
        cb(null, file.originalname + "-" + uniqueSuffix);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.post("/", auth_1.default, async (req, res) => {
    try {
        const gallery = new Gallery_schema_1.default({
            title: req.body.title,
            images: [],
        });
        const course = await gallery.save();
        res.json(course);
        return res.json({ status: "OK" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/", async (req, res) => {
    try {
        const gallery = await Gallery_schema_1.default.find();
        res.json(gallery);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/:id", async (req, res) => {
    try {
        const gallery = await Gallery_schema_1.default.findById(req.params.id);
        res.json(gallery);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.put("/:id", auth_1.default, async (req, res) => {
    try {
        const { id } = req.params;
        const gallery = await Gallery_schema_1.default.findById(id);
        if (!gallery) {
            return res.status(404).json({ msg: "Gallery not found" });
        }
        else {
            gallery.title = req.body.title;
        }
        const updategallery = await Gallery_schema_1.default.findByIdAndUpdate(id, gallery);
        res.json(updategallery);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.delete("/:id", auth_1.default, async (req, res) => {
    try {
        await Gallery_schema_1.default.findByIdAndDelete(req.params.id);
        res.json({ msg: "Course Deleted" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.post("/img/:id", auth_1.default, upload.single("img"), async (req, res) => {
    try {
        const { id } = req.params;
        const img = req.file.filename;
        const title = req.body.title || "";
        const isBig = req.body.isBig || false;
        const gallery = await Gallery_schema_1.default.findById(id);
        if (!gallery) {
            return res.status(404).json({ msg: "Gallery not found" });
        }
        else {
            const updatedGallery = await Gallery_schema_1.default.findByIdAndUpdate(id, {
                $push: {
                    images: {
                        img,
                        title,
                        isBig,
                    },
                },
            }, { new: true });
            return res.json(updatedGallery);
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/img/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const gallery = await Gallery_schema_1.default.findById(id);
        if (!gallery) {
            return res.status(404).json({ msg: "Gallery not found" });
        }
        else {
            const images = gallery.images;
            return res.json(images);
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.delete("/img/:id/:imgId", async (req, res) => {
    try {
        const { id, imgId } = req.params;
        console.log("id", id, "imgId", imgId);
        const gallery = await Gallery_schema_1.default.findById(id);
        if (!gallery) {
            return res.status(404).json({ msg: "Gallery not found" });
        }
        else {
            const images = gallery.images;
            const imgIndex = images.find((image) => image._id == imgId);
            console.log(imgIndex);
            if (imgIndex === undefined) {
                return res.status(404).json({ msg: "Image not found" });
            }
            else {
                let img = imgIndex.img;
                const updatedGallery = await Gallery_schema_1.default.findByIdAndUpdate(id, {
                    $pull: {
                        images: {
                            img,
                        },
                    },
                }, { new: true });
                return res.json(updatedGallery);
            }
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.put("/img/:id/:imgId", upload.single("img"), async (req, res) => {
    var _a;
    try {
        const { id, imgId } = req.params;
        const { title, isBig } = req.body;
        const img = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || undefined;
        const gallery = await Gallery_schema_1.default.findById(id);
        if (!gallery) {
            return res.status(404).json({ msg: "Gallery not found" });
        }
        else {
            const images = gallery.images;
            const imgIndex = images.find((image) => image._id.toString() == imgId);
            console.log(imgIndex);
            if (imgIndex === undefined) {
                return res.status(404).json({ msg: "Image not found" });
            }
            else {
                const updatedGallery = await Gallery_schema_1.default.findOneAndUpdate({ "images._id": String(imgId) }, {
                    $set: {
                        "images.$.title": String(title),
                        "images.$.isBig": isBig,
                        "images.$.img": img || imgIndex.img,
                    },
                }, { new: true });
                return res.json(updatedGallery);
            }
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server Error", error: err });
    }
});
exports.default = router;
//# sourceMappingURL=Gallery.js.map