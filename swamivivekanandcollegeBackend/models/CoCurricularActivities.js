import Mongoose from "mongoose";
const CoCurricularActivitiesSchema = new Mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const CoCurricularActivities = Mongoose.model(
  "CoCurricularActivities",
  CoCurricularActivitiesSchema
);
export default CoCurricularActivities;
