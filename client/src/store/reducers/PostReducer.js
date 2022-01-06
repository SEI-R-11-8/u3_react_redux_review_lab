const { GET_POSTS, GET_COMMENTS, GET_ONE_POST, DELETE_COMMENT } = require('../types')

const iState = {
  posts: [],
  comments: [],
  post: [],
  delete: ''
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    case GET_ONE_POST:
      return { ...state, post: action.payload }
    // case DELETE_COMMENT:
    //   return { ...state, delete: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer