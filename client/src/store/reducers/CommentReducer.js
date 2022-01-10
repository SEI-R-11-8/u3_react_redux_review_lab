const {
  COMMENT_LOADING_TYPE,
  GET_COMMENTS_TYPE,
  ADD_COMMENT_TYPE,
  NEW_COMMENT_TYPE
} = require('../types');

const iState = {
  comments: [],
  commentsLoading: '',
  newComment: {
    author: '',
    content: ''
  }
};

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case COMMENT_LOADING_TYPE:
      return { ...state, commentsLoading: action.payload };
    case GET_COMMENTS_TYPE:
      return { ...state, comments: action.payload };
    case ADD_COMMENT_TYPE:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        newComment: {
          author: '',
          content: ''
        }
      };
    case NEW_COMMENT_TYPE:
      return { ...state, newComment: action.payload };
    default:
      return { ...state };
  }
};

export default CommentReducer;
