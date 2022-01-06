const { CITY_LOADING_TYPE, GET_CITIES, GET_CITY_REVIEWS } = require('../types');

const iState = {
  cities: [],
  citiesLoading: ''
};

const CityReducer = (state = iState, action) => {
  switch (action.type) {
    case CITY_LOADING_TYPE:
      return { ...state, citiesLoading: action.payload };
    case GET_CITIES:
      return { ...state, cities: action.payload };
    default:
      return { ...state };
  }
};

export default CityReducer;
