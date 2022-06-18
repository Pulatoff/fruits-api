const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const fs = require("fs");
const model = require("../model/fruitModel");

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/fruitData.json`, "utf-8")
);

const DB = process.env.DB.replace("<password>", process.env.PASSWORD).replace(
  "<username>",
  process.env.LOGIN
);

mongoose.connect(
  DB,
  () => {
    console.log("DB connected");
  },
  () => {
    console.log("error to connected");
  }
);

async function addPop() {
  try {
    const datas = await model.create(data);
    console.log(datas);
  } catch (e) {
    console.log(`hato ${e.message}`);
  }
}

addPop();
