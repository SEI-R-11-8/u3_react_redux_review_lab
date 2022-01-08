import {
    GetLocations,
    GetComments,
    PostComments,
    DeleteComments
    

    
  
  } from '../../services/LocationService'
  import { GET_LOCATIONS, GET_COMMENTS, POST_COMMENTS, ADDTO_COMMENTS,DELETE_COMMENTS} from '../types'
  
  export const LoadLocations = (id) => {
    return async (dispatch) => {
      try {
        const locations = await GetLocations(id)
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
  export const ChangeCommentValue = (value) => {
    return {
        type: ADDTO_COMMENTS,
        payload: value
    }
}
  export const CreateComments = (comment) => {
    return async (dispatch) => {
      try {
        const comments = await PostComments(comment)
        dispatch({
          type: POST_COMMENTS,
          payload: comments
        })
      
      } catch (error) {
        throw error
      }
    }
  }
  export const DelComments = (comment) => {
    return async (dispatch) => {
      try {
        const comments = await DeleteComments(comment)
        dispatch({
          type: DELETE_COMMENTS,
          payload: comments
        })
      
      } catch (error) {
        throw error
      }
    }
  }
