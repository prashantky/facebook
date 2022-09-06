import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from './../RootReducer';
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)))
export default store;