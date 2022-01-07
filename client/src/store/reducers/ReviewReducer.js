import { GET_REVIEWS } from '../types';

const iState = {
  reviews: [],
  newReview: {
    name: '',
    text: ''
  }
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };

    default:
      return { ...state };
  }
};

export default ReviewReducer;
