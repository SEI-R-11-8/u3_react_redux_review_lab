import Client from "./index";

export const GetBlog = async () => {
    try {
      const res = await Client.get('/post') 
     
      return res.data
     
    } catch (error) {
      throw error
    }
  }

  

  export const AddComment = async (comment) => {
    
    try {
      
     const res = await Client.post('/comment', {
       comment: comment
     })
    } catch (error) {
      throw error
    }
  }


  export const GetComment = async () => {
    try {
      const res = await Client.get('/comment') 
     
      return res.data
    } catch (error) {
      throw error
    }
  }
