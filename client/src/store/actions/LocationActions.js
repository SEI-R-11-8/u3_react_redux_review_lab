import {
  GetLocations,
  GetLocationById,
  GetComments,
  GetCommentById
} from '../../services/LocationService';
import {
  GET_LOCATIONS,
  GET_LOCATIONBYID,
  UPDATE_LOCATIONBYID,
  GET_COMMENTBYID,
  GET_COMMENTS
} from '../types';

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

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments();
      console.log(comments);
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadCommentById = (commentId) => {
  return async (dispatch) => {
    try {
      const comment = await GetCommentById(commentId);
      console.log(commentId);
      dispatch({
        type: GET_COMMENTBYID,
        payload: comment
      });
    } catch (error) {
      throw error;
    }
  };
};
