import Mongoose from "mongoose";

const NssNccSchema = new Mongoose.Schema({
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
let NssNcc = Mongoose.model("NssNcc", NssNccSchema);
export default NssNcc;
