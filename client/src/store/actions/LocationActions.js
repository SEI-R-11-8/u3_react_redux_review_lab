import { GetLocations, GetComments } from '../../services/LocationService';
import {
  GET_LOCATIONS,
  NEW_LOCATION,
  ADD_LOCATION,
  LIKE_LOCATION,
  GET_COMMENTS,
  NEW_COMMENT,
  ADD_COMMENT,
  LIKE_COMMENT
} from '../types';

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations();
      dispatch({
        type: GET_LOCATIONS,
        payload: locations
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadComments = (locationId) => {
  return async (dispatch) => {
    try {
      const comments = await GetComments(locationId);
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      });
    } catch (error) {
      throw error;
    }
  };
};
