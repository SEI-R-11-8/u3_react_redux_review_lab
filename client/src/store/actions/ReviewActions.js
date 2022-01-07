import {SET_REVIEW_AUTHOR,SET_REVIEW_RECOMMENDS,SET_REVIEW_CONTENT,CREATE_NEW_REVIEW,} from '../types'
import { RequestCreationOfNewReview } from '../services/ReviewServices'

export const SetReviewAuthor = (author) => { 
  return {
    type: SET_REVIEW_AUTHOR,
    payload: author
  }
}
export const SetReviewRecommends = (recommends) => { 
  return {
    type: SET_REVIEW_RECOMMENDS,
    payload: recommends
  }
}
export const SetReviewContent = (content) => { 
  return {
    type: SET_REVIEW_CONTENT,
    payload: content
  }
}

export const CreateNewReview = (locationId, newReviewInfo) => { 
  return async (dispatch) => {
    await RequestCreationOfNewReview(locationId, newReviewInfo)
    dispatch({
      type: CREATE_NEW_REVIEW,
    })
  }
}
