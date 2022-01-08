import { GetDestinations, GetDestinationsBYID } from '../../services/DestinationServices'
import { GET_DESTINATIONS, GET_DESTINATION_BY_ID } from '../types'

export const LoadDestinations = () => {
    return async (dispatch) => {
        try {
            const destinations = await GetDestinations()
            dispatch({
                type: GET_DESTINATIONS,
                payload: destinations
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadDestinationById = () => {
    return async (dispatch) => {
        try {
            const oneDestination = await GetDestinationsBYID()
            // console.log(oneDestination)
            dispatch({
                type: GET_DESTINATION_BY_ID,
                payload: oneDestination
            })
        } catch (error) {
            throw error
        }
    }
}

