import {
  SET_REVIEW_AUTHOR,
  SET_REVIEW_CONTENT,
  SET_REVIEW_RECOMMENDS,
  CREATE_NEW_REVIEW
} from '../types';

export const SetReviewAuthor = (author) => {
  return {
    type: SET_REVIEW_AUTHOR,
    payload: author
  };
};
export const SetReviewRecommends = (recommends) => {
  return {
    type: SET_REVIEW_RECOMMENDS,
    payload: recommends
  };
};
export const SetReviewContent = (content) => {
  return {
    type: SET_REVIEW_CONTENT,
    payload: content
  };
};
export const CreateReview = (id) => {
  return async (dispatch) => {};
};
