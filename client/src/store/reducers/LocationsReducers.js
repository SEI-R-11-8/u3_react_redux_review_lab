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
  newLocation: {
    city: '',
    country: '',
    image: '',
    description: '',
    likes: 0
  }
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
        newLocation: {
          city: '',
          country: '',
          image: '',
          description: '',
          likes: 0
        }
      };
    case LIKE_LOCATION:
      return {
        ...state,
        currentLocation: {
          city: action.payload1,
          country: action.payload2,
          image: action.payload3,
          description: action.payload4,
          _id: action.payload5,
          likes: (action.payload6 += 1)
        }
      };
    default:
      return { ...state };
  }
};

export default LocationsReducer;
