import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureAppStore from "./store/configureStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
