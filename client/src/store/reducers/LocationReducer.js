const {
  LOCATION_LOADING_TYPE,
  GET_LOCATIONS,
  ADD_LOCATION,
  NEW_LOCATION,
  REMOVE_LOCATION
} = require('../types');

const iState = {
  locations: [],
  newLocation: ''
};

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case LOCATION_LOADING_TYPE:
      return { ...state, locationsLoading: action.payload };
    case GET_LOCATIONS:
      return { ...state, locations: action.payload };
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        newLocation: ''
      };
    case NEW_LOCATION:
      return { ...state, newLocation: action.payload };
    case REMOVE_LOCATION:
      const newLocations = [...state.locations];
      newLocations.splice(parseInt(action.payload), 1);
      return { ...state, locations: newLocations };
    default:
      return { ...state };
  }
};

export default LocationReducer;
