const {
  BEACH_LOADING_TYPE,
  GET_BEACHES,
  ADD_BEACH,
  NEW_BEACH
} = require('../types');

const iState = {
  beaches: [],
  beachesLoading: '',
  newBeach: {
    beachName: '',
    review: '',
    address: '',
    image: '',
    comments: [],
    likes: 0
  }
};

const BeachReducer = (state = iState, action) => {
  switch (action.type) {
    case BEACH_LOADING_TYPE:
      return { ...state, beachesLoading: action.payload };
    case GET_BEACHES:
      return { ...state, beaches: action.payload };
    case ADD_BEACH:
      return {
        ...state,
        beaches: [...state.beaches, action.payload],
        newBeach: {
          beachName: '',
          review: '',
          address: '',
          image: '',
          comments: [],
          likes: 0
        }
      };
    case NEW_BEACH:
      return { ...state, newBeach: action.payload };
    default:
      return { ...state };
  }
};

export default BeachReducer;
