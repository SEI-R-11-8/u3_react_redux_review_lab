import {
  SET_REVIEW_AUTHOR,
  SET_REVIEW_RECOMMENDS,
  SET_REVIEW_CONTENT,
  CREATE_NEW_REVIEW
} from '../types';

const iState = {
  author: '',
  recommends: false,
  content: ''
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_REVIEW_AUTHOR:
      return { ...state, author: action.payload };
    case SET_REVIEW_RECOMMENDS:
      return { ...state, recommends: action.payload };
    case SET_REVIEW_CONTENT:
      return { ...state, content: action.payload };
    case CREATE_NEW_REVIEW:
      return { ...iState };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
