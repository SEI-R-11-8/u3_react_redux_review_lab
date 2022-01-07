import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LocationReducer from './reducers/LocationReducer';
import CommentReducer from './reducers/CommentsReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    locationState: LocationReducer,
    commentState: CommentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
