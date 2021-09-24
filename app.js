require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// routes

// 404
app.use("/", (req, res) => {
  res.status(404).json({ status: "error", message: "404 page!! Not found!!" });
});
