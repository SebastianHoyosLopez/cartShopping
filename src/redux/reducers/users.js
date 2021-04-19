import * as ActionTypes from "../action-types";

const initialData = {
  loading: false,
  activo: false,
};

const user = (state = initialData, action) => {
  let userData;
  switch (action.type) {
    case ActionTypes.LOAD_USER:
      if (userData) {
        userData = JSON.parse(userData);
        return { ...userData };
      }
      return { ...userData };
    case ActionTypes.USER_SUCCESS:
      userData = {
        ...state,
        activo: true,
        userData: {
          userName: action.payload.displayName,
          image: action.payload.photoURL,
          email: action.payload.email,
          id: action.payload.uid
        },
      };
      return { ...userData };
    case ActionTypes.LOGOUT:
      return initialData;
    default:
      return { ...state };
  }
};

export default user;
