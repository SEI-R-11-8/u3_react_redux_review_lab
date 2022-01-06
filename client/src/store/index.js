import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DestinationReducer from './reducers/DestinationReducer';
// import ProductReducer from './reducers/ProductReducer';
// import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    destinationState: DestinationReducer
    // reviewState: ReviewReducer
  })
  // composeWithDevTools(applyMiddleware(thunk))
);

export default store;
