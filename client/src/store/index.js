import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DestinationReducer from './reducers/DestinationReducer';
import DetailsReducer from './reducers/DetailsReducer';
import ReviewReducer from './reducers/ReviewReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    destinationState: DestinationReducer,
    reviewState: ReviewReducer,
    detailState: DetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
