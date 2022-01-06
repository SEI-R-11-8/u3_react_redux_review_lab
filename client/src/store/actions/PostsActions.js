import { GET_POSTS, GET_POST_COMMENTS } from '../types'
import { GetPosts, GetPostComments } from '../../services/PostsServices'


export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}


export const LoadPostComments = (id) => {
  return async (dispatch) => {
    try{
      const post = await GetPostComments(id)
      dispatch({
        type: GET_POST_COMMENTS,
        payload: post
      })
    }catch(error) {
      throw error
    }
  }
}
