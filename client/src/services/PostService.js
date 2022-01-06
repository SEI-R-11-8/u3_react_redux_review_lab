import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get(`/posts`)
    return res.data.allPosts
  } catch (err) {
    throw err
  }
}

export const GetOnePost = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}`)
    return res.data.post
  } catch (err) {
    throw err
  }
}

export const GetComments = async (id) => {
  try {
    const res = await Client.get(`/comments/${id}`)
    return res.data.comments
  } catch (err) {
    throw err
  }
}

export const DelComment = async (id) => {
  try {
    const res = await Client.delete(`/comments/${id}`)
  } catch (err) {
    throw err
  }
}