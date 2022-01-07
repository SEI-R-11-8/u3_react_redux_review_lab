import {
  GetLocationComments,
  GetLocations
} from '../../services/LocationService';
import {
  GET_LOCATIONS,
  GET_LOCATION_COMMENTS,
  ADD_LOCATION,
  NEW_LOCATION,
  REMOVE_LOCATION
} from '../types';

export const LoadLocations = () => {
  // new format for this is required to return an object to state rather than a promise
  return async (dispatch) => {
    try {
      const locations = await GetLocations();
      console.log(locations.locations);

      dispatch({
        type: GET_LOCATIONS,
        payload: locations.locations
      });
    } catch (error) {
      // catch/throw error stops 1 error from breaking the entire program; instead, it only breaks that component
      throw error;
    }
  };
};

// Line below: set id as params
export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetLocationComments(id);
      console.log(comments);
      dispatch({
        type: GET_LOCATION_COMMENTS,
        payload: comments
      });
    } catch (error) {
      throw error;
    }
  };
};
