import {
    GetLocations,
    GetComments,
    PostComments
    
  
  } from '../../services/LocationService'
  import { GET_LOCATIONS, GET_COMMENTS, POST_COMMENTS} from '../types'
  
  export const LoadLocations = () => {
    return async (dispatch) => {
      try {
        const locations = await GetLocations()
        dispatch({
          type: GET_LOCATIONS,
          payload: locations
        })
      
      } catch (error) {
        throw error
      }
    }
  }
  export const LoadComments = () => {
    return async (dispatch) => {
      try {
        const comments = await GetComments()
        dispatch({
          type: GET_COMMENTS,
          payload: comments
        })
      
      } catch (error) {
        throw error
      }
    }
  }
  export const CreateComments = () => {
    return async (dispatch) => {
      try {
        const comments = await PostComments()
        dispatch({
          type: POST_COMMENTS,
          payload: comments
        })
      
      } catch (error) {
        throw error
      }
    }
  }