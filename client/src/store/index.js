import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LocationsReducer from './reducers/LocationsReducers';
import CommentsReducer from './reducers/CommentsReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    locationsState: LocationsReducer,
    commentsState: CommentsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
