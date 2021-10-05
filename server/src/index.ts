import express from "express";
import connectDB from "./config/db";
import cors from "cors";
import AuthRoute from "./routers/auth";
import CoursesRoute from "./routers/Course";
import NssNccRoute from "./routers/NssNcc";
import CoCurricularActivityRoute from "./routers/CoCurricularActivities";
import Gallery from "./routers/Gallery";
import Syllabus from "./routers/Syllabus";
import path from "path";

// config
const app = express();
const port = 3001;
app.listen(port, () => console.log(`app listening on port ${port}!`));

//Init middleware
app.use(cors());
app.use(express.json());

// Database connect
connectDB();

//Define routes
console.log(path.join(__dirname, "../"));
app.use(express.static(path.resolve(__dirname, "../public/")));

app.get("/api", (req, res) => res.send("Hello World!"));
app.use("/api/auth", AuthRoute);
app.use("/api/courses", CoursesRoute);
app.use("/api", NssNccRoute);
app.use("/api/coCurricularActivity", CoCurricularActivityRoute);
app.use("/api/gallery", Gallery);
app.use("/api/syllabus", Syllabus);
