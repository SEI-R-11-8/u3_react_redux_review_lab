import { GetBeachesService } from '../../services/BeachService';
import { CreateBeachService } from '../../services/BeachService';
import { GetCommentService } from '../../services/CommentService';
import { CreateCommentService } from '../../services/CommentService';
import { GET_BEACHES_TYPE, ADD_BEACH_TYPE, NEW_BEACH_TYPE } from '../types';
import {
  GET_COMMENTS_TYPE,
  ADD_COMMENT_TYPE,
  NEW_COMMENT_TYPE
} from '../types';

export const LoadBeachesAction = () => {
  return async (dispatch) => {
    try {
      const beaches = await GetBeachesService();
      dispatch({
        type: GET_BEACHES_TYPE,
        payload: beaches
      });
    } catch (error) {
      throw error;
    }
  };
};

export const AddBeachAction = (beach) => {
  return async (dispatch) => {
    try {
      await CreateBeachService(beach);
      dispatch({
        type: ADD_BEACH_TYPE,
        payload: beach
      });
    } catch (error) {
      throw error;
    }
  };
};

export const CreateNewBeachAction = (formValue) => ({
  type: NEW_BEACH_TYPE,
  payload: formValue
});

export const LoadCommentsAction = () => {
  return async (dispatch) => {
    try {
      const beaches = await GetCommentService();
      dispatch({
        type: GET_COMMENTS_TYPE,
        payload: beaches
      });
    } catch (error) {
      throw error;
    }
  };
};

export const AddCommentAction = (comment) => {
  return async (dispatch) => {
    try {
      await CreateCommentService(comment);
      dispatch({
        type: ADD_COMMENT_TYPE,
        payload: comment
      });
    } catch (error) {
      throw error;
    }
  };
};

export const CreateNewCommentAction = (formValue) => ({
  type: NEW_COMMENT_TYPE,
  payload: formValue
});
