const {
  GET_COMMENTS,
  GET_COMMENTBYID,
  UPDATE_COMMENTBYID,
  CREATE_COMMENT,
  DELETE_COMMENTBYID
} = require('../types');

const iState = {
  comments: [],
  comment: {}
};

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTBYID:
      return { ...state, moviesLoading: action.payload };
    case GET_COMMENTS:
      return { ...state, movies: action.payload };
    case UPDATE_COMMENTBYID:
      return { ...state, movies: action.payload };
    case CREATE_COMMENT:
      return { ...state, movies: action.payload };
    case DELETE_COMMENTBYID:
      return { ...state, movies: action.payload };
    default:
      return { ...state };
  }
};

export default CommentReducer;
