import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style/navbar.css";

const Navbar = () => {
  const quantity = useSelector((store) => store.cart.length);
  console.log(quantity);

  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand mx-4">
        Redux Challenge
      </Link>
      <div className="d-flex flex-row-reverse">
        <NavLink className="btn btn-dark mr-2" to="/" exact>
          Inicio
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/products" exact>
          Products
        </NavLink>
        <NavLink to="/cart" exact>
          <img
            id="image"
            src="https://imgbox.es/images/2021/03/16/carrito20dbc749abd24d18.th.png"
            alt="cart"
            style={{ height: "40px" }}
          />
          <h4 id="quantyfi">{quantity >=1 && quantity}</h4>
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
