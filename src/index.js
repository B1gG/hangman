import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* using the redux provider to wrap the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
