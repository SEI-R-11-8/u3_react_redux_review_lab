import { GetDestinations, GetReviews } from '../../services/DestinationService';
import { GET_DESTINATIONS, GET_REVIEWS } from '../types';
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

export const LoadReviews = () => {
	return async (dispatch) => {
		try {
			const reviews = await GetReviews();
			dispatch({
				type: GET_REVIEWS,
				payload: reviews,
			});
		} catch (error) {
			throw error;
		}
	};
};
