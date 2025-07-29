import express from "express";
import router from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";

const app = express();

//Data understanding middleware
app.use(express.json());

const port = 6969;
//connect MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});

//CRUD Operations for Movie
app.use("/movies", router);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
