import mongoose from "mongoose";
const CourseDetailSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  maniTitle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  subjects: {
    subjects: [
      {
        type: String,
      },
    ],
    semester: [
      {
        title: {
          type: String,
        },
        subjects: [
          {
            type: String,
          },
        ],
      },
    ],
  },

  futureScope: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  afterThisCourse: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

let CourseDetail = mongoose.model("CourseDetails", CourseDetailSchema);
export default CourseDetail;
