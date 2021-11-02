import express from "express";
import { SyllabusBody, SyllabuSubCourse } from "src/models/Syllabus.model.js";
import auth from "../midddleware/auth.js";
import Syllabus from "../schemas/Syllabus.schema";
const router = express.Router();

/**
 * @desc    add syllabus data
 * @access  private
 * @route   POST api/syllabus
 */

router.post("/", auth, async (req, res) => {
  try {
    const syllabusBody: SyllabusBody = {
      title: req.body.title,
      img: req.body.img,
      subCourse: [],
    };
    const syllabus = new Syllabus(syllabusBody);
    await syllabus.save();
    res.status(201).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @desc    get syllabus data
 * @access  private
 * @route   GET api/syllabus
 */

router.get("/", async (req, res) => {
  try {
    const syllabus = await Syllabus.find();
    res.status(200).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @desc    get syllabus data by id
 * @access  private
 * @route   GET api/syllabus/:id
 */

router.get("/:id", async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    res.status(200).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @desc    update syllabus data
 * @access  private
 * @route   PUT api/syllabus/:id
 */
router.put("/:id", auth, async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    const syllabusBody: SyllabusBody = {
      title: req.body.title,
      img: req.body.img,
      subCourse: syllabus.subCourse,
    };
    await Syllabus.findByIdAndUpdate(req.params.id, syllabusBody);
    res.status(200).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
/**
 * @desc    Delete syllabus data
 * @access  private
 * @route   DELETE api/syllabus/:id
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    await Syllabus.findByIdAndDelete(req.params.id);
    res.status(200).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
/******************************************************************************/
/**
 * @desc    add syllabus subCourse data
 * @access  private
 * @route   POST api/syllabus/:id/subCourse
 */

router.post("/:id/subCourse", auth, async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    const syllabuSubCourse: SyllabuSubCourse = {
      title: req.body.title,
      maniTitle: req.body.maniTitle,
      name: req.body.name,
      pdfs: req.body.pdfs,
    };
    syllabus.subCourse.push(syllabuSubCourse);
    await Syllabus.findByIdAndUpdate(req.params.id, syllabus);
    res.status(200).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
/**
 * @desc    get syllabus subCourse data
 * @access  private
 * @route   GET api/syllabus/:id/subCourse
 */

router.get("/:id/subCourse", async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    res.status(200).send(syllabus.subCourse);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
/**
 * @desc    get syllabus subCourse data by id
 * @access  private
 * @route   GET api/syllabus/:id/subCourse/:subCourseId
 */

router.get("/:id/subCourse/:subCourseId", async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    const subCourse = syllabus.subCourse.find(
      (subCourse) => subCourse._id == req.params.subCourseId
    );
    if (!subCourse) {
      return res.status(404).send("subCourse not found");
    }
    res.status(200).send(subCourse);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @desc    update syllabus subCourse data
 * @access  private
 * @route   PUT api/syllabus/:id/subCourse/:subCourseId
 */
router.put("/:id/subCourse/:subCourseId", auth, async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    const subCourse = syllabus.subCourse.find(
      (subCourse) => subCourse._id == req.params.subCourseId
    );
    if (!subCourse) {
      return res.status(404).send("subCourse not found");
    }
    const updateSyllabus = await Syllabus.findOneAndUpdate(
      { "subCourse._id": String(req.params.subCourseId) },
      {
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
      }
    );

    res.status(200).json(updateSyllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @desc    delete syllabus subCourse data
 * @access  private
 * @route   DELETE api/syllabus/:id/subCourse/:subCourseId
 */
router.delete("/:id/subCourse/:subCourseId", auth, async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);
    if (!syllabus) {
      return res.status(404).send("Syllabus not found");
    }
    const subCourse = syllabus.subCourse.find(
      (subCourse) => subCourse._id == req.params.subCourseId
    );
    if (!subCourse) {
      return res.status(404).send("subCourse not found");
    }
    syllabus.subCourse.pull(req.params.subCourseId);
    await Syllabus.findByIdAndUpdate(req.params.id, syllabus);
    res.status(200).send(syllabus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
