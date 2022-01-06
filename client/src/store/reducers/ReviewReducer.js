const { REVIEW_LOADING_TYPE, GET_REVIEWS } = require('../types');

const iState = {
	reviews: [],
	reviewsLoading: '', // Should be type enum('Loading', 'Loaded', 'Inactive')
	newReview: {}, // needs two cases --- tues lesson was a string --- reviews are objects
};

const ReviewReducer = (state = iState, action) => {
	switch (action.type) {
		case REVIEW_LOADING_TYPE:
			return { ...state, productsLoading: action.payload };
		case GET_REVIEWS:
			return { ...state, products: action.payload };
		default:
			return { ...state };
	}
};

export default ProductReducer;
