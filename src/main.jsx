/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
// import jsxDev from "react/jsx-dev-runtim";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
