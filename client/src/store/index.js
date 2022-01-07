import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import PostReducer from "./reducers/PostReducers";
import ReviewReducer from "./reducers/ReviewReducer";

const store = createStore(
    combineReducers({
        postState: PostReducer,
        reviewState: ReviewReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;