import { GetDestinations } from "../../services/DestinationService";
import { GET_DESTINATIONS } from "../types";

export const LoadDestinations = () => {
    return async (dispatch) => {
        try {
            const destinations = await GetDestinations()
            dispatch({
                type: GET_DESTINATIONS,
                payload: destinations
            })
            // console.log(destinations)
        } catch (error) {
            throw error
        }
    }
}