import { GetCommentsByID, PostComment } from "../../services/CommentService";
import { GET_COMMENTS, POST_COMMENT, NEW_COMMENT } from "../types";

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

//this is posting the comment to the server... I think
export const LoadComment = (newCom) => {
  return async (dispatch) => {
    try {
      const comment = await PostComment(newCom);
      console.log(comment);
      dispatch({
        type: POST_COMMENT,
        payload: comment,
      });
    } catch (error) {
      throw error;
    }
  };
};

//this is getting the value entered into the comment field so we can post it to the server... I think
export const CreateNewComment = (commentVal) => ({
  type: NEW_COMMENT,
  payload: commentVal,
});
