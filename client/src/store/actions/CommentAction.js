import { GetCommentsByID } from "../../services/CommentService";
import { GET_COMMENTS } from "../types";

export const LoadCommentsByID = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetCommentsByID(id);
      console.log(comments);
      dispatch({
        type: GET_COMMENTS,
        payload: comments.data.commentID,
      });
    } catch (error) {
      throw error;
    }
  };
};
