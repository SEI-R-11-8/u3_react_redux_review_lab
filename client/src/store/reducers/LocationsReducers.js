const {
  GET_LOCATIONS,
  GET_CURRENT_LOCATION,
  NEW_LOCATION,
  ADD_LOCATION,
  LIKE_LOCATION
} = require('../types');

const iState = {
  locations: [],
  currentLocation: {},
  newLocation: ''
};

const LocationsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload };
    case GET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case NEW_LOCATION:
      return { ...state, newLocation: action.payload };
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        newLocation: ''
      };
    case LIKE_LOCATION:
      return { ...state };
    default:
      return { ...state };
  }
};

export default LocationsReducer;
