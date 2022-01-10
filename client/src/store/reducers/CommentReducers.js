const initialState = {
    comments: []
};

const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST_COMMENTS':
            return { ...state, comments: action.payload }
        case 'ADD_COMMENT':
            return { ...state, comments: action.payload }
        default:
            return { ...state };
    };
};

export default CommentReducer;