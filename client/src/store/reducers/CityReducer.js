const { GET_CITIES, GET_CITY } = require("../types");

const initialState = {
  cities: [],
  city: [],
};

const CityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      //console.log(action.payload);
      return { ...state, cities: action.payload };
    case GET_CITY:
      return { ...state, city: action.payload };
    default:
      return { ...state };
  }
};

export default CityReducer;
