import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CityReducer from "./reducers/CityReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ cityState: CityReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
