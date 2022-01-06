import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostsReducer from './reducers/PostsReducer'
import CommentsReducer from './reducers/CommentsReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
      postsState: PostsReducer,
      postsCommentsState: CommentsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)))

export default store
