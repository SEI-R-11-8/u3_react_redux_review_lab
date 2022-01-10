const { GET_COMMENTS, POST_COMMENT, NEW_COMMENT } = require("../types");

const initialState = {
  comments: [],
  newComment: "",
};

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    case POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        newComment: "",
      };
    case NEW_COMMENT:
      return { ...state, newComment: action.payload };
    default:
      return { ...state };
  }
};

export default CommentReducer;
