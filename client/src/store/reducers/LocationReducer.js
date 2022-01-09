const {
  GET_LOCATIONS,
  GET_LOCATIONBYID,
  UPDATE_LOCATIONBYID
} = require('../types');

const iState = {
  locations: [],
  location: {}
};

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATIONBYID:
      return { ...state, location: action.payload };
    case GET_LOCATIONS:
      return { ...state, locations: action.payload };
    case UPDATE_LOCATIONBYID:
      return { ...state, location: action.payload };
    default:
      return { ...state };
  }
};

export default LocationReducer;
