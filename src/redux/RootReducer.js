import { combineReducers } from "redux";
import UserReducer from "./Reducer/UserReducer";
const RootReducer = combineReducers({UserReducer})
export default RootReducer;
