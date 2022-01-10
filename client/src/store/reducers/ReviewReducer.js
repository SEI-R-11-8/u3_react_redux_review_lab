const {
  REVIEW_LOADING_TYPE,
  GET_CITY_REVIEWS,
  CREATE_CITY_REVIEW,
  NEW_CITY_REVIEW
} = require('../types');

const iState = {
  reviews: [],
  reviewsLoading: '',
  newReview: { review: '' }
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case REVIEW_LOADING_TYPE:
      return { ...state, reviewsLoading: action.payload };
    case GET_CITY_REVIEWS:
      return { ...state, reviews: action.payload };
    case CREATE_CITY_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        newReview: { review: '', city_id: '' }
      };
    case NEW_CITY_REVIEW:
      return {
        ...state,
        newReview: { ...state.newReview, review: action.payload }
      };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
