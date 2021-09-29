import mongoose from "mongoose";
const Gallery = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: false,
        default: "",
      },
      isBig: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  ],
});
let GallerySchema = mongoose.model("Gallery", Gallery);
export default GallerySchema;
