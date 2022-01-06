const getCities = (req, res) => {
  res.send({
    message: "Getting cities",
  });
};

module.exports = {
  getCities,
};
