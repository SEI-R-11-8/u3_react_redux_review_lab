import { GetPostReviews } from "../../services/ReviewService";

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