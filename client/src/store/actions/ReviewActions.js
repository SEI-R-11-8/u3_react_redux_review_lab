import { GetPostReviews, AddReviewLike, PostReview } from "../../services/ReviewService";

export const LoadPostReviews = (postId) => {
    return async (dispatch) => {
        try {
            const reviews = await GetPostReviews(postId);
            dispatch({
                type: 'GET_POST_REVIEWS',
                payload: reviews
            });
        } catch (error) {
            throw error;
        };
    };
};
export const UpdateReviewLike = (reviewId, postId) => {
    return async (dispatch) => {
        try {
            const reviewObj = await AddReviewLike(reviewId, postId);
            dispatch({
                type: 'ADD_REVIEW_LIKE',
                payload: reviewObj
            });
        } catch (error) {
            throw error;
        };
    };
};
export const AddReview = (postId, newReview) => {
    return async (dispatch) => {
        try {
            const reviews = await PostReview(postId, newReview);
            dispatch({
                type: 'ADD_NEW_REVIEW',
                payload: reviews
            });
        } catch (error) {
            throw error;
        };
    };
};