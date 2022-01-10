import { GetPostComments, PostComment } from "../../services/CommentService";

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
export const AddComment = (postId, newComment) => {
    return async (dispatch) => {
        try {
            const comments = await PostComment(postId, newComment);
            dispatch({
                type: 'ADD_COMMENT',
                payload: comments
            });
        } catch (error) {
            throw error;
        };
    };
};