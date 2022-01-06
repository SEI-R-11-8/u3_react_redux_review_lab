import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data.posts
  } catch (error) {
    throw error
  }
}