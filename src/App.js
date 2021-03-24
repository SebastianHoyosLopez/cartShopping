import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { loadProduct } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct());
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
