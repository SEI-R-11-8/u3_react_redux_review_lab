const { COMMENT_LOADING_TYPE, GET_COMMENTS } = require('../types')

const iState = {
    comments: [],
    commentsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const CommentReducer = (state = iState, action) => {
    switch (action.type) {
        case COMMENT_LOADING_TYPE:
            return { ...state, commentsLoading: action.payload }
        case GET_COMMENTS:
            return { ...state, comments: action.payload }
        default:
            return { ...state }
    }
}

export default CommentReducer