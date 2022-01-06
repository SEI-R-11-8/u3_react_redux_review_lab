import { createStore, combineReducers, applyMiddleWare } from 'redux';
import LocationReducer from './reducers/LocationReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({ locationReducer: LocationReducer }),
  applyMiddleWare(thunk)
);

export default store;
