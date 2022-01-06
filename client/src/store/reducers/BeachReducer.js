const { BEACH_LOADING_TYPE, GET_BEACHES } = require('../types');

const iState = {
  beaches: [],
  beachesLoading: ''
};

const BeachReducer = (state = iState, action) => {
  switch (action.type) {
    case BEACH_LOADING_TYPE:
      return { ...state, beachesLoading: action.payload };
    case GET_BEACHES:
      return { ...state, beaches: action.payload };
    default:
      return { ...state };
  }
};

export default BeachReducer;
