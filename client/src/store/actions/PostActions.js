import { GET_POSTS, NEW_POST, CREATE_NEW_POST } from "../types"
import { GetPosts, PostNewPost } from "../../services/PostServices"
import { GetPhotoByReference, GetPhotoReference } from "../../services/MapServices"

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      
      // gets the photo reference to be used in another maps api call
      // posts.forEach(async (element) => {
      //   try {
      //     const photoRef = await GetPhotoReference(element.city)
      //     const photoLink = await GetPhotoByReference(photoRef)
      //     element.photo = photoLink
      //   } catch (error) {
      //     throw error
      //   }
      // })

      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const CreatePost = (newPost) => {
  return async (dispatch) => {
    try {
      // gets an image from google matching the city the user enters
      const photoRef = await GetPhotoReference(newPost.city)
      const photoLink = await GetPhotoByReference(photoRef)

      // adds the photo as a key-value pair
      newPost = {...newPost, photo: photoLink}

      // posts it in the db
      await PostNewPost(newPost)

      // gets all posts
      const posts = await GetPosts()

      // update state with the new post included
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