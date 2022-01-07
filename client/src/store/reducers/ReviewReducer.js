const initialState = {
    reviews: []
};

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST_REVIEWS':
            return { ...state, reviews: action.payload };
        default:
            return { ...state };
    };
};

export default ReviewReducer;