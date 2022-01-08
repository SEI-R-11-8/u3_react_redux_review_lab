import { GetReviewsByID } from "../../services/ReviewService";
import { GET_REVIEWS } from "../types";

export const LoadReviewsByID = (id) => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviewsByID(id);
      //console.log(reviews);
      dispatch({
        type: GET_REVIEWS,
        payload: reviews.data.reviewID,
      });
    } catch (error) {
      throw error;
    }
  };
};
