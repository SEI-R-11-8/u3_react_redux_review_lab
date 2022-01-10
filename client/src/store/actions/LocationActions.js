import {
  GetLocations,
  GetLocationById,
  GetComments,
  PostLocation,
  PostComment,
  AddLocationLike,
  AddCommentLike
} from '../../services/LocationService';
import {
  GET_LOCATIONS,
  GET_CURRENT_LOCATION,
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

export const LoadCurrentLocation = (locationId) => {
  return async (dispatch) => {
    try {
      const location = await GetLocationById(locationId);
      dispatch({
        type: GET_CURRENT_LOCATION,
        payload: location
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

export const AddLocation = (locationInfo) => {
  return async (dispatch) => {
    try {
      const newLocation = await PostLocation(locationInfo);
      dispatch({
        type: ADD_LOCATION,
        payload: newLocation
      });
    } catch (error) {
      throw error;
    }
  };
};

export const AddComment = (commentInfo) => {
  return async (dispatch) => {
    try {
      const newComment = await PostComment(commentInfo);
      dispatch({
        type: ADD_COMMENT,
        payload: newComment
      });
    } catch (error) {
      throw error;
    }
  };
};

// export const LikeLocation = (locationId) => {
//   return async (dispatch) => {
//     try {
//       const likedLocation = await AddLocationLike(locationId);
//       dispatch({
//         type: ADD_LOCATION,
//         payload:
//       });
//     } catch (error) {
//       throw error;
//     }
//   };
// };
