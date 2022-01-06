import {
  GetPosts,
  GetPostsById,
  GetPostComments
} from '../../services/PostService';
import { GET_POSTS, GET_POSTS_BY_ID, GET_POST_COMMENTS } from '../types';

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
      const post = await GetPostsById(id);
      dispatch({
        type: GET_POSTS_BY_ID,
        payload: post
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetPostComments(id);
      dispatch({
        type: GET_POST_COMMENTS,
        payload: comments
      });
    } catch (error) {
      throw error;
    }
  };
};
