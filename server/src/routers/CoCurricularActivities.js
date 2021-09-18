import express from "express";
import auth from "../midddleware/auth";
import CoCurricularActivities from "../models/CoCurricularActivities";

const router = express.Router();

/**
 * @desc add CoCurricularActivity data
 * @access   private
 * @route    POST api/CoCurricularActivity
 */
router.post("/", auth, async (req, res) => {
  try {
    const { img } = req.body;

    const newCoCurricularActivity = new CoCurricularActivities({
      img,
    });
    const coCurricularActivity = await newCoCurricularActivity.save();
    res.json(coCurricularActivity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @desc get all CoCurricularActivities data
 * @access   public
 * @route    GET api/CoCurricularActivity
 */
router.get("/", async (req, res) => {
  try {
    const coCurricularActivity = await CoCurricularActivities.find();
    res.json(coCurricularActivity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc update CoCurricularActivity data
 * @access   private
 * @route    PUT api/CoCurricularActivity/:id
 */
router.put("/:id", auth, async (req, res) => {
  try {
    const { img } = req.body;
    const coCurricularActivity = await CoCurricularActivities.findById(
      req.params.id
    );

    if (!coCurricularActivity) {
      return res.status(404).json({ msg: "CoCurricularActivity not found" });
    }
    coCurricularActivity.img = img;
    await coCurricularActivity.save();
    res.json(coCurricularActivity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/**
 * @desc remove CoCurricularActivity data
 * @access   public
 * @route    DELETE api/CoCurricularActivity/:id
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    const coCurricularActivity = await CoCurricularActivities.findById(
      req.params.id
    );

    if (!coCurricularActivity) {
      return res.status(404).json({ msg: "CoCurricularActivity not found" });
    }
    await coCurricularActivity.remove();
    res.json({ msg: "CoCurricularActivity removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
