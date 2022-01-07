import { 
    GetAllPosts, 
    GetPostById, 
    AddPostLike
} from "../../services/PostService";

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
export const LoadOnePost = (id) => {
    return async (dispatch) => {
        try {
            const post = await GetPostById(id);
            dispatch({
                type: 'GET_POST_BY_ID',
                payload: post
            });
        } catch (error) {
            throw error;
        };
    };
};
export const UpdatePostLike = (postId) => {
    return async (dispatch) => {
        try {
            const post = await AddPostLike(postId);
            dispatch({
                type: 'ADD_POST_LIKE',
                payload: post
            })
        } catch (error) {
            throw error;
        };
    };
};