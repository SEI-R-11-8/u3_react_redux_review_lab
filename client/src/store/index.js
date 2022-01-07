import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import DestinationReducer from './reducers/DestinationReducer'



const store = createStore(
    combineReducers({
        destinationState: DestinationReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)))
  
  
  export default store