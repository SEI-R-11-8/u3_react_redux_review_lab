import { GetAllPosts } from "../../services/PostService";

export const LoadAllPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await GetAllPosts();
            dispatch({
                type: 'GET_ALL_POSTS',
                payload: posts
            });
        } catch (error) {
            throw error;
        };
    };
};