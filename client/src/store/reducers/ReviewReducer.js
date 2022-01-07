
const iState = { 
  author: '',
  reccomends: false,
  content: ''
}

const ReviewReducer = (state = iState, action) => {
  switch (action.type) { 
    case SET_REVIEW_AUTHOR:
      return {...state, author: action.payload}
    case SET_REVIEW_RECCOMENDS:
      return {...state, reccomends: action.payload} 
    case SET_REVIEW_CONTENT:
      return {...state, content: action.payload}
    case CREATE_NEW_REVIEW:
      return {...iState}
    default:
      return {...state}
  }
}

export default ReviewReducer