"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = __importDefault(require("../midddleware/auth.js"));
const Syllabus_schema_1 = __importDefault(require("../schemas/Syllabus.schema"));
const router = express_1.default.Router();
router.post("/", auth_js_1.default, async (req, res) => {
    try {
        const syllabusBody = {
            title: req.body.title,
            img: req.body.img,
            subCourse: [],
        };
        const syllabus = new Syllabus_schema_1.default(syllabusBody);
        await syllabus.save();
        res.status(201).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.get("/", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.find();
        res.status(200).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.get("/:id", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        res.status(200).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.put("/:id", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        const syllabusBody = {
            title: req.body.title,
            img: req.body.img,
            subCourse: syllabus.subCourse,
        };
        await Syllabus_schema_1.default.findByIdAndUpdate(req.params.id, syllabusBody);
        res.status(200).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.delete("/:id", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        await Syllabus_schema_1.default.findByIdAndDelete(req.params.id);
        res.status(200).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.post("/:id/subCourse", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        const syllabuSubCourse = {
            title: req.body.title,
            maniTitle: req.body.maniTitle,
            name: req.body.name,
            pdfs: req.body.pdfs,
        };
        syllabus.subCourse.push(syllabuSubCourse);
        await Syllabus_schema_1.default.findByIdAndUpdate(req.params.id, syllabus);
        res.status(200).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.get("/:id/subCourse", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        res.status(200).send(syllabus.subCourse);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.get("/:id/subCourse/:subCourseId", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        const subCourse = syllabus.subCourse.find((subCourse) => subCourse._id == req.params.subCourseId);
        if (!subCourse) {
            return res.status(404).send("subCourse not found");
        }
        res.status(200).send(subCourse);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.put("/:id/subCourse/:subCourseId", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        const subCourse = syllabus.subCourse.find((subCourse) => subCourse._id == req.params.subCourseId);
        if (!subCourse) {
            return res.status(404).send("subCourse not found");
        }
        const updateSyllabus = await Syllabus_schema_1.default.findOneAndUpdate({ "subCourse._id": String(req.params.subCourseId) }, {
            $set: {
                "subCourse.$.title": req.body.title,
                "subCourse.$.maniTitle": req.body.maniTitle,
                "subCourse.$.name": req.body.name,
                "subCourse.$.pdfs": req.body.pdfs,
            },
            $arrayFilters: [
                {
                    "i._id": req.params.subCourseId,
                },
            ],
        });
        res.status(200).json(updateSyllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.delete("/:id/subCourse/:subCourseId", auth_js_1.default, async (req, res) => {
    try {
        const syllabus = await Syllabus_schema_1.default.findById(req.params.id);
        if (!syllabus) {
            return res.status(404).send("Syllabus not found");
        }
        const subCourse = syllabus.subCourse.find((subCourse) => subCourse._id == req.params.subCourseId);
        if (!subCourse) {
            return res.status(404).send("subCourse not found");
        }
        syllabus.subCourse.pull(req.params.subCourseId);
        await Syllabus_schema_1.default.findByIdAndUpdate(req.params.id, syllabus);
        res.status(200).send(syllabus);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=Syllabus.js.map