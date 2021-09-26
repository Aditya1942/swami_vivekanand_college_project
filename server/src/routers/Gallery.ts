import multer from "multer";
import express, { Router } from "express";
import auth from "../midddleware/auth";
import Gallery from "../schemas/Gallery.schema";
import path from "path";

const router: Router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image/gallery");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "." +
      file.mimetype.slice(file.mimetype.lastIndexOf("/") + 1);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

/**
 * @desc add gallery
 * @access   private
 * @route    POST api/party
 */
router.post("/", auth, async (req, res) => {
  try {
    const gallery = new Gallery({
      title: req.body.title,
      images: [],
    });
    const course = await gallery.save();
    res.json(course);
    return res.json({ status: "OK" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc get gallery
 * @access   public
 * @route    GET api/party
 */
router.get("/", async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.json(gallery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc get gallery by id
 * @access   public
 * @route    GET api/party/:id
 */
router.get("/:id", async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    res.json(gallery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc update gallery
 * @access   private
 * @route    PUT api/party/:id
 */
router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return res.status(404).json({ msg: "Gallery not found" });
    } else {
      gallery.title = req.body.title;
    }
    const updategallery = await Gallery.findByIdAndUpdate(id, gallery);
    res.json(updategallery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc delete gallery
 * @access   private
 * @route    DELETE api/party/:id
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ msg: "Course Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @desc Add  gallery pic
 * @access   public
 * @route    POST api/party/pic/:id
 */
// router.post("/pic/:id", auth, upload.single("file"), async (req, res) => {
//   try {
//     console.log(req.file);
//     console.log(req.body);

//     const newgallery = new Gallery({
//       title: req.body.title,
//       images: [],
//     });
//     const course = await newgallery.save();
//     res.json(course);
//     return res.json({ status: "OK" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });
export default router;
