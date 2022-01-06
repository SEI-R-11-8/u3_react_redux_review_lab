import { GET_REVIEWS } from '../types';
import { GetReviews } from '../../services/ReviewService';

export const getAllReviews = () => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews();
      dispatch({
        type: GET_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};
