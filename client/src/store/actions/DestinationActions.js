import { GetDestinations } from '../../services/DestinationServices'
import { GET_DESTINATIONS } from '../types'

export const LoadDestinations = () => {
    return async (dispatch) => {
        try {
            const destinations = await GetDestinations()
            console.log(destinations)
            dispatch({
                type: GET_DESTINATIONS,
                payload: destinations
            })
        } catch (error) {
            throw error
        }
    }
}