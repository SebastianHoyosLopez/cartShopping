import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand mx-4">
        Redux Challenge
      </Link>
      <div className="d-flex flex-row-reverse">
        <NavLink to="/cart" exact >
          <img
            src="https://imgbox.es/images/2021/03/16/carrito20dbc749abd24d18.th.png"
            alt="cart"
            style={{ height: "40px" }}
          />
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/" exact>
          Inicio
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/products" exact>
          Products
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
