import {
  GET_REVIEWS,
  ADD_REVIEW,
  NEW_REVIEW,
  SUBMIT_FORM,
  SET_FORM,
  ADD_COMMENT,
  GET_COMMENTS,
  SUBMIT_COMMENTS,
  SET_COMMENT
} from '../types';
import { GetReviews, CreateReview } from '../../services/ReviewService';
import { GetComments, CreateComment } from '../../services/CommentService';

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

export const SubmitForm = (object) => {
  return async (dispatch) => {
    try {
      await CreateReview(object);
      console.log('Trigger Review Submission');
      console.log(object);
      dispatch({
        type: SUBMIT_FORM,
        payload: object
      });
    } catch (error) {
      throw error;
    }
  };
};

export const SetForm = (formValue) => ({
  type: SET_FORM,
  payload: formValue
});

export const SetComment = (formValue) => ({
  type: SET_COMMENT,
  payload: formValue
});

export const SubmitComment = (object) => {
  return async (dispatch) => {
    try {
      await CreateComment(object);
      dispatch({
        type: SUBMIT_COMMENTS,
        payload: object
      });
    } catch (error) {
      throw error;
    }
  };
};

export const GetAllComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetComments(id);
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      });
    } catch (error) {
      throw error;
    }
  };
};
// export const AddReview = (review) => ({
//   type: ADD_REVIEW,
//   payload: review
// });

// export const CreateNewReview = (formValue) => {
//   return async (dispatch) => {
//     try {
//       const newReview = await CreateReview(formValue);
//       dispatch({
//         type: NEW_REVIEW,
//         payload: newReview
//       });
//     } catch (error) {
//       throw error;
//     }
//   };
// };
