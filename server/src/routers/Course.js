import express from "express";
import auth from "../midddleware/auth";
import Courses from "../models/Courses";
import CourseDetails from "../models/CourseDetails";

const router = express.Router();

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
 * @desc get one courses
 * @access   public
 * @route    Get api/course/:id
 */
router.get("/:id", async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc update one courses
 * @access   private
 * @route    PUT api/course/:id
 */
router.put("/:id", auth, async (req, res) => {
  try {
    const course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc delete one courses
 * @access   private
 * @route    DELETE api/course/:id
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    await course.remove();
    res.json({ message: "Course removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/** **************************************************Course Details************************************************** */
/**
 * @desc get all course details
 * @access  public
 * @route   Get api/course/details
 */
router.get("/details/all", async (req, res) => {
  try {
    const courseDetails = await CourseDetails.find();
    res.json(courseDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message, message: "Server Error" });
  }
});
/**
 * @desc add course details
 * @access   private
 * @route    Post api/course/details
 */
router.post("/details/:courseName", auth, async (req, res) => {
  try {
    const { courseName } = req.params;
    const {
      title,
      maniTitle,
      img,
      subjects,
      futureScope,
      description,
      eligibility,
      afterThisCourse,
      courseDuration,
    } = req.body;

    const newCourseDetails = new CourseDetails({
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
router.get("/details/:courseName", async (req, res) => {
  try {
    const courseDetails = await CourseDetails.findOne({
      name: req.params.courseName,
    });
    if (courseDetails) {
      res.json(courseDetails);
    } else {
      res.status(404).json({ message: "No course details found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message, message: "Server Error" });
  }
});

/**
 *
 * @desc update a course details
 * @access   private
 * @route    PUT api/course/details/:id
 */
router.put("/details/:courseName", auth, async (req, res) => {
  try {
    const courseDetails = await CourseDetails.findOneAndUpdate(
      { name: req.params.courseName },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (courseDetails) {
      res.json(courseDetails);
    } else {
      res.status(404).json({ message: "No course details found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc delete a course details
 * @access   private
 * @route    DELETE api/course/details/:id
 */
router.delete("/details/:courseName", auth, async (req, res) => {
  try {
    const courseDetails = await CourseDetails.findOne({
      name: req.params.courseName,
    });
    if (!courseDetails) {
      return res.status(404).json({ message: "Course not found" });
    }
    await courseDetails.remove();
    res.json({ message: "Course removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
