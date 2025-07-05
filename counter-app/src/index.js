import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

const counter = ReactDOM.createRoot(document.getElementById("counter"));
counter.render(
  <>
    <h3>Counter App</h3>
    <Counter />
  </>
);
