const { GET_REVIEW, GET_REVIEW_BY_ID, UPDATE_REVIEW, DELETE_REVIEW, CREATE_REVIEW, ADD_REVIEW } = require('../types')

const reviewState = {
    reviews: [],
    newReview: ''
}

const ReviewReducer = (state = reviewState, action) => {
    switch (action.type) {
        case GET_REVIEW:
            return { ...state, reviews: action.payload }
        case GET_REVIEW_BY_ID:
            return { ...state, reviews: state.reviews.filter((review, index) => index === action.payload) }
        // case UPDATE_REVIEW:
        //     return { ...state, reviews: action.payload }
        case DELETE_REVIEW:
            return { ...state, reviews: state.reviews.filter((review, index) => index !== action.payload) }
        case ADD_REVIEW:
            return { ...state, reviews: [...state.reviews, action.payload], newReview: '' }
        case CREATE_REVIEW:
            return { ...state, reviews: action.payload }
        default:
            return { ...state }
    }
}




export default ReviewReducer
