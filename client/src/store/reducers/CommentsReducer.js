const { GET_POST_COMMENTS, NEW_COMMENT } = require('../types')

const iState = {
  post: [],
}

const CommentsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return { ...state, post: action.payload }
    case NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        newComment: '',
      }
    default:
      return { ...state }
  }
}

export default CommentsReducer
