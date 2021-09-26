"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../midddleware/auth"));
const Courses_schema_1 = __importDefault(require("../schemas/Courses.schema"));
const CourseDetails_schema_1 = __importDefault(require("../schemas/CourseDetails.schema"));
const router = express_1.default.Router();
router.post("/", auth_1.default, async (req, res) => {
    try {
        const { title, img, subCourse } = req.body;
        const newCourse = new Courses_schema_1.default({
            title,
            img,
            subCourse,
        });
        const course = await newCourse.save();
        res.json(course);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/", async (req, res) => {
    try {
        const courses = await Courses_schema_1.default.find();
        res.json(courses);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/:id", async (req, res) => {
    try {
        const course = await Courses_schema_1.default.findById(req.params.id);
        res.json(course);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.put("/:id", auth_1.default, async (req, res) => {
    try {
        const course = await Courses_schema_1.default.findById(req.params.id);
        let updateCourse = {
            title: req.body.title,
            img: req.body.img,
            subCourse: course.subCourse,
        };
        const update = await Courses_schema_1.default.findByIdAndUpdate(req.params.id, updateCourse, {
            new: true,
            runValidators: true,
        });
        res.json(update);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.delete("/:id", auth_1.default, async (req, res) => {
    try {
        const course = await Courses_schema_1.default.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        await course.remove();
        res.json({ message: "Course removed" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/details/all", async (req, res) => {
    try {
        const courseDetails = await CourseDetails_schema_1.default.find();
        res.json(courseDetails);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message, message: "Server Error" });
    }
});
router.post("/details/:courseName", auth_1.default, async (req, res) => {
    try {
        const { courseName } = req.params;
        const { title, maniTitle, img, subjects, futureScope, description, eligibility, afterThisCourse, courseDuration, } = req.body;
        const newCourseDetails = new CourseDetails_schema_1.default({
            title,
            maniTitle,
            name: courseName,
            img,
            subjects,
            futureScope,
            description,
            eligibility,
            afterThisCourse,
            courseDuration,
        });
        const courseDetails = await newCourseDetails.save();
        res.json(courseDetails);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get("/details/:courseName", async (req, res) => {
    try {
        const courseDetails = await CourseDetails_schema_1.default.findOne({
            name: req.params.courseName,
        });
        if (courseDetails) {
            res.json(courseDetails);
        }
        else {
            res.status(404).json({ message: "No course details found" });
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message, message: "Server Error" });
    }
});
router.put("/details/:courseName", auth_1.default, async (req, res) => {
    try {
        const course = await CourseDetails_schema_1.default.findOne({
            name: req.params.courseName,
        });
        let updateCourse = {
            maniTitle: req.body.maniTitle,
            title: req.body.title,
            name: req.body.name,
            subjects: course.subjects,
            description: req.body.dubjects,
            eligibility: req.body.eligibility,
            futureScope: req.body.futureScope,
            afterThisCourse: req.body.afterThisCourse,
            courseDuration: req.body.courseDuration,
        };
        const updateCourseDetails = await CourseDetails_schema_1.default.findOneAndUpdate({ name: req.params.courseName }, updateCourse, {
            new: true,
            runValidators: true,
        });
        if (updateCourseDetails) {
            res.json(updateCourseDetails);
        }
        else {
            res.status(404).json({ message: "No course details found" });
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.delete("/details/:courseName", auth_1.default, async (req, res) => {
    try {
        const courseDetails = await CourseDetails_schema_1.default.findOne({
            name: req.params.courseName,
        });
        if (!courseDetails) {
            return res.status(404).json({ message: "Course not found" });
        }
        await courseDetails.remove();
        res.json({ message: "Course removed" });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=Course.js.map