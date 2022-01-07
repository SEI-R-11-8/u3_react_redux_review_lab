import { GET_REVIEWS, ADD_NEW_REVIEW, NEW_REVIEW } from '../types';

const iState = {
  reviews: [],
  newReview: {
    username: '',
    review: '',
    destination_id: ''
  }
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    case NEW_REVIEW:
      return { ...state, newReview: action.payload };
    case ADD_NEW_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        newReview: { username: '', review: '', destination_id: '' }
      };

    default:
      return { ...state };
  }
};

export default ReviewReducer;
