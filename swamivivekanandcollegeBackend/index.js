import express from "express";

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

//Define routes
app.get("/", (req, res) => res.send("Hello World!"));
