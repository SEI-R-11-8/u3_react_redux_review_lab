import { GetPosts, GetPostsById } from '../../services/PostService';
import { GET_POSTS, GET_POSTS_BY_ID } from '../types';

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts();
      dispatch({
        type: GET_POSTS,
        payload: posts
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadPostById = (id) => {
  return async (dispatch) => {
    try {
      const posts = await GetPostsById(id);
      dispatch({
        type: GET_POSTS_BY_ID,
        payload: posts
      });
    } catch (error) {
      throw error;
    }
  };
};
