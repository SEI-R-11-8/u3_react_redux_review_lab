import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const GetPostComments = async (id) => {
  try{
    const res = await Client.get(`/posts/${ id }`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
