import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// generator function runtime - e.g. async / await enabler
import "core-js/stable";
import "regenerator-runtime/runtime";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
