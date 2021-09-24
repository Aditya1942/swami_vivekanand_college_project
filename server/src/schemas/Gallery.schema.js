import Mongoose from "mongoose";
const GallerySchema = new Mongoose.Schema({
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
let Gallery = mongoose.model("Courses", GallerySchema);
export default Gallery;
