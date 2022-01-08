import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CityReducer from "./reducers/CityReducer";
import ReviewReducer from "./reducers/ReviewReducer";
import CommentReducer from "./reducers/CommentReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    cityState: CityReducer,
    reviewState: ReviewReducer,
    commentState: CommentReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
