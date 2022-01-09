import { GetLocations, GetLocationById } from '../../services/LocationService';
import { GET_LOCATIONS, GET_LOCATIONBYID, UPDATE_LOCATIONBYID } from '../types';

export const LoadLocations = () => {
  return async (dispatch) => {
    try {
      const locations = await GetLocations();
      console.log(locations);
      dispatch({
        type: GET_LOCATIONS,
        payload: locations
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadLocationById = (locationId) => {
  return async (dispatch) => {
    try {
      const location = await GetLocationById(locationId);
      console.log(locationId);
      dispatch({
        type: GET_LOCATIONBYID,
        payload: location
      });
    } catch (error) {
      throw error;
    }
  };
};
