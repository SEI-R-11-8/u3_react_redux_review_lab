import { GET_POSTS, NEW_POST } from "../types"
import { GetPosts } from "../../services/PostServices"

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

export const UpdateNewPost = (newPost) => ({
  type: NEW_POST,
  payload: newPost
})