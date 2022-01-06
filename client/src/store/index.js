import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DestinationReducer from './reducers/DestinationReducer';
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers({
		destinationState: DestinationReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
