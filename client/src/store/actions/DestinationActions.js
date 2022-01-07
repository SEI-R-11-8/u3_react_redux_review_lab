import {
  GetDestinations,
  GetDetails,
  GetReviews,
  PostReview
} from '../../services/DestinationService';
import {
  GET_DESTINATIONS,
  GET_DESTINATION_DETAILS,
  GET_REVIEWS,
  ADD_NEW_REVIEW,
  NEW_REVIEW
} from '../types';

export const LoadDestinations = () => {
  return async (dispatch) => {
    try {
      const destinations = await GetDestinations();
      // console.log(destinations);
      dispatch({
        type: GET_DESTINATIONS,
        payload: destinations
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadDetails = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetDetails(id);
      // console.log(details);
      dispatch({
        type: GET_DESTINATION_DETAILS,
        payload: details
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
      console.log(reviews);
      dispatch({
        type: GET_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};

export const PostNewReview = (review) => {
  return async (dispatch) => {
    try {
      const newReview = await PostReview(review);
      console.log(review);
      dispatch({ type: ADD_NEW_REVIEW, payload: newReview });
    } catch (error) {
      throw error;
    }
  };
};

export const CreateNewReview = (formValue) => ({
  type: NEW_REVIEW,
  payload: formValue
});
