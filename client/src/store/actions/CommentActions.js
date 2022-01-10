import { GetPostComments } from "../../services/CommentService";

export const LoadPostComments = (postId) => {
    return async (dispatch) => {
        try {
            const comments = await GetPostComments(postId);
            dispatch({
                type: 'GET_POST_COMMENTS',
                payload: comments
            });
        } catch (error) {
            throw error;
        };
    };
};