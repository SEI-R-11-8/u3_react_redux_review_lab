const {GET_COMMENTS, POST_COMMENTS} = require('../types')

const iState ={
    comments: [],
}

const CommentReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {...state, comments: action.payload}
        case POST_COMMENTS:
            return {...state, comments: action.payload}
        default:
            return {...state}
    }
}

export default CommentReducer