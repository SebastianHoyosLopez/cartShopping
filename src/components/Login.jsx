import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { startGoogleAuth } from "../redux/actions";
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = (props) => {
  const dispatch = useDispatch();
  const activo = useSelector(store => store.user.activo)
  
  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth())
  }

  useEffect(() => {
    if (activo) {
      props.history.push("/products");
    }else{
      props.history.push('/login')
    }
  }, [activo, props.history]);

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

export default withRouter(Login);
