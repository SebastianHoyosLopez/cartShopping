import * as ActionTypes from "../action-types";

const initialState = [];

const cart = (state = initialState, action) => {
  let cart;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      cart = localStorage.getItem("cart");
      if (cart) {
        cart = JSON.parse(cart);
        const found = cart.find((product) => product.id === action.payload.id);
        if (found) {
          cart = cart.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
                total: parseInt(product.total) + parseInt(action.payload.price),
              };
            } else {
              return product;
            }
          });
        } else {
          cart = [...cart, { ...action.payload, quantity: 1 }];
        }
      } else {
        cart = [
          { ...action.payload, quantity: 1, total: action.payload.price },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      return [...cart];
    case ActionTypes.LOAD_CART:
      cart = localStorage.getItem("cart");
      if (cart) {
        cart = JSON.parse(cart);
        return [...cart];
      }
      return [...state];
    case ActionTypes.PRODUCT_DELETE:
      cart = localStorage.getItem("cart");
      if (cart) {
        cart = JSON.parse(cart);
        cart = cart.map((product) => {
          if (product.id === action.payload.id && product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
              total: parseInt(product.total) - parseInt(product.price),
            };
          } else {
            return product;
          }
        });
      }
      if (action.payload.quantity === 1) {
        cart = cart.filter((item) => item.id !== action.payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      return [...cart];
    default:
      return [...state];
  }
};

export default cart;
