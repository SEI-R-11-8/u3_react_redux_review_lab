import Client from '.'

export const GetReviews = async () => {
   try {
      const response = await Client.get('/reviews')
      return response.data.reviews
   } catch (error) {
      throw error
   }
}


export const AddReviews = async (reviewInfo) => {
   console.log(reviewInfo)
   try {
      const response = await Client.post('/reviews', reviewInfo)
      return response.data.reviews
   } catch (error) {
      throw error
   }
}

export const UpdateReviews = async () => {
   try {
      const response = await Client.put('reviews/:id')
      return response.data.reviews
   } catch (error) {
      throw error
   }
}

export const DeleteReviews = async () => {
   try {
      await Client.delete('reviews/:id')
   } catch (error) {
      throw error
   }
}

