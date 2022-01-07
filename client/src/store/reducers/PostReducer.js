const { POST_LOADING_TYPE, GET_POSTS, GET_POSTS_BY_ID } = require('../types')

const iState = {
    posts: [],
    postsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const PostReducer = (state = iState, action) => {
    switch (action.type) {
        case POST_LOADING_TYPE:
            return { ...state, postsLoading: action.payload }
        case GET_POSTS:
            return { ...state, posts: action.payload }
        case GET_POSTS_BY_ID:
            return { ...state, posts: action.payload}
        default:
            return { ...state }
    }
}

export default PostReducer