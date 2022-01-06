import {
  NEW_COMMENT
 } from '../types'

import {
  NewComment
} from '../../services/CommentsServices'

export const CreateNewComment = (formData) => {
  return async (dispatch) => {
    try {
      const comment = await NewComment(formData)
      dispatch({
        type: NEW_COMMENT,
        payload: res.data,
      })
    } catch (error) {
      throw error
    }
  }
}
