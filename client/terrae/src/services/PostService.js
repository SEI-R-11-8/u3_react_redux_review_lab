import Client from './'

export const GetPosts = async () => {
   try {
      const response = await Client.get('/posts')
      return response.data.posts
   } catch (error) {
      throw error
   }
}

