import multer from "multer";
import express, { Request, Response, Router } from "express";
import auth from "../midddleware/auth";
import GallerySchema from "../schemas/Gallery.schema";
import path from "path";

const router: Router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/gallery");
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
router.post("/", auth, async (req: Request, res: Response) => {
  try {
    const gallery = new GallerySchema({
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
router.get("/", async (req: Request, res: Response) => {
  try {
    const gallery = await GallerySchema.find();
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
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const gallery = await GallerySchema.findById(req.params.id);
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
router.put("/:id", auth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gallery = await GallerySchema.findById(id);
    if (!gallery) {
      return res.status(404).json({ msg: "Gallery not found" });
    } else {
      gallery.title = req.body.title;
    }
    const updategallery = await GallerySchema.findByIdAndUpdate(id, gallery);
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
router.delete("/:id", auth, async (req: Request, res: Response) => {
  try {
    await GallerySchema.findByIdAndDelete(req.params.id);
    res.json({ msg: "Course Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/*================================================================================================================================================================================================================================== */
/**
 * @desc Add  gallery pic
 * @access   public
 * @route    POST api/party/pic/:id
 */
router.post(
  "/img/:id",
  auth,
  upload.single("img"),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const img: string = req.file.filename;
      const title: string = req.body.title || "";
      const isBig: boolean = req.body.isBig || false;

      const gallery = await GallerySchema.findById(id);
      if (!gallery) {
        return res.status(404).json({ msg: "Gallery not found" });
      } else {
        const updatedGallery = await GallerySchema.findByIdAndUpdate(
          id,
          {
            $push: {
              images: {
                img,
                title,
                isBig,
              },
            },
          },
          { new: true }
        );
        return res.json(updatedGallery);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
/**
 * @desc get gallery pic
 * @access   public
 * @route    GET api/party/pic/:id
 */
router.get("/img/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gallery = await GallerySchema.findById(id);
    if (!gallery) {
      return res.status(404).json({ msg: "Gallery not found" });
    } else {
      const images = gallery.images;
      return res.json(images);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc delete gallery pic
 * @access   public
 * @route    DELETE api/party/pic/:id/:imgId
 */
router.delete("/img/:id/:imgId", async (req: Request, res: Response) => {
  try {
    const { id, imgId } = req.params;
    console.log("id", id, "imgId", imgId);
    const gallery = await GallerySchema.findById(id);
    if (!gallery) {
      return res.status(404).json({ msg: "Gallery not found" });
    } else {
      const images = gallery.images;
      const imgIndex = images.find((image) => image._id == imgId);
      console.log(imgIndex);
      if (imgIndex === undefined) {
        return res.status(404).json({ msg: "Image not found" });
      } else {
        let img = imgIndex.img;
        const updatedGallery = await GallerySchema.findByIdAndUpdate(
          id,
          {
            $pull: {
              images: {
                img,
              },
            },
          },
          { new: true }
        );
        return res.json(updatedGallery);
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc update gallery pic
 * @access   public
 * @route    PUT api/party/pic/:id/:imgId
 */
router.put(
  "/img/:id/:imgId",
  upload.single("img"),
  async (req: Request, res: Response) => {
    try {
      const { id, imgId } = req.params;
      const { title, isBig } = req.body;
      const img = req.file?.filename || undefined;
      const gallery = await GallerySchema.findById(id);
      if (!gallery) {
        return res.status(404).json({ msg: "Gallery not found" });
      } else {
        const images = gallery.images;
        const imgIndex = images.find((image) => image._id.toString() == imgId);
        console.log(imgIndex);
        if (imgIndex === undefined) {
          return res.status(404).json({ msg: "Image not found" });
        } else {
          const updatedGallery = await GallerySchema.findOneAndUpdate(
            { "images._id": String(imgId) },
            {
              $set: {
                "images.$.title": String(title),
                "images.$.isBig": isBig,
                "images.$.img": img || imgIndex.img,
              },
            },
            { new: true }
          );
          return res.json(updatedGallery);
        }
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error", error: err });
    }
  }
);

export default router;
