import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { loadCart } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);

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
