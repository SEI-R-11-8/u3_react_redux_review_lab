const { GET_POST_COMMENTS } = require('../types')

const iState = {
  post: []
}

const CommentsDeducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return { ...state, post: action.payload }
    default:
      return { ...state }
  }
}

export default CommentsDeducer
