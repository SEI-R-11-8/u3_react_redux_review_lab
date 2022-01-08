import Client from "./";




export const GetLocations = async (id) => {
    try {
      const res = await Client.get(`/locations`)
      return res.data.locations
    } catch (error) {
      throw error
    }
  }

  export const GetComments = async (id) => {
    try {
      const res = await Client.get(`/comments`)
      return res.data.comments
    } catch (error) {
      throw error
    }
  }
  export const PostComments = async (comment) => {
    try {
      const res = await Client.post(`/locations/:id/`)
      return res.data.comments
    } catch (error) {
      throw error
    }
  }
  export const DeleteComments = async (comment) => {
    try {
      const res = await Client.delete(`/locations/:id/`)
      return res.data.comments
    } catch (error) {
      throw error
    }
  }
