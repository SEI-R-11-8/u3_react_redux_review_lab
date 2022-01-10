const initialState = {
    reviews: []
};

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST_REVIEWS':
            return { ...state, reviews: action.payload };
        case 'ADD_REVIEW_LIKE':
            return { ...state, reviews: action.payload.allReviews }
        case 'ADD_NEW_REVIEW':
            return { ...state, reviews: action.payload }
        default:
            return { ...state };
    };
};

export default ReviewReducer;