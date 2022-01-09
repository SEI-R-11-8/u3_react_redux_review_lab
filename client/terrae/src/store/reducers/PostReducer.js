const {
   GET_POSTS,
   GET_POST_BY_ID,
   CREATE_POST,
   ADD_POST,
   UPDATE_POST,
   DELETE_POST
} = require('../types')

const iState = {
   posts: [],
   getPosts: '', // Should be type enum('Loading', 'Loaded', 'Inactive')
   getPostsById: '',
   createPost: '',
   addPost: '',
   updatePost: ''
}

const PostReducer = (state = iState, action) => {
   switch (action.type) {
      case GET_POSTS:
         return { ...state, posts: action.payload }
      case GET_POST_BY_ID:
         return { ...state, getPostById: action.payload }
      case CREATE_POST:
         return { ...state, createPost: action.payload }
      case ADD_POST:
         return { ...state, posts: [...state.posts, action.payload], createPost: '' }
      case UPDATE_POST:
         return { ...state, updatePost: action.payload }
      case DELETE_POST:
         return { ...state, posts: state.posts.filter((post, index) => index !== action.payload) }
      default:
         return { ...state }
   }
}

export default PostReducer
