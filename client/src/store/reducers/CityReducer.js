const GET_CITIES = require("../types");

const initialState = {
  cities: [],
};

const CityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      console.log(action);
      return { ...state, cities: action.payload };

    default:
      return { ...state };
  }
};

export default CityReducer;
