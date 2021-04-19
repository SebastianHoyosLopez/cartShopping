import * as ActionTypes from "../action-types";
import { firebase, provider } from "../../firebase";

export const addToCart = (payload) => ({
  type: ActionTypes.ADD_TO_CART,
  payload,
});

export const loadCart = (payload) => ({
  type: ActionTypes.LOAD_CART,
  payload,
});

export const productDelete = (payload) => ({
  type: ActionTypes.PRODUCT_DELETE,
  payload,
});

//USERS

export const loadUser = (payload) => ({
  type: ActionTypes.LOAD_USER,
  payload,
});

export const login = (uid, displayName, photoURL, email) => ({
  type: ActionTypes.USER_SUCCESS,
  payload: {uid, displayName, photoURL, email },
});

export const logout = () => ({
  type: ActionTypes.LOGOUT
})

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}

export const startGoogleAuth = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL, user.email));
      })
      .catch(e => {
        console.log(e)
      })
  };
};
