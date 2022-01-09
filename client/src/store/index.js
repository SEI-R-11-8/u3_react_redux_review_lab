import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LocationsReducer from './reducers/LocationsReducers';
import CommentsReducer from './reducers/CommentsReducer';

const store = createStore(
  combineReducers({
    locationsState: LocationsReducer,
    commentsState: CommentsReducer
  }),
  composeWithDevTools()
);

export default store;
