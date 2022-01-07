const { GET_REVIEWS, ADD_REVIEW, NEW_REVIEW } = require('../types');

const iState = {
  reviews: [],
  newReview: ''
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        newReview: ''
      };
    case NEW_REVIEW:
      return { ...state, newReview: action.payload };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
