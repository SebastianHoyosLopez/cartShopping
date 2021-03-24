import * as ActionTypes from "../action-types";

const initialState = {
  array: [],
  loading: false,
  active: false,
};

const add_to_cart = (state = initialState, action) => {
  let payload;
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      payload = action.payload;
      localStorage.setItem("cart", JSON.stringify(payload));
      return Object.assign({}, state, {
        active: true,
        loading: false,
        array: [...state.array, payload],
      });
    case ActionTypes.LOAD_PRODUCT:
      const cart = JSON.parse(localStorage.getItem("cart"));
      return Object.assign({}, state, {
        ...state,
        array: [...state.array, cart],
      });
    default:
      return { ...state };
  }
};

export default add_to_cart;
