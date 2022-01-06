import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DepartmentReducer from './reducers/DepartmentReducer';
import ProductReducer from './reducers/ProductReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    departmentState: DepartmentReducer,
    productState: ProductReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
