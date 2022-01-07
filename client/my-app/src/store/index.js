import { createStore, combineReducers, applyMiddleware } from 'redux';
import LocationReducer from './reducers/LocationReducer';
import thunk from 'redux-thunk';

import ReviewReducer from './reducers/ReviewReducer';

const store = createStore(
  combineReducers({
    locationReducer: LocationReducer,
    reviewReducer: ReviewReducer
  }),
  applyMiddleware(thunk)
);

export default store;
