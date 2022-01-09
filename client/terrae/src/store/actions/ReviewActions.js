import {
   GetReviews,
   CreateReviews,
   AddReviews,
   DeleteReviews,
   UpdateReviews
} from '../../services/ReviewService'
import {
   GET_REVIEWS,
   CREATE_REVIEW,
   ADD_REVIEW,
   UPDATE_REVIEW,
   DELETE_REVIEW
} from '../types'


export const LoadReviews = () => {
   return async (dispatch) => {
      try {
         const reviews = await GetReviews()
         dispatch({
            type: GET_REVIEWS,
            payload: reviews
         })
      }
      catch (error) {
         throw error
      }
   }
}

export const CreateReview = (form) => {
   return async (dispatch) => {
      try {
         const createReview = await CreateReviews()
         dispatch({
            type: CREATE_REVIEW,
            payload: form
         })
      }
      catch (error) {
         throw error
      }
   }
}

export const AddReview = (review) => {
   return async (dispatch) => {
      try {
         const addReview = await AddReviews()
         dispatch({
            type: ADD_REVIEW,
            payload: review
         })
      }
      catch (error) {
         throw error
      }
   }
}

export const UpdateReview = () => {
   return async (dispatch) => {
      try {
         const updateReview = await UpdateReviews()
         dispatch({
            type: UPDATE_REVIEW,
            payload: updateReview
         })
      }
      catch (error) {
         throw error
      }
   }
}

export const DeleteReview = (index) => {
   return async (dispatch) => {
      try {
         const deleteReview = await DeleteReviews()
         dispatch({
            type: DELETE_REVIEW,
            payload: index
         })
      }
      catch (error) {
         throw error
      }
   }
}





