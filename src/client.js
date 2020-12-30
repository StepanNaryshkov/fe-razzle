import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import "./axios.config";
import "./library/axios-interceptors/request";
import "./library/axios-interceptors/response";
import { store } from "./store";

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
