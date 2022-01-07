import { GET_POSTS, NEW_POST } from "../types"

const initialState = {
  posts: [],
  newPost: {
    city: '',
    date: '',
    likes: 0,
    description: ''
  }
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case NEW_POST:
      return { ...state, newPost: {...action.payload, likes: 0} }
    default:
      return { ...state }  
  }
}

export default PostReducer