import ReactDOM from "react-dom/client";
import "./index.scss";
import React from "react";
import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
