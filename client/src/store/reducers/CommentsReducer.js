import { CREATE_COMMENT, GET_COMMENTS, ADD_COMMENT } from "../types";

const iState = {
    comments: [],
    newComment: {
        comment: ''
    }
}

const CommentsReducer = (state = iState, action) => {
    switch(action.type){
        case GET_COMMENTS:
            return {...state, comments: action.payload}
        case CREATE_COMMENT:
            return {...state, newComment: action.payload}
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload], newComment: {comment: ''}}
        default:
            return {...state}
    }
}

export default CommentsReducer