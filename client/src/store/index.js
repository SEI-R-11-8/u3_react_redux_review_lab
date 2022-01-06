import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DestinationReducer from './reducers/DestinationReducer';
import AppReducer from './reducers/AppReducer';

const store = createStore(
	combineReducers({
		destinationState: DestinationReducer,
		appState: AppReducer,
	}),
	composeWithDevTools()
);

export default store;
