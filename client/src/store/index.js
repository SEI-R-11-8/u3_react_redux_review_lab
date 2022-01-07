import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import BlogReducer from './reducers/BlogReducer'

const store = createStore(
    combineReducers({
    blogState: BlogReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)) 
) 

export default store