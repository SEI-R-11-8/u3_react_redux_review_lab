const PostReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return { ...state, posts: action.payload }
        default:
            return { ...state }
    };
};

export default PostReducer;