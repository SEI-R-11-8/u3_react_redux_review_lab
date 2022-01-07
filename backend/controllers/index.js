const Location = require('../models/location');

//-------------CREAT-------------------------------
const createLocation = async (req, res) => {
  try {
    const location = await new Location(req.body);
    await location.save();
    return res.status(201).json({
      location
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//------------READ-----------------------------------
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({ locations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (location) {
      return res.status(200).json({ location });
    }
    return res
      .status(404)
      .send('Location with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//------------UPDATE---------------------------------
const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    await Location.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, location) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!location) {
          res.status(500).send('Location not found!');
        }
        console.log(location);
        return res.status(200).json(location);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//------------DELETE---------------------------------
const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Location.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Location deleted');
    }
    throw new Error('Location not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation
};
