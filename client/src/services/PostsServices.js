import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const GetPostComments = async (postId) => {
  try{
    const res = await Client.get(`/posts/${ postId }`)
    console.log(res.data.post)
    return res.data.post
  } catch (error) {
    throw error
  }
}
