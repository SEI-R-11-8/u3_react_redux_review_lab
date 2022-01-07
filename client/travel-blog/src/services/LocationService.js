import Client from "./";




export const GetLocations = async () => {
    try {
      const res = await Client.get(`/locations`)
      return res.data.locations
    } catch (error) {
      throw error
    }
  }

  export const GetComments = async () => {
    try {
      const res = await Client.get(`/comments`)
      return res.data.locations
    } catch (error) {
      throw error
    }
  }
  export const PostComments = async () => {
    try {
      const res = await Client.post(`/locations/:id/comment`)
      return res.data.locations
    } catch (error) {
      throw error
    }
  }
