import express from "express";
import jwt from "jsonwebtoken";
import auth from "../midddleware/auth.js";
import Courses from "../models/Courses.js";
import CourseDetails from "../models/CourseDetails.js";

const router = express.Router();
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;

/**
 * @desc add course
 * @access   private
 * @route    Post api/course
 */
router.post("/", auth, async (req, res) => {
  try {
    const { title, img, subCourse } = req.body;

    const newCourse = new Courses({
      title,
      img,
      subCourse,
    });
    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @desc get all courses
 * @access   public
 * @route    Get api/course/
 */
router.get("/", async (req, res) => {
  try {
    const courses = await Courses.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc add course details
 * @access   private
 * @route    Post api/course/details
 */
router.post("/details/:courseId", auth, async (req, res) => {
  try {
    const { courseId } = req.params;
    const {
      title,
      maniTitle,
      name,
      img,
      subjects,
      futureScope,
      description,
      eligibility,
      afterThisCourse,
      courseDuration,
    } = req.body;

    const newCourseDetails = new CourseDetails({
      courseId,
      title,
      maniTitle,
      name,
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
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @desc get a course details
 * @access   public
 * @route    Get api/course/details/:id
 */
router.get("/details/:courseId", async (req, res) => {
  try {
    const courseDetails = await CourseDetails.findOne({
      courseId: req.params.courseId,
    });
    res.json(courseDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @desc get all course details
 * @access   public
 * @route    Get api/course/details
 */
router.get("/details", async (req, res) => {
  try {
    const courseDetails = await CourseDetails.find();
    res.json(courseDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
