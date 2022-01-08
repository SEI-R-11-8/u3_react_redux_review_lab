const {
  GET_REVIEWS,
  ADD_REVIEW,
  NEW_REVIEW,
  SET_FORM,
  SUBMIT_FORM,
  GET_COMMENTS,
  SUBMIT_COMMENTS,
  ADD_COMMENT,
  SET_COMMENT
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
  },
  comments: [],
  newComment: '',
  commentForm: {
    content: '',
    author: '',
    review_id: ''
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
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    case ADD_COMMENT:
      return {
        ...state,
        comment: [...state.comment, action.payload],
        newComment: ''
      };
    case SET_COMMENT:
      return { ...state, commentForm: action.payload };
    case SUBMIT_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };

    default:
      return { ...state };
  }
};

export default ReviewReducer;
