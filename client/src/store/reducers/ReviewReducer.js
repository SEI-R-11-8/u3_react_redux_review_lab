const { GET_REVIEW } = require('../types')

const reviewState = {
    reviews: [],
}

const ReviewReducer = (state = reviewState, action) => {
    switch (action.type) {
        case GET_REVIEW:
            return { ...state, reviews: action.payload }
        default:
            return { ...state }
    }
}

export default ReviewReducer
