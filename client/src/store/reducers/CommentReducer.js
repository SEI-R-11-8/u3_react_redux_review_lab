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
      return { ...state, comment: action.payload };
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    case UPDATE_COMMENTBYID:
      return { ...state, comment: action.payload };
    case CREATE_COMMENT:
      return { ...state, comments: action.payload };
    case DELETE_COMMENTBYID:
      return { ...state };
    default:
      return { ...state };
  }
};

export default CommentReducer;
