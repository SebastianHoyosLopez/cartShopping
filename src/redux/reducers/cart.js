import * as ActionTypes from '../action-types';

const initialState = [];

const cart = (state = initialState, action) => {
  let cart;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      cart = localStorage.getItem('cart');
      if (cart) {
        cart = JSON.parse(cart);
        cart = [...cart, action.payload];
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        localStorage.setItem('cart', JSON.stringify([action.payload]));
      }
      return [...state];
    case ActionTypes.LOAD_CART:
      cart = localStorage.getItem('cart');
      if (cart) {
        cart = JSON.parse(cart);
        return [...cart];
      }
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
