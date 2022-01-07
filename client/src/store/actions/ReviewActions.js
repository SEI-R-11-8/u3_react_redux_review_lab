import {SET_REVIEW_AUTHOR,SET_REVIEW_RECCOMENDS,SET_REVIEW_CONTENT,CREATE_NEW_REVIEW,} from '../types'

export const SetReviewAuthor = (author) => { 
  return {
    type: SET_REVIEW_AUTHOR,
    payload: author
  }
}
export const SetReviewRecommends = (recommends) => { 
  return {
    type: SET_REVIEW_RECCOMENDS,
    payload: recommends
  }
}
export const SetReviewContent = (content) => { 
  return {
    type: SET_REVIEW_CONTENT,
    payload: content
  }
}

export const CreateNewReview = (id) => { 
  return async (dispatch) => {}
}
