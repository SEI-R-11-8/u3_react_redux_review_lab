import { GET_REVIEWS, ADD_NEW_REVIEW } from '../types';

const iState = {
  reviews: [],
  newReview: {
    name: '',
    text: '',
    destination_id: ''
  }
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    case ADD_NEW_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        newReview: { name: '', text: '', destination_id: '' }
      };

    default:
      return { ...state };
  }
};

export default ReviewReducer;
