import multer, { diskStorage } from "multer";
import express, { Router } from "express";
import auth from "../midddleware/auth";
import Gallery from "src/schemas/Gallery.schema";

const router: Router = express.Router();

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    // or
    // uuid, or fieldname
    cb(null, originalname);
  },
});
const upload = multer({ storage }); // or simply { dest: 'uploads/' }

/**
 * @desc add gallery
 * @access   private
 * @route    Post api/course
 */
router.post("/", upload.single("file"), (req, res) => {
  try {
    // const { title, images } = req.body;
    // const newCourse = new Gallery({
    //   title,
    //   images,
    // });
    // const course = await newCourse.save();
    // res.json(course);
    return res.json({ status: "OK" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
export default router;
