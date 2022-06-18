const mongoose = require("mongoose");

const nutrions = new mongoose.Schema({
  carbohydrates: Number,
  protein: Number,
  fat: Number,
  calories: Number,
  sugar: Number,
});

const fruitSchema = new mongoose.Schema({
  genus: String,
  name: String,
  family: String,
  order: String,
  nutritions: nutrions,
});

module.exports = mongoose.model("fruits", fruitSchema);
