const { EDIT_NAME, EDIT_TEXT, EDIT_RATING, EDIT_ID } = require('../types')

const iState = {
  name: "",
  text: "",
  rating: "",
  id: "",
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case EDIT_NAME:
      return { ...state, name: action.payload }
    case EDIT_TEXT:
      return { ...state, text: action.payload }
    case EDIT_RATING:
      return { ...state, rating: action.payload }
    case EDIT_ID:
      return { ...state, id: action.payload }
    default:
      return { ...state }
  }
}

export default CommentReducer