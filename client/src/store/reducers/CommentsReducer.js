const {
  GET_COMMENTS,
  NEW_COMMENT,
  ADD_COMMENT,
  LIKE_COMMENT
} = require('../types');

const iState = {
  comments: [],
  newComment: {
    location: '',
    username: '',
    comment: '',
    likes: 0
  }
};

const CommentsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    case NEW_COMMENT:
      return { ...state, newComment: action.payload };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        newComment: {
          username: '',
          comment: '',
          likes: 0
        }
      };
    case LIKE_COMMENT:
      return { ...state };
    default:
      return { ...state };
  }
};

export default CommentsReducer;
