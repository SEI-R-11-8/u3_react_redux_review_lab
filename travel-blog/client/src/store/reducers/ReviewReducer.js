const {
  GET_REVIEWS,
  ADD_REVIEW,
  NEW_REVIEW,
  SET_FORM,
  SUBMIT_FORM
} = require('../types');

const iState = {
  reviews: [],
  newReview: '',
  form: {
    locationName: '',
    content: '',
    description: '',
    address: '',
    likes: 0,
    photoUrl: '',
    comments: []
  }
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
    case SET_FORM:
      return { ...state, form: action.payload };
    case SUBMIT_FORM:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
        // form: {
        //   locationName: '',
        //   content: '',
        //   description: '',
        //   address: '',
        //   likes: 0,
        //   photoUrl: '',
        //   comments: []
        // }
      };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
