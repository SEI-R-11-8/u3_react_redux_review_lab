import { GetReviews } from '../../services/ReviewServices'
import { GET_REVIEW } from '../types'

export const LoadReviews = (id) => {
    return async (dispatch) => {
        try {
            const review = await GetReviews(id)
            dispatch({
                type: GET_REVIEW,
                payload: review
            })
        } catch (error) {
            throw error
        }
    }
}
