import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "rc-pagination/assets/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
