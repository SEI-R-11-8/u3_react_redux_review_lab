import { GetDestinationById, GetDestinations } from "../../services/DestinationService";
import { GET_DESTINATIONS, GET_DESTINATION_BY_ID } from "../types";

export const LoadDestinations = () => {
    return async (dispatch) => {
        try {
            const destinations = await GetDestinations()
            dispatch({
                type: GET_DESTINATIONS,
                payload: destinations.destination
            })
            // console.log(destinations)
        } catch (error) {
            throw error
        }
    }
}

export const LoadDestinationsById = (id) => {
    return async (dispatch) => {
        try {
            const destination = await GetDestinationById(id)
            dispatch({
                type: GET_DESTINATION_BY_ID,
                payload: destination.destination
            })
            console.log(destination.destination)
        }catch(error){
            throw error
        }
    }
}