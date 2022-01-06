import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReviewReducer from './reducers/ReviewReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({ reviewState: ReviewReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
