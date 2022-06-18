const express = require("express");
const app = express();
const FruitRoute = require("./routes/fruitRouter");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/fruits", FruitRoute);
module.exports = app;
