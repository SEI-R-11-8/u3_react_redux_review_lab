import {
  GET_POST_COMMENTS,
  COMMENTS_LOADING_TYPE,
  CREATE_COMMENTS
} from ('../types');

const iState = {
  comments: [],
  commentsLoading: ''
};

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case COMMENTS_LOADING_TYPE:
      return { ...state, commentsLoading: action.payload };
    case GET_POST_COMMENTS:
      return { ...state, comments: action.payload };
    case CREATE_COMMENTS:
      return { ...state };
    default:
      return { ...state };
  }
};

export default CommentReducer;
