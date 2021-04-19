import { combineReducers } from "redux";
import cart from "./addToCart";
import user from './users'

const RootReducer = combineReducers({
  cart,
  user
});

export default RootReducer;
