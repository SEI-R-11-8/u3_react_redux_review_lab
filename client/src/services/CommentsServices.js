import Client from './'

export const NewComment = async () => {
  try {
    const res = await Client.post('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}

