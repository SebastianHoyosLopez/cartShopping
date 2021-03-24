import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../redux/actions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="mt-3">Products in Cart</h2>
        <div className="row">
          {cart.map((product) => (
              <div key={product.id} className="col-md-3 my-3 text-center">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Price: {product.price}</p>
                  </div>
                  <button className="btn btn-warning m-3">delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
