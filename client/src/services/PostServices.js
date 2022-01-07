import { PostsClient } from './index'

export const GetPosts = async () => {
  try {
    const response = await PostsClient.get(`/posts`)
    return response.data.posts.reverse()
  } catch (error) {
    throw error
  }
}

export const PostNewPost = async (newPost) => {
  try {
    await PostsClient.post(`/posts`, newPost)
  } catch (error) {
    throw error
  }
}