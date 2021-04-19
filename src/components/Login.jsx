import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleAuth } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth())
  }

  return (
    <div className="text-center">
      <h1 className="my-3">Igresar con:</h1>
      <button
        className="btn btn-danger"
        onClick={handleGoogleAuth}
      >
        Google
      </button>
    </div>
  );
};

export default Login;
