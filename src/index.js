import React from "react";
import ReactDOM from "react-dom";
import configureAppStore from "./store/configureStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
