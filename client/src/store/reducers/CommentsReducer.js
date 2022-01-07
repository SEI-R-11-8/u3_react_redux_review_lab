const {
  COMMENT_LOADING_TYPE,
  GET_LOCATIONS_COMMENTS,
  GET_LOCATIONS
} = require('../types');

const iState = {
  comments: [],
  commentsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
};

// Lines below: weird redux code telling us our istate will be our initial state and can change based on actions
const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case COMMENT_LOADING_TYPE:
      return { ...state, productsLoading: action.payload };
    case GET_LOCATIONS_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return { ...state };
  }
};

export default CommentReducer;
