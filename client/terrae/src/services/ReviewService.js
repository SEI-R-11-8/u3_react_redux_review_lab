import Client from '.'

export const GetReviews = async () => {
   try {
      const response = await Client.get('/reviews')
      return response.data
   } catch (error) {
      throw error
   }
}

