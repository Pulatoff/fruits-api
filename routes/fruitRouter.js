const express = require("express");
const FruitRoute = express.Router();
const fruitController = require("../controller/fruitController");

FruitRoute.route("/")
  .get(fruitController.getAllFruit)
  .post(fruitController.addFruit);

FruitRoute.route("/:id")
  .get(fruitController.getFruit)
  .patch(fruitController.updateFruit)
  .delete(fruitController.deleteFruit);

module.exports = FruitRoute;
