import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { loadCart } from "./redux/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route component={Products} path="/products" />
          <Route component={ShoppingCart} path="/cart" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
