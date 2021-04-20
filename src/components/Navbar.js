import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style/navbar.css";
import { startGoogleLogout } from "../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch()
  const quantity = useSelector((store) => store.cart.length);
  const active = useSelector((store) => store.user.activo);
  const userName = useSelector((store) => store.user.userData);

  const handleLogout = () => {
    dispatch(startGoogleLogout())
  }

  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      {active ? (
        <Link to="/" className="navbar-brand mx-4">
          {userName.userName}
        </Link>
      ) : (
        <Link to="/" className="navbar-brand mx-4">
          Redux Challenge
        </Link>
      )}
      <div className="d-flex flex-row-reverse">
        {active ? (
          <>
            <button onClick={handleLogout} className="btn btn-dark">Cerrar Sesión</button>
            <NavLink className="btn btn-dark mr-2" to="/" exact>
              Perfil
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
              <h4 id="quantyfi">{quantity >= 1 && quantity}</h4>
            </NavLink>
          </>
        ) : (
          <NavLink className="btn btn-dark mr-2" to="/login" exact>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default Navbar;
