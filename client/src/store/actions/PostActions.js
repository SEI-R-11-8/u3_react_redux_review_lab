import { GetPosts, GetComments, GetOnePost, DelComment, postComment } from '../../services/PostService'

import { GET_POSTS, GET_COMMENTS, GET_ONE_POST, EDIT_NAME, EDIT_TEXT, EDIT_RATING, EDIT_ID } from '../types'

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

export const DeleteComment = (id) => {
  return async (dispatch) => {
    try {
      const deletecomment = await DelComment(id)
    } catch (err) {
      throw err
    }
  }
}

export const PostComment = (body, id) => {
  return async (dispatch) => {
    try {
      const postcomment = await postComment(body, id)
    } catch (err) {
      throw err
    }
  }
}

export const ChangeName = (value) => ({
  type: EDIT_NAME,
  payload: value
})

export const ChangeText = (value) => ({
  type: EDIT_TEXT,
  payload: value
})

export const ChangeRating = (value) => ({
  type: EDIT_RATING,
  payload: value
})

export const ChangeId = (value) => ({
  type: EDIT_ID,
  payload: value
})