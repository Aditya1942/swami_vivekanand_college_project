import mongoose from "mongoose";
const GallerySchema = new mongoose.Schema({
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
let Gallery = mongoose.model("Gallery", GallerySchema);
export default Gallery;
