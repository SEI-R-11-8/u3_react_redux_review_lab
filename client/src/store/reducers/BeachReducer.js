const {
  BEACH_LOADING_TYPE,
  GET_BEACHES_TYPE,
  ADD_BEACH_TYPE,
  NEW_BEACH_TYPE
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
    case GET_BEACHES_TYPE:
      return { ...state, beaches: action.payload };
    case ADD_BEACH_TYPE:
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
    case NEW_BEACH_TYPE:
      return { ...state, newBeach: action.payload };
    default:
      return { ...state };
  }
};

export default BeachReducer;
