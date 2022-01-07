const initialState = {
    posts: [],
    postById: {}
}

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return { ...state, posts: action.payload, postById: {} }
        case 'GET_POST_BY_ID':
            return { ...state, postById: action.payload }
        case 'ADD_POST_LIKE':
            return { ...state, postById: action.payload }
        default:
            return { ...state }
    };
};

export default PostReducer;