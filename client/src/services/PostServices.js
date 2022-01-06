import { PostsClient } from './index'

export const GetPosts = async () => {
  try {
    const response = await PostsClient.get(`/posts`)
    return response.data.posts
  } catch (error) {
    throw error
  }
}