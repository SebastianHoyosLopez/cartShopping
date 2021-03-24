import { combineReducers } from 'redux';
import add_to_cart from './addToCart';

const RootReducer = combineReducers({
    add_to_cart,
});

export default RootReducer;
