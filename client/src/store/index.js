import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import BeachReducer from './reducers/BeachReducer';
import CommentReducer from './reducers/CommentReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    beachState: BeachReducer,
    commentState: CommentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
