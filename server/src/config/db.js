import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.MONGO_URI_LIVE;
const connectDB = async () => {
  console.log(db);
  try {
    mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });

    const connection = mongoose.connection;

    connection.once("open", function () {
      console.log("MongoDB database connection established successfully");
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};
export default connectDB;
