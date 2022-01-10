import { GetReviews, AddReviews, UpdateReviews } from '../../services/ReviewService'
import { GET_REVIEWS, CREATE_REVIEW, ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../types'


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

export const CreateReview = (key, value) => ({
   type: CREATE_REVIEW,
   payload: { key, value }
})


export const AddReview = (reviewInfo) => {
   return async (dispatch) => {
      try {
         const review = await AddReviews(reviewInfo)
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

export const DeleteReview = (index) => ({
   type: DELETE_REVIEW,
   payload: index
})





