import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { loadCart, loadUser, login } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import { firebase } from "./firebase";

const App = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(loadCart());
    dispatch(loadUser());
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL, user.email));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(null);
      }
      setChecking(false);
    });
  }, [dispatch, checking, isLoggedIn,]);
  
  const active = useSelector((store) => store.user.activo);

  const PrivateRoute = ({ component, path, ...rest }) => {
    if (active) {
      return <Route component={component} path={path} {...rest} />;
    } else {
      return <Redirect to="/login" {...rest} />;
    }
  };

  return isLoggedIn !== false ? (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Login} path="/login" />
          <PrivateRoute component={Products} path="/products" />
          <PrivateRoute component={ShoppingCart} path="/cart" />
        </Switch>
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
};

export default App;
