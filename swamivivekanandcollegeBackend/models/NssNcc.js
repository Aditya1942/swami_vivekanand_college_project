import Mongoose from "mongoose";

const NssNccData = new Mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
let NssNcc = Mongoose.model("NssNcc", NssNccData);
export default NssNcc;
