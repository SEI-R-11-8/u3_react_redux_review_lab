import {
    GetLocations,
    GetComments,
    
  
  } from '../../services/LocationService'
  import { GET_LOCATIONS, GET_COMMENTS} from '../types'
  
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