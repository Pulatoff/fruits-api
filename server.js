const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");
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

app.listen(+process.env.PORT || 8000, process.env.SERVER_URL, () => {
  console.log(`server works on ${process.env.PORT}`);
});
