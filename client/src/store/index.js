import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CityReducer from './reducers/CityReducer';
import ReviewReducer from './reducers/ReviewReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    cityState: CityReducer,
    reviewState: ReviewReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
