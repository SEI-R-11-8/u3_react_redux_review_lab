import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReviewReducer from './reducers/ReviewReducer'
import PostReducer from './reducers/PostReducer'
import thunk from 'redux-thunk'

const store = createStore(
   combineReducers({
      reviewState: ReviewReducer,
      postState: PostReducer
   }),
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
