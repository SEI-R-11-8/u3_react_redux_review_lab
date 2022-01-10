const { POST_LOADING_TYPE, GET_POSTS, GET_POSTS_BY_ID, UPDATE_POST, NEW_POST, DELETE_POST } = require('../types')

const iState = {
    post: {},
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
            return { ...state, post: action.payload }
        case NEW_POST:
            return { ...state, posts: [...state.posts, action.payload] }
        case UPDATE_POST:
            const updatedPosts = state.posts.map((post) => {
                return action.payload._id === post._id ? action.payload : post
            })
            return { ...state, posts: updatedPosts, post: action.payload }
        case DELETE_POST:
            const filteredPosts = state.posts.filter((post) =>
                post.id !== action.payload)
            return { ...state, posts: filteredPosts }
        default:
            return { ...state }
    }
}

export default PostReducer