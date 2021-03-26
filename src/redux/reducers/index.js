import { combineReducers } from "redux";
import cart from "./addToCart";

const RootReducer = combineReducers({
  cart,
});

export default RootReducer;
