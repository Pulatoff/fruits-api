const fruitModel = require("../model/fruitModel");
const APIFeatures = require("../helper/APIFeatures");

const getAllFruit = async (req, res) => {
  try {
    let data = new APIFeatures(fruitModel, req.query)
      .filter()
      .pagination()
      .field()
      .sort();

    const datas = await data.surov;
    res.status(200).json(datas);
  } catch (e) {
    erorFunc(req, res, e);
  }
};

const addFruit = async (req, res) => {
  try {
    const data = await fruitModel.create(req.body);
    res.status(201).json({
      status: "success",
    });
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const getFruit = async (req, res) => {
  try {
    const data = await fruitModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const updateFruit = async (req, res) => {
  try {
    const data = await fruitModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch (e) {
    erorFunc(req, res, e);
  }
};
const deleteFruit = async (req, res) => {
  try {
    const data = await fruitModel.findByIdAndDelete(req.params.id);
  } catch (e) {
    erorFunc(req, res, e);
  }
};

function erorFunc(req, res, e) {
  res.status(404).json({
    status: "not found",
    message: e.message,
  });
}

module.exports = { getAllFruit, getFruit, addFruit, deleteFruit, updateFruit };
