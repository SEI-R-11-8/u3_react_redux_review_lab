import { GetPosts, GetComments, GetOnePost } from '../../services/PostService'

import { GET_POSTS, GET_COMMENTS, GET_ONE_POST } from '../types'

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

export const LoadOnePost = (id) => {
  return async (dispatch) => {
    try {
      const post = await GetOnePost(id)
      dispatch({
        type: GET_ONE_POST,
        payload: post
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetComments(id)
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (err) {
      throw err
    }
  }
}

