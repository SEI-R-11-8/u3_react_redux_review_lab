import Client from "./index";

export const GetBlog = async () => {
    try {
      const res = await Client.get('/post') 
      console.log(res)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetComment = async () => {
    try {
      const res = await Client.get('/comment') 
      console.log(res)
      return res.data
    } catch (error) {
      throw error
    }
  }


  export const AddComment = async (comment) => {
    try {
      await Client.post('/comment', comment) 
      
    } catch (error) {
      throw error
    }
  }