import express from "express";
import auth from "../midddleware/auth.js";
import NssNcc from "../schemas/NssNcc.schema";

const router = express.Router();

/**
 * @desc add nss data
 * @access   private
 * @route    POST api/nss
 */
router.post("/nss", auth, async (req, res) => {
  try {
    const { title, img } = req.body;
    let type = "nss";
    const newNss = new NssNcc({
      title,
      img,
      type,
    });
    const Nss = await newNss.save();
    res.json(Nss);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});

/**
 * @desc get all nss data
 * @access   public
 * @route    GET api/nss
 */
router.get("/nss", async (req, res) => {
  try {
    const Nss = await NssNcc.find({ type: "nss" });
    res.json(Nss);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});
/**
 * @desc get a nss data
 * @access   public
 * @route    GET api/nss/:id
 */
router.get("/nss/:id", async (req, res) => {
  try {
    const Nss = await NssNcc.findById(req.params.id);
    if (!Nss) {
      return res.status(404).json({ message: "Nss not found" });
    }
    res.json(Nss);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});

/**
 * @desc update nss data
 * @access   private
 * @route    PUT api/nss/:id
 */
router.put("/nss/:id", auth, async (req, res) => {
  try {
    const { title, img } = req.body;
    const Nss = await NssNcc.findById(req.params.id);
    if (!Nss) {
      return res.status(404).json({ message: "Nss not found" });
    }
    Nss.title = title;
    Nss.img = img;
    const updateNss = await Nss.save();
    res.json(updateNss);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});

/**
 * @desc remove nss data
 * @access   private
 * @route    DELETE api/nss/:id
 */
router.delete("/nss/:id", auth, async (req, res) => {
  try {
    const Nss = await NssNcc.findById(req.params.id);
    if (!Nss) {
      return res.status(404).json({ message: "Nss not found" });
    }
    await Nss.remove();
    res.json({ msg: "Nss removed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});
/** ***********************NSS END************************** */
/**
 * @desc post ncc data
 * @access   private
 * @route    POST api/ncc
 */
router.post("/ncc", auth, async (req, res) => {
  try {
    const { title, img } = req.body;
    let type = "ncc";
    const newNcc = new NssNcc({
      title,
      img,
      type,
    });
    const Ncc = await newNcc.save();
    res.json(Ncc);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});

/**
 * @desc get ncc data
 * @access   public
 * @route    GET api/ncc
 */
router.get("/ncc", async (req, res) => {
  try {
    const Ncc = await NssNcc.find({ type: "ncc" });
    res.json(Ncc);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});
/**
 * @desc update ncc data
 * @access   public
 * @route    PUT api/ncc
 */
router.put("/ncc/:id", auth, async (req, res) => {
  try {
    const { title, img } = req.body;
    const Ncc = await NssNcc.findById(req.params.id);
    if (!Ncc) {
      return res.status(404).json({ msg: "Ncc not found" });
    }
    Ncc.title = title;
    Ncc.img = img;
    const updateNcc = await Ncc.save();
    res.json(updateNcc);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});
/**
 * @desc remove ncc data
 * @access   public
 * @route    DELETE api/ncc
 */
router.delete("/ncc/:id", auth, async (req, res) => {
  try {
    const Ncc = await NssNcc.findById(req.params.id);
    if (!Ncc) {
      return res.status(404).json({ msg: "Ncc not found" });
    }
    await Ncc.remove();
    res.json({ msg: "Ncc removed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});

export default router;
