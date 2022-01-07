import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import DestinationsReducer from './reducers/DestinationsReducer'
import DestinationDetailsReducer from './reducers/DestinationDetails'
import CommentsReducer from './reducers/CommentsReducer'

const store = createStore(
    combineReducers({
        DestinationsState: DestinationsReducer,
        DestinationDetailsState: DestinationDetailsReducer,
        CommentsState: CommentsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store