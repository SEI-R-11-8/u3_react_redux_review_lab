import { GetDestinations, GetDestinationDetails, GetComments, CreateComment } from "../../services/DestinationsService";
import { GET_DESTINATIONS, GET_DESTINATIONS_DETAILS, GET_COMMENTS, CREATE_COMMENT, ADD_COMMENT } from "../types";

export const LoadDestinations = () => {
    return async (dispatch) => {
        try{
            const destinations = await GetDestinations()
            dispatch({
                type: GET_DESTINATIONS,
                payload: destinations
            })
        }catch(error) {
            throw error
        }
    }
}

export const LoadDestinationDetails = (id) => {
    return async (dispatch) => {
        try{
            const destination = await GetDestinationDetails(id)
            dispatch({
                type: GET_DESTINATIONS_DETAILS,
                payload: destination
            })
        } catch(error){
            throw error
        }
    }
}

export const LoadComments = () => {
    return async (dispatch) => {
        try{
            const comments = await GetComments()
            dispatch({
                type: GET_COMMENTS,
                payload: comments
            })
        }catch(error){
            throw error
        }
    }
}

export const LoadNewComments = (createCom) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: CREATE_COMMENT,
                payload: createCom
            })
        }catch(error){
            throw error
        }
    }
}

export const AddComments = (com) => {
    return async (dispatch) => {
        try{
            await CreateComment(com)
            dispatch({
                type: ADD_COMMENT,
                payload: com
            })
        }catch(error){
            throw error
        }
    }
}
