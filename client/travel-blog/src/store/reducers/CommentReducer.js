const {GET_COMMENTS, POST_COMMENTS, ADDTO_COMMENTS, DELETE_COMMENTS} = require('../types')

const iState ={
    comments: [],
    commentValue: ''
}

const CommentReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {...state, comments: action.payload}
        case POST_COMMENTS:
            return {...state, comments: action.payload}
        case ADDTO_COMMENTS:
            return  {...state,comment: action.payload
            }
        case DELETE_COMMENTS:
            return {...state, comments: action.payload}

        default:
            return {...state}
    }
}

export default CommentReducer