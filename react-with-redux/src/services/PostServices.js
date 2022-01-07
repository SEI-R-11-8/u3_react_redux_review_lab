import Axios from 'axios'

export const GetPosts = async () => {
  try {
    const res = await Axios.get('http://localhost:3001/api/posts')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
