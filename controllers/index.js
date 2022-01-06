const { City } = require("../models/index");

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    return res.status(200).json({ cities });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCities,
};
