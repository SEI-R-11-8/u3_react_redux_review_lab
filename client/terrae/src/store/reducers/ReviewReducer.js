const {
   GET_REVIEWS,
   GET_REVIEWS_BY_ID,
   CREATE_REVIEW,
   ADD_REVIEW,
   UPDATE_REVIEW,
   DELETE_REVIEW
} = require('../types')

const iState = {
   reviews: [],
   getReviews: '', // Should be type enum('Loading', 'Loaded', 'Inactive')
   getReviewsById: '',
   createReview: '',
   addReview: '',
   updateReview: ''
}

const ReviewReducer = (state = iState, action) => {
   switch (action.type) {
      case GET_REVIEWS:
         return { ...state, reviews: action.payload }
      case GET_REVIEWS_BY_ID:
         return { ...state, getReviewById: action.payload }
      case CREATE_REVIEW:
         return { ...state, createReview: action.payload }
      case ADD_REVIEW:
         return { ...state, reviews: [...state.reviews, action.payload], createReview: '' }
      case UPDATE_REVIEW:
         return { ...state, updateReview: action.payload }
      case DELETE_REVIEW:
         return { ...state, reviews: state.reviews.filter((review, index) => index !== action.payload) }
      default:
         return { ...state }
   }
}

export default ReviewReducer
