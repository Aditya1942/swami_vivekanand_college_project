import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import AuthRoute from "./routers/auth.js";

// config
const app = express();
const port = 3001;
app.listen(port, () => console.log(`app listening on port ${port}!`));

//Init middleware
app.use(cors());
app.use(
  express.json({
    extended: false,
  })
);

// Database connect
connectDB();

//Define routes
app.get("/api", (req, res) => res.send("Hello World!"));
app.use("/api/auth", AuthRoute);
