import { createStore, combineReducers, applyMiddleware } from 'redux';
import LocationReducer from './reducers/LocationReducer'
import ReviewReducer from './reducers/ReviewReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({locationReducer: LocationReducer,reviewReducer: ReviewReducer }),
  applyMiddleware(thunk))

  export default store