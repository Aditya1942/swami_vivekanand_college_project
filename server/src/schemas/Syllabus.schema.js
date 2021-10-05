import mongoose from "mongoose";

const SyllabusSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  subCourse: [
    {
      maniTitle: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      pdfs: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
});

let Syllabus = mongoose.model("Syllabus", SyllabusSchema);
export default Syllabus;
