import { GetDestinations } from '../../services/DestinationService';
import { GET_DESTINATIONS } from '../types';
// add reviews later

export const LoadDestinations = () => {
	return async (dispatch) => {
		try {
			const destinations = await GetDestinations();
			dispatch({
				type: GET_DESTINATIONS,
				payload: destinations,
			});
		} catch (error) {
			throw error;
		}
	};
};
